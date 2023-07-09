import { useState, useEffect } from 'react';
import { services } from '@services/api';
import { message } from 'antd';
import { setCookie } from 'cookies-next';

const useListContainers = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);


  const listContainers = async (isRunning = false) => {
      const params = { isRunning }
      try {
        const data = await services.listContainers(params)
        if (data.code === 1) {
          setData(data.data)
          setLoading(false);
        } else {
          const isObject = Object.prototype.toString.call(data.msg) ==='[object Object]'
          message.warning(isObject?JSON.stringify(data.msg):data.msg)
          setLoading(false);
        }
      } catch (error) {
          console.error(error);
          setLoading(false);
      }
  }

  useEffect(() => {
    if (!token) {
      return;
    }

    console.log('useListContainers--useEffect',token)

    setCookie('token',token)

    setLoading(true);

    listContainers();
  }, [token]);

  const refetch = (isRunning?: boolean) => {
    setLoading(true);
    listContainers(isRunning);
  };

  return { loading, data, refetch };
};

export default useListContainers;