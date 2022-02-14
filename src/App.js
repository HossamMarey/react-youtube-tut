import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about/*" element={<About />}>
              <Route
                path="hello"
                element={
                  <div>
                    <br /> <br /> <hr /> <br />
                    <p>Hellooooooooo</p>
                  </div>
                }
              />
            </Route>

            <Route path="/hi" element={<Navigate to="/about" />} />

            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
