import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Product from "../../assets/images/ProductImage.png";
import Products from "../home/allProducts/Products";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useState } from "react";

function AllProducts() {
  const [sorting, setSorting] = useState("");

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  const allCollection = [
    "Abligurition",
    "Amore",
    "Ailurophilia",
    "Anaxiphilia",
    "Amore",
    "Ailurophilia",
    "Anaxiphilia",
    "Amore",
    "Ailurophilia",
    "Anaxiphilia",
  ];
  const allCollectionSigh = [45, 21, 32, 129];

  return (
    <div className="px-10">
      <h1 className="py-5 text-5xl font-bold text-center">Prodotti</h1>

      {/* Sorting and Results Info */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">Showing 1-12 of 20 results</p>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="sorting-select-label">Sorting</InputLabel>
          <Select
            labelId="sorting-select-label"
            id="sorting-select"
            value={sorting}
            label="Sorting"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="price-low-high">Price: Low to High</MenuItem>
            <MenuItem value="price-high-low">Price: High to Low</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-10 mb-14">
        {/* Sidebar */}
        <div className="col-span-1 p-5 border rounded-md h-[34%] shadow-md mb-7">
          <h2 className="text-xl pb-2.5 font-bold">All Collection</h2>
          <hr />
          <ul>
            {allCollection.map((item, index) => (
              <li className="text-base py-2.5" key={`collection-${index}`}>
                {item}
                <span className="ml-2 text-gray-400">
                  ({allCollectionSigh[index % allCollectionSigh.length]})
                </span>
              </li>
            ))}
          </ul>
          <button className="flex items-center bg-red-50 px-3.5 py-1 mt-2 text-sm font-bold text-red-500 uppercase border border-red-500 rounded-2xl">
            <span className="block">Show all</span>
            <AddIcon className="text-[3px]" />
          </button>

          {/* Categories Section */}
          <h2 className="mt-6 mb-2.5 text-xl font-bold">Categories</h2>
          <hr />
          <ul>
            <li className="py-2.5 font-semibold text-red-500">
              Dictionary (45)
            </li>
            <li className="py-2.5">
              Dot <span className="text-gray-400">(21)</span>
            </li>
            <li className="py-2.5">
              Double <span className="text-gray-400">(32)</span>
            </li>
          </ul>

          {/* Language Section */}
          <h2 className="mt-6 mb-2.5 text-xl font-bold">Language</h2>
          <hr />
          <div className="flex items-center gap-2 mt-4">
            <button className="px-7 bg-[#FEFDFA] pb-2 pt-1.5 font-semibold border rounded-xl">
              Italic
            </button>
            <button className="px-7 bg-[#FEFDFA] pb-2 pt-1.5 font-semibold border rounded-xl">
              English
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-5 pb-8">
            <div className="p-2.5 rounded-lg bg-white drop-shadow-md border border-red-600">
              <div className="relative">
                <img src={Product} alt="Product" />
                <span className="absolute px-2.5 pb-[2px] text-sm bg-black text-white border top-2 right-2 rounded-xl">
                  Regular
                </span>
              </div>
              <div>
                <h2 className="mt-4 mb-2.5 text-xl font-bold">Zapoj</h2>
                <p className="text-base font-medium">
                  Binge drinking; two or more days of continuous drunkenness.
                </p>
                <button className="drop-shadow-xl  flex justify-between mt-5 bg-red-700 text-white mb-4 py-2.5 px-4  border-black w-full rounded-xl">
                  <p className="text-base">ADD TO CART</p>
                  <span className="text-lg font-semibold">60,00 €</span>
                </button>
              </div>
            </div>
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
          <Link to="">
            <button className="text-center gap-4 mx-auto block bg-[#A81A18] py-4 px-7 rounded-xl text-white">
              <span className="pr-2 uppercase">Vedi tutte</span>
              <span>
                <ArrowForwardIcon />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
