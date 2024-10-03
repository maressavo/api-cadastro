import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { usePessoaData } from './hooks/usePessoaData';
import { CreateModal } from './components/create-modal/create-modal';
import "react-datepicker/dist/react-datepicker.css";                           

function App() {
  const { data } = usePessoaData();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
      <div className="container">
        <h1>Pessoas Cadastradas</h1>
        <div className="card-grid">
          {data?.map(pessoaData =>
            <Card 
              nome={pessoaData.nome}
              sexo={pessoaData.sexo}
              cargo={pessoaData.cargo}
              funcao={pessoaData.funcao}
              endereco={pessoaData.endereco}
              telefone={pessoaData.telefone}
              dataNasc={pessoaData.dataNasc}
              foto={pessoaData.foto}
              situacao={pessoaData.situacao}
            />
          )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button className='novoCadastro' onClick={handleOpenModal}>Novo cadastro</button>
      </div>
  )
}

export default App
