import logo from "./logo.svg";
import "./App.css";
import MyMap from "./component/MyMap";
import Artist from "./component/Artist";
import PhotoCard from "./component/PhotoCard";

function App() {
  return (
    <div className="App">
      <MyMap></MyMap>
      <br></br>
      <Artist></Artist>
      <br></br>
      <PhotoCard></PhotoCard>
    </div>
  );
}

export default App;
