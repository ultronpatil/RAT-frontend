import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import { useState } from "react";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import DeviceDetails from "./pages/DeviceDetails/DeviceDetails";
import Logs from "./pages/Logs/Logs";
import CommandPrompt from "./pages/CommandPrompt/CommandPrompt";

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

                    {/* Managed Devices */}
                    <Route
                        path="/"
                        element={
                            <Home
                                onLogout={handleLogout}
                            />
                        }
                    />

                    {/* Device Details */}
                    <Route
                        path="/device"
                        element={
                            <DeviceDetails />
                        }
                    />

                    {/* Device Logs */}
                    <Route
                        path="/logs"
                        element={
                            <Logs />
                        }
                    />

                    {/* Unknown route */}
                    <Route
                        path="*"
                        element={
                            <Navigate
                                to="/"
                                replace
                            />
                        }
                    />
                    <Route
    path="/command"
    element={<CommandPrompt />}
/>

                </Routes>

            )}

        </BrowserRouter>
    );
}

export default App;