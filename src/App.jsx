import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Desserts from "./components/Drinks&Desserts/Desserts/Desserts";
import Drinks from "./components/Drinks&Desserts/Drinks/Drinks";

const router = createBrowserRouter([
  {
    path: "/",
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
    // <Home />;
  );
}

export default App;
