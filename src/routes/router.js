import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import App from "../App";
import Home from "../components/Home/Home"
import About from "../components/About/About";

const router = createBrowserRouter([
    {
        path: routes.HOME.path,
        element: <App />,
        children: [
            {
                path: routes.HOME.path,
                element:<Home/>
            },
            {
                path: routes.ABOUT.path,
                element:<About/>
            }
        ]
    }
]);

export default router;