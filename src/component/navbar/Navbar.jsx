import Vector from "../../assets/images/Vector.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom"; // Fixed import
import { useState } from "react";
import Select from "react-select";

function Navbar() {
  // Updated language options with shadow for flag
  const options = [
    {
      value: "en",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="English"
            className="object-cover w-5 h-5 mr-1 rounded-lg shadow-2xl"
          />
          En
        </div>
      ),
    },
    {
      value: "bn",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/w40/bd.png"
            alt="Bangla"
            className="w-5 h-5 mr-1 rounded-lg shadow-2xl"
          />
          বাং
        </div>
      ),
    },
    {
      value: "fr",
      label: (
        <div className="flex items-center">
          <img
            src="https://flagcdn.com/w40/fr.png"
            alt="French"
            className="w-5 h-5 mr-1 rounded-lg shadow-2xl"
          />
          FR
        </div>
      ),
    },
  ];

  // Default language
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]); // Default to English

  // Handle change event
  const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  // Custom styles for react-select
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "transparent",
      border: "none",
      minWidth: "75px",
      boxShadow: "none",
      padding: "0",
      display: "flex",
      alignItems: "center",
    }),
    indicatorSeparator: () => ({
      display: "none", // Remove the separator line
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#6b7280", // Tailwind's gray-500
      padding: "0", // Remove extra padding
      margin: "0", // Remove spacing
      marginLeft: "-10px ",
      "&:hover": {
        color: "#4b5563", // Tailwind's gray-600
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#f3f4f6" : "white", // Tailwind's gray-100 on hover
      color: "#374151", // Tailwind's gray-700
      padding: "0.5rem",
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    }),
  };

  return (
    <div className="flex items-center justify-between px-10 border-b-2 border-dashed py-7">
      {/* Logo Section */}
      <div>
        <Link to={"/"}>
          <img src={Vector} alt="Logo" className="w-36" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex justify-center gap-8 text-xl font-semibold font-satoshi">
          <li>
            <Link to="/manifesto">Manifesto</Link>
          </li>
          <li>
            <Link to="/collezione">Collezione</Link>
          </li>
          <li>
            <Link to="/contatti">Contatti</Link>
          </li>
        </ul>
      </nav>

      {/* Language Selector */}
      <div className="flex gap-3">
        <Select
          options={options}
          onChange={handleChange}
          value={selectedLanguage}
          styles={customStyles}
        />
        <div className="flex items-center gap-3">
          <span className="px-2.5 p-2 border rounded-full">
            <FavoriteBorderIcon />
          </span>
          <hr className="w-[2px] h-4 bg-black" />
          <Link to="/">
          <span className="px-2.5 py-2 border rounded-full">
            <LocalMallIcon />
          </span>
          </Link>
          
          <p className="text-base font-semibold">CART(1)</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
