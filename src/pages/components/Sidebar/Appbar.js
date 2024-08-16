// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { useAuthContext } from '../../../context/AuthContext'; 
// export default function Nav() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const { user, Logout } = useAuthContext();

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {/* <FormGroup>
//         <FormControlLabel
//           control={
//             <Switch
//               checked={auth}
//               onChange={handleChange}
//               aria-label="login switch"
//             />
//           }
//           label={auth ? 'Logout' : 'Login'}
//         />
//       </FormGroup> */}
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Stock App
//           </Typography>
//           {auth && (
//             <div>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                 <MenuItem onClick={Logout}>Logout</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation, useNavigate } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import Avatar from '@mui/material/Avatar';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import Box from '@mui/material/Box';
import { useAuthContext } from '../../../context/AuthContext'

const settings = [ 'Account', 'Logout'];
const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background:"#9660A4"
//DEBEE6

    },
    date: {
      flexGrow: 1,
      color:"#fffff",
      fontWeight: "bold",
    },
    toolbar: theme.mixins.toolbar
  }
})

export default function AppBarNav({ children }) {
  const classes = useStyles()
  const location = useLocation()

  const { user, Logout } = useAuthContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleClose = () => {

    Logout();

  };
  const navigate=useNavigate();
  const handleProfile=()=>{
    navigate("/Profile");
  }
  const handleDashboard=()=>{
    navigate("/Dashboard");
  }
  const handleAccount=()=>{
    navigate("/ChangePassword");
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={0}
        // color="success"
        
      >
        <Toolbar>
          <Typography className={classes.date}>
            ADMIN
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="avatar1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={setting == 'Logout' ? handleClose : setting =="Dashboard" ? handleDashboard : setting =="Profile" ? handleProfile : setting =="Account" ? handleAccount : " " }>{setting}</Typography>
                  {/* <Typography textAlign="center" onClick={setting == 'Dashboard' ? handleProfile : ""}>{setting}</Typography>
                  <Typography textAlign="center" onClick={setting == 'Account' ? handleClose : ""}>{setting}</Typography>
                  <Typography textAlign="center" onClick={setting == 'Profile' ? handleClose : ""}>{setting}</Typography> */}

                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}