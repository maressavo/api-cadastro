import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { PessoaData } from "../interface/PessoaData";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PessoaData[]> => {
    const response = await axios.get<PessoaData[]>(API_URL+'/cadastro');
    return response;
};

export function usePessoaData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['pessoa-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    };
}