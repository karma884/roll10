import { useState } from "react";
import Game from "./components/Game";
import Sidebar from "./components/Sidebar";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row align-items-baseline">
        <Sidebar loggedIn={loggedIn} />

        {loggedIn ? (
          <Game />
        ) : (
          <div>You need to log in to see this content</div>
        )}
      </div>
    </div>
  );
}

export default App;
