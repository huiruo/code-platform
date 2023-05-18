import { listImagesApi } from '@services/api';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const useFetchUser = (): [User | null, boolean, Error | null] => {
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);

      try {
        const res = await listImagesApi()
        const data = await res.json();
        if (data.code === 1) {
          setData(data.data);
        } else {
          setError(data.msg)
        }
      } catch (error: any) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  return [data, isLoading, error];
};

export default useFetchUser;