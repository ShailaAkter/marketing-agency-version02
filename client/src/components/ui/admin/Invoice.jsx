"use client";

import { useAuth } from '@/hooks/auth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import moment from 'moment';
import { IoIosArrowDown,  IoIosArrowUp } from "react-icons/io";
import PrivateRoute from '@/components/shared/PrivateRoute';


const Invoice = () => 
{
  const [invoice, setInvoice] = useState([]);
  const [auth, setAuth] = useAuth(); 
  const [expandedRows, setExpandedRows] = useState([]);

  const userEmail = auth?.user?.email ;

  
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

  // Function to handle row expansion click
  const handleRowClick = (id) => 
  {
    setExpandedRows(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const getInvoice = async () => 
  {
    try 
    {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/purchased-plans/${userEmail}` );
      
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

  return (
    <div className="flex-1 flex justify-center items-center min-h-[85vh] text-center">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b-2 border-secondary font-medium text-primary">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Invoice</th>
                    <th scope="col" className="px-6 py-4">Date</th>
                    <th scope="col" className="px-6 py-4">Quantity</th>
                    <th scope="col" className="px-6 py-4">Amount</th>
                    <th scope="col" className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Check if invoice data exists */}
                  {invoice?.length > 0 ? (
                    invoice.map((item, index) => (
                      <React.Fragment key={item._id}>
                        <tr
                          className={`border-b border-secondary-light transition duration-300 ease-in-out ${
                            index % 2 === 0 ? 'bg-secondary-lighter' : 'bg-white'
                          } text-slate-700 font-semibold cursor-pointer`}
                        >
                          <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item?._id}</td>
                          <td className="whitespace-nowrap px-6 py-4">{moment(item?.createdAt).fromNow()}</td>
                          <td className="whitespace-nowrap px-6 py-4">{item?.subscriptions?.length}</td>
                          <td className="whitespace-nowrap px-6 py-4">amount</td>
                          <td className="whitespace-nowrap px-6 py-4 flex justify-start items-center gap-4">
                            <button
                              onClick={() => handleRowClick(item._id)}
                              className="text-lg font-bold"
                            >
                              {expandedRows[item._id] ? <span><IoIosArrowUp/></span> : <span><IoIosArrowDown/></span>}
                            </button>
                          </td>
                        </tr>

                        {/* Expanded row */}
                        {expandedRows[item._id] && (
                          <tr className="bg-primary-lighter">
                            <td colSpan="7">
                              <table className="min-w-full">
                                <thead>
                                  <tr className="border-b border-secondary-light">
                                    <th className="px-6 py-4 text-secondary-darker">Plan Name</th>
                                    <th className="px-6 py-4 text-secondary-darker">Plan Price</th>
                                    <th className="px-6 py-4 text-secondary-darker">Quantity</th>
                                    <th className="px-6 py-4 text-secondary-darker">Total Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item?.subscriptions?.map((plan, nestedIndex) => (
                                    <tr key={nestedIndex} className="border-b border-secondary-light">
                                      <td className="whitespace-nowrap px-6 py-4 text-secondary-dark text-sm font-semibold">{plan.type}<span className='opacity-80'>({plan.duration})</span></td>
                                      <td className="whitespace-nowrap px-6 py-4 text-secondary-dark text-sm font-semibold">{plan.price}</td>
                                      <td className="whitespace-nowrap px-6 py-4 text-secondary-dark text-sm font-semibold">
                                        {getQuantityForPlan(item?.quantities, plan._id)}
                                      </td>
                                      <td className="whitespace-nowrap px-6 py-4 text-secondary-dark text-sm font-semibold">
                                        {getQuantityForPlan(item?.quantities, plan._id) * plan.price}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="whitespace-nowrap px-6 py-4 text-slate-500">
                        No purchases found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(Invoice);
