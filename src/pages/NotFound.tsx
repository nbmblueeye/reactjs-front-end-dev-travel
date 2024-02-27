import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <div className="main-content-container">
        <Container>
            <h1>Page Not Found</h1>
            <Form>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
      </Container>
    </div>
  )
}

export default NotFound
