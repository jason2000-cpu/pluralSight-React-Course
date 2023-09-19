
function SpeakerAdd({ eventYear, insertRecord }) {
    return (
        <a href="#" className="addSes">
            <i onClick={(e) => {
                e.preventDefault();
                const firstLast = window.prompt("Enter first and last name:", "")
                const firstLastArray  = firstLast.split(' ');
                insertRecord({
                    id: "99999",
                    first: firstLastArray[0],
                    last: firstLastArray[1],
                    bio: "Bio not entered yet",
                    sessions: [
                        {
                            id: "88888",
                            title: `New Session For ${firstLastArray[0]}`,
                            root: {
                                name: "Main Ball Room"
                            },
                            eventYear,
                        }
                    ]
                })
            }}
            />
            +
        </a>
    )

}

export default SpeakerAdd;