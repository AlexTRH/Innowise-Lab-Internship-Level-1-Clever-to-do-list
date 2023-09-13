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

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const renderCardContent = () => {
    return (
      <CardContent>
        <div className={'edit'} onClick={handleEditClick}>
          <EditIcon />
        </div>
        {renderContentItems()}
        {renderFinishedCheckbox()}
      </CardContent>
    );
  };

  const renderContentItems = () => {
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

    return contentItems.map((item, index) => (
      <div key={index}>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Typography variant="h6" gutterBottom component="div">
          {item.value}
        </Typography>
      </div>
    ));
  };

  const renderFinishedCheckbox = () => {
    if (isFinished || `${addingDate}T${timeEnd}` < date) {
      return null;
    }

    return (
      <div>
        <Typography variant="subtitle1">Finished:</Typography>
        <Checkbox
          value={isEnd}
          onChange={(e) => {
            setFinished(e.target.checked);
          }}
        />
      </div>
    );
  };

  return (
    <Box className={'wrapper_card'}>
      <Card className={'content'}>
        <div className={'cross'} onClick={() => setOpenedPlan(null)}>
          <CloseIcon />
        </div>
        {!isEdit ? renderCardContent() : <AddPlan />}
      </Card>
    </Box>
  );
};

export default OneCard;
