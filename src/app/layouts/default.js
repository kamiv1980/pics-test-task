import React , {useState}from 'react';
import { Outlet } from 'react-router-dom';
import {Container, AppBar, Toolbar, Typography, Avatar, IconButton, Badge, Box, Tooltip} from "@mui/material";
import { deepPurple } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useSelector} from "react-redux";
import UserForm from "../forms/UserForm";
import {getByProperty} from "../../features/common/commonSlice";

const link = 'https://github.com/kamiv1980/pics-test-task';

export function Layout() {

    const [open, setOpen] = useState(false);
    const username = useSelector((state) => getByProperty(state, 'username'))

    const badge = username ? username[0].toUpperCase():'';

    const openDialog = () => {setOpen(true)}
    const closeDialog = () => setOpen(false)

    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    <DashboardIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Comments
                    </Typography>
                    <Tooltip title={username}>
                        <IconButton onClick={openDialog}>
                            <Badge badgeContent={badge} color="error">
                                <Avatar sx={{ bgcolor: deepPurple[500] }}><PersonIcon /></Avatar>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={link}>
                        <IconButton target="_blank" href={link}>
                            <Avatar sx={{ bgcolor: 'black' }}><GitHubIcon /></Avatar>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Box sx={{ p:2 }}>
                <Container maxWidth={'xl'} >
                    <Outlet />
                </Container>
            </Box>
            {open && <UserForm  handleClose={closeDialog} />}
        </React.Fragment>
    );
}
