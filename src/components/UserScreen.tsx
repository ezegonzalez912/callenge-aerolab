import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/userContext/UserContext";
import { usePagination } from "../hooks/usePagination";
import { Product } from "../types/types";
import { ProductHistoryItem } from "./ProductHistoryItem";
import arrowLeft from "../assets/icons/arrow-left.svg"
import arrowRight from "../assets/icons/arrow-right.svg"

export const UserScreen = () => {

    const {user, loadComplete} = useContext(UserContext);

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        if(loadComplete){
            setProducts(user.redeemHistory.reverse())
        }
    }, [user, loadComplete])

    const {productsFiltered, prevPage ,nextPage} = usePagination(products);

    if(!loadComplete){
        return <div className="loader">Loading...</div>
    }

    return (
        <div className="history">
            <h1 className="history__title">Remeen history</h1>
            <div className="history__grid">
                {
                    products !== undefined ?
                    productsFiltered.reverse().map( (product: Product, index: number) => (
                        <ProductHistoryItem key={index} product={product}/>
                    ))
                    : <p>Not products</p>
                }
            </div>
            <div className="history__controls">
                <img src={arrowLeft} onClick={prevPage} alt="arrowLeft"/>
                <img src={arrowRight} onClick={nextPage} alt="arrowRight"/>
            </div>
        </div>
    )
}
