const SpeakerReducer =(state, action) => {
    const updateFavourite = (favoriteVal) => {
        return state.speakerList.map((item, index) => {
            if(item.id === action.id) {
                return {...item, favorite: favoriteVal}
            }
            return item
        })
    }

    switch (action.type) {
        case "setSpeakerList" : {
            return { ...state, speakerList: action.data, isLoading: false}
        }
        case "favorite" : {
            // return updateFavourite(true)
            return { ...state, speakerList: updateFavourite(true)}
        }
        case "unvaforite": {
            // return updateFavourite(false)
            return { ...state, speakerList: updateFavourite(false)}
        }
        default : 
            return state
    }
}

export default SpeakerReducer;