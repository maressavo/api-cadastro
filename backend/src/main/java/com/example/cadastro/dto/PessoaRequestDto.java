package com.example.cadastro.dto;

import org.antlr.v4.runtime.misc.NotNull;

public record PessoaRequestDto(String nome,
                               String endereco,
                               String sexo,
                               String cargo,
                               String funcao,
                               String telefone,
                               String dataNasc,
                               String foto,
                               String situacao){
}