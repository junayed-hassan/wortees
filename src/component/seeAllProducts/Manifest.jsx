import Product from "../../assets/images/ProductImage.png";
import Products from "../home/allProducts/Products";
function Manifest() {
  return (
    <>
      <div className="px-32">
        <div className="px-12 mt-16">
          <h2 className="mb-10 text-5xl font-bold text-center">Manifest</h2>
          <div className="mb-16 text-xl leading-10">
            <p className="">
              {" "}
              In the era of frenzy, of the immeasurable and sterile and swirling
              production of spoken, typed, instant-messaged, compressed,
              encrypted, self-corrected and finally forgotten language,
            </p>
            <p className="">
              Wortees <span className="font-semibold">claims</span>
            </p>
            <p className="">
              the concreteness of the word, of the white space, of the fiber of
              silence and of organic meaning.
            </p>
            <p className="">
              {" "}
              <span className="font-semibold">Wortees</span> is a statement to
              wear, it&apos;s ink; it is an act of verbal responsibility; it is
              indelible polysemy of the character that we have imprinted and
              that we carry with us.
            </p>
            <p className="">
              Wortees <span className="font-semibold">guards</span>{" "}
            </p>
            <p className="">
              the potential that radiates from language, the literal definition
              of a struggle against the paradigm of perpetual updating, of
              immediate feedback, of prefabricated and suggested phrasing.{" "}
            </p>
            <p className="">
              {" "}
              Wortees <span className="font-semibold">research</span> , Wortees
              is <span className="font-semibold">polyglot.</span>{" "}
            </p>
            <p className="">
              Wortees <span className="font-semibold">respects</span>{" "}
            </p>
            <p className="">
              {" "}
              the dignity of every unusual, slang, obsolete, abused, neological,
              archaic, neglected, overwhelmed, enchanted term.
            </p>
            <p className="">
              Wortees <span className="font-semibold">celebrates</span>{" "}
            </p>
            <p className="">
              {" "}
              the power of enunciation, the infinite synonymy of wonder, the
              ambiguous lemma,
            </p>
            <p className="">the singular meaning, erotic lallation.</p>
            <p className="">
              {" "}
              <span className="font-bold">Wortees </span> is the hidden
              fullness, the unstoppable semiosis, the root nucleus,
            </p>
            <p className="">
              the original adherence to etymology and emotion.{" "}
            </p>
            <p className="">
              As if to say:{" "}
              <span className="font-semibold">meaning, beauty. Love.</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <div className="px-10 mb-7 font-gilroy">
          <h1 className="pt-20 pb-10 text-5xl font-semibold text-center">
            Best Collection
          </h1>
          <div className="grid grid-cols-4 gap-5 pb-16 ">
            <div className="p-2.5 rounded-lg bg-white drop-shadow-md border border-red-600">
              <div className="relative">
                <img src={Product} alt="Product" />
                <span className="absolute px-2.5 py-[1px] text-sm bg-black text-white border top-2 right-2 rounded-xl">
                  Regular
                </span>
              </div>
              <div>
                <h2 className="mt-4 mb-2.5 text-xl font-semibold">Zapoj</h2>
                <p className="text-base font-medium">
                  Binge drinking; two or more days of continuous drunkenness.
                </p>
                <button className="drop-shadow-xl  flex justify-between mt-5 bg-red-700 text-white mb-4 py-2.5 px-4  border-black w-full rounded-xl">
                  <p className="text-base">ADD TO CART</p>
                  <span className="text-lg font-semibold">60,00 €</span>
                </button>
              </div>
            </div>
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manifest;
