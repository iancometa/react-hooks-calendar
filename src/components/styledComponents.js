import styled from 'styled-components'

export const HeaderDiv = styled.div`
padding: 1rem;
font-size: 2rem;
text-align: center;
`;

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(7, 14.28%);
border-bottom: 1px solid lightgray;
`;

export const GridItem = styled.div`
text-align: center;
position: relative;
height: 6em;
border-right: 1px solid lightgray;
overflow: hidden;
cursor: pointer;
background: ${props => props.selected ? '#00ff00' : props.blank ? '#f0f0f0' : 'white'};
transition: 0.25s ease-out;
display: flex;
align-items: center;
justify-content: center;
`;

export const GridDay =  styled.div`
text-align: center;
padding: 1rem 0;
`;

export const ArrowDiv = styled.div`
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 5px;
position: absolute;
top: 31px;
cursor: pointer;
transform: ${props => props.left ? 'rotate(135deg)' : 'rotate(-45deg)'};
-webkit-transform: ${props => props.left ? 'rotate(135deg)' : 'rotate(-45deg)'};
left: ${props => props.left ? '20px' : 'auto'};
right: ${props => props.left ? 'auto' : '20px'};
`;
