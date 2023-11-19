import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const NavButton = styled(Button)({
    color: '#21325e',
    '&:hover': { cursor: 'pointer' },
    fontWeight: 'bold',
  });
  const isNonMobileScreens = useMediaQuery('(min-width: 800px)');
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  return (
    <Box
      display="flex"
      position="fixed"
      top="0"
      alignItems="center"
      width="100%"
      height="90px"
      backgroundColor={isMobileMenuToggled ? '#3e497a' : 'white'}
      color="white"
      marginBottom="20px"
      zIndex="1"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        margin="auto"
        columnGap="30px"
        zIndex="2"
        width="80%"
        alignItems="center"
      >
        <Box>
          <NavButton
            sx={{ fontWeight: 'bold', fontSize: '15px' }}
            onClick={() => navigate('/')}
          >
            <Typography
              color={isMobileMenuToggled ? 'white' : '#21325e'}
              fontWeight="bold"
            >
              Sang mo Chun
            </Typography>
          </NavButton>
        </Box>
        {isNonMobileScreens ? (
          <Box display="flex" justifyContent="space-around" gap="20px">
            <NavButton onClick={() => navigate('/projects')}>
              Projects
            </NavButton>
            <NavButton onClick={() => navigate('/experience')}>
              Experience
            </NavButton>
          </Box>
        ) : (
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            {isMobileMenuToggled ? <Close /> : <Menu />}
          </IconButton>
        )}
        {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position="fixed"
            top="90px"
            right="0"
            height="100%"
            zIndex="10"
            maxWidth="400px"
            minWidth="200px"
            backgroundColor="#21325e"
            pt="3rem"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="2rem"
            >
              <Typography
                fontSize="20px"
                fontWeight="bold"
                color="white"
                onClick={() => {
                  navigate('/projects');
                  setIsMobileMenuToggled(!isMobileMenuToggled);
                }}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    opacity: 0.3,
                  },
                }}
              >
                Projects
              </Typography>
              <Typography
                fontSize="20px"
                fontWeight="bold"
                color="white"
                onClick={() => {
                  navigate('/experience');
                  setIsMobileMenuToggled(!isMobileMenuToggled);
                }}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                    opacity: 0.3,
                  },
                }}
              >
                Experience
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
