import { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";


const SpeakerFilterContext = createContext();


function ShowSessionsProvider({ children, startingShowSessions = false }) {
    const { showSessions, setShowSessions } = useSpeakerFilter(startingShowSessions);

    return (
        <SpeakerFilterContext.Provider value={{ showSessions, setShowSessions }}>
            { children }
        </SpeakerFilterContext.Provider>
    )
}


export { ShowSessionsProvider, SpeakerFilterContext };
