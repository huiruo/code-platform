import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const useFetchUser = (): [User | null, boolean, Error | null] => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://example.com/user');
        const data = await response.json();
        setUser(data);
      } catch (error: any) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  return [user, isLoading, error];
};

export default useFetchUser;