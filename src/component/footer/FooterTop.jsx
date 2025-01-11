import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Vector from "../../../src/assets/images/Vector.png";
import Logo from "../../../src/assets/images/footer/Footer_Logo.png";

function FooterTop() {
  return (
    <>
      <div className="px-10 text-center">
        <div>
          <p className="mt-16 text-2xl w-[610px] mx-auto italic mb-7">
            &quot;Non Console nulla al mondo che abbia tanto potere quanto la
            parola. A volte ne scrivo una, e la guardo, fino a quando non
            comincia a splendere&quot;
          </p>
          <strong>Emily Dickinson</strong>
        </div>
        <div className="">
          <div className="relative pt-20">
            <img className="mx-auto" src={Vector} alt="Vector" />
            <p className="mb-10 pt-7">
              Since 2018 proudly made with ♥ in Italy
            </p>
            <div className="z-50 pb-16">
              <input
                className="p-6 z-50 outline-none rounded-xl bg-[#F1F1F1] w-[700px]"
                type="email"
                placeholder="Your email address"
              />
              <button className="text-center gap-4 ml-[-14.7%] bg-[#A81A18] py-4 px-7 rounded-xl text-white">
                <span className="pr-2 uppercase">Subscribe</span>
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
            <div className="absolute top-[10%] left-0 z-0">
              <p>
                <img className="w-72 opacity-10 logo" src={Logo} alt="Logo" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop;
