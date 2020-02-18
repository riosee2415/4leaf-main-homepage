import React, { Component } from "react";
import { Home, About, Project, Contact } from "pages";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        {/* <Switch>
          <Route exact path="/About/:name" component={About} />
          <Route exact path="/About" component={About} />
        </Switch> */}
        <Route exact path="/About" component={About} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/Contact" component={Contact} />
      </>
    );
  }
}

export default App;
