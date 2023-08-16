import React, {createContext, useState} from "react";

import Home from "./Home";
import Speakers from "./Speakers";


export const ConfigContext = createContext(true);

const PageToShow = pageName => {
    if (pageName === 'Home') return <Home />;
    if (pageName === 'Speakers') return <Speakers />;
    return <div>Page Not Found</div>
}

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true
}


const App =({pageName}) => {
    return (
       <ConfigContext.Provider  value={configValue}>
         {PageToShow(pageName)}
       </ConfigContext.Provider>
    )
}
export default App;