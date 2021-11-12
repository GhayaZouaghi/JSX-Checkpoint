import logo from "./logo.svg";
import photo from "./myimage.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="pic"
        style={{ border: "solid 1px black", width: "100vw" }}
      >
        <h1 class="title red">GHAYA</h1>

        <img src={photo} alt="computer" />

        <img src="/nature.jpg" alt="nature" />
      </div>

      <video
        src="/Sky.mp4"
        type="video/mp4"
        width="500"
        height="350"
        controls
      ></video>
    </div>
  );
}
export default App;
