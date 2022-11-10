import SetStateComponent from "./components/SetStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import "./index.css";

function App() {
  return (
    <div>
      <SetStateComponent />
      <hr className="dashed" />
      <UseEffectComponent />
      <hr className="dashed" />
      <UseReducerComponent />
    </div>
  );
}

export default App;
