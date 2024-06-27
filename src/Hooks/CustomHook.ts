import {useAppSelector} from '@/Store';

export const useIsUserLogin = () => {
  const isLogin = useAppSelector(state => state.local.isLogin);
  return isLogin;
};

export const useIsAddNFCSuccess = () => {
  const isAddNFCSuccess = useAppSelector(state => state.local.isAddNFCSuccess);
  return isAddNFCSuccess;
};

export const useIsRemoveFirst = () => {
  const isRemoveFirst = useAppSelector(state => state.local.isRemoveFirst);
  return isRemoveFirst;
};
