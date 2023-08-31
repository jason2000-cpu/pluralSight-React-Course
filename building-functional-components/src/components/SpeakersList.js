import { useState } from 'react';
import { data } from "../../SpeakerData";
import Speaker from './Speaker'


function SpeakersList({ showSessions }) {
    const [speakersData, setSpeakersData] = useState(data);
    return (
        <div className="container speakers-list">
            <div className="row">
                { speakersData.map((speaker) => {
                return (
                    <Speaker key={speaker.id} speaker={speaker}  showSessions={showSessions}/>
                )
                })}
            </div>
        </div>
    )
}

export default SpeakersList;
