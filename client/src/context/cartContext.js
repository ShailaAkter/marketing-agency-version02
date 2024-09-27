"use client"
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => 
{
    const [cart, setCart] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    // Load cart, quantities, and total price from local storage on mount
    useEffect(() => 
    {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const savedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};
        const savedTotalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
        setCart(savedCart);
        setQuantities(savedQuantities);
        setTotalPrice(savedTotalPrice);
    }, []);

    // Calculate total price whenever cart or quantities change
    useEffect(() => 
    {
        const newTotalPrice = cart.reduce((total, item) => 
        {
            const quantity = quantities[item._id] || 0;
            return total + item.price * quantity;
        }, 0);
        setTotalPrice(newTotalPrice);
    }, [cart, quantities]);

    // Save cart, quantities, and total price to local storage whenever they change
    useEffect(() => 
    {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("quantities", JSON.stringify(quantities));
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    }, [cart, quantities, totalPrice]);

    const addToCart = (item) => 
    {
        const itemInCart = cart.find((cartItem) => cartItem._id === item._id);
        if (itemInCart) 
        {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item._id]: (prevQuantities[item._id] || 1) + 1,
            }));
            // Only call toast once here
            toast.success(`Another ${item.type} added in cart`);
        } 
        else 
        {
            setCart((prevCart) => [...prevCart, item]);
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [item._id]: 1,
            }));
            // Only call toast once here
            toast.success(`${item.type} added to cart`);
        }
      };
      

    const removeFromCart = (itemId) => 
    {
        setCart((prevCart) => 
        {
            const itemToRemove = prevCart.find((item) => item._id === itemId);
            if (itemToRemove) 
            {
                // Update quantities
                setQuantities((prevQuantities) => 
                {
                    const { [itemId]: _, ...rest } = prevQuantities;
                    return rest;
                });
                // Remove item from cart
                return prevCart.filter((item) => item._id !== itemId);
            }
            return prevCart;
        });
    };

    const increaseQuantity = (itemId) => 
    {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 1) + 1,
        }));
    };

    const decreaseQuantity = (itemId) => 
    {
        setQuantities((prevQuantities) => 
        {
            const newQuantity = (prevQuantities[itemId] || 1) - 1;
            return {
                ...prevQuantities,
                [itemId]: newQuantity > 0 ? newQuantity : 1,
            };
        });
    };

  return (
    <CartContext.Provider
      value={[
        cart,
        setCart,
        {
          quantities,
          addToCart,
          totalPrice,
          removeFromCart,
          increaseQuantity,
          decreaseQuantity,
        },
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export { CartProvider };
