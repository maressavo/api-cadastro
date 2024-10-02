import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PessoaData } from "../interface/PessoaData";

const API_URL = 'http://localhost:8080';

const postData = async (data: PessoaData): AxiosPromise => {
    const response = axios.post(API_URL + '/cadastro', data);
    return response;
};

const filter: InvalidateQueryFilters = { queryKey: ['pessoa-data'] };

export function usePessoaDataPost() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(filter)
        }
    });

    return mutate;
}