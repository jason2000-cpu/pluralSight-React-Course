import { ShowSessionsProvider } from "../Contexts/ShowSessionsProvider";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";


function Speakers() {
    // const { theme, setTheme } = useContext(ThemeContext);

    return (
        <ShowSessionsProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList/>
        </ShowSessionsProvider>
    )
}

export default Speakers;
