import React from 'react'
import { Product } from '../types/types'

interface Props {
    product: Product
}

export const ProductHistoryItem: React.FC <Props> = ({product}) => {
    return (
        <div className="history-product">
            <img src={product.img.url} alt={product.name}/>
            <div className="history-product__content">
                <h2 className="history-product__content__name">{product.name}</h2>
                <p className="history-product__content__category">{product.category}</p>
                <p className="history-product__content__category">{product.createDate?.slice(0,10)}</p>
                <p className="history-product__content__price">Price: <span className="c-primary">{product.cost}</span></p>
            </div>
        </div>
    )
}
