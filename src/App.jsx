import { useEffect, useState } from "react";
import Bubling2 from "./components/Bubling2";
import { Eclipse } from "react-loading-io";
import data from "./data.json";
import CardComponent from "./components/CardComponent";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [students, setStudent] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setStudent(data.students);
    }, 3000);
  }, []);

  // if (isLoading) {
  //   return <>{"Berhasil tampil"}</>;
  // } else {
  //   return <Eclipse size={64} />;
  // }

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Eclipse size={64} />
        ) : (
          students.map((student) => {
            return (
              <CardComponent
                key={student.id}
                title={student.firstName}
                text={student.major}
              />
            );
          })
        )}
      </div>
    </>
  );
};
export default App;
