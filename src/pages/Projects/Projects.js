import { Box, Button, useMediaQuery } from '@mui/material';

import Url from '../../components/url';

const Projects = () => {
  const urlArray = Url();
  const isNonMobileScreen = useMediaQuery('(min-width:1000px)');
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      padding="20px 0"
      backgroundColor="#f0f0f0"
      sx={{
        paddingTop: '100px',
      }}
    >
      <Box
        width="90%"
        display="flex"
        flexDirection={isNonMobileScreen ? 'row' : 'column'}
        justifyContent="space-around"
        alignItems="center"
        columnGap="5%"
        rowGap="50px"
      >
        {urlArray.map((url) => (
          <Box
            minHeight="550px"
            backgroundColor="white"
            borderRadius="10px"
            textAlign="center"
            width="300px"
          >
            <img
              src={url.image}
              alt="Cake shop"
              width="300px"
              height="300px"
              borderRadius="10px"
            />
            <Box
              height="200px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box
                height="100px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <h2>{url.name}</h2>
              </Box>
              <Box height="100px" padding="0 3px">
                <p>{url.description}</p>
              </Box>
            </Box>

            <Box width="100%" display="flex" justifyContent="space-around">
              <a href={url.github}>
                <Button
                  sx={{
                    color: '#21325e',
                    backgroundColor: 'white',
                  }}
                  variant="contained"
                >
                  GitHub
                </Button>
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
