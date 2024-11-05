import styled from "styled-components";

export const ItemContainer = styled.section`
    width: 80%;

    h2{
        font-size: 32px;
        color: #F0F0F0;
    }
    p{
        font-size: 16px;
        color: #F0F0F075;
        margin-bottom: 16px;
    }
    a{
        color: #00F;
        margin-top: 16px;
    }
    a: hover{
        color: #00F5;
        cursor: pointer;
    }
    a.remove{
        color: #F00;
        margin-top: 16px;
    }
    a.remove: hover{
        color: #F005;
        cursor: pointer;
    }
    hr{
        color: #F0F0F050;
        margin: 20px 0;
    }
`