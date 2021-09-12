import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext/UserContext";
import { Product } from "../../types/types";
import coinSVG from "../../assets/icons/coin.svg"
import { claimProduts } from "../../services/products";

interface Props {
    product: Product;
}

export const ProductCard:React.FC<Props> = ({product}) => {
    
    const { user, setUser } = useContext(UserContext)
    const [available, setAvailable] = useState<Boolean>(false)
    const [process, setProcess] = useState<Boolean>(true)

    useEffect(() => {
        if(user.points > product.cost){
            setAvailable(true)
        }else{
            setAvailable(false)
        }
    }, [user, product])

    const claimProdut = (product: Product):void => {
        setProcess(false)
        claimProduts(product._id)?.then(() => {
            setUser({...user, points: user.points - product.cost, redeemHistory: [...user.redeemHistory, product]})
            setProcess(true)
        }).catch(() => setProcess(true));
    }

    return (
        <div className="product-card" style={{cursor: available ? "pointer" : undefined}}>
            {
                available ?
                <>
                <div className="product-card__available" />
                <div className="product-card__hover">
                    <div className="product-card__hover__price">
                        <h1>{product.cost}</h1>
                        <img src={coinSVG} alt="coin"/>
                    </div>
                    <button onClick={() => claimProdut(product)} disabled={!process} style={{cursor: process ? undefined : "default"}}>
                        {
                            process ?
                            "Redeen now"
                            :
                            <div className="loader product-card__loader" />
                        }
                    </button>
                </div>
                </>
                :
                <div className="product-card__not-available">
                    <p>You need {product.cost - user.points}</p>
                    <img src={coinSVG} alt="coin"/>
                </div>
            }
            <div className="product-card__main">
                <img src={product.img.url} alt=""/>
                <hr />
                <p className="product-card__main__category">{product.category}</p>
                <p className="product-card__main__name">{product.name}</p>
            </div>
        </div>
    )
}
