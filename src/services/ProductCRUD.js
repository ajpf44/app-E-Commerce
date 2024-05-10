import api from "./api";

export const postProduct = async (productData) => {
    try {
        const response = await api.post('/Products.json', productData)
         console.log(response.data)
     } catch (err) {
         console.log(err)
     }
 }

 export const deleteProduct = async (productId) => {
    try {
        const response = await api.delete((`/products/${productId}.json`))
        console.log(response)
    } catch(err) {
        console.log("ERRO: ", err)
    }
}

export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await api.put((`/products/${productId}.json`, updatedData))
        console.log(response)
    } catch(err) {
        console.log("ERRO: ", err)
    }
}

export const getAllProducts = async ()=>{
    try {
        const products = [];
        const res = await api.get("/Products.json");
        console.log(res);
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


