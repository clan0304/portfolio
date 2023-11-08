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
  });
  const isNonMobileScreens = useMediaQuery('(min-width: 800px)');
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  return (
    <Box
      display="flex"
      position="sticky"
      alignItems="center"
      width="100%"
      height="90px"
      backgroundColor="#fff"
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
            Sang mo Chun
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
            <Menu />
          </IconButton>
        )}
        {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position="fixed"
            right="0"
            bottom="0"
            height="100%"
            zIndex="10"
            maxWidth="400px"
            minWidth="200px"
            backgroundColor="white"
          >
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              >
                <Close />
              </IconButton>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="2rem"
            >
              <Typography
                fontSize="15px"
                color="black"
                onClick={() => {
                  navigate('/projects');
                  setIsMobileMenuToggled(!isMobileMenuToggled);
                }}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                Projects
              </Typography>
              <Typography
                fontSize="15px"
                color="black"
                onClick={() => {
                  navigate('/experience');
                  setIsMobileMenuToggled(!isMobileMenuToggled);
                }}
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
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
