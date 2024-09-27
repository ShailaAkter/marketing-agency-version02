"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAuth } from "@/hooks/auth";
import { useCart } from "@/hooks/cart";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const CheckoutForm = () => 
{
  const [cart, setCart, { quantities, totalPrice }] = useCart();
  const [auth] = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const amount = parseInt(totalPrice * 100);
  console.log(cart)

  useEffect(() => 
  {
    if (!auth?.token) 
    {
      router.push('/');
      return;
    }
  
    if (amount <= 0) 
    {
      return;
    }
  
    const fetchClientSecret = async () => 
    {
      try 
      {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/create-payment-intent`, 
        {
          total: amount,
        });
        setClientSecret(data.clientSecret);
      } 
      catch (error) 
      {
        console.error("Error fetching client secret:", error);
      }
    };

    fetchClientSecret();
  }, [amount, auth?.token, router]);

  const handleSubmit = async (event) => 
  {
    event.preventDefault();
    if (!stripe || !elements) return;
  
    setLoading(true);
  
    try 
    {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, 
      {
        payment_method: 
        {
          card: elements.getElement(CardNumberElement),
        },
      });
  
      if (error) 
      {
        console.error("Payment error:", error);
      } 
      else if (paymentIntent.status === 'succeeded') 
      {
        try 
        {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/confirm-payment`, {
            paymentIntentId: paymentIntent.id,
            email: auth?.user?.email,
            cart,
            quantities,
            total: totalPrice,
          });
          localStorage.removeItem('cart');
          setCart([]);
          toast.success("Payment has been completed successfully!");
          router.push('/dashboard/invoice');
        } 
        catch (err) 
        {
          console.error("Error processing payment:", err);
          toast.error("Something went wrong!");        
        }
      }
    } 
    catch (error) 
    {
      console.error("Unexpected error:", error);
      toast.error('Unexpected error. Please try again.');
    } 
    finally 
    {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-secondary-dark mb-6">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-secondary-dark">Card Number</label>
            <CardNumberElement
              id="cardNumber"
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:border-red-600 focus:ring-2 focus:ring-red-600 transition"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-secondary-dark">Expiry Date</label>
              <CardExpiryElement
                id="expiry"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:border-red-600 focus:ring-2 focus:ring-red-600 transition"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium text-secondary-dark">CVC</label>
              <CardCvcElement
                id="cvc"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:border-red-600 focus:ring-2 focus:ring-red-600 transition"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 text-lg font-semibold rounded-lg ${loading ? 'bg-secondary' : 'bg-red-600'} text-white hover:bg-primary transition-all duration-300`}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
