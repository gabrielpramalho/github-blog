import * as z from 'zod';

import { FormContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';



const searchFormSchema = z.object({
    query: z.string(),
})


type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){

    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    function handleSearchPost(data: SearchFormInputs){
        console.log(data)
    }

    return(
        <FormContainer onSubmit={handleSubmit(handleSearchPost)}>
            <div>
                <span>Publicações</span>
                 <span>6 publicações</span>
            </div>
            <input 
                type="text"
                placeholder="Buscar conteúdo" 
                {...register('query')}
            />
        </FormContainer>
    )
}