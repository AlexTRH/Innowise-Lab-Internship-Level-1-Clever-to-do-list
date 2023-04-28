import React, { useEffect } from 'react';
import './Welcome.css';
import { Grid, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import planImg from '../../assets/img/plans.jpg';

export const Welcome = () => {
    const navigator = useNavigate();
    return (
        <div className={'wrapper_welcome'}>
            <Grid
                container
                spacing={2}
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item xs={2} className={'img'}>
                    <img src={planImg} alt="planning your day" />
                </Grid>
                <Grid item xs={2} className={'text'}>
                    <h3>PLAN YOUR LIFE EFFECTIVELY</h3>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="outlined"
                        className={'explore'}
                        onClick={() => {
                            navigator('signup');
                        }}
                    >
                        Explore
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Welcome;
