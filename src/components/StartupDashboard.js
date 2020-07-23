import React from 'react';
import {Table, Container,Row,Col} from "reactstrap"

const StartupDashboard = () => {
    return ( 
        <>
        <div className="details">
            <h4>All Startups</h4>
        </div>
        <div className="filter">
          <small>Filter Startups</small>
        </div>
        <div className="bg">
          <Container>
            <Row>
              <Col>Company</Col>
              <Col>Industry</Col>
              <Col>Location</Col>
              <Col>Joined</Col>
              <Col>Approved</Col>
              <Col>Action</Col>
            </Row>
          </Container>
       
        </div>
        
        </>
     );
}
 
export default StartupDashboard;

{/* <Table striped>
        <thead>
        <tr>
          <th></th>
          <th>Company</th>
          <th>Market/Industry</th>
          <th>Location</th>
          <th>Joined</th>
          <th>Approved</th>
          <th>Action</th>
       </tr>
       </thead>
       </Table>*/}