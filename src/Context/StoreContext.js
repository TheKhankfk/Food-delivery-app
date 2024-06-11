import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartitem, setCartItem] = useState({})


    const addToCart = (itemid) => {
        if (!cartitem[itemid]) {
            setCartItem((prev) => ({
                ...prev,
                [itemid]: 1
            }))
        }
        else {
            setCartItem((prev) => ({
                ...prev,
                [itemid]: prev[itemid] + 1

            }))
        }
    }

    const removeFromCart = (itemid) => {
        setCartItem((prev) => ({
            ...prev,
            [itemid]: prev[itemid] - 1
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {

                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartitem[item];

            }
        }
        return totalAmount;
    }

    useEffect(() => {

    }, [cartitem])

    const contextValue = {
        food_list,
        cartitem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider