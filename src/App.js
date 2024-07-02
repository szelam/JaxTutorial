import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { AuthProvider } from "./providers/AuthProvider";
import CarParkDetail from "./views/CarParkDetail";
import Login from "./views/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cpd",
    element: <PrivateRoute component={<CarParkDetail />} />,
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
