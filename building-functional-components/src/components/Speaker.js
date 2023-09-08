import { useState, useContext } from "react";
import { SpeakerFilterContext } from "../Contexts/SpeakerFilterContext";


function Session({ title, room }) {
    return (
      <span className="session w-100">
        { title } <strong>Room: { room.name }</strong>
      </span>
    );
  }
  
  function Sessions ({ sessions }) {
    const { eventYear } = useContext(SpeakerFilterContext);
    return (
      <div className="sessionBox card h-250">
         { sessions.filter((session) => {
            return session.eventYear === eventYear;
         }).map((session) => {
            return (
              <div className="session w-100" key={session.id}>
                <Session {...session} />
              </div>
            )
         })}
      </div>
    )
  }
  
  function SpeakerImage({ id, first, last }) {
    return (
        <div className="speaker-img">
          <img 
            className="contain-fit"
            src={`/images/speaker-${id}.jpg`}
            width="300"
            alt={`${first} ${last}`}
            />
        </div>
    )
  }

  function SpeakerFavorite({ favorite, onFavoriteToggle}) {
    const [inTransition, setIntransition] = useState(false);

    function doneCallback() {
      setIntransition(false);
      console.log(`In SpeakerFavorite: doneCallback, ${new Date().getMilliseconds()}`)
    }
    return (
      <div className="action padB1">
        <span
              onClick={()=>{
                setIntransition(true);
                onFavoriteToggle(doneCallback)
                }}
        >
          <i 
              className= {favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"} 
            /> {" "}
          Favorite {" "}
          {inTransition === true ? <span className="fas fa-circle-notch fa-spin"></span> : null}
        </span>

      </div>
    )
  }
  
  function SpeakerDemographics({ first, last, bio, company, twitterHandle, favorite }) {
    return (
      <div className="speaker-info">
          <div className="d-flex justify-content-between mb-3">
              <h3 className="text-truncate w-200">
                  {first} {last}
              </h3>
          </div>
          <div>
              {/* <p>{ bio } { company } { twitterHandle } { favorite }</p> */}
              <p className="card-description">{ bio }</p>
              <div className="social d-flex flex-row mt-4">
                  <div className="company">
                    <h6>Company</h6>
                    <h6>{ company }</h6>
                  </div>
                  <div className="twitter">
                    <h6>Twitter</h6>
                    <h6>{ twitterHandle }</h6>
                  </div>
              </div>
          </div>                
      </div>
    )
  }
  
  function Speaker({ speaker, onFavoriteToggle }) {
    const {id, first, last, sessions, favorite}  = speaker;
    const { showSessions } = useContext(SpeakerFilterContext);
    return (
        <div key={id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
  
                {/* speaker Image */}
                <SpeakerImage id={id} first={first} last={last} />

                {/* speaker favourite */}
                <SpeakerFavorite favorite={favorite} onFavoriteToggle={onFavoriteToggle} />
  
                {/* speaker demographics */}
                <SpeakerDemographics {...speaker} />
  
                {/* speaker speaking sessions */}
                {showSessions === true ? <Sessions sessions={sessions} /> : null } 
                {/* <Sessions sessions={sessions} /> */}
                {/* <p>{ showSessions }</p> */}
            </div>
        </div>
    )
  }

  export default Speaker;
  