import React, { useContext } from 'react';
import {
 Typography, Paper, Box, Button,
} from '@mui/material';
import { SpecCtx } from './specification-context';

const Specification: React.FC = () => {
    const specContext = useContext(SpecCtx);
    return (
      <>
        <Typography
          variant="h4"
          align="center"
          sx={{
                    textAlign: 'center',
                    mb: 10,
                    fontSize: 20,
                    fontStyle: 'italic',
        }}
        >
          Encyclopedia section intended for beginners who would like to
          know more about boats, sailing and more...
        </Typography>
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
          <Box sx={{ mt: 10, textAlign: 'center' }}><img src={specContext.image} alt="" /></Box>
          <Typography align="center" sx={{ mt: 5, mb: 3, p: 3 }}>{specContext.text}</Typography>
        </Paper>
      </>
    );
};

export default Specification;
