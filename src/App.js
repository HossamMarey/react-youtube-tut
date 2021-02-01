import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostDetails from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/create" component={CreatePost} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
