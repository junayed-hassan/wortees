import Collezione from '../component/collezione/Collezione';
import Manifesto from '../component/manifesto/Manifesto';
import { createBrowserRouter } from 'react-router-dom';
import Contatti from '../component/contatti/Contatti';
import Header from '../component/home/Header';
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <Header />
            },
            {
                path: "/manifesto",
                element: <Manifesto />
            },
            {
                path: "/collezione",
                element: <Collezione />
            },
            {
                path: "/contatti",
                element: <Contatti />
            }
        ]
    }
]);

export default router;

