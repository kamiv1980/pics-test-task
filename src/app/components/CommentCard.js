import React from 'react';
import { useDispatch } from 'react-redux';
import {Card, CardContent, Typography, Box, IconButton, Tooltip} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteComment } from '../../features/comments/commentsSlice'

const CommentCard = ({ comment }) => {
    const dispatch = useDispatch();

    return (
        <Card variant="outlined" sx={{ mb: 2, boxShadow: 3}}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" color={'textSecondary'}>
                        {comment.user.fullName} (@{comment.user.username})
                    </Typography>
                    <Typography variant="body2" color="info">
                        {comment.likes} likes
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 1, ml: 3 }}>
                    {comment.body}
                </Typography>
                <Box display="flex" justifyContent="flex-end">
                    <Tooltip title="Delete">
                        <IconButton onClick={() => dispatch(deleteComment(comment.id))}>
                            <DeleteIcon color="error" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CommentCard;
