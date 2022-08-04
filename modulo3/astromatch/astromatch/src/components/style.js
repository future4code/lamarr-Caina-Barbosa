import styled from 'styled-components'

export const Header = styled.header`
    background-color: #FF9732;
    width: 100vw;
    height: 5vh;
    text-align:center;
    padding-top: 2vh;
    font-style: italic;
    color:white;

`

export const ProfileCard = styled.div`

    img {
        min-width:100vw;
        max-width: 100vw;
        min-height: 60vh;
        max-height: 60vh;
    }
`
export const ProfileDetails = styled.div`
    display:flex;
    justify-content: left;
    background-color:#FBF0E5;
    padding: 2vh;

    #name {
        font-style: italic;
    }
`