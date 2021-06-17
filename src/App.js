import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import comida1 from './imagens/comida_1.svg'
import comida2 from './imagens/comida_2.svg'
import comida3 from './imagens/comida_3.svg'
import comida4 from './imagens/comida_4.svg'
import bestserv from './imagens/bloco_services.svg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import blog_image_1 from './imagens/blog_image_1.svg'
import bloco_image_2 from './imagens/bloco_image_2.svg'
import bloco_image_3 from './imagens/bloco_image_3.svg'
import bloco_image_4 from './imagens/bloco_image_4.svg'
import bloco_final_image from './imagens/bloco_final_image.svg'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';





let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
  {
    img: blog_image_1,
    title: 'blog_image_1',
  },
  {
    img: bloco_image_2,
    title: 'bloco_image_2',
  },
  {
    img: bloco_image_3,
    title: 'bloco_image_3',
  },
  {
    img: bloco_image_4,
    title: 'bloco_image_4',
  }
]



export default function App() {
  return (
    <Box className="App">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box>
            <ThemeProvider theme={theme}>
              <Typography className="titlename" variant="h1">Healthy Food</Typography>
            </ThemeProvider>

            <h1>
              Ready for<br />
              Trying a new<br />
              recipe?
            </h1>
            <TextField id="outlined-basic1" label="Search healthy recipes" variant="outlined" />


          </Box>
        </Grid>
        <Grid item xs={6} >
          {/* <Box display="flex" style={{
            backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', width: '100%', height: '800px'
          }}
          > */}
          <Box display="flex" className="container-fluid homepage-bgimage">
            <ThemeProvider theme={theme}>
              <Typography className="menupart1" variant="body1">HEALTHY RECIPES</Typography>
              <Typography className="menupart1" variant="body1">BLOG</Typography>
              <Typography className="menupart1" variant="body1">JOIN</Typography>
            </ThemeProvider>
            <Button variant="contained" color="default" href="/Register" size="small" className="buttonmenu">
              Register
            </Button>



          </Box>

        </Grid>

        <Grid item xs={12} >
          <h1>
            Our Best Recipes
          </h1>
          <h3>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h3>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img src={comida1} alt="comida1" />
            <Box>
              <h2>Broccoli Salad with Bacon</h2>
              <Button variant="contained" color="default" href="#contained-buttons">
                See Recipe
              </Button>
            </Box>
          </Box>

          <Box>
            <img src={comida2} alt="comida1" />
            <Box>
              <h2>Broccoli Salad with Bacon</h2>
              <Button variant="contained" color="default" href="#contained-buttons">
                See Recipe
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img src={comida3} alt="comida1" />
            <Box>
              <h2>Broccoli Salad with Bacon</h2>
              <Button variant="contained" color="default" href="#contained-buttons">
                See Recipe
              </Button>
            </Box>
          </Box>

          <Box>
            <img src={comida4} alt="comida1" />
            <Box>
              <h2>Broccoli Salad with Bacon</h2>
              <Button variant="contained" color="default" href="#contained-buttons">
                See Recipe
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <img src={bestserv} alt="bestserv" />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <h1>
              The best services ready
              To serve you
            </h1>
            <h3>
              Far far away, behind the word mountains, far from
              the countries Vokalia and Consonantia, there live the
              blind texts.
              <br />
              Separated they live in Bookmarksgrove right at the
              coast of the Semantics, a large language ocean.
              <br />
              A small river named Duden flows by their place and
              supplies it with the necessary regelialia.
              <br />
            </h3>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <h1>
            Read Our Blog
          </h1>
          <h3>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h3>
        </Grid>
        <Grid item xs={12}>
          <Box className="cards">
            <GridList cols={2.5}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </Box>
        </Grid>



        <Grid item xs={6}>
          <Box>
            <h1>
              Join our membership to get special offer
            </h1>

            <TextField id="outlined-basic" label="Enter your email address" variant="outlined" />
            <Button variant="contained" color="default" href="#contained-buttons">
              Join
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={bloco_final_image} alt="bloco_final_image" />

        </Grid>


        <Grid item xs={12}>
          © Copyrights 2019 Stack. All Rights Reserved. Privacy Policy Terms and Conditions
        </Grid>
      </Grid>
    </Box>
  );
}
