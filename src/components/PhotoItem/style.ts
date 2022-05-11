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