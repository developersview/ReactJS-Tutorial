import {
  Typography, AppBar, Button, Card,
  CardActions, CardContent, CardMedia,
  CssBaseline, Grid, Toolbar, Container
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>

        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h7" align="center" color="textPrimary" paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quae facilis id quasi dicta dolorem saepe necessitatibus, numquam repudiandae illo eveniet beatae molestiae voluptatibus sunt, libero iusto molestias mollitia assumenda.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"> See my Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary"> Secondary Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item>
              <Card>
                <CardMedia image="https://source.unplash.com/random" />
                <CardContent>
                  <Typography variant="h5">Heading</Typography>
                  <Typography variant="h5">This is a media card</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

    </>
  );
}

export default App;
