import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./providers/AuthProvider";
import Availability from "./views/Availability";
import CarParkDetail from "./views/CarParkDetail";
import Login from "./views/login";
import Time from "./views/Time";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cpd",
    element: <CarParkDetail />,
  },
  {
    path: "/ava",
    element: <Availability />,
  },
  {
    path: "/time",
    element: <Time />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

function App() {
  return (
    <main>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </main>
  );
}

export default App;
