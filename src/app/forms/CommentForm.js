import React from "react";
import {Box, Button, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import { getAllProps } from '../../features/common/commonSlice'
import {addComment} from "../../features/comments/commentsSlice";

const errorMessage = 'field is required'

function Form(){
    const commonProps = useSelector(getAllProps)

    const initialValue = {
        body: '',
        likes: 0,
        user: commonProps
    }

    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm({
        defaultValues: initialValue
    });

    const dispatch = useDispatch();



    const onSubmit = async (data) => {
        await dispatch(addComment(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                margin="dense"
                label="Add comment"
                type="text"
                fullWidth
                variant="outlined"
                error={!!errors.body}
                {...{helperText:errors.body?errorMessage:''}}
                {...register('body', { required: true })}
            />
            <Box display="flex" justifyContent="flex-end" sx={{mt: 1, mb: 2}}>
                <Button
                    variant="text"
                    color="primary"
                    type={'reset'}
                    onClick={()=>clearErrors()}
                >
                    Cancel
                </Button>

                <Button
                    type={'submit'}
                    variant="text"
                    color="primary"
                    sx={{ ml: 2 }}
                >
                    Save
                </Button>
            </Box>
        </form>
    )
}

export default Form;
