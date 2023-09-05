import React, { useState } from 'react';
import { Checkbox, Typography, Box, CardContent, Card } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { OneCardType } from './OneCard.type';
import './OneCard.css';
import AddPlan from '../AddPlan/AddPlan';
import EditIcon from '@mui/icons-material/Edit';
import useChangeIsFinished from '../../hooks/useChangeIsFinished';

const OneCard = ({
  id,
  name,
  desc,
  important,
  addingDate,
  timeStart,
  timeEnd,
  isFinished,
  setOpenedPlan,
  date,
}: OneCardType) => {
  const [isEdit, setIsEdit] = useState(false);
  const { isEnd, setFinished } = useChangeIsFinished({
    id,
    name,
    desc,
    important,
    addingDate,
    timeStart,
    timeEnd,
    isFinished,
  });

  const contentItems = [
    {
      title: 'Name:',
      value: name,
    },
    {
      title: 'Date:',
      value: addingDate.toISOString(),
    },
    {
      title: 'Description:',
      value: desc || '',
    },
    {
      title: 'Time start:',
      value: timeStart,
    },
    {
      title: 'Time end:',
      value: timeEnd,
    },
  ];

  const finishedCheckbox = {
    title: 'Finished',
    condition: !(isFinished || `${addingDate}T${timeEnd}` < date),
    component: (
      <Checkbox
        value={isEnd}
        onChange={(e) => {
          setFinished(e.target.checked);
        }}
      />
    ),
  };

  return (
    <Box className={'wrapper_card'}>
      <Card className={'content'}>
        <div className={'cross'} onClick={() => setOpenedPlan(null)}>
          <CloseIcon />
        </div>
        {!isEdit && (
          <CardContent>
            <div className={'edit'} onClick={() => setIsEdit(true)}>
              <EditIcon />
            </div>
            {contentItems.map((item, index) => (
              <div key={index}>
                <Typography>{item.title}</Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {item.value}
                </Typography>
              </div>
            ))}
            {finishedCheckbox.condition && finishedCheckbox.component}
          </CardContent>
        )}
        {isEdit && (
          <AddPlan
            defaultObj={{
              name,
              desc,
              important,
              date: addingDate,
              timeStart,
              timeEnd,
              id,
              isFinished: isEnd,
            }}
            setIsEdit={setIsEdit}
            setOpenedPlan={setOpenedPlan}
          />
        )}
      </Card>
    </Box>
  );
};

export default OneCard;
