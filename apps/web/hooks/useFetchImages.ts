import { listImagesApi } from '@services/api';
import { useState, useEffect } from 'react';

interface ImgType {
  containers : number
  created : number
  id : string
  name : string
  size : number
}

const useFetchImg = (): [(ImgType[]), boolean, (Error | null)] => {
  const [data, setData] = useState<ImgType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
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

    fetchImages();
  }, []);

  return [data, isLoading, error];
};

export default useFetchImg;
