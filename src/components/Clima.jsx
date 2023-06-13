import React, { useEffect, useState } from 'react';
import { Card, Row, Col , Image } from 'react-bootstrap';

const Clima = ({ clima }) => {
    return (
        <Card className='text-center mt-3'>
            <Card.Header><h1>{clima.weather[0].description}</h1></Card.Header>
            <Card.Body>

                <Row className='align-items-center'>
                    <Col lg={6} className='p-3'>
                        <Image src='../../public/img/clima.png' rounded fluid/>
                    </Col>
                    <Col lg={6}>
                        <p>temperatura: {clima.main.temp}</p>
                        <p>temperatura Maxima: {clima.main.temp_max}</p>
                        <p>temperatura Minima: {clima.main.temp_min}</p>
                        <p>Precipitaciones: {clima.main.pressure}</p>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default Clima;