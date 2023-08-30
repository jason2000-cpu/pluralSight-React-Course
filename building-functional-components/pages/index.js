import { data } from "../SpeakerData"
// import Speaker from "@/app/components/Speakers";

// import Speaker from "../src/components/Speakers";
import Speaker from '@/components/Speakers'


const IndexPage = () => {  
  return (
    <div className="container speakers-list">
      <div className="row">
      { data.map((speaker) => {
        return (
            <Speaker key={speaker.id} {...speaker} />
        )
      })}
      </div>
    </div>
  )
};

export default IndexPage;
