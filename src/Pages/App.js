import logo from "../Assets/logo.png"
import { Container } from "./styles";
import Input from "../Components/Input";
import ItemRepo from "../Components/ItemRepo";
import { useState } from "react";
import Button from "../Components/Button";

const App = () => {
  const [repos, setRepos] = useState([])

  
  return (
    <Container>
      <img src={logo} alt="logo do GitHub" width={64} height={64}/>
      <Input /><Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
