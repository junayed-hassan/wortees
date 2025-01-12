import Vector from "../../assets/images/Vector.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockResetIcon from "@mui/icons-material/LockReset";
import ConOrd from "../../assets/images/ConOrd.png";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Card, Typography, Button } from "@mui/material";
import Rectangle from "../../assets/images/Rectangle29.png";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ConfirmOrder() {
  return (
    <>
      <div className="px-10 pt-12 pb-8 bg-red-100">
        <div className="flex justify-between pb-10 ">
          <img className="w-32" src={Vector} alt="Vector" />
          <p>
            About Us{" "}
            <span className="mb-3">
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>
        <div className="bg-white rounded-xl pb-7">
          <p className="pt-6">
            <img src={ConOrd} className="mx-auto logo" alt="" />{" "}
          </p>
          <h2 className="pb-4 text-5xl font-semibold text-center">
            Hi John,Your order has <br /> been successfully received!
          </h2>
          <p className="text-xl text-center">We are processing your order.</p>
          <p className="pt-10 text-2xl font-semibold text-center">
            The world <span className="italic">of technology</span>{" "}
          </p>
          <div className="flex justify-center mt-6 text-center gap-x-3">
            <div className="">
              <Checkbox
                {...label}
                defaultChecked
                sx={{ color: pink[800], "&.Mui-checked": { color: pink[600] } }}
              />
              <p className="text-gray-400">STEP 1</p>
              <p className="text-xl font-semibold">Shipped</p>
              <button className="px-3 pb-1 mt-3 font-semibold text-red-800 bg-red-100 rounded-lg">
                Completed
              </button>
            </div>
            <div className="bg-red-700 mt-3.5 w-[126px] rounded-full h-1"></div>
            <div className="">
              <Checkbox
                {...label}
                defaultChecked
                sx={{ color: pink[800], "&.Mui-checked": { color: pink[600] } }}
              />
              <p className="text-gray-400">STEP 2</p>
              <p className="text-xl font-semibold">Shipped</p>
              <button className="px-3 pb-1 mt-3 font-semibold text-red-800 bg-red-100 rounded-lg">
                Completed
              </button>
            </div>
            <div className="bg-red-700 mt-3.5 w-[126px] rounded-full h-1"></div>
            <div className="">
              <span className="bg-[#F9F2DF] rounded-full px-2.5 pb-3 pt-2">
                <LockResetIcon />
              </span>
              <p className="pt-4 text-gray-400">STEP 3</p>
              <p className="text-xl font-semibold">Delivered By</p>
              <button className="px-3 pb-1 mt-3 font-semibold bg-[#F9F2DF] rounded-lg">
                In Progress
              </button>
            </div>
          </div>

          <div className="min-h-screen px-4 py-10 bg-gray-100">
            
            <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
              
              {/* Order Items */}
              <div className="p-6">
                {["Sample Product 1", "Sample Product 2"].map(
                  (product, index) => (
                    <div
                      key={index}
                      className="flex items-start py-4 border-b border-gray-300 last:border-b-0"
                    >
                      <img
                        src={Rectangle} // Replace with actual image URL
                        alt={product}
                        className="object-cover w-20 h-20 mr-4 rounded"
                      />
                      <div className="flex-1">
                        <Typography variant="h6" className="text-gray-800">
                          {product}
                        </Typography>
                        <Typography className="mt-1 text-gray-600">
                          Lorem ipsum dolor sit amet consectetur. Turpis in
                          vivamus nisl.
                        </Typography>
                        <div className="flex items-center justify-between mt-2">
                          <Typography className="text-gray-600">
                            Price: €225.00
                          </Typography>
                          <Typography className="text-gray-600">
                            Qty: 2
                          </Typography>
                          <Typography className="font-semibold">
                            €450.00
                          </Typography>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Order Summary */}
              <div className="p-6 bg-gray-100">
                <Typography
                  variant="h6"
                  className="pb-2 text-gray-800 border-b border-gray-300"
                >
                  Order Summary
                </Typography>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <Typography>Subtotal</Typography>
                    <Typography>$1,300.00</Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography>Shipping & Handling</Typography>
                    <Typography>$5.95</Typography>
                  </div>
                  <div className="flex justify-between">
                    <Typography>Est Sales Tax</Typography>
                    <Typography>$0.69</Typography>
                  </div>
                  <div className="flex justify-between pt-2 font-semibold border-t border-gray-300">
                    <Typography>Total (3 items):</Typography>
                    <Typography>$1,306.64 USD</Typography>
                  </div>
                </div>
              </div>

              {/* Addresses and Shipping */}
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "Shipping Address",
                      details:
                        "Brian John\n600 Montgomery St\nSan Francisco, CA 90212\nUnited States",
                    },
                    {
                      title: "Billing Details",
                      details:
                        "Brian John\n542 N Virginia Ave\nSan Francisco, CA 90212\nUnited States",
                    },
                    {
                      title: "Shipping Method",
                      details:
                        "Preferred Method:\nUS Standard (4-5 business days, unless otherwise noted)",
                    },
                  ].map((section, index) => (
                    <Card key={index} variant="outlined" className="p-4">
                      <Typography variant="subtitle1" className="font-semibold">
                        {section.title}
                      </Typography>
                      <Typography className="mt-2 text-gray-600 whitespace-pre-line">
                        {section.details}
                      </Typography>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="py-4 text-white bg-gray-800">
                <div className="flex flex-wrap items-center justify-between max-w-4xl px-6 mx-auto">
                  <Typography>
                    &copy; 2025 Wortees. All rights reserved.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="mt-2 md:mt-0"
                    href="tel:1-800-748-94200"
                  >
                    Call us at 1-800-748-94200
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmOrder;
