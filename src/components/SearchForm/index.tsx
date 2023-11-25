import { FormContainer } from "./styles";

export function SearchForm(){
    return(
        <FormContainer>
            <div>
                <span>Publicações</span>
                 <span>6 publicações</span>
            </div>
            <input type="text" placeholder="Buscar conteúdo" />
        </FormContainer>
    )
}