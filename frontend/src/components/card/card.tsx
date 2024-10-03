import "./card.css";

interface CardProps {
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

export function Card({ nome, endereco, sexo, cargo, funcao, telefone, dataNasc, foto, situacao }: CardProps) {
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
        </div>
    );
}
