import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import DeviceUtilityBar from "../DeviceUtilityBar/DeviceUtilityBar";

import "./DeviceDetails.css";

function DeviceDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    /*
     * The selected device is passed from the Managed Devices page.
     *
     * Later this can be replaced with backend data.
     */
    const device = location.state?.device;

    /*
     * If someone opens the URL directly without selecting
     * a device first, we currently return them to Managed Devices.
     *
     * Later, the MAC address from the URL can be used to
     * request the device directly from the backend.
     */
    if (!device) {
        return (
            <div className="device-not-found">
                <h2>Device not found</h2>

                <p>
                    Please select a managed device first.
                </p>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                >
                    Back to Managed Devices
                </button>
            </div>
        );
    }

    return (
        <div className="device-details-page">

            {/* Always at the top */}
            <Navbar />

            {/* Admin-only utility bar */}
            <DeviceUtilityBar />

            {/* Main device page */}
            <main className="device-details-content">

                {/* Page Header */}
                <section className="device-page-header">

                    <div className="device-header-left">

                        <button
                            type="button"
                            className="device-back-button"
                            onClick={() => navigate("/")}
                            title="Back to Managed Devices"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="m15 18-6-6 6-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div>
                            <span className="device-page-label">
                                MANAGED DEVICE
                            </span>

                            <h1>
                                {device.name}
                            </h1>

                            <p>
                                {device.macAddress}
                            </p>
                        </div>

                    </div>

                    <div
                        className={`device-status device-status-${device.status}`}
                    >
                        <span className="device-status-dot"></span>

                        <span>
                            {device.status}
                        </span>
                    </div>

                </section>

                {/* Main Information */}
                <section className="device-information-grid">

                    {/* Connection */}
                    <div className="device-info-card">

                        <div className="device-info-card-header">
                            <div className="device-info-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M4 9a12 12 0 0 1 16 0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M7 12a8 8 0 0 1 10 0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M10 15a4 4 0 0 1 4 0"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />

                                    <circle
                                        cx="12"
                                        cy="18"
                                        r="1"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h2>
                                    Connection
                                </h2>

                                <p>
                                    Current network status
                                </p>
                            </div>
                        </div>

                        <div className="device-info-row">
                            <span>Status</span>

                            <strong
                                className={`inline-status inline-status-${device.status}`}
                            >
                                {device.status}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>IP Address</span>

                            <strong>
                                {device.ipAddress}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>MAC Address</span>

                            <strong className="monospace">
                                {device.macAddress}
                            </strong>
                        </div>

                    </div>

                    {/* Device Information */}
                    <div className="device-info-card">

                        <div className="device-info-card-header">
                            <div className="device-info-icon">
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

                            <div>
                                <h2>
                                    Device Information
                                </h2>

                                <p>
                                    System information
                                </p>
                            </div>
                        </div>

                        <div className="device-info-row">
                            <span>Device Name</span>

                            <strong>
                                {device.name}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>Operating System</span>

                            <strong>
                                {device.operatingSystem}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>OS Version</span>

                            <strong>
                                {device.osVersion}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>Device Type</span>

                            <strong>
                                {device.deviceType}
                            </strong>
                        </div>

                    </div>

                    {/* Management */}
                    <div className="device-info-card">

                        <div className="device-info-card-header">
                            <div className="device-info-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="9"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />

                                    <path
                                        d="M12 7v5l3 2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h2>
                                    Management
                                </h2>

                                <p>
                                    Device management details
                                </p>
                            </div>
                        </div>

                        <div className="device-info-row">
                            <span>Last Seen</span>

                            <strong>
                                {device.lastSeen}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>Agent Version</span>

                            <strong>
                                {device.agentVersion}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>Managed Since</span>

                            <strong>
                                {device.managedSince}
                            </strong>
                        </div>

                    </div>

                    {/* Hardware */}
                    <div className="device-info-card">

                        <div className="device-info-card-header">
                            <div className="device-info-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M6 4h12v16H6z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />

                                    <path
                                        d="M9 8h6M9 12h6M9 16h3"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h2>
                                    Hardware
                                </h2>

                                <p>
                                    Hardware information
                                </p>
                            </div>
                        </div>

                        <div className="device-info-row">
                            <span>Processor</span>

                            <strong>
                                {device.processor}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>Memory</span>

                            <strong>
                                {device.memory}
                            </strong>
                        </div>

                        <div className="device-info-row">
                            <span>Storage</span>

                            <strong>
                                {device.storage}
                            </strong>
                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default DeviceDetails;