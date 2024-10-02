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
            <p><b>Sexo:</b> {sexo}</p>
            <p><b>Cargo:</b> {cargo}</p>
            <p><b>Função:</b> {funcao}</p>
            <p><b>Endereço: </b> {endereco}</p>
            <p><b>Telefone:</b> {telefone}</p>
            <p><b>Data de Nascimento:</b> {dataNasc}</p>
            <p><b>Situação:</b> {situacao}</p>
        </div>
    );
}
