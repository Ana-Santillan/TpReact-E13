import { Card, Row, Col , Image } from 'react-bootstrap';

const Clima = ({ clima }) => {
    return (
        <Card className='text-center mt-3 fondoCard'>
            <Card.Header><h1>{clima.weather[0].description}</h1></Card.Header>
            <Card.Body>

                <Row className='align-items-center'>
                    <Col lg={6} className='p-3'>
                        <Image src='../../public/img/clima.png' rounded fluid/>
                    </Col>
                    <Col lg={6}>
                        <p>Temperatura: {clima.main.temp}</p>
                        <p>Temperatura Máxima: {clima.main.temp_max}</p>
                        <p>Temperatura Mínima: {clima.main.temp_min}</p>
                        <p>Humedad: {clima.main.humidity}%</p>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default Clima;