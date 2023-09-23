import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const NavButton = styled(Button)({
    color: '#21325e',
    '&:hover': { cursor: 'pointer' },
  });

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
        justifyContent="space-around"
        margin="auto"
        columnGap="30px"
        zIndex="2"
        width="80%"
        alignItems="center"
      >
        <NavButton onClick={() => navigate('/')}>Home</NavButton>
        <NavButton onClick={() => navigate('/projects')}>Projects</NavButton>
        <NavButton onClick={() => navigate('/experience')}>
          Experience
        </NavButton>
      </Box>
    </Box>
  );
};

export default Navbar;
