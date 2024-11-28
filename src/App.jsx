import TodoPageReduce from "./pages/TodoPageReduce";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <TodoProvider>
          <TodoPageReduce />
      </TodoProvider>
    </div>
  );
};
export default App;
