import { SpeakerFilterProvider } from "../Contexts/SpeakerFilterContext";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";


function Speakers() {
    // const { theme, setTheme } = useContext(ThemeContext);

    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList/>
        </SpeakerFilterProvider>
    )
}

export default Speakers;
