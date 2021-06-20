import { useEffect, useState } from "react";
import Axios from "../axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Container,
  CircularProgress,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#DDDDDD",
  },
}));

function Body() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [cmpinfo, setcmpInfo] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    async function fetchData() {
      const req = await Axios.get("/companies");
      req.data.data && console.log(req.data.data);
      req.data.data && setData(req.data.data);
    }
    fetchData();
  }, []);

  const handleChange = async (e) => {
    searchItem === "" && setData([]);
    searchItem === "" && setcmpInfo([]);
    setSearchItem(e.target.value);
    const req = await Axios.post("/companies/cmpname", { Name: searchItem });
    req.data.data && console.log(req.data.data);
    req.data.data && setData(req.data.data);
  };

  const redirectPage = async (cname) => {
    const req = await Axios.post("/companies/cmpname", { Name: searchItem });
    req.data.data && console.log(req.data.data);
    req.data.data && setcmpInfo(req.data.data);
    setSearchItem("");
  };

  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <Container maxWidth="sm" style={{ marginTop: "3vh" }}>
        <Typography
          variant="h4"
          className={classes.title}
          style={{ padding: "1.5rem", color: "black", fontWeight: "bold" }}
        >
          The easiest way to buy and sell stock
        </Typography>
        <Typography
          variant="h6"
          className={classes.title}
          style={{ color: "black" }}
        >
          Stock analysis and screening tool for <br /> investors in India
        </Typography>
        <input
          type="text"
          value={searchItem}
          name="searchInput"
          onChange={handleChange}
          placeholder=" 🔍 Search a company"
          style={{
            width: "100%",
            height: "6vh",
            fontSize: "1.5rem",
            borderRadius: "10px",
          }}
        />
      </Container>

      {data === undefined || data.length === 0
        ? console.log("Empty")
        : searchItem !== "" &&
          data.map((results) => (
            <p
              style={{ color: "red" }}
              onClick={() => {
                redirectPage(results.Name);
              }}
            >
              {results.Name}
            </p>
          ))}

      {cmpinfo === undefined || data.length === 0 ? (
        <CircularProgress color="secondary" style={{ marginTop: "30vh" }} />
      ) : (
        cmpinfo.map((results) => (
          <Container
            maxWidth="sm"
            style={{
              backgroundColor: "white",
              marginTop: "5vh",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "1px 4px 6px grey",
            }}
          >
            <div className={classes.root}>
              <p style={{ textAlign: "left", fontWeight: "bold" }}>
                {results.Name}
              </p>
              <Grid
                container
                spacing={1}
                style={{
                  backgroundColor: "#DDDDDD",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Market Price:{" "}
                    <span style={{ color: "red" }}> {results.EPS} </span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt: <span style={{ color: "red" }}> {results.Debt}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    EPS: <span style={{ color: "red" }}> {results.EPS}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    ROCE: <span style={{ color: "red" }}> {results.ROCE}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Reserves:{" "}
                    <span style={{ color: "red" }}> {results.Reserves}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt: <span style={{ color: "red" }}> {results.Debt}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt: <span style={{ color: "red" }}> {results.Debt}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt: <span style={{ color: "red" }}> {results.Debt}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt: <span style={{ color: "red" }}> {results.Debt}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt: <span style={{ color: "red" }}> {results.Debt}</span>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Container>
        ))
      )}
    </div>
  );
}

export default Body;
