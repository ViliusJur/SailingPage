import React, { useState } from 'react';
import {
    Typography, Box, FormControl, InputLabel, Input, FormHelperText, TextField, Button,
} from '@mui/material';

import CommentsService from '../../../../services/comments-service';

const TypeComment: React.FC<{ getComments: any }> = ({ getComments }) => {
    const [formObj, setFormObj] = useState<BoatComment>({
        username: '',
        avatar: '',
        comment: '',
    });

    const updateFormValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormObj({
            ...formObj,
            [event.target.id]: event.target.value,
        });
    };

    const updateComments = async () => {
        await getComments();
    };

    const addComment = async () => {
        const res = await CommentsService.addComment('addComment', formObj);
        if (res) {
            updateComments();
        }
    };

return (
  <>
    <Typography variant="h5">
      Type your comment
    </Typography>
    <Box sx={{ mt: 4, mb: 4 }}>
      <div>
        <FormControl sx={{ width: '100%', mb: 2 }}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" aria-describedby="username-description" onChange={updateFormValues} />
          <FormHelperText id="username-description">Username next to comment</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ width: '100%', mb: 2 }}>
          <InputLabel htmlFor="avatar">Avatar</InputLabel>
          <Input id="avatar" aria-describedby="avatar-description" onChange={updateFormValues} />
          <FormHelperText id="avatar-description">Your avatar link</FormHelperText>
        </FormControl>
      </div>

      <div>
        <FormControl sx={{ width: '100%' }}>
          <TextField
            id="comment"
            label="Comment"
            multiline
            rows={4}
            placeholder="Your comment"
            variant="standard"
            onChange={updateFormValues}
          />
          <FormHelperText id="comment-description">Your comment</FormHelperText>
        </FormControl>
      </div>

      <div><Button sx={{ mt: 2 }} variant="outlined" onClick={() => addComment()}>Add comment</Button></div>

    </Box>
  </>
);
};

export default TypeComment;
