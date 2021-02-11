import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import abild from "../img/1.jpg";
import bbild from "../img/2.jpg";
import cbild from "../img/3.jpg";
import dbild from "../img/4.jpg";



const StyledParent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 240px);
  padding: 50px 50px;

  h1, p{
    margin: 1rem 0 3rem 0;
    text-align: center;
  }

  p{
    font-size: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 960px) {
    position:relative;
    width:100%;
    padding: 50px 0;

    h1, p{
    margin: 1rem 0 3rem 0;
    text-align: center;
  }
  }
`;



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    [theme.breakpoints.only('xs')]: {
      margin: 0,
      '& > .MuiGrid-item': {
        padding: "20px 0",
      },
    },
  },

  media: {
    height: 400,
  },
}));

const theme = createMuiTheme({
  typography: {
    button: {
      fontFamily: "'Press Start 2P', cursive",
      fontSize: "14px",
    },

  }
});


const pics = [abild, bbild, cbild, dbild]

const Projects = () => {

  const classes = useStyles();
  const [allRepos, setAllRepos] = useState([]);

  useEffect(
    () => {
      fetch("https://api.github.com/users/OGurso/repos")
        .then((response) => response.json())
        .then((data) => setAllRepos(data))
    }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledParent>
        <h1>Projects</h1>
        <p>Here are some of the projects that I've done. </p>

        <Grid container className={classes.root} direction="row" justify="center" spacing={4} elevation={0}>

          {allRepos.filter((repos) => (
            repos.size > 1000
          )).map(
            (repo, index) => (
              <Grid item key={repo.id} xs={11} sm={8} md={8} lg={5}>
                <Card>

                  <CardActionArea disableRipple>
                    <CardMedia
                      className={classes.media}
                      image={pics[index]}
                      title="repository"
                    />
                  </CardActionArea>

                  <CardActions>
                    <Grid container justify="center" >
                      <Button className="classes.button" href={repo.html_url}>
                        Github
                          </Button>
                      {repo.has_pages ? (
                        <Button
                          className="classes.button"
                          key={repo.id}
                          href={`https:OGurso.github.io/${repo.name}/`}
                        >
                          Live
                        </Button>
                      ) : null}
                    </Grid>
                  </CardActions>

                </Card>
              </Grid>
            )
          )}
        </Grid>

      </StyledParent >
    </ThemeProvider >

  );
}

export default Projects;