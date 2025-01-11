import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom"; // Fixed import

import Products from "../home/allProducts/Products";

function Cart() {
  return (
    <div className="px-10 mb-24 font-gilroy">
      <h1 className="pt-20 pb-10 text-5xl font-semibold text-center">
        And Have You Already Seen These?
      </h1>
      <div className="grid grid-cols-4 gap-5 pb-16 ">
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
  );
}

export default Cart;
