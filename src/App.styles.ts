import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: white;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`
export const Fotos = styled.div`

    text-align: center;

    .emoji{
        font-size: 50px
    }
`
export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
      }
`
export const UploadForm = styled.form`
    background-color: #3d3f43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        width: 90%;
        gap: 2%
    }

    input[type=submit]{
        background-color: #756df4;
        border: none;
        color: #fff;
        padding: 8px 16px;
        border-radius: 10px;
        cursor: pointer;
        
        &:hover{
            opacity: 0.7;
        }
    }

    input[type=file]{
        width: 50%;
        padding: 14px 16px;
        border-radius: 10px;
        background-color: #1c1c1e6b;
    }
`