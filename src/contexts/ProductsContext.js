import { createContext, useState } from "react";

const ProductsContext = createContext({
    products: [],
    isFetching: false,
    contToUpdateFetch: 0,
    setProducts: ()=>{},
    setIsFetching: ()=>{},
    setContToUpdateFetch: ()=>{}
})

function ProductsContextProvider({children}){
    const [products, setProducts] = useState([])
    const [isFetching, setIsFetching] = useState(false);
    const [contToUpdateFetch, setContToUpdateFetch] = useState(0)

    const value = {
        products: products,
        isFetching: isFetching,
        setProducts: setProducts,
        setIsFetching: setIsFetching,
        contToUpdateFetch: contToUpdateFetch,
        setContToUpdateFetch: setContToUpdateFetch
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export {ProductsContext, ProductsContextProvider}