import styled from 'styled-components'

export const Header = styled.header`
    background-color: #FC7A00;
    width: 100vw;
    height: 5vh;
    text-align:center;
    padding-top: 2vh;
    font-style: italic;
    color:white;
    @media (min-width: 500px) {
        display: none;
    }

`

export const ProfileCard = styled.div`
    @media (min-width: 500px) {
        display: none;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 55vh;
    }
`
export const ProfilePic = styled.img`
    @media (min-width: 500px) {
        display: none;
    }
    object-fit: cover;
    width: 100%;
    height: 55vh;
`

export const ProfileDetails = styled.div`
    @media (min-width: 500px) {
        display: none;
    }
    display:flex;
    justify-content: left;
    background-color:#FF9732;
    padding: 2vh;

    #name {
        font-style: italic;
    }
`

export const MatchButtons = styled.div`
    @media (min-width: 500px) {
        display: none;
    }
    background-color:#f9c795;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right:10vw;
    padding-left:10vw;
    
    img {
        height: 10vh;

    }

`

export const FooterMatches = styled.div`
    @media (min-width: 500px) {
        display: none;
    }
    display:flex;
    background-color: #FF9732;
    color:white;
    height: 5vh;
    width: 100vw;
    position: absolute;
    bottom:0;
    justify-content: center;
    align-items: center;
    font-style: italic;

`

export const BioText = styled.div`
    @media (min-width: 500px) {
        display: none;
    }
    display:flex;
    background-color: #f9c795;
    height: 13vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    .bio{        
        align-self: flex-start;
        margin-top: 2vh;
        margin-left: 2vh;
        font-style: italic;
        font-size: large;
        font-family: "Helvetica";
    }
`

export const ProfileToChoose = styled.div`
    display:flex;
    flex-direction: column;
    height: 90vh;
    background-color: #f9c795;
    @media (min-width: 500px) {
        display: none;
    }
    
    
`
export const MatchDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    margin-top:1vh;
    margin-bottom: 1vh;
    padding-bottom: 1vh;
    padding-top: 1vh;
    background-color: #f9c795 ;
    
    img {
        object-fit: cover;
        min-width:20vw;
        max-width:20vw;
        border-radius: 90%; 
        max-height: 10vh;
        min-height: 10vh;
        margin-right:3vw;
        margin-left: 3vw;
        }

    span {
        margin-left:1vw;
        margin-right: auto;
    }
    @media (min-width: 500px) {
        display: none;
    }
`

export const MatchesList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-content: flex-start;
    height: 80vh;
    background-color: #ff9f3f;
    overflow-y: auto;
    @media (min-width: 500px) {
        display: none;
    }
`
export const BackButton = styled.div`
    background: #F77D24;
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Sans-serif;
    font-size: 18px;
    height: 4.5vh;
    width:100%;
    text-align: center;
    vertical-align: middle;
    padding-top: 2vh;
    border-width: 1vw;
    border-color: #fff;
    

    img {
        max-width: 10vw;
    }
    @media (min-width: 500px) {
        display: none;
    }
`

export const Warning = styled.h1`
    display:none;
    @media (min-width: 500px) {
        display: inline-block;
        font-size: 50px;
    }
`