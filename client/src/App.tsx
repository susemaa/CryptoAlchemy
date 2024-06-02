import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { usePlayer } from "./context/usePlayerContext";
import { Nav } from "./components/Nav";
import DebugPanel from "./components/DebugPanel";
import useWindowSize from "./hooks/useWindowSize";
import "./globals.css";
import AnimationProvider from "./context/AnimationProvider";
import AnimatedRoutes from "./AnimatedRoutes";

const App: React.FC = React.memo(() => {
    const { width } = useWindowSize();
    
    const state = usePlayer();
    // REMOVE ON PROD
    window.inventory = state.inventory;
    window.state = state;
    // REMOVE ON PROD

    useEffect(() => {
        setTimeout(() => {
            if (state.account) {
                console.log("GIVING TRASH");
                state.giveTrash(state.account);
                state.giveTrash(state.account);
                state.setTimestamp(state.account, Date.now());
            }
        }, 5000);
    }, []);
    // if (state.account) {
    //     console.log("GIVING TRASH");
    //     state.giveTrash(state.account);
    //     state.giveTrash(state.account);
    // }

    const [isDebugPanelVisible, setIsDebugPanelVisible] = useState(false);

    if (width >= 993) {
        return (
        <main className="flex flex-col h-full">
            <div className="big-window-msg">
                <div>
                    Game is not ready yet for this window size. Use phone instead.
                </div>
                <div>
                    We apologize for any inconvenience.
                </div>
            </div>
        </main>
        );
      }

    return (
        <main className="flex flex-col h-full">
            {/* {isDebugPanelVisible ? (
                <DebugPanel onClose={() => setIsDebugPanelVisible(false)} />
            ) : (
                <button className="debug-button" onClick={() => setIsDebugPanelVisible(true)}>
                    Debug
                </button>
            )} */}
            <BrowserRouter>
                <Nav />
                <div className="flex-grow">            
                    <AnimationProvider>
                        <AnimatedRoutes />
                    </AnimationProvider>
                </div>
            </BrowserRouter>
        </main>
    );
})

export default App;
