import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { login } from '../store/user/userSlice';
import { useDispatch } from 'react-redux';
import { IsLoadingEnum, setLoading } from '../store/isLoading/isLoadingSlice';

const useCheckingAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(IsLoadingEnum.pending));
    getAuth().onAuthStateChanged((result) => {
      console.log(result);
      dispatch(
        login({
          name: result?.displayName,
          email: result?.email,
          uid: result?.uid,
        })
      );
    });
    dispatch(setLoading(IsLoadingEnum.success));
  }, [dispatch]);
};
export default useCheckingAuth;
