import { React, useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Clima from './Clima';

const Formulario = () => {
    const [ubicacion, setUbicacion] = useState("");
    const [clima, setClima] = useState(null);
    const apiKey = "aee9239e5d3c7f5ad6679b3c033e8006"
    const MySwal = withReactContent(Swal)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const responseLatitudLongitud = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ubicacion}&appid=${apiKey}&lang=es`)
        const dataLatitudLongitud = await responseLatitudLongitud.json();
        if (dataLatitudLongitud.length > 0) {
            const responseClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataLatitudLongitud[0].lat}&lon=${dataLatitudLongitud[0].lat}&appid=${apiKey}&lang=es&units=metric`);
            const dataClima = await responseClima.json();
            setClima(dataClima)
            console.log(dataClima);
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingrese una ubicacion valida',
            })
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Card className='fondoCard'>
                    <Card.Body>
                        <Card.Title className='text-center'>
                            <h3>Clima</h3>
                        </Card.Title>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type='text' placeholder='Ingrese una ubicacion' onChange={(e) => setUbicacion(e.target.value)} value={ubicacion} />
                        </Form.Group>
                        <Form.Group className='mt-3 text-end'>
                            <Button variant="primary" type="submit">Buscar</Button>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>

            {clima != null ? <Clima clima={clima}/>:<></>}
        </>

    );
};

export default Formulario;