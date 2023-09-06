import { data } from '../../SpeakerData';
import Speaker from './Speaker'
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay';

import ReactPlaceholder from 'react-placeholder';


function SpeakersList({ showSessions }) {
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
                    { speakersData.map((speaker) => {
                    return (
                        <Speaker
                            key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            onFavoriteToggle={(doneCallback)=>{
                                updateRecord({
                                    ...speaker,
                                    favorite: !speaker.favorite
                                }, doneCallback);
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
