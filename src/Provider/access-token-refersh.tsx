import React, {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';

export const AccessTokenRefresh: FC<
  PropsWithChildren & {loading: ReactNode}
> = ({children, loading}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <>{loading}</>;
  }

  return <>{children}</>;
};
