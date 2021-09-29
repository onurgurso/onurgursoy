import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { birdeyeview, cargo, gursoinc, quire, soupie } from "../img";

const allProjects = [
  {
    title: "CarGo",
    desc: "UX design for a private car sharing app built with Figma. The app is under development, being built with React.js, Firebase.",
    weblink:
      "https://www.figma.com/proto/Dxo5dsipp2ihV3CjlQbjVm/CarGo-Hållbart-Resande-Grupp-5?page-id=0%3A1&node-id=84%3A322&viewport=241%2C48%2C0.31&scaling=scale-down&starting-point-node-id=84%3A322&show-proto-sidebar=1",
    repolink: "https://github.com/OGurso/cargo",
    image: cargo,
  },
  {
    title: "BEV - Bird's Eye View",
    desc: "Currency tracking app build with React and Firebase and has authentication, admin and chat functionalities.",
    weblink: "http://fe20tp2-bev-grupp4.surge.sh/",
    repolink: "https://github.com/FaaDiiL/fe20tp2_bev_4/",
    image: birdeyeview,
  },
  {
    title: "Soupie",
    desc: "UX design for a soup delivery app built with figma.",
    weblink:
      "https://www.figma.com/proto/kR1pWM26PlUs6J7Ucszczf/Online-Soup-Delivery-Soupie?page-id=0%3A1&node-id=6%3A10&viewport=241%2C48%2C0.2&scaling=scale-down&starting-point-node-id=6%3A10&show-proto-sidebar=1",
    image: soupie,
  },
  {
    title: "QUIRE",
    desc: "A Rich text editor build with pure JS and is built as a school project by our group with search and filtering functions.",
    weblink: "https://jon-sundelof.github.io/fe20tp1_Gutenberg/",
    repolink: "https://github.com/OGurso/gursoinc",
    image: quire,
  },
  {
    title: "GURSO INC.",
    desc: "My first try ever at building a website with HTML and CSS and a tiny bit of Javascript.",
    weblink: "https://ogurso.github.io/gursoinc/",
    repolink: "https://github.com/OGurso/gursoinc",
    image: gursoinc,
  },
];

const StyledParent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 240px);
  padding: 50px 50px;

  h1,
  p {
    margin: 1rem 0 3rem 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 960px) {
    position: relative;
    width: 100%;
    padding: 50px 0;

    h1,
    p {
      margin: 1rem 0 3rem 0;
      text-align: center;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      margin: 0,
      "& > .MuiGrid-item": {
        padding: "20px 0",
      },
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 20%",
      margin: 0,
      "& > .MuiGrid-item": {
        maxWidth: "700px",
        padding: "20px 20px",
      },
    },
  },

  media: {
    height: 400,
    [theme.breakpoints.up("lg")]: {
      margin: 0,
    },
  },
}));

const theme = createMuiTheme({
  content: {
    background: "#071c32",
    color: "white",
    minHeight: "150px",
    maxHeight: "400px",
  },
  smallerContent: {
    background: "#071c32",
    color: "white",
  },
  line: {
    width: 20,
    height: 2,
    background: "#071c32",
    color: "white",
  },
  typography: {
    fontFamily: "'Press Start 2P', cursive",
    fontSize: 16,

    button: {
      fontFamily: "'Press Start 2P', cursive",
      fontSize: 12,
      margin: "5px 15px",
      background: "#2efddf",
    },
    text: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: "bold",
      fontSize: 14,
    },
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <StyledParent>
        <h1>Projects</h1>
        <p>Here are some of the projects that I've built. </p>

        <Grid
          container
          className={classes.root}
          direction="row"
          justify="center"
          spacing={4}
          elevation={0}
        >
          {allProjects.map((project, index) => (
            <Grid item key={index} xs={11} sm={10} md={10} lg={6}>
              <Card>
                <CardActionArea disableRipple href={project.weblink}>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title="project-image"
                  />
                </CardActionArea>
                <CardContent style={theme.content}>
                  <Typography
                    gutterBottom
                    style={theme.typography}
                    variant="h6"
                    component="div"
                  >
                    {project.title}
                  </Typography>
                  <div
                    style={{
                      width: "50px",
                      height: "1px",
                      background: "#2efddf",
                      marginBottom: "6px",
                    }}
                  ></div>
                  <Typography component="div" style={theme.typography.text}>
                    {project.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid
                    style={theme.smallerContent}
                    container
                    justify="center"
                    spacing={2}
                  >
                    <Button
                      variant="outlined"
                      style={theme.typography.button}
                      href={project.weblink}
                    >
                      Demo
                    </Button>
                    {project.repolink ? (
                      <Button
                        variant="outlined"
                        className="classes.button"
                        style={theme.typography.button}
                        key={index}
                        href={project.repolink}
                      >
                        GitHub
                      </Button>
                    ) : null}
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledParent>
    </ThemeProvider>
  );
};

export default Projects;
