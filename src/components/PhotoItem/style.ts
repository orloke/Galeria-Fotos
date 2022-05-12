import styled from "styled-components";

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        max-width: 100%;
        display: block;
        margin-bottom: 0px;
        border-radius: 10px
    }

    p{
        margin-top: 0px;
    }

    @media screen and (max-width: 600px){
        p{
            font-size: 13px;
        }
    }
`

export const Button = styled.button`
    background-color: #f45936;
    border: none;
    color: #fff;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`

export const ButtonDownload = styled.button`
    background-color: #8ec454;
    margin-top: 6%;
    border: none;
    color: #fff;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }
`