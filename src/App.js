import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ChracterContainer from "./components/ChracterContainer";




function App() {
const [characters, setCharacter] = useState(null);
const reqApi= async () => {
const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3");
const frase = await api.json();
setCharacter(frase);
};



  return (
      <Container>
        <Header/>
        {!characters ? (
          <Welcome reqApi={reqApi} />
        ) : (
          <ChracterContainer characters={characters} reqApi={reqApi}/>
        )} 
      </Container>  
  );
}

export default App;
