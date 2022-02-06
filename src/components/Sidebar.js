import { useEffect, useState } from "react";
import { Button } from "./Buttons"
import { ReactComponent as ArrowLeft } from '../icons/arrow-left-short.svg';
import { ReactComponent as ArrowRight } from '../icons/arrow-right-short.svg';
import Auth from "./Auth";

function Sidebar({ loggedIn }) {
  const [visible, setVisible] = useState(true)

  return (
    <div className={`sidebar ${visible ? "col-2" : "collapsed"}`}>
      <Button
        className="show-sidebar-btn"
        children={visible ? <ArrowLeft /> : <ArrowRight />}
        callback={() => setVisible(!visible)}
      />
      <div className={visible ? "visible" : "invisible"}>
        {loggedIn ? (
          "placeholder, you are logged in"
        ) : (
          <Auth loggedIn={loggedIn} />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
