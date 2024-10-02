package com.example.cadastro.model;

import com.example.cadastro.dto.PessoaRequestDto;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "pessoa", schema = "pessoa")
@Entity(name = "pessoa")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "endereco")
    private String endereco;

    @Column(name = "sexo")
    private String sexo;

    @Column(name = "cargo")
    private String cargo;

    @Column(name = "funcao")
    private String funcao;

    @Column(name = "telefone")
    private String telefone;

    @Column(name = "nasc")
    private String dataNasc;

    @Column(name = "foto")
    private String foto;

    @Column(name = "situacao")
    private String situacao;

    public Pessoa(PessoaRequestDto dados) {
        this.nome = dados.nome();
        this.endereco = dados.endereco();
        this.telefone = dados.telefone();
        this.dataNasc = dados.dataNasc();
        this.foto = dados.foto();
        this.situacao = dados.situacao();
        this.sexo = dados.sexo();
        this.cargo = dados.cargo();
        this.funcao = dados.funcao();
    }

}