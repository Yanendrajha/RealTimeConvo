import React from 'react'
import {Route, Routes} from "react-router";
import App from "../App.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    )
}

export default AppRoutes;