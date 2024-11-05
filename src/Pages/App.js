import logo from "../Assets/logo.png"
import { Container } from "./styles";
import Input from "../Components/Input";
import ItemRepo from "../Components/ItemRepo";
import { useState } from "react";
import Button from "../Components/Button";
import { api } from "../Services/api";

const App = () => {
  const [repos, setRepos] = useState([])
  const [cRepo, setCRepo] = useState('')
  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${cRepo}`)
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      
      if(!isExist){
        setRepos(prev => [...prev, data])
        setCRepo('')
        return
      }
      else{
        alert('Repositório já adicionado!')
      }
    }
    else{
      alert('Repositório não encontrado!')
    }
  }
  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id))
  }
  return (
    <Container>
      <img src={logo} alt="logo do GitHub" width={64} height={64}/>
      <Input value={cRepo} onChange={(e) => setCRepo(e.target.value)}/><Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
