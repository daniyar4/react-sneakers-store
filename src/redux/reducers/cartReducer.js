const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };

        case "DEL_FROM_CART":
            // const delFunc = () => {
            //     state.cartItems.forEach((element, index) => {
            //         const stringEl = JSON.stringify(element);
            //         if ((stringEl === JSON.stringify(action.payload))) {
            //             // console.log(newItems);
            //             const newItems = state.cartItems.slice(index, 1)
            //             return newItems
            //             // console.log(newItems , 'elf');
            //         }else {
            //             return state.cartItems
            //         }
            //     });
            // }
            // const arr = delFunc()
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            };

        default:
            return state;
    }
};

export default cartReducer;
