import React, { useState } from 'react';
import Header from '../components/Header';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState('')

    const submitFormHandler = async (e) => {
        e.preventDefault();

        const details = {
            name: name,
            email: email,
            phonenumber: phonenumber
        }

        await axios.post('https://ecommerce-3f86e-default-rtdb.firebaseio.com/contactdetails.json', JSON.stringify(details)).
            then(() => {
                console.log("Request has been Sent")
            }).
            catch((err) => console.log(err))

        setName("");
        setEmail("");
        setPhonenumber("");
    };

    return (
        <div>
            <Header />
            <div>
                <h1 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>Contact Us</h1>
                <div style={{ marginInline: "400px" }}>
                    <Form onSubmit={submitFormHandler}>
                        <Form.Group id="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Name"
                                minlength="4"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group id="phonenumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Enter Phone Number"
                                minlength="10"
                                value={phonenumber}
                                required
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;