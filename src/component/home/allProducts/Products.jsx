import Product from "../../../assets/images/ProductImage.png";
function Products() {
  return (
    <div className="p-2.5 rounded-lg bg-white drop-shadow-md ">
      <div className="relative">
        <img src={Product} alt="Product" />
        <span className="absolute px-2.5 py-[1px] text-sm bg-white border top-2 right-2 rounded-xl">
          Oversize
        </span>
      </div>
      <div>
        <h2 className="mt-4 mb-2.5 text-xl font-semibold">Zapoj</h2>
        <p className="text-base font-medium">
          Binge drinking; two or more days of continuous drunkenness.
        </p>
        <button className="flex justify-between mt-5 mb-4 py-2.5 px-4 border border-black w-full rounded-xl drop-shadow-xl ">
          <p className="text-base">ADD TO CART</p>
          <span className="text-lg font-semibold">60,00 €</span>
        </button>
      </div>
    </div>
  );
}

export default Products;
