import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingleProductPage from "../pages/product";
import Products from "../components/common/Product";
import Productlayout from "../layouts/productlayout";
import { Counter } from "../pages/home/counter";
import Login from "../pages/auth";
import AboutPage from "../pages/about/index"
import CroperImage from "../pages/croperimage";
import App from '../pages/test/index'
import Demo from "../pages/test/index";



const router = createBrowserRouter([
  {
    path: "/",
    index: false,
    element: <Demo />
  },
  {
    path: "product",
    element: <Productlayout />,
    children: [
      {
        path: "",
        element: <Products />,
      },
      {
        path: ":id",
        element:<SingleProductPage/>,
      },
    ],
  },
  {
    path: "product/:id",
    element: <SingleProductPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
