import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";
import PostDetails from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about">
              <About />
            </Route>
            <Route path="/hi">
              <Redirect to="/about" />
            </Route>
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/create" component={CreatePost} />
            <Route path="*" component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
