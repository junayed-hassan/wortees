import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import From from "./From";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Checkout() {
  return (
    <>
      <div className="px-10">
        <h2 className="py-10 text-5xl font-bold text-center">Checkout</h2>
        <div className="grid grid-cols-12 gap-4 pb-16 ">
          <div className="col-span-7">
            <From />
          </div>
          <div className="col-span-5">
            <div className="flex justify-between px-8 py-3 bg-white border border-red-700 rounded-md">
              <p className="font-bold text-red-700">
                <span className="mr-4">
                  <QrCodeScannerIcon />
                </span>
                I Have promo code
              </p>
              <span className="text-red-700">
                <ArrowRightIcon />
              </span>
            </div>
            <div className="p-4 bg-white rounded-md mt-9">
              <h4 className="text-lg font-bold mb-2.5">Cart Totals</h4>
              <ul>
                <li className="flex justify-between mb-2">
                  <p className="flex justify-between text-gray-500">Subtotal</p>
                  <p className="flex justify-between font-bold">240,00 €</p>
                </li>
                <li className="flex justify-between mb-2">
                  <p className="flex justify-between text-gray-500">Shipping</p>
                  <p className="flex justify-between font-bold">0.00 €</p>
                </li>
                <li className="flex justify-between mb-2">
                  <p className="flex justify-between text-gray-500">Tax</p>
                  <p className="flex justify-between font-bold">0.00 €</p>
                </li>
              </ul>
              <hr />
              <div className="flex justify-between mt-3 mb-5">
                <p className="font-bold">Total</p>
                <div className="text-end">
                  <p className="text-xl font-bold text-red-700">240,00 € EUR</p>
                  <p>(including 10,82 € VAT)</p>
                </div>
              </div>
              <hr />
              <p className="pt-5 font-semibold text-center">
                Select Payment Method
              </p>
              <div className="mt-5 text-center ">
                <button className="px-5 mr-5 bg-black text-white py-2.5 border rounded-lg font-semibold">
                  Credit/ Debit Card
                </button>
                <button className="px-5 py-2.5 border rounded-lg font-semibold">
                  Paypal
                </button>
              </div>

              <div className="max-w-md p-6 mx-auto mt-5">
                <form className="space-y-6">
                  {/* Full Name */}
                  <TextField
                    label="Full Name"
                    fullWidth
                    variant="outlined"
                    defaultValue="Cameron Williamson"
                  />

                  {/* Card Number */}
                  <TextField
                    label="Number"
                    fullWidth
                    variant="outlined"
                    defaultValue="3748 3738 1920 9000"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end">
                            <PhotoCameraIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Expiry Date and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <TextField
                      label="Expired"
                      fullWidth
                      variant="outlined"
                      defaultValue="10 / 2024"
                    />
                    <TextField
                      label="CVV"
                      fullWidth
                      variant="outlined"
                      defaultValue="999"
                    />
                  </div>
                </form>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": { color: pink[600] },
                    }}
                  />
                  <p className="whitespace-nowrap">
                    I have read and agree to the website{" "}
                    <span className="text-red-600">terms and conditions *</span>{" "}
                  </p>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": { color: pink[600] },
                    }}
                  />
                  <p>
                    Subscribe to the newsletter to receive exclusive updates and
                    promotions!
                  </p>
                </div>
              </div>
              <Link to="/confirmOrder">
                <button className="text-center w-full mt-5 shadow-xl gap-4 mx-auto block bg-[#A81A18] py-2.5 px-5 rounded-xl text-white">
                  <span className="mr-3 uppercase">Place order</span>
                  <span>
                    <ArrowForwardIcon />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
