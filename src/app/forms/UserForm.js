import React from "react";
import {TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import CommonDialog from "../components/Dialog";
import { updateUser, getAllProps } from '../../features/common/commonSlice'

const errorMessage = 'letters and numbers only.'

function Form({handleClose}){
    const commonProps = useSelector(getAllProps)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: commonProps
    });

    const dispatch = useDispatch();

    const dialogTitle = 'User Settings'

    const onSave = async ({fullName, username}) => {
        const item = {
            fullName,
            username
        };

        await dispatch(updateUser(item))
        handleClose()
    }

    return (
        <CommonDialog
            open={true}
            handleClose={handleClose}
            handleSave={handleSubmit(onSave)}
            title={dialogTitle}
            content={
                <>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Full name"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={!!errors.fullName}
                        {...{helperText:errors.fullName?errorMessage:''}}

                        {...register('fullName', { pattern: /^[A-Za-z\s]+$/i})}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        error={!!errors.username}
                        {...{helperText:errors.username?errorMessage:''}}

                        {...register('username', { pattern: /^[A-Za-z0-9]+$/i })}
                    />
                </>
            }
        />


    )
}

export default Form;
