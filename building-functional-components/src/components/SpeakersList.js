import { useState } from 'react';
import { data } from "../../SpeakerData";
import Speaker from './Speaker'


function SpeakersList({ showSessions }) {
    const [speakersData, setSpeakersData] = useState(data);

    function onFavoriteToggle(id) {
        const speakerRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpdated = {
            ...speakerRecPrevious,
            favorite: !speakerRecPrevious.favorite
        }
        const SpeakersDataNew = speakersData.map(function (rec){
            return rec.id === id ? speakerRecUpdated : rec;
        });

        setSpeakersData(SpeakersDataNew);
    }
    return (
        <div className="container speakers-list">
            <div className="row">
                { speakersData.map((speaker) => {
                return (
                    <Speaker 
                        key={speaker.id} 
                        speaker={speaker}  
                        showSessions={showSessions}  
                        onFavoriteToggle={onFavoriteToggle(speaker.id)}

                        />
                )
                })}
            </div>
        </div>
    )
}

export default SpeakersList;
