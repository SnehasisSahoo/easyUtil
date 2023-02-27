import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

import BinaryConverter from "./components/BinaryConverter";
import HomePage from "./components/HomePage";
import TempConverter from "./components/TempConverter";
import MathOperations from "./components/MathOperations";

//todo: temperature conv with selector box, factorial,
//      get waether with api, maybe news headline
//      in the home page

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "bin",
    element: <BinaryConverter />,
  },
  {
    path: "temp",
    element: <TempConverter />,
  },
  {
    path: "math",
    element: <MathOperations />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
