import logo from "./logo.svg";
import "./App.css";
import FunctiomComp from "./components/functionComp";
import ClassComp from "./components/ClassComp.js";
import MyComp from "./components/myComp.js";
import FriendComp from "./components/FriendComp.js";

function App() {
  return (
    <div className="App">
      <FunctiomComp />
      <ClassComp />
      <MyComp />
      <FriendComp />
    </div>
  );
}

export default App;
