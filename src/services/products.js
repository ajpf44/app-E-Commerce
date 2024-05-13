import api from "./api";

export const postProduct = async (productData) => {
    try {
        const response = await api.post('/products.json', productData)
         console.log("Registrando Produto: ", response.data)
     } catch (err) {
         console.log("Erro registrando produto", err)
     }
 }

 export const deleteProduct = async (productId) => {
    try {
        const response = await api.delete((`/products/${productId}.json`))
        console.log("Deletando produto: ", response.status)
    } catch(err) {
        console.log("ERRO deletando produto: ", err)
    }
}

export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await api.put((`/products/${productId}.json`, updatedData))
        console.log("Atualizando produto: ", response.status)
    } catch(err) {
        console.log("ERRO atualizando produto: ", err)
    }
}

export const getAllProducts = async ()=>{
    try {
        const products = [];
        const res = await api.get("/products.json");
        for(let productId in res.data){
            products.push({
                id: productId,
                ...res.data[productId]
            })
        }

        return products;
    } catch (error) {
        console.log("Error getting all products: " + error)

        return;
    }
}


