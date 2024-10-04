package com.example.cadastro.controller;

import com.example.cadastro.dto.PessoaRequestDto;
import com.example.cadastro.dto.PessoaResponseDto;
import com.example.cadastro.model.Pessoa;
import com.example.cadastro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("cadastro")
public class CadastroController {

    @Autowired
    private PessoaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<PessoaResponseDto> findAll() {

        return repository.findAll().stream().map(PessoaResponseDto::new).toList();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void addPessoa(@RequestBody PessoaRequestDto dados) {
        Pessoa dadosPessoa = new Pessoa(dados);
        repository.save(dadosPessoa);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<PessoaResponseDto> editPessoa(@PathVariable Long id, @RequestBody PessoaRequestDto dados) {
        Optional<Pessoa> optionalPessoa = repository.findById(id);

        if (optionalPessoa.isPresent()) {
            Pessoa pessoa = optionalPessoa.get();
            pessoa.setNome(dados.nome());
            pessoa.setDataNasc(dados.dataNasc());
            pessoa.setTelefone(dados.telefone());
            pessoa.setEndereco(dados.endereco());
            pessoa.setCargo(dados.cargo());
            pessoa.setFuncao(dados.funcao());
            pessoa.setSituacao(dados.situacao());
            pessoa.setSexo(dados.sexo());
            pessoa.setFoto(dados.foto());

            repository.save(pessoa);
            return ResponseEntity.ok(new PessoaResponseDto(pessoa));
        }
        else {
            return ResponseEntity.notFound().build();
        }

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletePessoa(@PathVariable Long id) {
        try {
            if (repository.existsById(id)) {
                repository.deleteById(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else {
                throw  new ResponseStatusException(HttpStatus.NO_CONTENT, "Pessoa não encontrada!");
            }
        }
        catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao tentar apagar o cadastro.", e);
        }
    }
}