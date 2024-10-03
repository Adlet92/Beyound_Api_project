import { router } from "@shared/config/routes";
import { RouterProvider } from "atomic-router-react";
import "./index.css";
import { Pages } from "./pages/index";

function App() {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
}

export default App;
