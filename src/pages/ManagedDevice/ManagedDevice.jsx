import { useNavigate } from "react-router-dom";

import "./ManagedDevice.css";

function ManagedDevice({ device }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/device", {
            state: {
                device,
            },
        });
    };

    return (
        <button
            type="button"
            className="managed-device-card"
            onClick={handleClick}
        >
            <div className="managed-device-left">

                <div className="managed-device-icon">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <rect
                            x="3"
                            y="4"
                            width="18"
                            height="14"
                            rx="2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        />

                        <path
                            d="M8 21h8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />

                        <path
                            d="M12 18v3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="managed-device-information">

                    <div className="managed-device-name">
                        {device.name}
                    </div>

                    <div className="managed-device-mac">
                        {device.macAddress}
                    </div>

                </div>

            </div>

            <div className="managed-device-right">

                <span
                    className={`managed-device-status managed-device-status-${device.status}`}
                >
                    <span className="managed-device-status-dot"></span>

                    {device.status}
                </span>

                <span className="managed-device-arrow">
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="m9 18 6-6-6-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>

            </div>
        </button>
    );
}

export default ManagedDevice;