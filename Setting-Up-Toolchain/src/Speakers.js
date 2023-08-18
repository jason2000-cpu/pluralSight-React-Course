import React, { useEffect, useState, useContext, useReducer, useCallback, useMemo } from "react";

import  Header  from "./Header";
import Menu  from "./Menu";
import SpeakerDetail  from "./SpeakerDetail";
import SpeakerData from "./SpeakerData";
import { ConfigContext } from "./App";
import SpeakerReducer from "./speakerReducer";
import speakerData from "./SpeakerData";

const Speakers = () => {
    // const [speakerList, setSpeakerList] = useState([]);
    let [{ isLoading, speakerList }, dispatch] = useReducer(SpeakerReducer, {
        isLoading: true,
        speakerList: []
    })
    // const [isLoading, setIsLoading] = useState(true);
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true)

    const context = useContext(ConfigContext);

    useEffect(() => {
        new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 1000);
        }).then(() => {
            dispatch({
                type: "setSpeakerList",
                data: SpeakerData,
            })
        });
        return () => {
            console.log("cleanup");
        }
    }, []);
    
    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    };
    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    };

  

    const heartFavoriteHandler = useCallback((e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value);

        dispatch({
            type: favoriteValue === true ? "favorite" : "unvaforite",
            id: sessionId
        })
        // setSpeakerList(
        //     speakerList.map((item) => {
        //         if (item.id === sessionId) {
        //             return {...item, favorite:favoriteValue};
        //         }
        //         return item;
        //     })
        // )
    }, [])

    const newSpeakerList = useMemo(() => speakerList
    .filter(
        ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
    )
    .sort(function(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    }), [speakingSaturday, speakingSunday, speakerList])

    const speakerListFiltered = isLoading ? [] : newSpeakerList;

    if(isLoading) return <div>isLoading....</div>

    return (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <div className="btn-toolbar margintopbottom5 checbox-bigger">
                {context.showSpeakerSpeakingDays === false ? null : (
                    <div className="hide">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" 
                                    onChange={handleChangeSaturday}
                                    checked={speakingSaturday} 
                                    />
                                     Saturday Speakers
                            </label>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input"
                                        onChange={handleChangeSunday}
                                        checked={speakingSunday}
                                   />
                                    Sunday Speakers
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                <div className="row">
                    <div className="card-deck" >
                        {speakerListFiltered.map(({id, firstName, lastName, bio, favorite}) => {
                            return (
                                <SpeakerDetail 
                                    key={id} 
                                    id={id} 
                                    favorite={favorite} 
                                    firstName={firstName} 
                                    lastName={lastName} 
                                    bio={bio} 
                                    onHeartFavouriteHandler={heartFavoriteHandler}
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Speakers;
