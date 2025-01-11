import Footer1 from "../../../src/assets/images/footer/1.png";
import Footer2 from "../../../src/assets/images/footer/2.png";
import Footer3 from "../../../src/assets/images/footer/3.png";
import Footer4 from "../../../src/assets/images/footer/4.png";
import Footer6 from "../../../src/assets/images/footer/6.png";
import Footer5 from "../../../src/assets/images/footer/5.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function FooterButton() {
  return (
    <>
      <div className="px-10">
        <hr />
        <div className="flex items-center justify-between py-8">
            <ul className="flex gap-3 text-gray-400">
              <li className="py-2 px-2.5 rounded-full border"><InstagramIcon/></li>
              <li className="py-2 px-2.5 rounded-full border bg-red-700 text-white"><PinterestIcon/></li>
              <li className="py-2 px-2.5 rounded-full border"><FacebookIcon/></li>
              <li className="py-2 px-2.5 rounded-full border"><LinkedInIcon/></li>
            </ul>
          <nav>
            <ul className="flex gap-4 text-base font-gilroy">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li> Shipping and Returns</li>
            </ul>
          </nav>
          <div className="flex gap-3">
            <img className="w-10" src={Footer1} alt="Footer1" />
            <img className="w-10" src={Footer2} alt="Footer2" />
            <img className="w-10" src={Footer3} alt="Footer3" />
            <img className="w-10" src={Footer4} alt="Footer4" />
            <img className="w-10" src={Footer5} alt="Footer5" />
            <img className="w-10" src={Footer6} alt="Footer6" />
          </div>
        </div>
        <hr />
        <p className="mt-8 mb-6 text-base text-center">Wortees s.r.l © 2024 - VAT IT13140090963 - REA MI 2704821 - Via Tortona 33, 20144 Milano</p>
      </div>
    </>
  )
}

export default FooterButton