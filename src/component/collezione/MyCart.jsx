import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import CartImage from "../../assets/images/CartImage.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import Slider from "./slider/Slider";

export default function MyCart() {
  return (
    <>
      <div className="px-10 bg-slate-200">
        <h2 className="py-10 text-5xl font-bold text-center">My Cart</h2>
        <div className="grid grid-cols-12 gap-4 mb-16 ">
          <div className="col-span-7">
            <ul>
              <li className="mb-3 ">
                <ul className="flex rounded-md items-center justify-around bg-white shadow-sm p-2.5">
                  <li>
                    <CloseIcon />
                  </li>
                  <li>
                    <img src={CartImage} alt="CartImage" />
                  </li>
                  <li>
                    <h4 className="font-bold">Heresiarch</h4>
                    <p>Wearability: Over</p>
                    <p>Color: Optical White</p>
                    <p>Size: S</p>
                  </li>
                  <li>
                    <p className="font-bold text-rose-600">60,00 €</p>
                  </li>
                  <li>
                    <div className="flex items-center gap-7">
                      <div className="flex items-center justify-between gap-4 border shadow-sm rounded-xl">
                        <button className="px-2 py-1.5 border-r text-gray-400">
                          <RemoveIcon />
                        </button>
                        <strong>1</strong>
                        <button
                          className="px-2 py-1.5 border-l text-gray-400"
                          onClick={() => "increase"}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-3 py-2.5 text-gray-500 border rounded-full">
                    <DeleteIcon />
                  </li>
                </ul>
              </li>
              <li className="mb-3 ">
                <ul className="flex rounded-md items-center justify-around bg-white shadow-sm p-2.5">
                  <li>
                    <CloseIcon />
                  </li>
                  <li>
                    <img src={CartImage} alt="CartImage" />
                  </li>
                  <li>
                    <h4 className="font-bold">Heresiarch</h4>
                    <p>Wearability: Over</p>
                    <p>Color: Optical White</p>
                    <p>Size: S</p>
                  </li>
                  <li>
                    <p className="font-bold text-rose-600">60,00 €</p>
                  </li>
                  <li>
                    <div className="flex items-center gap-7">
                      <div className="flex items-center justify-between gap-4 border shadow-sm rounded-xl">
                        <button className="px-2 py-1.5 border-r text-gray-400">
                          <RemoveIcon />
                        </button>
                        <strong>1</strong>
                        <button
                          className="px-2 py-1.5 border-l text-gray-400"
                          onClick={() => "increase"}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-3 py-2.5 text-gray-500 border rounded-full">
                    <DeleteIcon />
                  </li>
                </ul>
              </li>
              <li className="mb-3 ">
                <ul className="flex rounded-md items-center justify-around bg-white shadow-sm p-2.5">
                  <li>
                    <CloseIcon />
                  </li>
                  <li>
                    <img src={CartImage} alt="CartImage" />
                  </li>
                  <li>
                    <h4 className="font-bold">Heresiarch</h4>
                    <p>Wearability: Over</p>
                    <p>Color: Optical White</p>
                    <p>Size: S</p>
                  </li>
                  <li>
                    <p className="font-bold text-rose-600">60,00 €</p>
                  </li>
                  <li>
                    <div className="flex items-center gap-7">
                      <div className="flex items-center justify-between gap-4 border shadow-sm rounded-xl">
                        <button className="px-2 py-1.5 border-r text-gray-400">
                          <RemoveIcon />
                        </button>
                        <strong>1</strong>
                        <button
                          className="px-2 py-1.5 border-l text-gray-400"
                          onClick={() => "increase"}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-3 py-2.5 text-gray-500 border rounded-full">
                    <DeleteIcon />
                  </li>
                </ul>
              </li>
              <li className="mb-3 ">
                <ul className="flex rounded-md items-center justify-around bg-white shadow-sm p-2.5">
                  <li>
                    <CloseIcon />
                  </li>
                  <li>
                    <img src={CartImage} alt="CartImage" />
                  </li>
                  <li>
                    <h4 className="font-bold">Heresiarch</h4>
                    <p>Wearability: Over</p>
                    <p>Color: Optical White</p>
                    <p>Size: S</p>
                  </li>
                  <li>
                    <p className="font-bold text-rose-600">60,00 €</p>
                  </li>
                  <li>
                    <div className="flex items-center gap-7">
                      <div className="flex items-center justify-between gap-4 border shadow-sm rounded-xl">
                        <button className="px-2 py-1.5 border-r text-gray-400">
                          <RemoveIcon />
                        </button>
                        <strong>1</strong>
                        <button
                          className="px-2 py-1.5 border-l text-gray-400"
                          onClick={() => "increase"}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-3 py-2.5 text-gray-500 border rounded-full">
                    <DeleteIcon />
                  </li>
                </ul>
              </li>
            </ul>
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
              <div className="flex justify-between mt-3">
                <p className="font-bold">Total</p>
                <div className="text-end">
                  <p className="text-xl font-bold text-red-700">240,00 € EUR</p>
                  <p>(including 10,82 € VAT)</p>
                </div>
              </div>
              <button className="text-center mt-10 shadow-xl gap-4 mx-auto block bg-[#A81A18] py-2.5 px-5 rounded-xl text-white">
                <span className="pr-2 uppercase">Proceed to checkout</span>
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
              <p className="pt-4 pb-2 text-center uppercase">Back to Shopping</p>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <h2 className="text-3xl font-bold pb-7">Recently viewed</h2>
          <Slider/>
        </div>
      </div>
    </>
  );
}
