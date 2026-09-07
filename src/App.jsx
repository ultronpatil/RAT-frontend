import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import DeviceDetails from "./pages/DeviceDetails/DeviceDetails";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <BrowserRouter>

            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Routes>

                    <Route
                        path="/"
                        element={
                            <Home
                                onLogout={handleLogout}
                            />
                        }
                    />

                    <Route
                        path="/device"
                        element={
                            <DeviceDetails />
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <Navigate
                                to="/"
                                replace
                            />
                        }
                    />

                </Routes>
            )}

        </BrowserRouter>
    );
}

export default App;