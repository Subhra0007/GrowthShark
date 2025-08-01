import { useState } from "react";
import HomeAttack from "./pages/HomeAttack";
import HomeStealth from "./pages/HomeStealth";

function App() {
  const [isStealth, setIsStealth] = useState(false); 

  const toggleMode = () => {
    setIsStealth(!isStealth);
  };

  return (
    <div>
      {isStealth ? (
        <HomeStealth toggleMode={toggleMode} />
      ) : (
        <HomeAttack toggleMode={toggleMode} />
      )}
    </div>
  );
}

export default App;
