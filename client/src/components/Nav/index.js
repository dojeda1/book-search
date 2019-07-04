import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">Google Books</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
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
