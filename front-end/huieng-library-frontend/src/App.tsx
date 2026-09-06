import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import FinishedBooks from "./pages/FinishedBooks";
import NotFoundPage from "./pages/NotFoundPage";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/read", element: <FinishedBooks /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
