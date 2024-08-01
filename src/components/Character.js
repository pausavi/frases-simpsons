import styled from "styled-components";

export default function character(props) {
    const {dataCharacter} = props
    const{ character, image, quote}= dataCharacter

    return(
        <ContenCharacter>
            <Title>{character}</Title>
            <ContainerImage>
            <Image src={image} alt="imagen personaje"></Image>
            </ContainerImage>
            <QuoteText>{quote}</QuoteText>
        </ContenCharacter>
    )
}

const ContenCharacter = styled.div`
padding: 20px;
border: 1px solid #2a9d8f;
border-radius: 20px;
width: 300px;
text-align: center;
margin: 10px;


&:hover{
filter:brightness(40%)
}
`;
const Title = styled.h2`
color: #264653;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
`;
const ContainerImage= styled.div`
 height: 250px;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Image = styled.img`
width: 130px;
height: auto;
`;
const QuoteText = styled.h4`
color: #2a9d8f;
height: auto;
`