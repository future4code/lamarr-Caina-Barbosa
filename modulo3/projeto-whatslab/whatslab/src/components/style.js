import styled from 'styled-components'

export const HeaderStyle = styled.header`
    display : flex;
    flex-direction : row;
    justify-content : center;
    height : 10vh;


`
export const SidebarStyle = styled.div`
    background-color : orange;
    width : 15vw;
`

export const BodyStyle = styled.body`
    width : 100vw;
    height : 87vh;
    display: flex;
    flex-direction: row;
`
export const CenterBox = styled.div `
    width : 70vw;
    background-color : wheat;
    display: flex;
    flex-direction:column;
    justify-content: flex-end;
    
`

export const MessageBox = styled.div `
    width : 70vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height : 4vh; 
    align-items: center;

`
export const Footer = styled.footer `
    width : 100vw;
    background-color: grey;
    height : 3vh;
    text-align: center;
`
export const MessagesBody = styled.div `
    width : 70vw;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start; 
    margin: 2vh;
    align-items: flex-start;
`

export const MessageDisplay = styled.div `
    background: #00bfb6;
    padding: 20px;
    text-align: center;
    color: #fff;
    font-family: arial;
    position:relative;
    display:flex;
    height: 25px;
    align-items: center;
    margin-bottom: 20px;

    :before {
        content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #00bfb6;
    border-top: 10px solid #00bfb6;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 6px;
    }     
`
export const Message = styled.p `
    color: #fff;
    
`
export const Sender = styled.p `
    margin-right : 15px;
    color: black;
    
`
