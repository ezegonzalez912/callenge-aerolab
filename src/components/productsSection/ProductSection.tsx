import { useContext, useEffect, useMemo, useState } from "react"
import { ProductsContext } from "../../contexts/productsContext/ProductsContext"
import { typesFilter } from "../../contexts/types/typesFilter"
import { usePagination } from "../../hooks/usePagination"
import { Product } from "../../types/types"
import { ProdcutNav } from "./ProdcutNav"
import { ProductsGrid } from "./ProductsGrid"

export const ProductSection = () => {

    const { products, laodProducts } = useContext(ProductsContext)

    const [productsSearch, setProductsSearch] = useState<Product[]>(products)

    const [input, setInput] = useState<string>("")

    const [filtered, setFiltered] = useState<string>(typesFilter.mostRecent)

    const [ productsOrder, setProductsOrder ] = useState<Product[]>([])
    
    useEffect(() => {
        setProductsOrder(productsSearch);
        setCurrentPage(0)
        setFiltered(typesFilter.mostRecent)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, input, productsSearch])
    
    useMemo(() => {
        if(input.length !== 0){
            const newProduts = products.filter( product => product.name.toLowerCase().includes(input.toLowerCase()) )
            return setProductsSearch(newProduts)
        }
        setProductsSearch(products)
    }, [input, products])
    
    useMemo(() => {
        switch(filtered){
            case typesFilter.lowerPrice:
                const lowerPriceProducts = [...productsSearch].sort((a: Product, b:Product) => {
                    return a.cost - b.cost
                })
                return setProductsOrder(lowerPriceProducts);
            case typesFilter.higherPrice:
                const higherPriceProducts = [...productsSearch].sort((a: Product, b:Product) => {
                    return b.cost - a.cost
                })
                return setProductsOrder(higherPriceProducts);
            default:
                return setProductsOrder(productsSearch);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtered, productsSearch, input])


    const {productsFiltered, currentPage, prevPage, nextPage, setCurrentPage} = usePagination(productsOrder);

    return (
        <div className="product-section">
            <ProdcutNav 
                nextPage={nextPage} 
                prevPage={prevPage} 
                currentPage={currentPage} 
                products={productsSearch}
                productsFiltered={productsFiltered}
                filtered={filtered}
                setFiltered={setFiltered}
            />
            <input className="product-section__search" placeholder="Search products..." value={input} onChange={(e) => setInput(e.target.value)}/>
            <hr className="product-section__hr"/>
            <ProductsGrid productsFiltered={productsFiltered} laodProducts={laodProducts}/>
        </div>
    )
}
