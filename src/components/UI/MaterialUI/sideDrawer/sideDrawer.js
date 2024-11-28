import React from 'react';
import clsx from 'clsx';
// import { makeStyles, useTheme } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';


import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/nba_logo.png';

const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex'
//   },
//   appBar: {
//     backgroundColor: '#0b2255',
//     zIndex: 1301,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     width: '100%',
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     backgroundColor: '#0b2255',
//     color: '#fff',
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// }));

export default function PersistentDrawerLeft(...props) {
 const args = props[0].data

  // const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div>
      <AppBar
        position='fixed'
        className='innerContainer'
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
          </Toolbar>
          <div className='logo'>
              <Link to='/'>
                <img src={logo} alt='nba official logo' /> &nbsp; <span className='headTitle'>Wiki</span>
              </Link>
            </div>

        <div className='seachSection'>
          <span>
            <SearchIcon />
            <select onChange={event => args.searchOptionChanged(event)}>
              <option id='1'>Player</option>
              <option id='2'>Team</option>
            </select>

            <input
              type='text'
              placeholder={`${args.category === 'team' ? 'Raptors' : 'Lebron James'}...`}
              onChange={e => args.handleChange(e.target.value)}
              onFocus={e => args.updateResults(e.target.value)}
            />
          </span>
          <div className='searchResults'>
            {args.searchResults && args.searchResults.length > 0 && args.showSearchedItemList()}
          </div>
        </div>  
      </AppBar>
      <Drawer
        variant='persistent'
        anchor='left'
        open={open}
      >
        <div>
          <IconButton className='IconButton' onClick={handleDrawerClose}>
            {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {[['Teams', '/teams'], ['Players', '/'], ['League Leaders', '/leaders']].map((link, i) => (
            <Link to={link[1]} key={i}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText className='links' primary={link[0]} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
