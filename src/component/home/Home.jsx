import AllProducts from "./allProducts/AllProducts";
import Collection from "./collection/Collection";
import Header from "./header/Header";
import Information from "./information/Information";

function home() {

  return (
    <>
        <Header/>
        <Collection/>
        <AllProducts/>
        <Information/>
    </>
  )
}

export default home