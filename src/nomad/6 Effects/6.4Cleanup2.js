import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    //이게 짧아서 더 많이들 쓴다
    console.log("hi:)");
    return () => console.log("bye:(");
  }, []);
  // useEffect(function () {
  //   //요새 이건 너무 길어서 안쓴다
  //   console.log("hi:)");
  //   return function () {
  //     console.log("bye:(");
  //   };
  // }, []);
  // return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}
export default App;
