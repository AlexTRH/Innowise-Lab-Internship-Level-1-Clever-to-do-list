import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';

import { ButtonLinks } from '../../constants/Button.constant';

const ButtonSign = () => {
  return (
    <>
      <ButtonLink to={'signin'}>{ButtonLinks.SignIn}</ButtonLink>
      <ButtonLink to={'signup'}>{ButtonLinks.SignUp}</ButtonLink>
    </>
  );
};

export default ButtonSign;
