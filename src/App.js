// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Project from "./elements/project";
import Visual from "./elements/visual";

function App() {
  return (
    <div className="App">
      <h2 className="page-title-outer">
        <b className="page-title-inner">
          LEONARD
          <p>PABST</p>
        </b>
      </h2>
      <Visual />
      <Project title="title" text="text" image="" link="abc" />
    </div>
  );
}

export default App;
