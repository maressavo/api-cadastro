package com.example.cadastro.dto;

import com.example.cadastro.model.Pessoa;

public record PessoaResponseDto(
                                long id,
                                String nome,
                                String sexo,
                                String cargo,
                                String funcao,
                                String endereco,
                                String telefone,
                                String dataNasc,
                                String foto,
                                String situacao ) {

    public PessoaResponseDto(Pessoa pessoa) {
        this(
                pessoa.getId(),
                pessoa.getNome(),
                pessoa.getSexo(),
                pessoa.getCargo(),
                pessoa.getFuncao(),
                pessoa.getEndereco(),
                pessoa.getTelefone(),
                pessoa.getDataNasc(),
                pessoa.getFoto(),
                pessoa.getSituacao()
        );
    }

}