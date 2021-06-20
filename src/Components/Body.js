import { useEffect, useState } from "react";
import Axios from "../axios";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Divider } from "@material-ui/core/";
import CompanyInfo from "./Company";

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
    const req = await Axios.post("/companies/cmpname", {
      Name: e.target.value,
    });
    req.data.data && setData(req.data.data);
  };

  const redirectPage = async (cname) => {
    const req = await Axios.post("/companies/cmpname", { Name: cname });
    req.data.data && setcmpInfo(req.data.data);
    setSearchItem("");
  };
  console.log("SEARCH item: ", searchItem);
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
            marginTop: "3vh",
            border: "0",
          }}
        />
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "white",
            margin: "0",
            width: "25%",
            marginTop: "5px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          {data === undefined || data.length === 0
            ? console.log("Empty")
            : searchItem !== "" &&
              data.map((results) => (
                <p
                  key={results.Name}
                  style={{
                    color: "red",
                    backgroundColor: "white",
                    padding: "10px",
                    margin: "15px 0",
                  }}
                  onClick={() => {
                    redirectPage(results.Name);
                  }}
                >
                  {results.Name}
                  <Divider style={{ marginTop: "20px" }} />
                </p>
              ))}
        </div>
      </div>

      <CompanyInfo data={data} cmpinfo={cmpinfo} />
    </div>
  );
}

export default Body;
