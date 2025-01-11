import card from "../../assets/images/details/card.png";
import car from "../../assets/images/details/car.png";
import quality from "../../assets/images/details/quality.png";
import sirt from "../../assets/images/details/sirt.png";
function Credibility() {
  return (
    <>
        <div className="grid grid-cols-4 gap-10 px-10 mb-12 text-center">
            <div className="border-r-2">
                <img className="mx-auto mb-2.5" src={card} alt="" />
                <p>Secure payments</p>
            </div>
            <div className="border-r-2">
                <img className="mx-auto mb-2.5" src={car} alt="" />
                <p>Free shipping over 89€</p>
            </div>
            <div className="border-r-2">
                <img className="mx-auto mb-2.5" src={quality} alt="" />
                <p>Unique and original design</p>
            </div>
            <div>
                <img className="mx-auto mb-2.5" src={sirt} alt="" />
                <p>Premium quality</p>
            </div>
        </div>
    </>
  )
}

export default Credibility