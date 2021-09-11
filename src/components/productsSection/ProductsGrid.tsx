import { Product } from "../../types/types"
import { ProductCard } from "./ProductCard"

interface Props {
    productsFiltered: Product[];
    laodProducts: Boolean;
}

export const ProductsGrid: React.FC<Props> = ({productsFiltered, laodProducts}) => {

    if(!laodProducts){
        return (
            <div className="products-grid">
                <div className="loader">Loading...</div>
            </div>
        )
    }

    if(productsFiltered.length === 0){
        return (
            <div className="products-grid">
                <p>Not found products</p>
            </div>
        )
    }

    return (
        <div className="products-grid">
            {
                productsFiltered.map( product => (
                    <ProductCard key={product._id} product={product}/>
                ))
            }
        </div>
    )
}
