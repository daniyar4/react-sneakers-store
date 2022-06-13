export const totalCartItemsSum = (cartItems) => {
    return cartItems
        .reduce(
            (previousValue, currentValue) =>
                previousValue + currentValue.price,
            0
        )
};