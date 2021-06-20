import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Container, CircularProgress } from "@material-ui/core/";

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

function Company({data,cmpinfo}) {
  const classes = useStyles();
  return (
    <div>
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
            <div className={classes.root} key={results.Name}>
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
                    Market Cap:{" "}
                    <span style={{ color: "red" }}> {results.MarketCap} </span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Divident Yeild: <span style={{ color: "red" }}> {results.DividendYield}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Debt Equality: <span style={{ color: "red" }}> {results.DebtEquity}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Current price: <span style={{ color: "red" }}> {results.CurrentPrice}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    ROCE:
                    <span style={{ color: "red" }}> {results.ROCE}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Eps: <span style={{ color: "red" }}> {results.EPS}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Stock P/E: <span style={{ color: "red" }}> {results.StockPE}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    ROE: <span style={{ color: "red" }}> {results.ROE}</span>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    Reserves: <span style={{ color: "red" }}> {results.Reserves}</span>
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

export default Company;
