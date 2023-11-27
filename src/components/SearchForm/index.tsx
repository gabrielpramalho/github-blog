import * as z from 'zod';

import { FormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

interface SearchFormProps{
    qtdPosts: number
}

const searchFormSchema = z.object({
    query: z.string(),
})


type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ qtdPosts }: SearchFormProps){

    const { fetchSearch } = useContext(BlogContext)

    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSearchPost(data: SearchFormInputs){
        fetchSearch(data.query)
    }

    return(
        <FormContainer onSubmit={handleSubmit(handleSearchPost)}>
            <div>
                <span>Publicações</span>
                 <span>{qtdPosts} publicações</span>
            </div>
            <input 
                type="text"
                placeholder="Buscar conteúdo" 
                {...register('query')}
            />
        </FormContainer>
    )
}