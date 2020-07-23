import React from "react";
import { FaCheck } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import {  Button,Container,Row,Col } from "reactstrap";
import Editform from "../components/Editform";
import { deleteStartup } from "../store/userAction";
import { connect } from "react-redux";

const Dashboard = ({ item, deleteStartup }) => {
  const removeStartup = () => {
    console.log("delete btn clicked");
    deleteStartup(item.id);
  };
  return (
    <>
    <Container className="container">
      <Row className="row">
        <Col>
          <small>{item.company}</small>
        </Col>
        <Col>
          <small>{item.industry}</small>
        </Col>
        <Col>
          <small>{item.location}</small>
        </Col>
        <Col>
          <small>{item.joined}</small>
        </Col>
        <Col>
          <span>
            <Button color="success" size="sm" className="ml-3">
              <FaCheck />
            </Button>
          </span>
        </Col>
        <Col>
          <div className="box">
            <span>
              <Editform id={item.id} />
            </span>
            <span>
              <Button color="danger" size="sm" onClick={removeStartup}>
                <BsTrash />
              </Button>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
    <hr />
    </>
  );
};

export default connect(null, { deleteStartup })(Dashboard);

{
  /* <div>
            <Table >
              <tbody>
                <tr>
                  <td>
                    <small>{item.company}</small>
                  </td>
                  <td>
                    <small>{item.industry}</small>
                  </td>
                  <td>
                    <small>{item.location}</small>
                  </td>
                  <td>
                    <small>{item.joined}</small>
                  </td>
                  <td>
                    <span >
                      <Button color="success" size="sm">
                        <FaCheck />
                      </Button>
                    </span>
                  </td>
                  <td>
                      <div className ='box'>
                      <span>
                      <Editform id={item.id}/>
                    </span>
                    <span >
                      <Button  color="danger" size="sm" onClick={removeStartup} >
                        <BsTrash />
                      </Button>
                    </span>
                      </div>
                   
                  </td>
                </tr>
              </tbody>
            </Table>
       </div>*/
}
