import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <div className="logo">My Website</div>
            <ul id="navlist" className={this.state.menuOpen ? "active" : ""}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
            <div className="menu" onClick={this.toggleMenu}>
              &#9776;
            </div>
          </nav>
        </header>

        <section>
          <h1>Welcome to My Responsive Website</h1>
          <p>This design adapts to various screen sizes 🚀</p>
        </section>

        <footer>Copyright © 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
