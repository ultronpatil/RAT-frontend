import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    useLocation,
    useNavigate,
} from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import DeviceUtilityBar from "../DeviceUtilityBar/DeviceUtilityBar";

import "./CommandPrompt.css";

function CommandPrompt() {
    const location = useLocation();
    const navigate = useNavigate();

    const device = location.state?.device;
    const macAddress = device?.macAddress;

    const [command, setCommand] = useState("");
    const [terminalLines, setTerminalLines] = useState([]);
    const [isExecuting, setIsExecuting] = useState(false);

    const terminalRef = useRef(null);
    const inputRef = useRef(null);


    /* =====================================================
       AUTO SCROLL TERMINAL
       ===================================================== */

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop =
                terminalRef.current.scrollHeight;
        }
    }, [terminalLines]);


    /* =====================================================
       FOCUS COMMAND INPUT
       ===================================================== */

    useEffect(() => {
        inputRef.current?.focus();
    }, []);


    /* =====================================================
       EXECUTE COMMAND
       ===================================================== */

    const executeCommand = async () => {
        const trimmedCommand = command.trim();

        if (!trimmedCommand || isExecuting) {
            return;
        }

        if (!macAddress) {
            return;
        }

        setIsExecuting(true);

        setTerminalLines((previous) => [
            ...previous,
            {
                type: "command",
                text: `C:\\RAT> ${trimmedCommand}`,
            },
        ]);

        setCommand("");


        try {
            const response = await fetch(
                `/api/devices/${encodeURIComponent(
                    macAddress
                )}/commands`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        command: trimmedCommand,
                    }),
                }
            );


            if (!response.ok) {
                throw new Error(
                    "Command execution failed"
                );
            }


            const data = await response.json();


            setTerminalLines((previous) => [
                ...previous,
                {
                    type: "output",
                    text: data.output || "",
                },
            ]);

        } catch (error) {

            setTerminalLines((previous) => [
                ...previous,
                {
                    type: "error",
                    text:
                        error.message ||
                        "Unable to execute command.",
                },
            ]);

        } finally {
            setIsExecuting(false);

            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    };


    /* =====================================================
       ENTER KEY
       ===================================================== */

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            executeCommand();
        }
    };


    /* =====================================================
       CLEAR TERMINAL
       ===================================================== */

    const clearTerminal = () => {
        setTerminalLines([]);
        inputRef.current?.focus();
    };


    /* =====================================================
       DEVICE NOT FOUND
       ===================================================== */

    if (!device) {
        return (
            <>
                <Navbar />

                <main className="command-prompt-page command-not-found">

                    <div className="command-not-found-content">

                        <h2>Device not found</h2>

                        <p>
                            Please select a managed device first.
                        </p>

                        <button
                            type="button"
                            onClick={() => navigate("/")}
                        >
                            ← Managed Devices
                        </button>

                    </div>

                </main>
            </>
        );
    }


    return (
        <>
            <Navbar />

            <DeviceUtilityBar device={device} />

            <main className="command-prompt-page">

                <div className="command-prompt-content">

                    {/* =================================================
                        HEADER
                       ================================================= */}

                    <header className="command-prompt-header">

                        <div>

                            <span className="command-page-label">
                                REMOTE COMMAND
                            </span>

                            <h1>{device.name}</h1>

                            <p>{device.macAddress}</p>

                        </div>


                        <button
                            type="button"
                            className="command-managed-devices-button"
                            onClick={() => navigate("/")}
                        >
                            ← Managed Devices
                        </button>

                    </header>


                    {/* =================================================
                        TERMINAL
                       ================================================= */}

                    <section className="command-terminal-container">

                        <div className="command-terminal-toolbar">

                            <div className="command-terminal-title">

                                <span className="command-terminal-dot"></span>

                                Command Prompt

                            </div>


                            <button
                                type="button"
                                className="command-clear-button"
                                onClick={clearTerminal}
                            >
                                Clear
                            </button>

                        </div>


                        <div
                            ref={terminalRef}
                            className="command-terminal"
                        >

                            {terminalLines.length === 0 && (
                                <div className="command-welcome">

                                    <div>
                                        RAT Remote Command Console
                                    </div>

                                    <div>
                                        Connected device:
                                        {" "}
                                        {device.macAddress}
                                    </div>

                                    <br />

                                </div>
                            )}


                            {terminalLines.map(
                                (line, index) => (

                                    <div
                                        key={index}
                                        className={`terminal-line terminal-line-${line.type}`}
                                    >
                                        {line.text}
                                    </div>

                                )
                            )}


                            <div className="command-input-line">

                                <span className="command-prompt-symbol">
                                    C:\RAT&gt;
                                </span>

                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={command}
                                    onChange={(event) =>
                                        setCommand(
                                            event.target.value
                                        )
                                    }
                                    onKeyDown={handleKeyDown}
                                    disabled={isExecuting}
                                    autoComplete="off"
                                    spellCheck="false"
                                />

                            </div>

                        </div>

                    </section>

                </div>

            </main>
        </>
    );
}

export default CommandPrompt;