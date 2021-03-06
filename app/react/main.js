import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

// Components

import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";

// Pages

import Blog from "./pages/blog.js";
import Home from "./pages/home.js";
import Members from "./pages/members.js";
import Programs from "./pages/programs.js";
import Projects from "./pages/projects.js";
import Resources from "./pages/resources.js";

const App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="blog" component={Blog}/>
      <Route path="members" component={Members}/>
      <Route path="programs" component={Programs}/>
      <Route path="projects" component={Projects}/>
      <Route path="resources" component={Resources}/>
    </Route>
  </Router>
), document.querySelector(`#app`));
