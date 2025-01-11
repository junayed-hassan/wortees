import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import detailsImg1 from "../../assets/images/details/image1.png";
import detailsImg2 from "../../assets/images/details/image2.png";
import detailsImg3 from "../../assets/images/details/image3.png";
import detailsImg4 from "../../assets/images/details/image4.png";
import detailsImg from "../../assets/images/details/image.png";
import paypal from "../../assets/images/details/paypal.png";
import klama from "../../assets/images/details/klama.png";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function DetailsBanner() {
  // const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  // const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Optical White", "Ecru"];

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="flex flex-col gap-10 px-10 py-20 md:flex-row">
      {/* Image Section */}
      <div>
        <img src={detailsImg} className="w-[1071px]" alt="Main product" />
        <ul className="flex gap-4 mt-3">
          {[detailsImg1, detailsImg2, detailsImg3, detailsImg4].map(
            (img, idx) => (
              <li key={idx}>
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </li>
            )
          )}
        </ul>
      </div>

      {/* Details Section */}
      <div>
        <ul className="flex gap-1 text-[#FFBF00]">
          {[...Array(5)].map((_, idx) => (
            <li key={idx}>
              <StarIcon />
            </li>
          ))}
          <li>
            <p className="ml-2 text-base text-black">62 Reviews</p>
          </li>
        </ul>
        <h1 className="mt-2 mb-4 text-4xl font-bold">Oniochalasia</h1>
        <p className="text-[#A81A18] text-lg pb-5">
          Practicing shopping as a form of mental relaxation; buying for stress
          relief.
        </p>
        <h3 className="text-xl font-semibold pb-3 text-[#212121]">
          From the Dictionary Collection
        </h3>
        <p className="text-base w-[77%] pb-3">
          This is our Dictionary collection. The clean and modern design fits
          perfectly with any occasion, making them ideal for those looking to
          express their personality with style and character.
        </p>

        {/* Pricing Section */}
        <div>
          <strong>60,00 €</strong> <del>70,00 €</del>
          <div className="flex items-center gap-2 mt-2">
            <p>
              You can also pay in <strong>3 convenient installments</strong> of{" "}
              <strong>€20</strong> with
            </p>
            <img className="h-3" src={klama} alt="Klarna" />
            <span>or</span>
            <img className="h-3" src={paypal} alt="PayPal" />
          </div>
        </div>

        {/* Wearability and Selections */}
        <div className="mt-5">
          <h5 className="font-semibold">Wearability</h5>
          <div className="flex gap-3 mt-2">
            <button className="px-4 py-1 font-medium text-gray-700 border rounded-xl">
              Oversize
            </button>
            <button className="px-4 py-1 font-medium text-gray-700 border rounded-xl">
              Regular
            </button>
          </div>

          {/* Color Selection */}
          <div className="flex items-center gap-4 mt-3">
            <p className="font-medium">Color:</p>
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={selectedColor === color}
                  onChange={(e) => setSelectedColor(e.target.value)}
                />
                <span>{color}</span>
              </label>
            ))}
          </div>

          {/* Size Selection */}
          <div className="mt-4">
            <p className="text-lg font-medium font-gilroy">Size: Select</p>
            <ul className="flex items-center w-48 mt-2 text-center border rounded-xl">
              {/* {sizes.map((size) => (
                <li
                  key={size}
                  className={`cursor-pointer border-r pr-2.5 py-2 ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))} */}
              <li className="border-r cursor-pointer py-1.5 px-2 ">XS</li>
              <li className="border-r cursor-pointer py-1.5 px-3.5 ">S</li>
              <li className="border-r cursor-pointer py-1.5 px-3.5 ">M</li>
              <li className="border-r cursor-pointer py-1.5 px-3.5 ">L</li>
              <li className="cursor-pointe py-1.5 px-2 ">XL</li>
            </ul>
          </div>

          {/* Quantity Selection */}
          <div className="mt-4">
            <p className="text-lg font-medium font-gilroy">Quantity:</p>
            <div className="flex items-center gap-7">
              <div className="flex items-center justify-between gap-4 border shadow-sm rounded-xl">
                <button
                  className="px-2 py-1.5 border-r"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  <RemoveIcon />
                </button>
                <strong>{quantity}</strong>
                <button
                  className="px-2 py-1.5 border-l"
                  onClick={() => "increase"}
                >
                  <AddIcon />
                </button>
              </div>

              <button className="text-center gap-4 shadow-md bg-[#A81A18] py-2.5 px-7 rounded-xl text-white">
                <span className="pr-2 uppercase">Add to cart</span>
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>

              <span className="px-2.5 p-2 border rounded-full shadow-md">
                <FavoriteBorderIcon />
              </span>
            </div>
          </div>

          {/* Delivery Information */}
          <p className="mt-4 text-gray-600 bg-[#F9F2DF]/60 py-2.5 px-3 rounded-xl w-[90%]">
            All our T-shirts are{" "}
            <span className="font-medium text-red-700">
              &quot;made to order&quot;
            </span>
            . <br /> It takes about 14 days to make your T-shirt, buying it now{" "}
            <span className="font-medium text-red-700">
              you can receive it by 30/11/2024.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsBanner;
