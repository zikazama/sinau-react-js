import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="content">
      <h1 style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        margin: '10px'
      }}>Content</h1>
    </div>
  );
};

export default Content;
