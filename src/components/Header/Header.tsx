import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/selector';
import './Header.scss';
import Logo from '../Logo/Logo';
import ButtonLink from '../ButtonLink/ButtonLink';
import ButtonSign from '../ButtonsSign/ButtonSign';

import { ButtonLinks } from '../../constants/Button.constant';

const Header = () => {
  const { email } = useSelector(userSelector);
  return (
    <header className="header">
      <Logo />

      <div className="header__buttons">
        <ButtonLink to={email ? ButtonLinks.Plans : ButtonLinks.Signin}>
          Plans
        </ButtonLink>
        {email ? (
          <ButtonLink to={ButtonLinks.Profile}>Profile</ButtonLink>
        ) : (
          <ButtonSign />
        )}
      </div>
    </header>
  );
};

export default Header;
