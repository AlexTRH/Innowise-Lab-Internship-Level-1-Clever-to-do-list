import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import './Header.css';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header>
            <Logo />

            {/*<Grid*/}
            {/*    container*/}
            {/*    spacing={2}*/}
            {/*    direction="row"*/}
            {/*    justifyContent="flex-start"*/}
            {/*    alignItems="stretch"*/}
            {/*    className={'button_entry'}*/}
            {/*>*/}
            {/*    /!*<Grid item>{}</Grid>*!/*/}
            {/*</Grid>*/}
        </header>
    );
};

export default Header;
