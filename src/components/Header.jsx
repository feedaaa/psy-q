import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerBgColor, setHeaderBgColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, main, [component="section"]');
      const header = document.querySelector('header');
      
      if (!header) return;
      
      const headerBottom = header.getBoundingClientRect().bottom;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        
        // Check if section is overlapping with header
        if (rect.top <= headerBottom && rect.bottom >= 0) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
            setHeaderBgColor(bgColor);
            return;
          }
        }
      }
      
      setHeaderBgColor('white');
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Determine if text should be light based on background
  const isLightText = headerBgColor.includes('#E91E63') || headerBgColor.includes('rgb(233, 30, 99)');

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: headerBgColor,
        transition: 'background-color 0.3s ease',
        borderBottom: '1px solid rgba(0,0,0,0.08)'
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'block',
              mr: 2,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
                transition: 'opacity 0.2s ease'
              }
            }}
          >
            <Box
              component="img"
              src="/logos/psyq-logo-header.png"
              alt="Psy-Q Logo"
              sx={{
                height: { xs: 128, sm: 128 },
                width: 'auto',
                display: 'block'
              }}
            />
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, ml: 'auto', mr: 2 }}>
            <Button component={RouterLink} to="/about" sx={{ color: isLightText ? 'white' : 'inherit' }}>About Us</Button>
            <Button component={RouterLink} to="/services" sx={{ color: isLightText ? 'white' : 'inherit' }}>Services</Button>
            <Button component={RouterLink} to="/contact" sx={{ color: isLightText ? 'white' : 'inherit' }}>Contact Us</Button>
          </Box>

          {/* Desktop CTAs */}
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button 
              component={RouterLink} 
              to="/signin" 
              variant="outlined"
              sx={isLightText ? { borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255, 255, 255, 0.1)' } } : {}}
            >
              Sign In
            </Button>
            <Button 
              component={RouterLink} 
              to="/signup" 
              variant="contained"
              sx={isLightText ? { bgcolor: 'white', color: '#E91E63', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' } } : {}}
            >
              Sign Up
            </Button>
          </Box> */}

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton onClick={handleOpenMenu} sx={{ color: isLightText ? 'white' : 'inherit' }}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu */}
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} keepMounted>
            <MenuItem component={RouterLink} to="/about" onClick={handleCloseMenu}>About Us</MenuItem>
            <MenuItem component={RouterLink} to="/services" onClick={handleCloseMenu}>Services</MenuItem>
            <MenuItem component={RouterLink} to="/contact" onClick={handleCloseMenu}>Contact Us</MenuItem>
            {/* <MenuItem component={RouterLink} to="/signin" onClick={handleCloseMenu}>Sign In</MenuItem>
            <MenuItem component={RouterLink} to="/signup" onClick={handleCloseMenu}>Sign Up</MenuItem> */}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
