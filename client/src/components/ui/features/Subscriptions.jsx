"use client"
import ContainerBox from "@/components/shared/ContainerBox";
import Loader from "@/components/shared/Loader";
import subscriptionPlans from "@/components/utils/subscriptions";
import { useAuth } from "@/hooks/auth";
import { useCart } from "@/hooks/cart";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaRegStar, FaStarHalfAlt, FaStar, FaCrown } from 'react-icons/fa';


const Subscriptions = () => 
{
  const [toggle, setToogle] = useState();
  const [plans, setPlans] = useState([]);
  const [freePlans, setFreePlans] = useState([]);
  const [freeSubscribePlans, setSubscribeFreePlans] = useState([]);
  const [auth, setAuth] = useAuth();
  const [cart, setCart, { addToCart }] = useCart();
  const [loading, setLoading] = useState(true);

  const router = useRouter()



  const userEmail = auth?.user?.email


  const SubscriptionToogle = () =>
  {
    setToogle(!toggle);
  }


  const getPlans = async () =>
  {
    try
    {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/get-plans`);
      if(data?.success)
      {
        setPlans(data.plans);
        setLoading(false);
      }
    }
    catch(error)
    {
        console.log(error);
        toast.error("Something went wrong while getting Brand");
        setLoading(false);
    }
  }

  const getFreePlans = async () =>
  {
    try
    {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/get-free-plans`);
      if(data?.success)
      {
        setFreePlans(data.plans);
        setLoading(false);
      }
    }
    catch(error)
    {
        console.log(error);
        toast.error("Something went wrong while getting Brand")
        setLoading(false);
    }
  }


  const getSubscribeFreePlans = async () => 
  {
    try 
    {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/subscribe-free-plans/${userEmail}`);

      if (data?.success) 
      {
        setSubscribeFreePlans(data.plans);
      }
    } 
    catch (error) 
    {
      console.log(error);
      toast.error("Something went wrong while getting free subscription plans");
    }
  };

const checkPlan = freeSubscribePlans.find(plan => plan.type === "Basic");



useEffect(() => 
{
  if (userEmail) 
  {
    getSubscribeFreePlans();
  }
}, [userEmail]);



const handleFreeTrial = async (plan) => 
{
  try 
  {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/subscribe-free-plan`, 
    {
      type: plan.type,
      description: plan.description,
      duration: 'Monthly',  // You can adjust this based on the plan
      features: plan.features,
      price: plan.price,
      icon: plan.icon,
      email: userEmail // Assuming you have the user's email available
    });
  
      if (response.data.success) 
      {
        toast.success("Your free trial has been started");
        router.push('/dashboard')
      }
    } 
    catch (error) 
    {
      console.error('Error starting free trial:', error);
      toast.error('Failed to start the free trial.');
    }
  };

    
  const annualPlans = plans.filter(plan=> plan.duration === "Annual");
  const monthlyPlans = plans.filter(plan=> plan.duration === "Monthly");
  const basicPlan = freePlans.find(plan => plan.type === "Basic");

  const getIcon = (iconName) =>
  {
    switch (iconName) 
    {
      case 'FaRegStar':
        return <FaRegStar size={30} />;
      case 'FaStarHalfAlt':
        return <FaStarHalfAlt size={30} />;
      case 'FaStar':
        return <FaStar size={30} />;
      case 'FaCrown':
        return <FaCrown size={30} />;
      default:
        return null;
    }
  };

  useEffect(() =>
  {
    getPlans();
    getFreePlans();
  }, [])




  return (
    <section id="plans" className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">

          {/* text */}
          <div className="text-center  xl:max-w-[600px] md:max-w-[500px]">
            <h1 className="text-2xl md:text-3xl  lg:text-3xlxl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Pricing Plans</h1>
    
            <p className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">
                Explore our flexible subscription plans designed to meet the needs of businesses of all sizes. Choose the plan that best fits your requirements and enjoy seamless access to our services with transparent, predictable pricing.
            </p>
          </div>
    
          {/* supscription plan */}
          {
            loading? 
            (
              <Loader/>
            ):
            (
              <div className="px-6">
    
              {/* Toggle Button */}
              <div className="flex justify-center items-center gap-10">
                    <span 
                      className={`xl:text-lg md:text-base text-sm 
                      ${
                        toggle ? "text-secondary" : "text-primary"
                      }`}>
                        Monthly
                    </span>
        
                    <div
                      onClick={SubscriptionToogle}
                      className="xl:w-20 xl:h-9 w-16 h-7 flex justify-center items-center bg-primary rounded-full p-1 cursor-pointer transition-colors duration-300 ">
                      {/* Circle */}
                      <div
                        className={`flex justify-center items-center xl:w-10 xl:h-10 w-8 h-8 bg-secondary-lighter rounded-full shadow-lg border secondary-light transform transition-transform duration-300 
                        ${
                          toggle ? "xl:translate-x-6 translate-x-4 " : "xl:-translate-x-6 -translate-x-4"
                        }`}>
                      
                      </div>
        
        
                    </div>
        
                    <span 
                      className={`xl:text-lg md:text-base text-sm 
                      ${
                        toggle ? "text-primary" : "text-secondary"
                      }`}>
                        Annual
                    </span>
                  </div>
            
                  {/* yearly Subscription Cards */}
                  {toggle && (
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
                    {
                      annualPlans.map((plan, index) => (
                        <div key={index} className="flex flex-col bg-white hover:bg-secondary-lighter rounded-lg shadow-lg border border-secondary-lighter overflow-hidden">
  
                          <div className="flex flex-col py-10 px-3 text-center flex-grow">
                            <div className="flex flex-col justify-center items-center">
                              <span className="bg-primary-lighter text-primary p-4 rounded-lg">{getIcon(plan.icon)}</span>
                              <h2 className="text-xl lg:text-2xl font-bold text-secondary mt-2">{plan.type}</h2>
                              <p className="text-3xl font-bold text-primary">{plan.price}$</p>
                              <p className="text-sm text-secondary font-medium mt-4">{plan.description}</p>
                            </div>
            
                            <ul className="text-sm text-secondary-light mt-4 mb-6 space-y-2">
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center justify-start">
                                  <span className="mr-3 text-primary text-2xl">•</span>
                                  <span className="text-sm text-left">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-center items-center pb-10">
                            <button onClick={() => addToCart(plan)} className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-100">Add to Cart</button>
                          </div>
  
                        </div>
                      ))}
                    </div>
                  )}
            
                  {/* monthly Subscription Cards */}
                  {!toggle && (
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
                      <div className="flex flex-col bg-white hover:bg-secondary-lighter rounded-lg shadow-lg border border-secondary-lighter overflow-hidden">
  
                        <div className="flex flex-col py-10 px-3 text-center flex-grow">
                          <div className="flex flex-col justify-center items-center">
                            <span className="bg-primary-lighter text-primary p-4 rounded-lg"><FaRegStar size={30}/></span>
                            <h2 className="text-xl lg:text-2xl font-bold text-secondary mt-2">{basicPlan?.type}</h2>
                            <p className="text-3xl font-bold text-primary">{basicPlan?.price}$</p>
                            <p className="text-sm text-secondary font-medium mt-4">{basicPlan?.description}</p>
                          </div>
  
                          <ul className="text-sm text-secondary-light mt-4 mb-6 space-y-2">
                            {basicPlan?.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center justify-start">
                                <span className="mr-3 text-primary text-2xl">•</span>
                                <span className="text-sm text-left">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-center items-center pb-10">
                          <button disabled={checkPlan} 
                            onClick={() => handleFreeTrial(basicPlan)}   className={` text-white py-2 px-4 rounded-lg transition-colors duration-100
                            ${checkPlan ? 'bg-secondary text-secondary-extralight cursor-not-allowed' : 'bg-primary text-white hover:bg-orange-600'}`} 
                            title="You have alreday started free trial">Start Free Trial</button>
                        </div>
  
                      </div>
                      {
                        monthlyPlans.map((plan, index) =>(
                        <div key={index} className="flex flex-col bg-white hover:bg-secondary-lighter rounded-lg shadow-lg border border-secondary-lighter overflow-hidden">
  
                          <div className="flex flex-col py-10 px-3 text-center flex-grow">
                            <div className="flex flex-col justify-center items-center">
                              <span className="bg-primary-lighter text-primary p-4 rounded-lg">{getIcon(plan.icon)}</span>
                              <h2 className="text-xl lg:text-2xl font-bold text-secondary mt-2">{plan.type}</h2>
                              <p className="text-3xl font-bold text-primary">{plan.price}$</p>
                              <p className="text-sm text-secondary font-medium mt-4">{plan.description}</p>
                            </div>
            
                            <ul className="text-sm text-secondary-light mt-4 mb-6 space-y-2">
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center justify-start">
                                  <span className="mr-3 text-primary text-2xl">•</span>
                                  <span className="text-sm text-left">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex justify-center items-center pb-10">
                            <button onClick={() => addToCart(plan)} className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-100">Add to Cart</button>
                          </div>
  
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                )
              }      

    
            </div>

      </ContainerBox>
    </section>
  )
}

export default Subscriptions