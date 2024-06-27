import {useAppSelector} from '@/Store';


export const useIsUserLogin = () => {
  const isLogin = useAppSelector(state => state.local.isLogin);
  return isLogin;
};
