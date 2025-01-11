import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./config/routes.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Toaster position="top-center" />
            <AppRoutes />
    </BrowserRouter>
);