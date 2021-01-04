import React from 'react';
import { StoreContext } from './index';
import { useObserver } from 'mobx-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const BugsHeader = () => {
    const store = React.useContext(StoreContext);
    
    return useObserver(() => ( <h1> Total: {store.countBug()} { store.countBug() < 2 ? 'bug' : 'bugs'} </h1>));
}

const BugsList = () => {
    const store = React.useContext(StoreContext);

    return useObserver(() => (
        <ul className="justify-content-center mt-3" >
            {
                store.bugs.map(bug => (
                    <li key={bug} > { bug } </li>
                ))
            }
        </ul>
    ))  
}

const BugsForm = () => {
    const store = React.useContext(StoreContext);
    const [bug, setBug] = React.useState("");

    return (
        <Form onSubmit={e => {
            store.addBug(bug);
            setBug("");
            e.preventDefault();
        }}>
            <Row>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Add more bug..." value={bug} onChange={e => {
                        setBug(e.target.value);
                    }} />
                </Col>

                <Col sm={2}>
                    <Button variant="info" type="submit" >Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}

const App = () => {
    return <Container>
        <Row className="justify-content-center mt-3" >
            <BugsHeader />
        </Row>        
        <BugsForm />
        <BugsList/>
    </Container>
}

export default App;