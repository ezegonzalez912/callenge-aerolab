import { useEffect, useState } from "react"

export const usePagination = <T> (initState: T[]) => {

    const [ productsFiltered, setProductsFiltered ] = useState<T[]>(initState)
    const [ currentPage, setCurrentPage ] = useState<number>(0)

    const nextPage = ():void => {
        if(initState.length > currentPage + 16){
            return setCurrentPage(currentPage + 16)
        }
    }

    const prevPage = ():void => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 16)
        }
    }

    useEffect(() => {
        const newProduts = initState.slice(currentPage, currentPage + 16);
        setProductsFiltered(newProduts)
    }, [currentPage, initState])

    return {productsFiltered, currentPage, prevPage ,nextPage, setCurrentPage}
}
