import "./App.css";
import ErrorBoundary from "./component/ErrorBoundary";
// import ClickCount from "./component/ClickCount";
// import Hovercount from "./component/Hovercount";
import UserComp from "./component/UserComp";

function App() {
  return (
    <div className="App">
      {/* <ClickCount />
      <Hovercount /> */}
      <ErrorBoundary>
        <UserComp name=" Sumit " />
      </ErrorBoundary>
      <ErrorBoundary>
        <UserComp name=" Shreyas " />
      </ErrorBoundary>
      <ErrorBoundary>
        <UserComp name=" Om " />
      </ErrorBoundary>
      <ErrorBoundary>
        <UserComp name=" Amaan " />
      </ErrorBoundary>
    </div>
  );
}

export default App;
