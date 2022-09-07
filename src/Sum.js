import { LanguageContext } from "./LanguageContext"

const Languages = {
    en: {CURRENT_LANGUAGE: 'The sum of the numbers is'},
    it: {CURRENT_LANGUAGE: 'La somma dei numeri è'}
}


export function Sum({from = [1, 2, 3, 4]}){
    return (
        <div>
            <LanguageContext.Consumer>
                {Language => {
                   return(
                    <h1>{Languages[Language].CURRENT_LANGUAGE}: {from.reduce((previousN, currentN) => previousN + currentN, 0)}</h1>
                   ) 
                }}
               
            </LanguageContext.Consumer>
            
        </div>
    )
}