import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomizeIcon';
import { Link, Outlet, NavLink } from "react-router-dom";
import { useAuthContext } from '../../../context/AuthContext';
import ApplicationStore from "../../../utils/localStorageUtil";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  zindex: 1
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', // Adjust as needed
  padding: theme.spacing(0, 1),
  height: "100px",
  width: "auto",
  background:'#C4E0AE',
  // Set the height
  // height: '100px', // You can adjust the value as needed

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// ... (previous code) ...

export default function SideBarDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openSubList, setOpenSubList] = React.useState(false);
  const { user, Logout, trackgeneration } = useAuthContext();
  const [sidebarIndex, setSidebarIndex] = React.useState(0);
  const user_type = ApplicationStore().getStorage('user_type');

  const handleSideBar = () => {
    setOpen(!open);
  };

  const [active, setActive] = React.useState(false);
  const menuItemsAdmin = [
    {
        path: "/AddCategory",
        name: "Add Category",
        icon: <InboxIcon />,
        // openState: false,
        // icon:<ReportIcon />
        // childrens: [
        //     {
        //         path: "/AddCategory",
        //         name: "Add Category",
        //         icon: <InboxIcon />
        //     },
        //     {
        //         path: "/ViewCategory",
        //         name: "View Category",
        //         icon: <InboxIcon />
        //     },
        // ],
    },
    {
      path: "/ViewCategory",
      name: "View Category",
      icon: <MenuIcon/>
    },
    {
      path: "/AddItem",
      name: "Add Item",
      icon: <InboxIcon />,
      // icon:<DashboardCustomizeIcon />
      // openState: false,
      // icon:<ReportIcon />
      // childrens: [
      //     {
      //         path: "/AddItem",
      //         name: "Add Item",
      //         // icon: <AddIcon />
      //     },
      //     {
      //         path: "/ViewItem",
      //         name: "View Item",
      //         // icon: <ViewIcon />
      //     },
      // ],
  },
  {
    path: "/ViewItem",
    name: "View Item",
    icon: <MailIcon/>
  },
  {
    path: "/AddStudent",
    name: "Add Student",
    icon: <MenuIcon/>
    // icon:<DashboardCustomizeIcon />
    // openState: false,
    // icon:<ReportIcon />
    // childrens: [
    //     {
    //         path: "/AddStudent",
    //         name: "Add Student",
    //         // icon: <AddIcon />
    //     },
    //     {
    //         path: "/ViewStudent",
    //         name: "View Student",
    //         // icon: <ViewIcon />
    //     },
    // ],
},
{
  path: "/ViewStudent",
  name: "View Student",
  icon: <MailIcon/>
},

    {
        path: "/ViewRecharge",
        name: "Recharge",
        icon: <MenuIcon/>
        // icon:<PersonOutlineIcon />
    },
    {
        path: "/ViewOrders",
        name: "View Orders",
        icon: <MailIcon/>
        // openState: false,
        // icon:<DomainIcon />
        // childrens: [
        //     {
        //         path: "/ViewOrders",
        //         name: "View Orders",
        //         // icon: <AddIcon />
        //     },
        //     {
        //         path: "/ViewDetailOrder",
        //         name: "Detail Order",
        //         // icon: <ViewIcon />
        //     },
        // ],
    },
  //   {
  //     path: "/ViewDetailOrder",
  //     name: "Detail Order",
  //     icon: <InboxIcon />,
  //     // icon:<PersonOutlineIcon />
  // },
    {
        path: "/ViewPayment",
        name: "Payment",
        icon: <MenuIcon/>
        // icon:<ChecklistRtlIcon />
    },
    
    {
        path: "/ChangePassword",
        name: "Setting",
        icon: <MailIcon/>
        // icon:<LockResetSharpIcon />
    },
    // {
    //     path: "/Logout",
    //     name: "Logout",
    //     // icon:<AddAlertIcon />
    // },
];

   
const handleSubList = () => {
  setOpenSubList(!openSubList); 

 
  
     
}


return (
  <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "white" }}>
          <img
            src="images/logo.jpg" // Replace with the actual path to your logo
            alt="Website Logo"
            style={{ height: '70px', width: 'auto', }}
          />
        </DrawerHeader>
        <Divider style={{ backgroundColor: "purple" }} />
        <List style={{ padding: '10px' }} >
      {user_type === "admin"
        ? menuItemsAdmin.map((text, index) => (
          text.childrens ? (
            <div key={text.name}>
              <Link to={text.path} style={{ textDecoration: 'none' }} onClick={() => setSidebarIndex(index)}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 10,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      bgcolor: index === sidebarIndex ? "purple" : "",
                      borderRadius: open ? '10px' : '',
                      "&:hover": {
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: index === sidebarIndex ? 'purple' : ''
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText primary={text.name} sx={{ opacity: open ? 10 : 0, color: "grey" }} />
                    {text.childrens ? (
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                          color: index === sidebarIndex ? 'purple' : 'grey'
                        }}
                      >
                        <IconButton onClick={() => handleSubList(index)} style={{ color: "white" }}>
                        {text.icon}
                        </IconButton>
                      </ListItemIcon>
                    ) : ""}
                  </ListItemButton>
                </ListItem>
              </Link>
              {text.childrens && openSubList && sidebarIndex === index ? (
                text.childrens.map((childText, childIndex) => (
                  <Link to={childText.path} style={{ textDecoration: 'none'}} onClick={() => setSidebarIndex(childIndex)}>
                    <ListItem key={childText} disablePadding sx={{ display: 'block', height: 50 }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          bgcolor: childIndex === sidebarIndex ? "rgba(255, 255, 255, 255)" : "",
                          borderRadius: open ? '10px' : '',
                          "&:hover": {
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          }
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: childIndex === sidebarIndex ? '' : '#0745bbf0'
                          }}
                        >
                          {text.icon}
                        </ListItemIcon>
                        <ListItemText primary={childText.name} sx={{ opacity: open ? 10 : 0, color: "grey" }} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))
              ) : null}
            </div>
          ) : (
            <Link to={text.path} style={{ textDecoration: 'none' }} onClick={(e) => { setSidebarIndex(index) }} >
              <ListItem key={text} disablePadding sx={{ display: 'block', height: 50 }}  >
                <ListItemButton
                  sx={{
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    backgroundColor: index === sidebarIndex ? "#D6ABE1" : "",  
                    borderRadius: open ? '10px' : '',
                    "&: hover": {
                      backgroundColor: 'purple'
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: index === sidebarIndex ? 'white' : 'grey',
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.name} sx={{ opacity: open ? 10 : 0, color: index === sidebarIndex ? 'white' : 'grey' }} />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        ))
        : user_type === ""
      }
   </List>
        <Divider />
      </Drawer>
);
}
