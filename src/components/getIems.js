export const getItems = async (func) => {

    // Получаем массив с кросовками с сервера и записываем в стейт, переданный аргументом

    const res = await fetch('https://628e365da339dfef87a9d163.mockapi.io/items')
    const jsonRes = await(res.json())
     func(jsonRes) 
} 
