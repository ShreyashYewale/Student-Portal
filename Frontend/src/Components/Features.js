import React from "react";
import { features } from "../Data";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import "./Features.css";
const Features = () => {
    return (
      <div>
        <div id='Features'></div>
        <center>
          <h3
            style={{
              color: '#5f43bd',
              fontWeight: 600,
              fontSize: `40px`,
              marginTop: `45px`
            }}>
            <FontAwesomeIcon
              icon={faMicrochip}
              style={{
                color: '#5f43bd',
                fontWeight: 600,
                fontSize: `40px`,
                marginTop: `45px`,
                marginRight: '20px'
              }}
            />
            Features
          </h3>
        </center>

        <Container className='mb-4'>
          <div className='flex flex-wrap -m-4'>
            <div className='row ml-3 mt-4'>
              {features.map((features, index) => (
                <div
                  className='col-sm card border-secondary mt-4 col-xl'
                  key={index}
                  style={{
                    boxShadow: `-5px -5px #000`,
                    borderRadius: 10,
                    border: `2px solid #000`,
                    marginLeft: 15,
                    marginRight: 15,
                    width: 350
                  }}>
                  <h5 className='text-center mt-3 mb-2'>{features.title}</h5>
                  <img alt='gallery' src={features.image} />
                  <p className='leading-relaxed p-2 mt-2'>
                    {features.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Features;
