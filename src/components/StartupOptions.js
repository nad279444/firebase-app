import { BsGear, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FaCross } from "react-icons/fa";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addStartup } from "../store/userAction";

const StartupOptions = (props) => {
  const { AddStartup, className } = props;

  const [item, setItem] = useState(false);

  const toggle = () => setItem(!item);

  const [list, setList] = useState({
    company: "",
    industry: "",
    location: "",
    joined: "",
  });

  const handleChange = (e) => {
    setList({
      ...list,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addStartup(list);
  };

  return (
    <>
      <div className="wrapper">
        <div className="startup" id="dashboard">
          <BsGear /> Dashboard
        </div>
        <div className="startup">
          <FaCross />
          <Button size="sm" color="danger" onClick={toggle} outline>
            AddStartup{AddStartup}
          </Button>
          <div>
            <Modal isOpen={item} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Startup Details</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      onChange={handleChange}
                      value={list.company}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="industry">Industry</label>
                    <input
                      type="text"
                      className="form-control"
                      id="industry"
                      onChange={handleChange}
                      value={list.industry}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      onChange={handleChange}
                      value={list.location}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="joined">Joined</label>
                    <input
                      type="text"
                      className="form-control"
                      id="joined"
                      onChange={handleChange}
                      value={list.joined}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Save
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        <div className="startup">
          {" "}
          <BsReverseLayoutTextSidebarReverse /> Startup Details
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { addStartup })(StartupOptions);
