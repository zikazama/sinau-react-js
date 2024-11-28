import { createContext } from 'react';

const NameContext = createContext('');

function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    </NameContext.Provider>
  );
} 

function Body() {
  return <Greeting />;
} 

function Greeting() {
  return (
    <NameContext.Consumer>
      {name => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}


import { createContext, useContext } from 'react';

const NameContext = createContext('');

function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    </NameContext.Provider>
  );
} 

function Body() {
  return <Greeting />;
} 

function Greeting() {
	const name = useContext(NameContext);
  //useContext with name of context
  return (
    <h1>Welcome, {name}</h1>
  );
}