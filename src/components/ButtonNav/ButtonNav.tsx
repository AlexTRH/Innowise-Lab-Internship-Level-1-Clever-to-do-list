import React from 'react';
import { BottomNavigationAction, BottomNavigation } from '@mui/material';
import { Add, CalendarMonth } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getWorkMode } from '../../store/workMode/selector';
import { setWorkMode } from '../../store/workMode/workModeSlice';
import './ButtonNav.css';

const ButtonNav = () => {
  const workMode = useSelector(getWorkMode);
  const dispatch = useDispatch();

  return (
    <BottomNavigation
      showLabels
      value={workMode}
      onChange={(event, newValue) => {
        dispatch(setWorkMode(newValue));
      }}
    >
      <BottomNavigationAction label="Calendar" icon={<CalendarMonth />} />
      <BottomNavigationAction label="Add" icon={<Add />} />
    </BottomNavigation>
  );
};
export default ButtonNav;
