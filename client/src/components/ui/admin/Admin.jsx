"use client"
import AnnouncementsSection from "@/components/shared/AnnouncementsSection"
import PrivateRoute from "@/components/shared/PrivateRoute"
import ReportCard from "@/components/shared/ReportCard"
import TeamMembers from "@/components/shared/TeamMembers"
import { useAuth } from "@/hooks/auth"
import axios from "axios"
import moment from "moment"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Admin = () => 
{
  const [auth, setAuth] = useAuth();
  const [invoice, setInvoice] = useState([]);
  const [freeSubscribePlans, setSubscribeFreePlans] = useState([]);
  const [totalMonthly, setTotalMonthly] = useState(0); 
  const [totalAnnual, setTotalAnnual] = useState(0);  
  const [totalSubscriptionCount, setTotalSubscriptionCount] = useState(0);
  const [latestSubscription, setLatestSubscription] = useState(null);


  const userEmail = auth?.user?.email

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
  

  const getInvoice = async () => 
    {
      try 
      {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/purchased-plans/${userEmail}`);
    
        if (data?.success) 
        {
          let monthlyCount = 0;
          let annualCount = 0;
          let totalSubscriptions = 0;
          let latestSubscription = null; 
    
          data.subscriptions.forEach((item) => 
          {
            item.subscriptions.forEach((plan, index) => 
            {
              const quantity = getQuantityForPlan(item.quantities, plan._id);
    
              if (plan.duration === "Monthly") 
              {
                monthlyCount += quantity;
              } 
              else if (plan.duration === "Annual") 
              {
                annualCount += quantity;
              }
    
              totalSubscriptions += quantity;
    
             
              if (index === 0 && !latestSubscription) 
              {
                latestSubscription = 
                {
                  type: plan.type,
                  duration: plan.duration,
                  price: plan.price,
                  time: new Date(plan.startDate || plan.createdAt).toISOString(),
                };
              }
            });
          });
    
          setTotalMonthly(monthlyCount);
          setTotalAnnual(annualCount);
          setTotalSubscriptionCount(totalSubscriptions);
    
          setLatestSubscription(latestSubscription);
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


  const getSubscribeFreePlans = async () => 
    {
      try 
      {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans/subscribe-free-plans/${auth?.user?.email}`);
  
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
  
  const plan = freeSubscribePlans.find(plan => plan.type === "Basic");
  
  useEffect(() => 
  {
    if (userEmail) 
    {
      getSubscribeFreePlans();
    }
  }, [userEmail]);

  

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
  


  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/*welcome section*/}
          <div className="h-[200px] lg:h-[400px] shadow-lg rounded-lg overflow-hidden">
            <div className="h-full bg-gradient-to-b from-white to-primary-lighter flex flex-col items-center justify-center">
              <p className="text-primary text-sm xl:text-2xl">Welcome,</p>
              <h2 className="text-2xl xl:text-4xl text-primary font-bold mb-4">{auth?.user?.username}!</h2>
              <p className="text-primary text-sm xl:text-2xl">Thank you for having our plan!</p>
            </div>
          </div>

          {/* subcription plan counts */}
          <div className="flex gap-4 justify-between flex-wrap">
            <ReportCard
              title="Total Subscriptions"
              content1="Total"
              number1={totalSubscriptionCount}
              content2="Active"
              bgColor="bg-green-600"
            />
            <ReportCard
              title="Monthly Subscriptions"
              content1="Total"
              number1={totalMonthly}
              content2="Active"
              bgColor="bg-purple-600"
            />
            <ReportCard
              title="Annual Subscriptions"
              content1="Total"
              number1={totalAnnual}
              content2="Active"
              bgColor="bg-red-600"
            />
          </div>

          {/* CHARTS SECTION */}
          <div className="flex gap-4 flex-col lg:flex-row">

            {/* team members*/}
            <div className="w-full h-auto bg-gradient-to-r from-white to-secondary-lighter py-10 px-6 rounded-lg shadow-lg">
              <h2 className="text-lg xl:text-3xl font-bold text-center text-primary">Consult with Team</h2>
              <p className="text-sm xl:text-lg font-bold text-center text-primary mb-8">3.00 PM  - 9.00 PM</p>
              <div className="">
                <TeamMembers />
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">

          {/* Free Trial */}
          <div className="bg-gradient-to-r from-primary to-orange-600 shadow-lg rounded-lg overflow-hidden">
            <div className="p-5">
              <h2 className="font-semibold text-xl xl:text-3xl text-white">Free Trial</h2>
              <p className="font-medium text-lg xl:text-xl text-secondary-extralight">
                Basic Plan <span className="font-light text-sm">(Monthly)</span>
              </p>
            </div>
            {plan ? (
              <>
                <div className="flex justify-between items-center px-5 text-white">
                  <p className="text-sm xl:text-lg font-semibold">Start Date</p>
                  <p className="text-sm xl:text-lg font-semibold">{moment(plan?.createdAt).format("DD-MM-YYYY")}</p>
                </div>
                <div className="flex justify-between items-center px-5 text-white pb-5">
                  <p className="text-sm xl:text-lg font-semibold">End Date</p>
                  <p className="text-sm xl:text-lg font-semibold">{calculateEndDate(plan?.createdAt, plan?.duration)}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center px-5 text-white">
                  <p className="text-sm xl:text-lg font-semibold">Start Date</p>
                  <p className="text-sm xl:text-lg font-semibold">00-00-0000</p>
                </div>
                <div className="flex justify-between items-center px-5 text-white pb-5">
                  <p className="text-sm xl:text-lg font-semibold">End Date</p>
                  <p className="text-sm xl:text-lg font-semibold">00-00-0000</p>
                </div>
              </>
            )}
          </div>

          {/* latest subscription */}
          <div className="bg-gradient-to-r from-primary to-orange-600 shadow-lg rounded-lg overflow-hidden">
            <div className="p-5">
              <h2 className="font-semibold text-xl xl:text-3xl text-white">Latest Subscription</h2>

              {/* Flex container for type and price */}
              <div className="flex justify-between items-center">
                <p className="font-medium text-lg xl:text-xl text-secondary-extralight">
                  {latestSubscription?.type} 
                  <span className="font-light text-sm ml-2">{latestSubscription?.duration}</span>
                </p>
                
                {/* Display price on the right */}
                <p className="font-semibold text-lg xl:text-xl text-white">
                  {latestSubscription?.price && `$${latestSubscription?.price}`}
                </p>
              </div>
            </div>

            {latestSubscription ? 
            (
              <>
                <div className="flex justify-between items-center px-5 text-white">
                  <p className="text-sm xl:text-lg font-semibold">Start Date</p>
                  <p className="text-sm xl:text-lg font-semibold">
                    {moment(latestSubscription?.createdAt).format("DD-MM-YYYY")}
                  </p>
                </div>
                <div className="flex justify-between items-center px-5 text-white pb-5">
                  <p className="text-sm xl:text-lg font-semibold">End Date</p>
                  <p className="text-sm xl:text-lg font-semibold">
                    {calculateEndDate(latestSubscription?.createdAt, latestSubscription?.duration)}
                  </p>
                </div>
              </>
            ) : 
            (
              <>
                <div className="flex justify-between items-center px-5 text-white">
                  <p className="text-sm xl:text-lg font-semibold">Start Date</p>
                  <p className="text-sm xl:text-lg font-semibold">00-00-0000</p>
                </div>
                <div className="flex justify-between items-center px-5 text-white pb-5">
                  <p className="text-sm xl:text-lg font-semibold">End Date</p>
                  <p className="text-sm xl:text-lg font-semibold">00-00-0000</p>
                </div>
              </>
            )}
          </div>


          {/* Announcements */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <AnnouncementsSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivateRoute(Admin)