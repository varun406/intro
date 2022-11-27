import "./App.css";
import Header from "./components/header/Header";
import { Container } from "./components/header/Header.styles";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <Container>
      <Header />
      <Intro />
    </Container>
  );
}

export default App;
