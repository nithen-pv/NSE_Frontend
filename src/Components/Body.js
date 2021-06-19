import { useEffect, useState } from "react";
import Axios from "../axios";

function Body() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    async function fetchData() {
      const req = await Axios.get("/companies");
      req.data.data && console.log(req.data.data);
      req.data.data && setData(req.data.data);
    }
    fetchData();
  }, []);

  const handleChange = async(e) => {
    searchItem === '' && setData([]);
    setSearchItem(e.target.value);
    const req = await Axios.post("/companies/cmpname",{"Name":searchItem});
    req.data.data && console.log(req.data.data);
    req.data.data && setData(req.data.data);
  }

const redirectPage = async(cname)=>{
    const req = await Axios.post("/companies/cmpname",{"Name":searchItem});
    req.data.data && console.log(req.data.data);
}
  return (
    <div style={{textAlign:"center", backgroundColor:"white"}}>
      <input
        type="text"
        value={searchItem}
        name="searchInput"
        onChange={handleChange}
      />
      {data === undefined || data.length === 0 ? (
        <p>Loading</p>
      ) : (
        searchItem !== '' &&
        data.map((results) => (
          <p style={{color:"red"}} onClick={redirectPage(results.Name)}>{results.Name}</p>
        ))
      )}
    </div>
  );
}

export default Body;
