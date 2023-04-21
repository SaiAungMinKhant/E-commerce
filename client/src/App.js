import BtmFooter from "./components/Footer/BtmFooter";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <BtmFooter />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
