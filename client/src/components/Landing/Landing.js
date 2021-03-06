import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import logo1 from "./assets/icon1people.png";
import logo2 from "./assets/icon2texteditor.png";
import logo3 from "./assets/icon4edit2.png";
import logo from "./assets/CoEditAsset1.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        CollabEdit
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 43,
  },
  heroContent: {
    backgroundColor: "theme.palette.background.paper",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.shadows[2],
    "&:hover": {
      transiton: "3s ease-out",
      width: theme.spacing(35),
      height: theme.spacing(55),
      boxShadow: theme.shadows[7],
    },
  },
  cardMedia: {
    paddingTop: "56.25%",
    width: "50%",
    margin: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "theme.palette.background.paper",
    padding: theme.spacing(6),
  },
}));

const logos = [logo1, logo2, logo3];
const cards = [1, 2, 3];
const desc = [
  "Interactive and multi-language supported code editor which allows multiple developers to code at once and debug each other's code",
  "Real-time collaborative text editor which allows multiple people of the same party to edit, create and manipulate documents on the cloud",
  "Documents on the cloud can be accessed by the collaborators from any part of the world",
];
const head = ["Collaborate", "Code", "Cloud"];
function Landing() {
  const classes = useStyles();
  const history = useHistory();

  const [inviteCode, setInviteCode] = useState("");
  const [inviteType, setInviteType] = useState("docs");

  const handleInvite = () => {
    history.push(`/${inviteType}/groups/${inviteCode}`);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img
            src={logo}
            style={{ marginRight: "5px" }}
            alt="logo"
            className={classes.logo}
          />
          <Typography variant="h6" color="inherit" noWrap>
            CollabEdit
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              CollabEdit
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              The C³ Web-App
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ color: "white" }}
                    component={Link}
                    to="/login"
                  >
                    Sign in
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/signup"
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </div>
            <form
              className={classes.form}
              style={{ marginLeft: "20%", marginTop: "5%" }}
              noValidate
            >
              <Grid container spacing={2} style={{ marginTop: "7%" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="invitecode"
                    name="inviteCode"
                    variant="outlined"
                    required
                    fullWidth
                    id="inviteCode"
                    label="Invite Code"
                    size="small"
                    autoFocus
                    onChange={(e) => setInviteCode(e.target.value)}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    marginBottom: "-5%",
                  }}
                >
                  <InputLabel
                    style={{ height: "10%", paddingBottom: "9%" }}
                    id="demo-simple-select-label"
                  >
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inviteType}
                    style={{ height: "10%", paddingBottom: "5%" }}
                    onChange={(e) => setInviteType(e.target.value)}
                  >
                    <MenuItem value={"docs"}>Docs</MenuItem>
                    <MenuItem value={"code"}>Code</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    style={{
                      width: "40%",
                      height: "100%",
                      marginLeft: "55%",
                    }}
                    onClick={() => handleInvite()}
                  >
                    Go!
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, i) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={logos[i]} />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      {head[i]}
                    </Typography>
                    <Typography align="center">{desc[i]}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default Landing;
