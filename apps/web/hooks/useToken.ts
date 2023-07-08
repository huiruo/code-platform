import { useState, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie  } from 'cookies-next'

interface TokenHelpers {
  setToken: (newToken: string) => void;
  deleteCookie: () => void;
}

type UseTokenReturn = [string | null, TokenHelpers];

function useToken(): UseTokenReturn {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromCookie = getCookie('token');
    if (tokenFromCookie) {
      setToken(tokenFromCookie as string);
    }
  }, []);

  const tokenHelpers: TokenHelpers = {
    setToken: (newToken: string) => {
      setCookie('token', newToken);
      setToken(newToken);
    },
    deleteCookie: () => {
      deleteCookie('token');
      setToken(null);
    },
  };

  return [token, tokenHelpers];
}

export default useToken;