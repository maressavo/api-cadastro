import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PessoaData } from "../interface/PessoaData";

const API_URL = 'http://localhost:8080';

const deleteData = async (data: PessoaData): AxiosPromise => {
    const response = axios.delete(API_URL + '/cadastro/' + data.id);
    return response;
};

const filter: InvalidateQueryFilters = { queryKey: ['pessoa-data'] };

export function usePessoaDataDelete() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(filter)
        }
    });

    return mutate;
}