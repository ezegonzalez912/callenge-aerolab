import { createContext, useEffect, useState } from "react";
import { getProduts } from "../../services/products";
import { Product } from "../../types/types";

interface ContextProps {
    products: Product[];
    laodProducts: Boolean;
}

export const ProductsContext = createContext({} as ContextProps);

export const ProdcutsProvider: React.FC = ({children}) => {

    const [products, setProducts] = useState<Product[]>([])
    const [laodProducts, setLaodProducts] = useState<Boolean>(false)

    const getAllProduts = () => {
        try{
            getProduts.then( response => {
                const products = response.data;
                setProducts(products)
                setLaodProducts(true)
            }).catch( err => console.log(err))
        }
        catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllProduts();
    }, [])

    const data = {
        products,
        laodProducts
    }

    return(
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}