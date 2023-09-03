import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import { ButtonLinks } from '../../constants/constants';

const ButtonSign = () => {
  return (
    <>
      <ButtonLink to={'signin'}>{ButtonLinks.signin}</ButtonLink>
      <ButtonLink to={'signup'}>{ButtonLinks.signup}</ButtonLink>
    </>
  );
};

export default ButtonSign;
