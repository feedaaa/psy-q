import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
      <Container sx={{ py: 6 }}>
        {/* Logo and Navigation */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 3,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
                transition: 'opacity 0.2s ease'
              }
            }}
          >
            <Box
              component="img"
              src="/logos/psyg-logo-footer.png"
              alt="Psy-Q Learning Logo"
              sx={{
                height: { xs: 60, sm: 80 },
                width: 'auto',
                display: 'block'
              }}
            />
          </Box>
          
          {/* Navigation Links */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
            <Button component={RouterLink} to="/about" color="inherit" size="small">About Us</Button>
            <Button component={RouterLink} to="/contact" color="inherit" size="small">Contact Us</Button>
            <Button component={RouterLink} to="/services" color="inherit" size="small">Services</Button>
          </Box>
        </Box>
        
        {/* Bottom Section */}
        <Divider sx={{ my: 3 }} />
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © 2024 Psy-Q. All rights reserved.
          </Typography>
          
          {/* Legal Links */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 3 }}>
            <Button href="#privacy" color="inherit" size="small">Privacy Policy</Button>
            <Button href="#terms" color="inherit" size="small">Terms of Use</Button>
            <Button href="#cookies" color="inherit" size="small">Cookie Policy</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
