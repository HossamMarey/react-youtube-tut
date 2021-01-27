import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostDetails from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Home />
        {/* <PostDetails /> */}
        {/* <CreatePost /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
