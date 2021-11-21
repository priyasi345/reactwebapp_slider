import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
const Section=styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;
const Container=styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1 fr 1fr;  
grid-template-rows: 800px; 
@media screen and (max-width: 768px) {
    grid-templete-columns: 1fr;
}    
`;
const ColumnLeft=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2 rem;
order: ${({reverse }) => (reverse ? '2' : '1')};
`;
const ColumnRight=styled.div`
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')}
display: flex;
`;

const InfoSection = ({heading,paragraphOne,paragraphTwo,buttonLabel,reverse,image}) => {
    return (
       <Section>
           <Container>
        <ColumnLeft>
        <h1>Heading</h1>
        <p>paragraph</p>
        <p>paragraph</p>
        <Button to="/homes">{buttonLabel}</Button>
        </ColumnLeft> 
        <ColumnRight reserve={reverse}>
        <img src={image} alt="home"/>
        </ColumnRight>  
           </Container>
       </Section>
    );
};

export default InfoSection;
