import React from 'react';
import { features } from '../Data';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css';
const Features = () => {
  return (
    <div>
      <center>
        <h3 style={{ color: '#000004', fontWeight: 600 }} className='mt-4'>
          Features
        </h3>
      </center>
      <Container className="mb-4">
        <div className='flex flex-wrap -m-4'>
          <Row className='ml-3 mt-4'>
            {features.map((features) => (
              <Col
                className='card border-secondary mt-4'
                key={features.image}
                style={{
                  boxShadow: `-5px -5px #000`,
                  borderRadius: 10,
                    border: `2px solid #000`,
                    marginLeft: 15,
                    marginRight:15,
                    width: 350
                }}>
                <h5 className='text-center'>{features.title}</h5>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center'
                  src={features.image}
                />
                <p className='leading-relaxed p-2'>{features.description}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Features;
