import { useState } from "react";
import Header from "@/components/Header"
import Speakers from "@/components/Speakers"

function App() {
    const [theme, setTheme] = useState('light');
    return (
      <div className= {theme === "light" ? "container-fluid" : "container-fluid dark"}>
          <Header theme={theme} />
          <Speakers theme={theme} setTheme={setTheme}  />
      </div>
    )
}

export default App;
