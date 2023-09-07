import { useState, useContext } from "react";
import  { ThemeContext }  from "../Contexts/ThemeProvider";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";


function Speakers() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [showSessions, setShowSessions] = useState(true);

    return (
        <>
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
            <SpeakersList showSessions={showSessions} />
        </>
    )
}

export default Speakers;