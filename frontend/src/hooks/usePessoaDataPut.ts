import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PessoaData } from "../interface/PessoaData";

const API_URL = 'http://localhost:8080';

const putData = async (data: PessoaData): AxiosPromise => {
    const response = axios.put(API_URL + '/cadastro/' + data.id, data);
    return response;
};

const filter: InvalidateQueryFilters = { queryKey: ['pessoa-data'] };

export function usePessoaDataPut() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(filter)
        }
    });

    return mutate;
}