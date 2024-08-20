export const initialState = {
    son: 0,
    wishlist: [],
    cart: [],
    token: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_WISHLIST":
            let index = state.wishlist.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index < 0) {
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload],
                };
            } else {
                return {
                    ...state,
                    wishlist: state.wishlist.filter(
                        (item) => item.id !== action.payload.id
                    ),
                };
            }
        case "TOGGLE_CART":
            let inx = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (inx < 0) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            } else {
                return {
                    ...state,
                    cart: state.cart.filter(
                        (item) => item.id !== action.payload.id
                    ),
                };
            }
        default:
            return state;
    }
};
