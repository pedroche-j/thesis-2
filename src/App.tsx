import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './App.css';
import { Container, Typography } from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import mockup from './images/mockup.png';

const pages = [''];
const settings = [''];



function App() {



  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return  (
  <>
    <React.Fragment>
      <CssBaseline />

  <div>
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <TrafficIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Source Sans 3',
            fontWeight: 500,
            letterSpacing: '0',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Traffic Simulation System
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {/* <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton> */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <TrafficIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'Source Sans 3',
            fontWeight: 500,
            letterSpacing: '1',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Traffic Simulation System
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
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
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar></div>
<br>
</br>
<br>
</br>
{/* APP BAR ENDS HERE */}

<Container>
  <Box
  >
    <Stack
      direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row' }}
      justifyContent="center"
      spacing={{ xs: 1, sm: 2, md: 1 }}
      alignItems="stretch"
    >
          <Item>
            <Stack
              direction={{ xs: 'column', sm: 'column' }}
              justifyContent="center"
              spacing={{ xs: 1, sm: 2, md: 2 }}
              
            >
              <Button 
              size='large'
              variant="contained" 
              color="primary"
              sx={{
                fontWeight: 'bold',
              }}
              >
                START SIMULATION
              </Button>
              <Button 
              size='large'
              variant="contained" 
              color="secondary"
              sx={{
                fontWeight: 'bold',
              }}
              >
                END SIMULATION
              </Button>    
            </Stack>          
          </Item>

          <Item><img max-width='100%' src={mockup}></img></Item>

{/* THIRD PANEL */}

          <Item>
            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
              padding={2.5}
              paddingLeft={3.5}
            >
              <Box width={{ xs: 'flex', sm: 'flex', md: 300, lg: 300, xl: 300}}>
                <Typography fontWeight={'Medium'} align='center'>
                  Traffic Light Bias
                </Typography>
                <br></br>
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              </Box>

              <Box width={{ xs: 'flex', sm: 'flex', md: 300, lg: 300, xl: 300}} sx={{padding: 0,}} >
                <Typography fontWeight={'Medium'}>
                  Manual Controls 
                </Typography>
                <br></br>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Button variant="contained" startIcon={<DoubleArrowIcon />}>
                    GREEN
                  </Button>
                  <Button color="warning" variant="contained" startIcon={<DoubleArrowIcon />}>
                    YELLOW
                  </Button>
                  <Button color="secondary" variant="contained" startIcon={<DoubleArrowIcon />}>
                    RED
                  </Button>
                </Stack>
              </Box>
              <Box padding={2}>
                <Paper sx={{p:2}} elevation={6}>
                  <Typography variant='h6' align='left' fontWeight={'regular'}>
                      Current Light Color: GREEN
                      <br></br>
                      Next Light Color: YELLOW
                      <br></br>
                      Time Until Color Change: 08s
                  </Typography>
                </Paper>
              </Box>
              <Box padding={2}>
                <Paper sx={{p:2}} elevation={6}>
                  <Typography variant='h6' align='left' fontWeight={'regular'}>
                      Data Logs:
                      <br></br>
                      <br></br>
                      #OF CARS PASSED:
                      <br></br>
                      #OF CARS GENERATED:
                      <br></br>
                      #OF CARS PASSING/s:
                      <br></br>
                  </Typography>
                      <br></br>
                  <Box justifyContent={'left'} alignItems={'left'} display={'flex'}>
                    <Button color='info' variant="outlined" startIcon={<FileDownloadIcon />}>
                      Export Data
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Stack>
          </Item>
{/* THIRD PANEL END           */}
    </Stack>
  </Box>
</Container> 

      </React.Fragment>
    </>

)

}



export default App;
