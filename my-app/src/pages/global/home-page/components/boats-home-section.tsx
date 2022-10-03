import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const BoatsHomeSection: React.FC = () => {
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));

return (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
  </Grid>

);
};

export default BoatsHomeSection;
