import * as C from './style'
import {useState} from 'react'

type Props = {
    url: string,
    name: string,
    deletar: (escreva:string)=> void,
}

export const PhotoItem = ({url, name, deletar}: Props) =>{
    const [mudarButton, setMudarButton] =useState(true)
    const teste= ()=>{
        setMudarButton(false)
        deletar(name)
    }
    return(
        <C.Container>
            <div>
                <a href= {url} target = '_blank' rel='noreferrer'>
                    <img src= {url} alt={name} />
                </a>
                
                <p>{name}</p>
            </div>

            <C.Button onClick={teste}>{mudarButton?'Deletar':'Deletando...'}</C.Button>
        </C.Container>
    )
}