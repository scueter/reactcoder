import data from "../data/MOCK_DATA.json"

export const promiseForAll = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(  () => {
            resolve(data)
        }, 500)
    })
}

export const promiseByID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = data.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'No se encontro ese producto'
                })
            }
            
        }, 500)
    })
}