import { useEffect, useState } from "react";
import Bubling2 from "./components/Bubling2";
import { Eclipse } from "react-loading-io";
import data from "./data.json";
import CardComponent from "./components/CardComponent";
import SignupForm from "./components/SignUp";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [students, setStudent] = useState([]);

  // create a function to fetch data
  async function fetchData() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();
    setStudent(users);
    setLoading(false);
  }

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    //   setStudent(data.students);
    // }, 3000);
    fetchData();
  }, []);

  // if (isLoading) {
  //   return <>{"Berhasil tampil"}</>;
  // } else {
  //   return <Eclipse size={64} />;
  // }

  return (
    <>
      {/* <div className="container">
        {isLoading ? (
          <Eclipse size={64} />
        ) : (
          students.map((student) => {
            return (
              <CardComponent
                key={student.id}
                title={student.username}
                text={student.email}
                objectData={student}
              />
            );
          })
        )}
      </div> */}
      <SignupForm/>
    </>
  );
};
export default App;
