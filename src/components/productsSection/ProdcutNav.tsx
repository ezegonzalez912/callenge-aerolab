import { useState } from "react";
import arrow_left from "../../assets/icons/arrow-left.svg";
import arrow_right from "../../assets/icons/arrow-right.svg";
import { typesFilter } from "../../contexts/types/typesFilter";
import { Product } from "../../types/types";

interface Props {
    prevPage: () => void;
    nextPage: () => void;
    currentPage: number;
    products: Product[];
    filtered: string;
    setFiltered: (filter: string) => void;
    productsFiltered: Product[];
}

export const ProdcutNav: React.FC<Props> = ({setFiltered, products, filtered, currentPage, prevPage, nextPage, productsFiltered}) => {

    const {lowerPrice, higherPrice, mostRecent} = typesFilter;

    const [menu, setMenu] = useState(false)

    const mostRecentProducts = ():void => {
        setFiltered(mostRecent)
        setMenu(false)
    }

    const lowerPriceProducts = ():void => {
        setFiltered(lowerPrice)
        setMenu(false)
    }

    const higherPriceProducts = ():void => {
        setFiltered(higherPrice)
        setMenu(false)
    }

    const numberProducts = () => {
        if(productsFiltered.length === 0){
            return 0
        }
        if(productsFiltered.length < 16){
            if(productsFiltered.length > 16){
                return productsFiltered.length
            }else{
                if(products.length < 16){
                    return productsFiltered.length 
                }else{
                    return productsFiltered.length + 16
                }
            }
        }else{
            return currentPage + 16
        }
    }

    return (
        <nav className="products-nav">
            <div className="products-nav__left">
                <p className="products-nav__left__text">{numberProducts()} of {products.length} products</p>
                <hr />
                <div className="products-nav__left__controls">
                    <p onClick={() => setMenu(!menu)} className="products-nav__left__controls__menu">Sort by:</p>
                    <div className={`products-nav__left__controls__grid ${menu ? "products-nav__left__controls__grid-active" : ""}`}>
                        <button className={filtered === mostRecent ? "active" : ""} onClick={mostRecentProducts}>Most recent</button>
                        <button className={filtered === lowerPrice ? "active" : ""} onClick={lowerPriceProducts}>Lower price</button>
                        <button className={filtered === higherPrice ? "active" : ""} onClick={higherPriceProducts}>Highest price</button>
                    </div>
                </div>
            </div>
            <div className="products-nav__move-pages">
                {
                    currentPage !== 0 && <img src={arrow_left} alt="arrow-left" onClick={prevPage}/>
                }
                {
                    products.length > 16 && <img src={arrow_right} alt="arrow-right" onClick={nextPage}/>
                }
            </div>
        </nav>
    )
}
