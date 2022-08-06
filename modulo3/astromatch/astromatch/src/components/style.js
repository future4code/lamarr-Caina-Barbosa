import styled from 'styled-components'

export const Header = styled.header`
    background-color: #FC7A00;
    width: 100vw;
    height: 5vh;
    text-align:center;
    padding-top: 2vh;
    font-style: italic;
    color:white;

`

export const ProfileCard = styled.div`

    img {
        object-fit: cover;
        width: 100%;
        height: 55vh;
    }
`
export const ProfilePic = styled.img`
    object-fit: cover;
    width: 100%;
    height: 55vh;
`

export const ProfileDetails = styled.div`
    display:flex;
    justify-content: left;
    background-color:#FF9732;
    padding: 2vh;

    #name {
        font-style: italic;
    }
`

export const MatchButtons = styled.div`
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
    
    
`