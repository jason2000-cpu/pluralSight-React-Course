import { useState, useEffect } from 'react';
import { data } from "../../SpeakerData";
import Speaker from './Speaker'
import useRequestSpeakers from '../hooks/useRequestSpeakers';

import ReactPlaceholder from 'react-placeholder';


function SpeakersList({ showSessions }) {
    const { 
        isLoading,
        hasErrored,
        error,
        speakersData,
        onFavoriteToggle
    } = useRequestSpeakers(2000);


    if(hasErrored){
        return (
            <div>
                Loading has errored for the following reason: {error.message}
            </div>
        )
    }

    // if(isLoading === true) return <div>Loading....</div>
    // hasErrored && <div>Error: {error}</div>;
    return (
        <ReactPlaceholder
            type="media"
            rows={15}
            className="speakerslist-placeholder"
            ready={!isLoading}
        >
            <div className="container speakers-list">
                <div className="row">
                    { speakersData.map((speaker) => {
                    return (
                        <Speaker
                            key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            onFavoriteToggle={()=>{
                                onFavoriteToggle(speaker.id);
                            }}

                            />
                    )
                    })}
                </div>
            </div>
        </ReactPlaceholder>
    )
}

export default SpeakersList;
