import React, { useContext } from 'react';
import {
 Typography, Paper, Box, Button,
} from '@mui/material';
import { SpecCtx } from './specification-context';

const Specification: React.FC = () => {
    const specContext = useContext(SpecCtx);
    return (
      <>
        <Box sx={{
            justifyContent: 'space-around', display: 'flex',
      }}
        >
          <Button variant="contained" size="large" onClick={() => specContext.changeContent(0)}>Rig types</Button>
          <Button variant="contained" size="large" onClick={() => specContext.changeContent(1)}>Keel types</Button>
          <Button variant="contained" size="large" onClick={() => specContext.changeContent(2)}>Sail types</Button>
          <Button variant="contained" size="large" onClick={() => specContext.changeContent(3)}>Knots</Button>
        </Box>
        <Paper variant="outlined" square elevation={0} sx={{ mt: 5, mb: 3, p: 3 }}>
          <Typography align="center">{specContext.text}</Typography>
          <Box><img src={specContext.image} alt={specContext.text} /></Box>
        </Paper>
      </>
    );
};

export default Specification;
