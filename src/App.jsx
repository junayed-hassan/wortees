import OurPromise from "./component/ourPromise/OurPromise";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <OurPromise/>
      <Footer/>
    </>
  );
}

export default App;
