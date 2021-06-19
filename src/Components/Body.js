import { useEffect, useState } from "react";
import Axios from "../axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Container} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    setSearchItem(e.target.value);
    const req = await Axios.post("/companies/cmpname", { Name: searchItem });
    req.data.data && console.log(req.data.data);
    req.data.data && setData(req.data.data);
  };

  const redirectPage = async (cname) => {
    const req = await Axios.post("/companies/cmpname", { Name: searchItem });
    req.data.data && console.log(req.data.data);
    req.data.data && setcmpInfo(req.data.data);
  };

  const classes = useStyles();
  return (
    <div style={{ textAlign: "center", backgroundColor: "white" }}>
      <input
        type="text"
        value={searchItem}
        name="searchInput"
        onChange={handleChange}
      />
      {data === undefined || data.length === 0 ? (
        <p>Loading</p>
      ) : (
        searchItem !== "" &&
        data.map((results) => (
          <p style={{ color: "black" }} onClick={()=>{redirectPage(results.Name)}}>
            {results.Name}
          </p>
        ))
      )}

      {cmpinfo === undefined || data.length === 0 ? (
        <p>Loading</p>
      ) : (
        cmpinfo.map((results) => (
            <Container maxWidth="sm">
            
         
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Name: {results.Name}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Debt: {results.Debt}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>EPS: {results.EPS}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>ROCE: {results.ROCE}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Reserves: {results.Reserves}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Debt: {results.Debt}</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Debt: {results.Debt}</Paper>
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
