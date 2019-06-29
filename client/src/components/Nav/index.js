import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="/">Google Books</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="/">Search <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item ">
            <a class="nav-link active" href="/books">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
