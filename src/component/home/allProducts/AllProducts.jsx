import { Link } from "react-router-dom"; // Fixed import
import Product from "../../../assets/images/ProductImage.png";
import Products from "./Products";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function AllProducts() {
  return (
    <>
      <div className="px-10 mb-24 font-gilroy">
        <h1 className="pt-20 pb-10 text-5xl font-semibold text-center">
          In Evidenza
        </h1>
        <div className="grid grid-cols-4 gap-5 pb-16 ">
          <div className="p-2.5 rounded-lg bg-white drop-shadow-md border border-red-600">
            <div className="relative">
              <img src={Product} alt="Product" />
              <span className="absolute px-2.5 py-[1px] text-sm bg-black text-white border top-2 right-2 rounded-xl">
                Regular
              </span>
            </div>
            <div>
              <h2 className="mt-4 mb-2.5 text-xl font-semibold">Zapoj</h2>
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
        </div>
        <Link to="/allProducts">
          <button className="text-center gap-4 mx-auto block bg-[#A81A18] py-4 px-7 rounded-xl text-white">
            <span className="pr-2 uppercase">Vedi tutte</span>
            <span>
              <ArrowForwardIcon />
            </span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default AllProducts;
