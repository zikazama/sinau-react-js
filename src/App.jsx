import { MountingClass } from "./components/MountingClass";
import TodoPage from "./pages/TodoPage";
import { UpdatingClass } from "./components/UpdatingClass";
import { UnmountingClass } from "./components/UnmountingClass";
import { useState } from "react";

const App = () => {

  const [isShow, setShow] = useState(false);

  return (
    <>
      {/* <TodoPage/> */}
      <button onClick={() => setShow(!isShow)}>Show</button>
      {isShow && <UnmountingClass/> }     
    </>
  );
};
export default App;