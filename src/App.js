import "./App.css";
import Data from "./Profile/Component/Data";

const handleName = (Fullname) => alert(`${Fullname}`);
function App() {
  const user = {
    Fullname: "azzachelly",
    Bio: "x",
    Profession: "y",
  };
  return (
    <div className="App">
      <Data user={user} handleName={handleName}>
        <img src="image.jpg" alt="image" />
      </Data>

      <input type="text" />
    </div>
  );
}

export default App;
