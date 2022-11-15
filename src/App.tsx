import "./App.css";
import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  // const personName = {
  //   first: "Somebody",
  //   last: "Anybody",
  // };

  // const nameList = [
  //   {
  //     first: "firstname1",
  //     last: "lastname1",
  //   },
  //   {
  //     first: "firstname2",
  //     last: "lastname2",
  //   },
  //   {
  //     first: "firstname3",
  //     last: "lastname3",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Edmond" messageCount={20} isLogIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      
      <Status status="loading" />
      <Heading>Something</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Edmond" isLogIn={false} />
    </div>
  );
}

export default App;
