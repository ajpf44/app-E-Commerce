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


