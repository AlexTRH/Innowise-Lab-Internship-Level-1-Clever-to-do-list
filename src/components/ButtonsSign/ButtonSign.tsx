import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';

import { ButtonLinks } from '../../constants/ButtonLinks.constant';

const ButtonSign = () => {
  return (
    <>
      <ButtonLink to={'signin'}>{ButtonLinks.Signin}</ButtonLink>
      <ButtonLink to={'signup'}>{ButtonLinks.Signup}</ButtonLink>
    </>
  );
};

export default ButtonSign;
