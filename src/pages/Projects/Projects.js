import { IconButton, Box, Button, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Url from '../../components/url';

const Projects = () => {
  const urlArray = Url();
  const isNonMobileScreen = useMediaQuery('(min-width:900px)');
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      padding="20px 0"
      backgroundColor="#f0f0f0"
    >
      <Box
        width="80%"
        display="flex"
        flexDirection={isNonMobileScreen ? 'row' : 'column'}
        justifyContent="space-around"
        alignItems="center"
        columnGap="5%"
        rowGap="50px"
      >
        {urlArray.map((url) => (
          <Box width="100%" textAlign="center" maxWidth="350px">
            <img src={url.image} alt="Cake shop" width="350px" height="350px" />
            <h1>{url.name}</h1>
            <p>{url.description}</p>

            <Box width="100%" display="flex" justifyContent="space-around">
              <a href={url.github}>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href={url.website}>
                <Button
                  sx={{
                    backgroundColor: '#21325e',
                  }}
                  variant="contained"
                >
                  View Website
                </Button>
              </a>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
