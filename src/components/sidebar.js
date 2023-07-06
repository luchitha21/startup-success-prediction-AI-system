import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function SidebarWrapper() {
  const [activePage, setActivePage] = useState("search");

  const onClick = () => {
    const sideMenu = document.querySelector("aside");
    sideMenu.style.display = "block";
  };

  const onCloseButtonClick = () => {
    const sideMenu = document.querySelector("aside");
    sideMenu.style.display = "none";
  };

  const onPageClick = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <>
      <aside onClick={() => onClick()}>
        <div className="top">
          <div className="logo">
            <h2>
              FUN<span className="danger">DERS</span>
            </h2>
          </div>
          <div
            className="close"
            id="close-btn"
            onClick={() => onCloseButtonClick()}
          >
            <span className="material-icons-sharp">close</span>
          </div>
        </div>
        <div className="sidebar">
          <Link
            to="/"
            className={activePage === "search" ? "active" : ""}
            onClick={() => onPageClick("search")}
          >
            <span className="material-icons-sharp">manage_search</span>
            <h3>Search</h3>
          </Link>
          <Link
            to="/prediction"
            className={activePage === "prediction" ? "active" : ""}
            onClick={() => onPageClick("prediction")}
          >
            <span className="material-icons-sharp">query_stats</span>
            <h3>Prediction</h3>
          </Link>
          <Link
            to="/about"
            className={activePage === "about" ? "active" : ""}
            onClick={() => onPageClick("about")}
          >
            <span className="material-icons-sharp">info</span>
            <h3>About</h3>
          </Link>
        </div>
      </aside>
      <Outlet />
    </>
  );
}

export default SidebarWrapper;
