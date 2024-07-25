import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { AuthProvider } from "./providers/AuthProvider";
import Availability from "./views/Availability";
import CarParkDetail from "./views/CarParkDetail";
import Login from "./views/login";
import Test from "./views/Test";
import Time from "./views/Time";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/cpd",
    element: <PrivateRoute component={<CarParkDetail />} />,
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
