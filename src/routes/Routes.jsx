import AllProducts from "../component/seeAllProducts/AllProducts";
import Collezione from "../component/collezione/Collezione";
import Manifesto from "../component/manifesto/Manifesto";
import { createBrowserRouter } from "react-router-dom";
import Contatti from "../component/contatti/Contatti";
import Home from "../component/home/home";
import App from "../App";
import Checkout from "../component/checkout/Checkout";
import MyCart from "../component/myCart/MyCart";
import Details from "../component/detailsPage/Details";
import ConfirmOrder from "../component/confirmOrder/ConfirmOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manifesto",
        element: <Manifesto />,
      },
      {
        path: "/collezione",
        element: <Collezione />,
      },
      {
        path: "/contatti",
        element: <Contatti />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      }
      ,
      {
        path: "/details",
        element: <Details />,
      }
    ],
  },
  {
    path: "/confirmOrder",
    element: <ConfirmOrder />,
  },
]);

export default router;


