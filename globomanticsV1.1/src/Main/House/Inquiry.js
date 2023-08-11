import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = (e) => {
        setContactInfo({...contactInfo, [e.target.id]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);

    }
    return ( 
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name"
                    placeholder="Name" value={contactInfo.name} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="text" className="form-control" id="email"
                    placeholder="Email" value={contactInfo.email} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input type="text" className="form-control" id="remarks"
                    placeholder="Remarks" value={contactInfo.remarks} onChange={onChange} />
            </div>
            <button 
                className="btn btn-primary"
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
     );
}
 
export default Inquiry;