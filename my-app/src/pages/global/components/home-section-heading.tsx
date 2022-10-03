import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

type HomeSectionHeadingProps = {
    align: string,
    children: React.ReactNode
};

const HomeSectionHeading = styled(Typography)<HomeSectionHeadingProps>(({ theme, align }) => ({
  textAlign: align,
  fontWeight: 'bold',
  color: theme.palette.common.black,
  fontSize: 32,
  position: 'relative',
  paddingBottom: 10,
  paddingTop: 30,
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '10%',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%)',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
}));

export default HomeSectionHeading;
