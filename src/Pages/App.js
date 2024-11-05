import logo from "../Assets/logo.png"
import { Container } from "./styles";
import Input from "../Components/Input";
import ItemRepo from "../Components/ItemRepo";

const App = () => {
  return (
    <Container>
      <img src={logo} alt="logo do GitHub" width={64} height={64}/>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
