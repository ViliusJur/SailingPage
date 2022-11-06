import React, { useState, useEffect } from 'react';

import {
 Divider, Avatar, Grid, Paper, Typography,
} from '@mui/material';
import CommentsService from 'services/comments-service';
import TypeComment from './type-comment';

const imgLink = 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

const Comments: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [comments, setComments] = useState<BoatComment[]>([]);

  const getComments = async () => {
    const fetchedComments = await CommentsService.fetchMany() as BoatComment[];
    setComments(fetchedComments);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('secret'));

    getComments();
  }, []);

  return (
    <div style={{ paddingTop: 20 }}>
      {isLoggedIn && <TypeComment getComments={getComments} />}
      <Typography variant="h5">Comments</Typography>
      <Paper style={{ padding: '40px 20px' }}>

        {comments.map((comment) => (
          <div key={comment._id}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={imgLink} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: 'left' }}>{comment.username}</h4>
                <p style={{ textAlign: 'left' }}>
                  {comment.comment}
                </p>
                <p style={{ textAlign: 'left', color: 'gray' }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
          </div>
          ))}
      </Paper>

    </div>
  );
};

  export default Comments;
