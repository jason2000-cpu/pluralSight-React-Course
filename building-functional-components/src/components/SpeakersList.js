import { useContext } from 'react';
import { data } from '../../SpeakerData';
import Speaker from './Speaker'
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay';
import ReactPlaceholder from 'react-placeholder';
import { SpeakerFilterContext } from '@/Contexts/SpeakerFilterContext'; 



function SpeakersList() {
    const { eventYear, searchQuery } = useContext(SpeakerFilterContext);
    const {
        requestStatus,
        error,
        data:speakersData,
        updateRecord
    } = useRequestDelay(2000, data);


    if(requestStatus === REQUEST_STATUS.FAILURE){
        return (
            <div>
                Loading has errored for the following reason: {error.message}
            </div>
        )
    }

    return (
        <ReactPlaceholder
            type="media"
            rows={15}
            className="speakerslist-placeholder"
            ready={requestStatus === REQUEST_STATUS.SUCCESS}
        >
            <div className="container speakers-list">
                <div className="row">
                    { speakersData
                        .filter((speaker) => {
                        return (
                            speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
                        );
                       })
                        .filter((speaker) => {
                            {/* return speaker.sessions.find((session) => {
                                return session.eventYear === eventYear;
                            }) */}

                            return eventYear === "all" ? speaker : 
                                speaker.sessions.find((session) => {
                                    return session.eventYear === eventYear;
                                })
                        })
                        .map((speaker) => {
                            return (
                                <Speaker
                                    key={speaker.id}
                                    speaker={speaker}
                                    updateRecord={updateRecord}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </ReactPlaceholder>
    )
}

export default SpeakersList;
