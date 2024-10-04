import { useEffect, useState } from "react";
import { PessoaData } from "../../interface/PessoaData";
import { usePessoaDataPut } from "../../hooks/usePessoaDataPut";

import "../create-modal/modal.css";

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: string): void;
    required?: boolean;
}

interface ModalProps {
    closeModal(): void;
    pessoaData: PessoaData;
}

const Input = ({ label, value, updateValue, required = true }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} required={required}  className={label}></input>
        </>
    )
}

export function EditModal({ closeModal, pessoaData }: ModalProps){

    const [id, setId] = useState(pessoaData.id);
    const [nome, setNome] = useState(pessoaData.nome);
    const [sexo, setSexo] = useState(pessoaData.sexo);
    const [cargo, setCargo] = useState(pessoaData.cargo);
    const [funcao, setFuncao] = useState(pessoaData.funcao);
    const [endereco, setEndereco] = useState(pessoaData.endereco);
    const [telefone, setTelefone] = useState(pessoaData.telefone);
    const [dataNasc, setDataNasc] = useState(pessoaData.dataNasc);
    const [foto, setFoto] = useState(pessoaData.foto);
    const [situacao, setSituacao] = useState(pessoaData.situacao);

    const { mutate, isSuccess } = usePessoaDataPut();

    const handleSexoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSexo = event.target.value;
        setSexo(selectedSexo);

        if (selectedSexo === 'Masculino'){
            setFoto("src/images/masculino.png");
        }
        if (selectedSexo === 'Feminino'){
            setFoto("src/images/feminino.png");
        }
    };

    const handleCargoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCargo(event.target.value);
    };

    const handleFuncaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFuncao(event.target.value);
    };

    const handleSituacaoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSituacao(event.target.value);
    };

    const enviar = () => {
        const updatePessoaData: PessoaData = {
            id,
            nome,
            sexo,
            cargo,
            funcao,
            endereco,
            telefone,
            dataNasc,
            foto,
            situacao

        };
        mutate(updatePessoaData);
    };

    useEffect(() => {
        if (isSuccess) {
            closeModal();
        }
    }, [isSuccess, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h1>Editar Pessoa</h1>
                <form action="" className="input" onSubmit={enviar}>
                    <div>
                        <Input label="Nome" value={nome} updateValue={setNome} />
                    </div>
                    <div>
                        <div className="radio-group sexo">
                            <label htmlFor="sexo">Sexo</label>
                            <select name="sexo" value={sexo} onChange={handleSexoChange} required>
                                <option value="">Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>
                        <div className="cargo">
                            <label htmlFor="cargo">Cargo</label>
                            <select name="cargo" value={cargo} onChange={handleCargoChange} required>
                                <option value="">Selecione o cargo</option>
                                <option value="Membro">Membro</option>
                                <option value="Auxiliar">Auxiliar</option>
                                <option value="Diácono">Diácono</option>
                                <option value="Diaconisa">Diaconisa</option>
                                <option value="Presbítero">Presbítero</option>
                                <option value="Evangelista">Evangelista</option>
                                <option value="Missionária(o)">Missionária(a)</option>
                                <option value="Pastor(a)">Pastor(a)</option>
                            </select>
                        </div>
                        <div className="funcao">
                            <label htmlFor="funcao">Função</label>
                            <select name="funcao" value={funcao} onChange={handleFuncaoChange} required>
                                <option value="">Selecione a função</option>
                                <option value="Membro da Juventude">Membro da Juventude</option>
                                <option value="Coordenador(a)">Coordenador(a)</option>
                                <option value="Esposa(o) de líder">Esposa(o) de líder</option>
                                <option value="Vice Líder">Vice Líder</option>
                                <option value="Esposa(o) de Vice Líder">Esposa(o) de Vice Líder</option>
                                <option value="Líder de Campo">Líder de Campo</option>
                                <option value="Tesoureiro(a)">Tesoureiro(a)</option>
                                <option value="Secretário(a)">Secretário(a)</option>
                                <option value="Líder">Líder</option>
                            </select>
                        </div>
                    </div>
                    <div><Input label="Endereço" value={endereco} updateValue={setEndereco} required/></div>
                    <div>
                        <div className="telefone"><Input label="Telefone" value={telefone} updateValue={setTelefone} required/></div>
                        <div className="nascimento" ><Input label="Data de Nascimento" value={dataNasc} updateValue={setDataNasc} required/></div>
                        <div className="situacao">
                            <label htmlFor="situacao">Situação</label>
                            <select name="situacao" value={situacao} onChange={handleSituacaoChange} required>
                                    <option value="">Selecione a situação</option>
                                    <option value="Ativo(a)">Ativo(a)</option>
                                    <option value="Inativo(a)">Inativo(a)</option>
                            </select>
                        </div>
                    </div>
                    <div className="botoes">
                        <button onClick={closeModal} className="btn-danger" >Voltar</button>
                        <input type="submit" value="Salvar" className="btn-secondary"/>
                    </div>
                </form>
            </div>
        </div>     
    )
}
