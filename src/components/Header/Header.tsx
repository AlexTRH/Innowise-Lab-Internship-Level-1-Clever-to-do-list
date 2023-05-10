import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user/selector';
import { Box, Grid } from '@mui/material';
import './Header.scss';
import Logo from '../Logo/Logo';
import ButtonLink from '../ButtonLink/ButtonLink';
import ButtonSign from '../ButtonsSign/ButtonSign';

const Header = () => {
  const { email } = useSelector(userSelector);
  return (
    <header className="header">
      <Logo />

      <div className="header__buttons">
        <ButtonLink to={email ? 'plans' : 'signin'}>Plans</ButtonLink>
        {email ? (
          <ButtonLink to={'profile'}>Profile</ButtonLink>
        ) : (
          <ButtonSign />
        )}
      </div>

      {/*<Grid*/}
      {/*  container*/}
      {/*  spacing={2}*/}
      {/*  direction="row"*/}
      {/*  justifyContent="flex-start"*/}
      {/*  alignItems="center"*/}
      {/*  className={'button_entry'}*/}
      {/*>*/}
      {/*  /!*<Grid item>*!/*/}
      {/*  /!*  <Logo />*!/*/}
      {/*  /!*</Grid>*!/*/}
      {/*  /!*<Grid item>*!/*/}
      {/*  /!*  <ButtonLink to={email ? 'plans' : 'signin'}>Plans</ButtonLink>*!/*/}
      {/*  /!*</Grid>*!/*/}
      {/*  /!*<Grid item>*!/*/}
      {/*  /!*  {email ? (*!/*/}
      {/*  /!*    <ButtonLink to={'profile'}>Profile</ButtonLink>*!/*/}
      {/*  /!*  ) : (*!/*/}
      {/*  /!*    <ButtonSign />*!/*/}
      {/*  /!*  )}*!/*/}
      {/*  /!*</Grid>*!/*/}
      {/*</Grid>*/}
    </header>
  );
};

export default Header;
