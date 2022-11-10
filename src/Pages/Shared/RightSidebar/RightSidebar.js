import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
    return (
        <div>
            <Card border="light">
                <Card.Header className='fs-5 fw-semibold'>More Services</Card.Header>
                <Card.Body>
                    <img src="https://i.postimg.cc/4Np7xv89/g12.jpg" alt="" className="img-fluid d-block mx-auto mb-3" />
                    <Card.Title className='text-dark fw-bold'>List of Locksmith Services</Card.Title>
                    <Card.Text>
                        Mr. Locker Locksmith provides all types of Locksmith services. We offer fast, friendly and professional locksmith services across Charlotte.
                    </Card.Text>
                </Card.Body>
                
                <ListGroup variant="flush" className='fw-bold'>
                    <ListGroup.Item><Link to="" className='text-decoration-none text-dark'>Automotive Locksmith </Link></ListGroup.Item>
                    <ListGroup.Item><Link to="" className='text-decoration-none text-dark'>Residetial Locksmith </Link></ListGroup.Item>
                    <ListGroup.Item><Link to="" className='text-decoration-none text-dark'>Lock Replacement </Link></ListGroup.Item>
                    <ListGroup.Item><Link to="" className='text-decoration-none text-dark'>Commercial Locksmith </Link></ListGroup.Item>
                    <ListGroup.Item><Link to="" className='text-decoration-none text-dark'>Key duplication </Link></ListGroup.Item>
                    <ListGroup.Item><Link to="" className='text-decoration-none text-dark'>Emergency Locksmith </Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default RightSidebar;