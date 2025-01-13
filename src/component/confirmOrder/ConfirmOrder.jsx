import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import refresh from "../../assets/images/footerIcon/refresh.png";
import CallToActionIcon from '@mui/icons-material/CallToAction';
import clock from "../../assets/images/footerIcon/clock.png";
import Rectangle from "../../assets/images/Rectangle29.png";
import card from "../../assets/images/footerIcon/card.png";
import LockResetIcon from "@mui/icons-material/LockReset";
import InstagramIcon from '@mui/icons-material/Instagram';
import car from "../../assets/images/footerIcon/car.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Vector from "../../assets/images/Vector.png";
import ConOrd from "../../assets/images/ConOrd.png";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ConfirmOrder() {
  return (
    <>
      <div className="px-10 pt-12 pb-8">
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

          <button className="block mb-8 mx-auto text-center mt-7 px-5 py-2 bg-[#A81A18] text-white rounded-lg">
            <SendTimeExtensionIcon />
            <span className="uppercase">Track Shipment</span>
          </button>

          <div className="min-h-screen px-32 py-5 border-t-2 border-dashed">
            <div className="max-w-4xl mx-auto overflow-hidden ">
              {/* Order Items */}
              <div className="px-24">
                <div className="flex items-center gap-5 my-7">
                  <img src={Rectangle} alt="Rectangle" />
                  <div>
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-bold">Sample Product 1</h2>
                      <span className="underline">Order- #2125</span>
                    </div>
                    <p className="mt-2 mb-3">
                      Lorem ipsum dolor sit amet consectetur. Laoreet netus
                      gravida diam at faucibus fames. Neque et sollicitudin nibh
                      tortor accumsan. Turpis in vivamus felis.
                    </p>
                    <div className="flex justify-between">
                      <ul className="flex gap-14">
                        <li>
                          <span className="text-gray-500 uppercase">PRICE</span>
                          <p className="font-bold">€225.00</p>
                        </li>
                        <li>
                          <span className="text-gray-500 uppercase">qty</span>
                          <p className="font-bold">2</p>
                        </li>
                        <li>
                          <span className="text-gray-500 uppercase">
                            subtotal
                          </span>
                          <p className="font-bold">€450.00</p>
                        </li>
                      </ul>
                      <button className="px-5 font-bold border rounded-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="flex items-center gap-5 my-7">
                  <img src={Rectangle} alt="Rectangle" />
                  <div>
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-bold">Sample Product 1</h2>
                      <span className="underline">Order- #2125</span>
                    </div>
                    <p className="mt-2 mb-3">
                      Lorem ipsum dolor sit amet consectetur. Laoreet netus
                      gravida diam at faucibus fames. Neque et sollicitudin nibh
                      tortor accumsan. Turpis in vivamus felis.
                    </p>
                    <div className="flex justify-between">
                      <ul className="flex gap-14">
                        <li>
                          <span className="text-gray-500 uppercase">PRICE</span>
                          <p className="font-bold">€225.00</p>
                        </li>
                        <li>
                          <span className="text-gray-500 uppercase">qty</span>
                          <p className="font-bold">2</p>
                        </li>
                        <li>
                          <span className="text-gray-500 uppercase">
                            subtotal
                          </span>
                          <p className="font-bold">€450.00</p>
                        </li>
                      </ul>
                      <button className="px-5 font-bold border rounded-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>

              {/* Order Summary */}
              <div className="pb-10 mt-6 border-b-2 border-dashed px-28">
                <div className="flex justify-between">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 border-gray-300">
                      Order Summary
                    </h3>
                    <p className="text-gray-400">
                      Your order is now confirmed!
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 border-gray-300">
                    Paid with Credit Card
                  </h3>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <p className="font-bold text-gray-400">Subtotal</p>
                    <p className="font-bold ">$1,300.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold text-gray-400">
                      Shipping & Handling
                    </p>
                    <p className="font-bold ">$5.95</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold text-gray-400">Est Sales Tax</p>
                    <p className="font-bold ">$0.69</p>
                  </div>
                  <div className="flex items-center justify-end gap-5 pt-2 font-semibold border-gray-300">
                    <p className="font-bold">Total (3 items):</p>
                    <p className="text-xl font-bold">$1,306.64 USD</p>
                  </div>
                </div>
              </div>

              <div className="px-40 mb-6 text-center mt-7">
                <h2 className="text-lg font-bold mb-2.5">
                  Your order #2394839293 has been placed!
                </h2>
                <p className="text-gray-400">
                  We sent an email to{" "}
                  <span className="text-black">brian.john@gmail.com</span> with
                  your order confirmation and receipt. If the email hasn’t
                  arrived within tow minutes, please check your spam folder to
                  see the email.
                </p>
              </div>

              {/* Addresses and Shipping */}

              <div className="flex gap-5 border">
                <div className="">
                  <span><CallToActionIcon/></span>
                  <h5>Shipping Address</h5>
                  <p>Brian John</p>
                  <p>600 Montgomery St</p>
                  <p>San Fransisco, CA 930122</p>
                  <p>United States</p>
                  <p>+2379201374</p>
                </div>
                <div className="">
                  <span><AddLocationAltIcon/></span>
                  <h5>Billing Details</h5>
                  <p>Brian John</p>
                  <p>5442 N Virginia Ave</p>
                  <p>San Fransisco, CA 930122</p>
                  <p>United States</p>
                  <p>+2379201374</p>
                </div>
                <div className="">
                  <span><DirectionsCarFilledIcon/></span>
                  <h5>Shipping Method</h5>
                  <p>Preferred Method:</p>
                  <p>U.S Standard</p>
                  <p>normally 4-5 business days, unless otherwise noted</p>
                </div>
              </div>

              <div>
                <h2 className="text-center">
                  Call us at <span className="font-semibold">1-800-748-94200</span> or reply this email
                </h2>
                <div className="flex gap-3">
                  <div className="">
                  <img className="mx-auto" src={card} alt="card" />
                    <p>Payment 100% secured</p>
                  </div>
                  <div>
                  <img className="mx-auto" src={car} alt="car" />
                    <p>guaranteed safe delivery</p>
                  </div>
                  <div>
                  <img className="mx-auto" src={clock} alt="clock" />
                    <p>fast service delivery</p>
                  </div>
                  <div>
                  <img className="mx-auto" src={refresh} alt="refresh" />
                    <p>100% easy return</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center">
              <img className="w-32 mx-auto" src={Vector} alt="Vector" />
                  <ul className="flex items-center justify-center">
                    <li><FacebookIcon/></li>
                    <li><LinkedInIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><YouTubeIcon/></li>
                  </ul>
                <p>This email sent from hello@wortess.com</p>
                <p>For any questions please send an email hello@wortess.com</p>
                <div className="flex items-center justify-center gap-4">
                  <p>Privacy Policy </p>
                  <p>Terms & Conditions</p>
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
