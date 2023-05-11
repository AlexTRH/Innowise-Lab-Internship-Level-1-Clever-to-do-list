import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as validReg from '../regexp/validators';
import { IsLoadingEnum, setLoading } from '../store/isLoading/isLoadingSlice';
import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { login } from '../store/user/userSlice';
import { db } from '../services/db';

const useCreateUser = (
  defaultName = '',
  defaultEmail = '',
  defaultPassword = '',
  defaultConfirmPass = ''
) => {
  const [name, setName] = useState({
    value: defaultName,
    error: false,
  });
  const [email, setEmail] = useState({
    value: defaultEmail,
    error: false,
  });
  const [password, setPassword] = useState({
    value: defaultPassword,
    error: false,
  });
  const [confirmPass, setConfirmPass] = useState({
    value: defaultConfirmPass,
    error: false,
  });
  const navigate = useNavigate();

  const getName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName({
      value: event.target.value,
      error: !validReg.name.test(event.target.value),
    });
  };
  const getEmail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail({
      value: event.target.value,
      error: !validReg.email.test(event.target.value),
    });
  };
  const getPassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword({
      value: event.target.value,
      error: !validReg.pass.test(event.target.value),
    });
  };
  const getConfirmPass = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setConfirmPass({
      value: event.target.value,
      error: event.target.value !== password.value,
    });
  };

  const dispatch = useDispatch();

  const createUser = (): void => {
    dispatch(setLoading(IsLoadingEnum.pending));
    if (!name.error && !email.error && !confirmPass.error && !password.error) {
      const auth = getAuth();
      let promise = createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      toast
        .promise(promise, {
          pending: 'Loading',
          success: 'OK',
        })
        .then((result) => {
          toast.success('User created');
          dispatch(
            login({
              name: name.value,
              email: email.value,
              uid: result.user.uid,
            })
          );
          navigate('../');
          return result;
        })
        .then((result) =>
          db.setUserInfo(name.value, email.value, result.user.uid)
        )
        .catch((error: AuthError) => toast.error(error.message))
        .finally(() => {
          dispatch(setLoading(IsLoadingEnum.success));
        });
    } else {
      toast.error('You need to check all areas');
    }
  };
  return {
    getConfirmPass,
    getName,
    getEmail,
    getPassword,
    createUser,
    name,
    email,
    password,
    confirmPass,
  };
};

export default useCreateUser;
