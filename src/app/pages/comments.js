import React, {useEffect} from 'react';
import {Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../features/comments/commentsSlice";
import CommentCard from "../components/CommentCard";
import CommentForm from "../forms/CommentForm";

function Page() {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.comments);
    const status = useSelector(state => state.comments.status);
    const error = useSelector(state => state.comments.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchComments());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <Paper sx={{p:2}} elevation={3}>
            <CommentForm/>
            {comments.map(comment => (
                <CommentCard key={comment.id} comment={comment}/>
            ))}
        </Paper>
    );
}

export default Page;
