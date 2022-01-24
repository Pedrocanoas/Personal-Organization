import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TodayIcon from '@mui/icons-material/Today';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Calendar",
        icon: <TodayIcon />,
        link: "/calendar"
    },
    {
        title: "Columns",
        icon: <DashboardIcon/>,
        link: "/columns"
    },
    {
        title: "Documentation",
        icon: <MenuBookIcon/>,
        link: "/documentation"
    },
    {
        title: "Tasks",
        icon: <FormatListBulletedIcon/>,
        link: "/tasks"
    },
    {
        title: "Minute",
        icon: <AssignmentIcon/>,
        link: "/minute"
    },
]
