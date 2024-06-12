import "./App.css";
import CarParkDetail from "./views/CarParkDetail";
import Login from "./views/login";
import Availability from "./views/Availability";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";

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
