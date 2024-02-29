import { useState, useEffect } from "react";

function useScript(src) {
    // Keep track of script status ("idle", "loading", "ready", "error")
    const [status, setStatus] = useState(src ? "loading" : "idle");

    useEffect(
        () => {
            if (!src) {
                setStatus("idle");
                return;
            }

            let script = document.querySelector(`script[src="${src}"]`);

            if (!script) {
                script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.setAttribute("data-status", "loading");
                // Add script to document body
                document.body.appendChild(script);

                const setAttributeFromEvent = (event) => {
                    script.setAttribute(
                        "data-status",
                        event.type === "load" ? "ready" : "error"
                    );
                };

                script.addEventListener("load", setAttributeFromEvent);
                script.addEventListener("error", setAttributeFromEvent);
            } else {
                setStatus(script.getAttribute("data-status"));
            }

            const setStateFromEvent = (event) => {
                setStatus(event.type === "load" ? "ready" : "error");
            };

            // Add event listeners
            script.addEventListener("load", setStateFromEvent);
            script.addEventListener("error", setStateFromEvent);

            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener("load", setStateFromEvent);
                    script.removeEventListener("error", setStateFromEvent);
                }
            };
        },
        [src] // Only re-run effect if script src changes
    );

    return status;
}

export { useScript };