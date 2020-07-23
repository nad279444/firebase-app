import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BsPen } from "react-icons/bs";
import { connect } from "react-redux"
import {editStartup} from "../store/userAction"


const Editform = (props) => {
  const { className } = props;
  const { id } = props
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [list,setList] = useState({
    company: props.item.company,
    industry:props.item.industry,
    location: props.item.location,
    joined: props.item.joined,

})
  

  const handleChange = (e) => {
    setList({
      ...list,
      [e.target.id]: e.target.value
    })
  }

   const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      company:list.company,
      industry:list.industry,
      location:list.location,
      joined:list.joined
    }
      props.editStartup(id,updatedInfo);
  }
  


  return (
    <div>
      <Button size="sm" color="primary" onClick={toggle}>
        <BsPen />
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
  );
};

const mapStateToProps = (state,ownProps) => ({
  item: state.items.find(startup => (startup.id === ownProps.id))
  
})





export default connect(mapStateToProps,{editStartup})(Editform);
