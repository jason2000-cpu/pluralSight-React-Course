import  { useContext } from 'react';
import { SpeakerContext } from '@/Contexts/speakerContext';


function SpeakerDelete() {
    const { speaker, deleteRecord } = useContext(SpeakerContext);
    
    return (
        <span className="session w-100">
            <a href='#' className="remSes">
                <i onClick={(e) => {
                    e.preventDefault();
                    if (
                        window.confirm("Are You Sure You Want to Delete This Speaker?")
                    ){
                        deleteRecord(speaker);
                    }
                }} >
                    -
                </i>
            </a>
        </span>
    )
}

export default SpeakerDelete;