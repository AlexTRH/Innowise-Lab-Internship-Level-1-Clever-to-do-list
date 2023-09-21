import React from 'react';
import { Typography } from '@mui/material';

type ContentItem = {
  title: string;
  value: string | number;
};

export const renderContentItems = (contentItems: ContentItem[]) => {
  return contentItems.map((item, index) => (
    <div key={index}>
      <Typography variant="subtitle1">{item.title}:</Typography>
      <Typography variant="h6" gutterBottom component="div">
        {item.value}:
      </Typography>
    </div>
  ));
};
