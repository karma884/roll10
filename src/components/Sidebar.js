import { useEffect, useState } from "react";
import { Button } from "./Buttons";
import { ReactComponent as ArrowLeft } from "../icons/arrow-left-short.svg";
import { ReactComponent as ArrowRight } from "../icons/arrow-right-short.svg";
import Auth from "./Auth";
import request from "../request";
import url from "../api-url";
import AuthApi from "../auth-api";

const api = new AuthApi(url, (url, options) => request(url, fetch, options));

function Sidebar({ loggedIn, setLoggedIn }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className={`sidebar ${visible ? "col-2" : "collapsed"}`}>
      <Button
        className="show-sidebar-btn"
        children={visible ? <ArrowLeft /> : <ArrowRight />}
        callback={() => setVisible(!visible)}
      />
      <div className={visible ? "visible" : "invisible"}>
        {loggedIn ? (
          <Button
            text="Log out"
            callback={() => {
              setLoggedIn(false);
              localStorage.removeItem("token");
            }}
            className="btn btn-secondary"
          />
        ) : (
          <Auth setLoggedIn={setLoggedIn} api={api} />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
