import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div `
  display: flex;
  margin-top: 1em;
  margin: auto;
  text-align: center;
  justify-content: center;

`;


export const Home = (props) => ( 
  <div>
  <GridWrapper>
    <h1> Velkommen til Fabel </h1><br></br>
  </GridWrapper>
  <GridWrapper> 
    <p>Hos Fabel kan du streame lydbøker på abonnement eller kjøpe enkeltbøker </p> 
  </GridWrapper>
  </div>
)