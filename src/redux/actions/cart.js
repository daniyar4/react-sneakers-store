export const addToCart = (payload) => (
    {
        type: "ADD_TO_CART",
        payload: payload
    }
)

export const delFromCart = (payload) => (
    {
        type: "DEL_FROM_CART",
        payload: payload
    }
)