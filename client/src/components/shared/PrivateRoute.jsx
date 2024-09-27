"use client"

import { useAuth } from '@/hooks/auth';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Spinner from './Spinner';

const PrivateRoute = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const [auth ] = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [ok,setOk] = useState(false);


    useEffect(() =>
    {
      const authCheck = async () =>
      {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/user-auth`);

        if(res.data.ok)
        {
          setOk(true);
        }
        else
        {
          setOk(false)
        }
      }

      if(auth?.token)
      {
        authCheck();
      }

    },[auth?.token])

    return ok ? <WrappedComponent {...props} /> : <Spinner path=""/>;
  };
};

export default PrivateRoute;
