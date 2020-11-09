import React from 'react';
import { helge } from './data'
import { Card, Row, Col, Container, ListGroup } from 'react-bootstrap';


export const Minside = () => ( 
  <Container>
  <Row>
  <Card style={{ 'justify-content': 'center', 'text-align': 'center', width: '100%' }}>
  <Card.Body >
    <Card.Title>Min Side</Card.Title>
    <Card.Text>
      Her kan du se vår informasjon om deg, samt dine kjøpte bøker
    </Card.Text>
  </Card.Body>
</Card>
  </Row>
<Card style={{ 'justify-content': 'center', 'text-align': 'center', width: '100%', 'align-content': 'center' }}>
    <Row style={{'align-items': 'center'}}><Col><Card style={{ 'justify-content': 'center', 'width' : '18em', 'min-height': '20em', 'display': 'inline-block' }}>
  <Card.Body>
    <Card.Title>Personalia</Card.Title>
    <Card.Text>
      <ListGroup variant="flush">
      <ListGroup.Item>Navn: {helge.fornavn} {helge.etternavn}</ListGroup.Item>
      <ListGroup.Item>Epost: {helge.epost}</ListGroup.Item>
      <ListGroup.Item>mobil: {helge.mobil}</ListGroup.Item>
      </ListGroup>

    </Card.Text>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ 'justify-content': 'center', 'width' : '18em', 'min-height': '20em', 'display': 'inline-block' }}>
  <Card.Body>
    <Card.Title>Kjøpte bøker</Card.Title>
    <Card.Text>
      <ListGroup variant="flush">
      {helge.bøker.map(bok => (
        <ListGroup.Item>{bok.tittel}, {bok.år}, {bok.forfatter}</ListGroup.Item>
      ))}
      </ListGroup>
    </Card.Text>
  </Card.Body>
</Card></Col></Row></Card>
    <Card style={{ 'justify-content': 'center', 'text-align': 'center' }}>
  <Card.Body>
    <Card.Title>Gavekort-saldo</Card.Title>
    <Card.Text style={{'font-size': 'x-large'}}>
      {helge.gavekort} kr
    </Card.Text>
  </Card.Body>
</Card>

</Container>

)