import Posts from "./posts/Posts";

const Home = () => {
  let name = "Ali";
  const handleClick = () => {
    name = "Hossam";
    console.log(name);
  };
  return (
    <div className="home">
      {/* <button className="btn" onClick={(e) => handleClick("Hossam", e)}>
        Click Me
      </button> */}
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
      <h1> {name}</h1>
      <Posts />
    </div>
  );
};

export default Home;
