import logo from "../Assets/logo.png"
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <img src={logo} alt="logo do GitHub" width={64} height={64}/>
    </Container>
  );
}

export default App;
