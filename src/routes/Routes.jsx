import AllProducts from "../component/seeAllProducts/AllProducts";
import Manifest from "../component/seeAllProducts/Manifest";
import Collezione from "../component/collezione/Collezione";
import Manifesto from "../component/manifesto/Manifesto";
import { createBrowserRouter } from "react-router-dom";
import Contatti from "../component/contatti/Contatti";
import Home from "../component/home/home";
import App from "../App";

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
        path: "/manifest",
        element: <Manifest />,
      },
    ],
  },
]);

export default router;


