import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Drinks from "./components/Drinks&Desserts/Drinks/Drinks";
import Desserts from "./pages/Desserts";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/drinks",
    element: <Drinks />,
  },
  {
    path: "/desserts",
    element: <Desserts />,
  },
]);

function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
