"use client"; // Required for client-side hooks

import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useRouter } from "next/navigation"; 

const Spinner = ({ path = "login" }) => 
{
  const [count, setCount] = useState(3);
  const router = useRouter(); 

  useEffect(() => 
  {
    const interval = setInterval(() => 
    {
      setCount((prev) => --prev);
    }, 1000);

    if (count === 0) 
    {
      router.push(`/${path}`);
    }

    return () => clearInterval(interval); 
  }, [count, router, path]);

  return (
    <div className="flex justify-center items-center pt-96">
      <div>
        <h1 className="text-center py-4 text-lg xl:text-2xl text-primary">
          Redirecting to you in {count} seconds
        </h1>
        <div className="flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="orange"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
