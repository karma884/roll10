import { useEffect, useState } from "react";
import Auth from "./Auth";

function Sidebar({ loggedIn }) {
  return (
    <div className="col-2 sidebar">
      {loggedIn ? (
        "placeholder, you are logged in"
      ) : (
        <Auth loggedIn={loggedIn} />
      )}
    </div>
  );
}

export default Sidebar;
