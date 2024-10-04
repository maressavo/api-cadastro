import { useState } from "react";
import { EditModal } from "../edit-modal/edit-modal";
import "./card.css";
import { PessoaData } from "../../interface/PessoaData";
import { usePessoaDataDelete } from "../../hooks/usePessoaDataDelete";

interface CardProps {
    id?: number;
    nome: string;
    endereco: string;
    sexo: string;
    cargo: string;
    funcao: string;
    telefone: string;
    dataNasc: string;
    foto: string;
    situacao: string;
}

export function Card({ id, nome, endereco, sexo, cargo, funcao, telefone, dataNasc, foto, situacao }: CardProps) {
    const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);
    const { mutate, isSuccess } = usePessoaDataDelete();
    
    const handleOpenEditModal = () => {
        setIsEditModalOpen(prev => !prev)
    }
    const deletar = () => {
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
    return (
        <div className="card">
            <img src={foto}/>
            <h2>{nome}</h2>
            <p className="dados"><b>Sexo:</b> {sexo}</p>
            <p className="dados"><b>Cargo:</b> {cargo}</p>
            <p className="dados"><b>Função:</b> {funcao}</p>
            <p className="dados"><b>Endereço: </b> {endereco}</p>
            <p className="dados"><b>Telefone:</b> {telefone}</p>
            <p className="dados"><b>Data de Nascimento:</b> {dataNasc}</p>
            <p className="dados"><b>Situação:</b> {situacao}</p>
            <div className="botoes">
                {isEditModalOpen && <EditModal closeModal={handleOpenEditModal} pessoaData={{ id, nome, endereco, sexo, cargo, funcao, telefone, dataNasc, foto, situacao }}/>}
                <button className="editar" onClick={handleOpenEditModal}>Editar</button>
                <button className="apagar" onClick={deletar}>Apagar</button>
            </div>
        </div>
    );
}
