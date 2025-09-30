import "./App.css";
// import FunctiomComp from "./components/functionComp";
import ClassComp from "./components/ClassComp.js";
// import MyComp from "./components/myComp.js";
// import FriendComp from "./components/FriendComp.js";
// import MyFunctionComp from "./components/MyFuctionComp.js";

function App() {
  return (
    <div className="App">
      {/* <FunctiomComp fname="sumit" post="CEO" /> */}
      <ClassComp fname="OM" post="Technical lead" />
      {/* <MyComp />
      <FriendComp />
      <MyFunctionComp /> */}
    </div>
  );
}

export default App;
