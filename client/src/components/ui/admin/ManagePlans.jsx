"use client";

import { useAuth } from "@/hooks/auth";
import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import moment from "moment";
import { FaEllipsisV } from "react-icons/fa";
import { useCart } from "@/hooks/cart";
import { useRouter } from 'next/navigation';
import PrivateRoute from "@/components/shared/PrivateRoute";


const ManagePlans = () => 
{
  const [invoice, setInvoice] = useState([]);
  const [allPlans, setAllPlans] = useState([])
  const [auth, setAuth] = useAuth();
  const [cart, setCart, { addToCart, removeCart }] = useCart();
  const [dropdownOpen, setDropdownOpen] = useState({});
  const router = useRouter();


  const userEmail = auth?.user?.email;

  const getPlans = async () =>
  {
    try
    {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/get-plans`);
      if(data?.success)
      {
        setAllPlans(data.plans);
      }
    }
    catch(error)
    {
        console.log(error);
        toast.error("Something went wrong while getting Brand")
    }
  }


  useEffect(() =>
  {
    getPlans();
  }, [])
    

  const getInvoice = async () => 
  {
    try 
    {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/purchased-plans/${userEmail}`
      );

      if (data?.success) 
      {
        setInvoice(data.subscriptions);
      } 
      else 
      {
        toast.error(data?.message);
      }
    } 
    catch (error) 
    {
      console.log("Error while getting orders: ", error);
    }
  };

  useEffect(() => 
  {
    if (auth?.user) 
    {
      getInvoice();
    }
  }, [auth?.user]);


  const handleUpdate = async (planId, itemId) => 
  {
    try 
    {
      const getSingleItem = invoice.find(item => item._id === itemId); 
      const getSinglePlan = getSingleItem?.subscriptions.find(plan => plan._id === planId); // Find the specific plan
  
      if (!getSinglePlan) 
      {
        console.log('Plan not found');
        return;
      }
  
      if (getSinglePlan.duration === "Monthly") 
      {
        const updateto = allPlans.find(plan => plan.duration === "Annual" && plan.type === getSinglePlan.type);
        addToCart(updateto);
        if (auth?.token) 
        {
          router.push('/dashboard/checkout');
        }
        await handleCancelPlan(planId, itemId); 
      } 
      else if (getSinglePlan.duration === "Annual") 
      {
        const updateto = allPlans.find(plan => plan.duration === "Monthly" && plan.type === getSinglePlan.type);
        addToCart(updateto);
        if (auth?.token) 
        {
          router.push('/dashboard/checkout');
        }
        await handleCancelPlan(planId, itemId);
  
      } 
      else 
      {
        console.log('Item or plan not found');
      }
    } catch (error) 
    {
      console.error("Error updating plan:", error);
      toast.error("An error occurred while updating the plan. Please try again.");
    }
  };
  
  

  const isExpired = (endDate) => 
  {
    const today = moment().format('YYYY-MM-DD');
    return moment(endDate).isBefore(today);
  };
  

  const calculateEndDate = (startDate, duration) => 
  {
    let endDate;
    if (duration.toLowerCase() === 'monthly') 
    {
      endDate = moment(startDate).add(1, 'month').format('YYYY-MM-DD');
    } 
    else if (duration.toLowerCase() === 'annual') 
    {
      endDate = moment(startDate).add(12, 'months').format('YYYY-MM-DD');
    } else 
    {
      endDate = moment(startDate).format('YYYY-MM-DD'); // Default case
    }
    return isExpired(endDate) ? "Date Expired" : moment(endDate).format('DD-MM-YYYY');
  };

    
  const getQuantityForPlan = (quantities, planId) => 
  {
    if (quantities && quantities.length > 0) 
    {
      const quantityObject = quantities[0][planId];
      return quantityObject ? quantityObject : 0;
    } else 
    {
      return 0;
    }
  };
  



  const handleCancelPlan = async (planId, itemId) => 
  {
    try 
    {
      const quantityToReduce = 1; 
      
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/cancel-plan/${planId}/${itemId}`,
        { quantityToReduce }
      );
  
      if (response.data.success) 
      {
        toast.success("Plan quantity updated successfully");
        getInvoice(); // Refresh the plans list
      } 
      else 
      {
        toast.error(response.data.message);
      }
    } 
    catch (error) 
    {
      console.log("Error while canceling plan: ", error);
      toast.error("Error while canceling plan");
    }
  };

  const toggleDropdown = (planId, itemId) => 
  {
    setDropdownOpen(prev => ({
      ...prev,
      [`${planId}-${itemId}`]: !prev[`${planId}-${itemId}`] 
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 px-4">
      {invoice?.length > 0 ? (
        invoice.map((item) => (
          item.subscriptions.map((plan, idx) => (
            <div 
              key={plan._id} 
              className=""
            >
              <div className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg text-secondary-dark opacity-75 font-bold">
                      {plan?.type} - {plan?.duration}
                    </h4>
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(plan._id, item._id)}
                        className="transition"
                      >
                        <FaEllipsisV className="text-lg text-secondary-dark opacity-75" />
                      </button>
                      {dropdownOpen[`${plan._id}-${item._id}`] && (
                        <div className="absolute right-3 bg-white p-2 border border-secondary rounded shadow-lg w-56 z-10">
                          <button
                            onClick={() => handleUpdate(plan._id, item._id)}
                            className="block text-sm px-5 py-4 text-secondary-dark hover:text-primary text-left"
                          >
                            Cancel and Update Subscription to Annual/Monthly
                          </button>
                          <button
                            onClick={() => handleCancelPlan(plan._id, item._id)}
                            className="block text-sm px-5 pb-4 text-secondary-dark hover:text-primary text-left"
                          >
                            Cancel Subscription
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-secondary font-medium">Plan Price:</span> 
                      <span className="text-secondary">${plan?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary font-medium">Quantity:</span> 
                      <span className="text-secondary">{getQuantityForPlan(item?.quantities, plan._id)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary font-medium">Start Time:</span> 
                      <span className="text-secondary">{moment(item?.createdAt).format("DD-MM-YYYY")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary font-medium">End Date:</span> 
                      <span className="text-secondary">{calculateEndDate(item?.createdAt, plan?.duration)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary font-medium">Purchase Time:</span> 
                      <span className="text-secondary">{moment(item?.createdAt).format("hh:mm A")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ))
      ) : (
        <div className="text-gray-600 text-lg text-center">No subscriptions found.</div>
      )}
    </div>
  );
};

export default PrivateRoute(ManagePlans);
