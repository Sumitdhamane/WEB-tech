import "./App.css";
import Counter from "./components/Counter";
// import MyImageComp from "./components/MyImageComp";
// import MyCss from "./components/MyCss";
// import ShortCircuit from "./components/ShortCircuit.js";

import FunctiomComp from "./components/functionComp";
import ClassComp from "./components/ClassComp.js";
import Toggle from "./components/Toggle.js";
import MypureComp from "./components/MypureComp.js";
// import MyComp from "./components/myComp.js";
// import FriendComp from "./components/FriendComp.js";
// import MyFunctionComp from "./components/MyFuctionComp.js";
// import Condition from "./components/conditionalrender";

function App() {
  return (
    <div className="App">
      <FunctiomComp
        fname=" sumit "
        lname=" dhamane "
        contact=" 9586123475 "
        gender=" male "
        address=" kalyan "
      />
      <ClassComp
        fname=" sumit "
        lname=" dhamane "
        contact=" 9586123475 "
        gender=" male "
        address=" kalyan "
      />
      {/* <MyComp />
      <FriendComp />
      <MyFunctionComp /> */}
      {/* <Condition /> */}
      {/* <ShortCircuit /> */}
      {/* <MyCss /> */}
      {/* <MyImageComp /> */}
      <Counter />
      <Toggle />
      <MypureComp />
    </div>
  );
}

export default App;
