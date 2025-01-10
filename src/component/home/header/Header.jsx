import HeroImg1 from "../../../assets/images/HeroImage/HeroImage1.png";
import HeroImg2 from "../../../assets/images/HeroImage/HeroImage2.png";
import HeroImg3 from "../../../assets/images/HeroImage/HeroImage3.png";
import HeroImg4 from "../../../assets/images/HeroImage/HeroImage4.png";
import HeroImg5 from "../../../assets/images/HeroImage/HeroImage5.png";
import HeroImg6 from "../../../assets/images/HeroImage/HeroImage6.png";
import HeroImg7 from "../../../assets/images/HeroImage/HeroImage7.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../../../assets/images/Logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="relative flex items-center pt-10 mt-4 mb-96 ">
        <div className="font-gilroy w-[550px] text-center mx-auto">
          <p className="mb-4 text-2xl font-medium">It’s not just at-shirt</p>
          <h1 className="font-bold text-7xl">It’s a Manifesto to be Worn!</h1>
          <p className="pt-5 pb-4 font-semibold font-xl">
            Wortees è una dichiarazione da indossare, è inchiostro; è un atto di
            responsabilità verbale; è polisemia indelebile del carattere che
            abbiamo impresso e che ci portiamo addosso.
          </p>
          <button className="text-center gap-4 bg-[#A81A18] py-4 px-7 rounded-xl text-white">
            <span className="pr-2 uppercase"> Leggi di più</span>
            <span>
              <ArrowForwardIcon />
            </span>
          </button>
        </div>
        <div className="absolute right-20 top-32">
          <p className="">
            <img src={Logo} className="w-20 logo" alt="logo" />
          </p>
        </div>
        <div className="absolute px-10 left-0 top-[64%]">
          <img className="w-52" src={HeroImg1} alt="HeroImg1" />
        </div>
        <div className="absolute px-10 right-0 top-[64%]">
          <img className="w-52" src={HeroImg2} alt="HeroImg2" />
        </div>
        <div className="absolute left-[22%] top-[95%]">
          <img className="w-52" src={HeroImg3} alt="HeroImg3" />
        </div>
        <div className="absolute right-[22%] top-[95%]">
          <img className="w-52" src={HeroImg4} alt="HeroImg4" />
        </div>
        <div className="absolute right-[41.8%] top-[115%]">
          <img className="w-52" src={HeroImg5} alt="HeroImg5" />
        </div>
        <div className="absolute left-[8%] top-[140%]">
          <img className="w-32" src={HeroImg6} alt="HeroImg6" />
        </div>
        <div className="absolute right-[8%] top-[140%]">
          <img className="w-32" src={HeroImg7} alt="HeroImg7" />
        </div>
      </div>
    </>
  );
}
