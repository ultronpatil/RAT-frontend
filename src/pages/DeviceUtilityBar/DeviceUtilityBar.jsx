import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DeviceUtilityBar.css";

function DeviceUtilityBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();

    const utilities = [
        { id: "overview", label: "Overview", icon: "⌂" },
        { id: "system", label: "System Information", icon: "▣" },
        { id: "network", label: "Network", icon: "⌁" },
        { id: "activity", label: "Activity", icon: "◷" },
        { id: "settings", label: "Settings", icon: "⚙" },
    ];

    const toggleUtilityBar = () => {
        setIsExpanded((previous) => !previous);
    };

    return (
        <>
            {/* Blur overlay - starts below Navbar */}
            {isExpanded && (
                <div
                    className="utility-overlay"
                    onClick={() => setIsExpanded(false)}
                />
            )}

            <aside
                className={`device-utility-bar ${
                    isExpanded ? "expanded" : "collapsed"
                }`}
            >
                <button
                    className="utility-toggle"
                    onClick={toggleUtilityBar}
                    aria-label={
                        isExpanded
                            ? "Collapse utility bar"
                            : "Expand utility bar"
                    }
                >
                    <span>{isExpanded ? "‹" : "☰"}</span>
                </button>

                <div className="utility-items">
                    {utilities.map((utility) => (
                        <button
                            key={utility.id}
                            className="utility-button"
                        >
                            <span className="utility-icon">
                                {utility.icon}
                            </span>

                            {isExpanded && (
                                <span className="utility-label">
                                    {utility.label}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </aside>
        </>
    );
}

export default DeviceUtilityBar;