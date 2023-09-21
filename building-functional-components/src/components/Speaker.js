import { useState, useContext } from "react";
import { SpeakerFilterContext } from "../Contexts/SpeakerFilterContext";
import { SpeakerContext, SpeakerProvider } from "@/Contexts/speakerContext";
import  SpeakerDelete  from "./SpeakerDelete";


function Session( props ) {
  // alert(props)
  const { title, room } = props;
 
    return (
      <span className="session w-100">
        { title } <strong>Room: { room.name }</strong>
      </span>
    );
  }
  
  function Sessions () {
    const { eventYear } = useContext(SpeakerFilterContext);
    const { speaker } = useContext(SpeakerContext);
    const sessions = speaker.sessions
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
  
  function ImageFallBack({src, ...props}) {
    const [err, setErr] = useState(false);
    const [ imgSrc, setImgSrc ] = useState(src);

    function onError(){
      if(!err) {
        setImgSrc('/images/speaker-99999.jpg')
        setErr(true);
      }
    }

    return <img src={ imgSrc } {...props} onError={onError} />
  }
  function SpeakerImage() {
    const {speaker: { id, first, last}} = useContext(SpeakerContext)
    return (
        <div className="speaker-img">
          <ImageFallBack
            className="contain-fit"
            src={`/images/speaker-${id}.jpg`}
            width="300"
            alt={`${first} ${last}`}
            />
        </div>
    )
  }

  function SpeakerFavorite() {
    const [inTransition, setIntransition] = useState(false);
    const { speaker, updateRecord} = useContext(SpeakerContext);
    const {favorite } = speaker;

    function doneCallback() {
      setIntransition(false);
      console.log(`In SpeakerFavorite: doneCallback, ${new Date().getMilliseconds()}`)
    }
    return (
      <div className="action padB1">
        <span
              onClick={()=>{
                setIntransition(true);
                updateRecord({...speaker, favorite: !favorite}, doneCallback)
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
  
  function SpeakerDemographics() {
    const { speaker } = useContext(SpeakerContext);
    const { first, last, bio, company, twitterHandle, favorite } = speaker
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
  
  function Speaker({ speaker, updateRecord, insertRecord, deleteRecord }) {
    const { showSessions } = useContext(SpeakerFilterContext);
    return (
      <SpeakerProvider speaker={speaker} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord} >
            <div key={speaker.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
              <div className="card card-height p-4 mt-4">
    
                  {/* speaker Image */}
                  <SpeakerImage />

                  {/* speaker favourite */}
                  <SpeakerFavorite />
    
                  {/* speaker demographics */}
                  <SpeakerDemographics />
    
                  {/* speaker speaking sessions */}
                  {showSessions === true ? <Sessions /> : null } 
                  {/* <Sessions sessions={sessions} /> */}
                  {/* <p>{ showSessions }</p> */}

                  <SpeakerDelete />
              </div>
          </div>
      </SpeakerProvider>
    )
  }

  export default Speaker;
  