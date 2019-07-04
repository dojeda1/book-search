import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <a className="navbar-brand" href="/">Google Books</a>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="/">Search <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active" href="/books">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
