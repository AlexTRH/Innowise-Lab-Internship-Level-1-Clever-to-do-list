import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ElementOfListPlansType } from './ElementOfListPlans.type';
import './ElementOfPlans.css';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import { db } from '../../services/db';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../store/user/selector';
import { deletePlan } from '../../store/plans/plansSlice';
import processingData from '../../helpers/ProcessingData';

const ElementOfListPlans = ({
  id,
  name,
  desc,
  important,
  addingDate,
  timeStart,
  timeEnd,
  setOpenedPlan,
  isFinished,
  date,
}: ElementOfListPlansType) => {
  const { email } = useSelector(userSelector);
  const dispatch = useDispatch();

  const elementClasses = `${important} element_of_plan ${
    isFinished ||
    `${processingData.getDateWithoutHour(addingDate)}T${timeEnd}` < date
      ? 'opacity_element'
      : ''
  }`;

  const handleElementClick = () => {
    setOpenedPlan({
      id,
      name,
      desc,
      important,
      date: addingDate,
      timeStart,
      timeEnd,
      isFinished,
    });
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast
      .promise(db.deletePlan(email!, addingDate, id), {
        pending: 'deleting',
        error: 'error',
        success: 'ok',
      })
      .then(() => {
        dispatch(deletePlan({ date: addingDate, id }));
      })
      .catch((ev) => console.log(ev));
  };

  return (
    <Box className={elementClasses} onClick={handleElementClick}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Typography>
            {name} from {timeStart}
          </Typography>
        </Grid>
        <Grid item xs={1} className={'icon_del'} onClick={handleDeleteClick}>
          <DeleteIcon />
        </Grid>
        <Grid item xs={1} className={'icon_full'}>
          <OpenInFullIcon />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ElementOfListPlans;
