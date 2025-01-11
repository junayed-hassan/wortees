import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function AllProducts() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const allCollection = [
    "Abligurition (45)",
    "Amore (21)",
    "Ailurophilia (32)",
    "Anaxiphilia (129",
    "Amore (21)",
    "Ailurophilia (32)",
    "Anaxiphilia (129)",
    "Amore (21)",
    "Ailurophilia (32)",
    "Anaxiphilia (129)",
  ];

  return (
    <>
      <div className="px-10">
        <h1>Prodotti</h1>
        <div className="flex">
          <p>Showing 1-12 of 20 results</p>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <h2>All Collection</h2>
            <ul>
              {allCollection.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button>Show all +</button>
            <h2>Categories</h2>
            <hr />
            <ul>
              <li>Disctionary (45)</li>
              <li>Dot (21)</li>
              <li>Double (32)</li>
            </ul>
            <h2>Language</h2>
            <hr />
            <div>
              <button>Italic</button>
              <button>English</button>
            </div>
          </div>
          <div className="col-span-3 bg-red-500"></div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
