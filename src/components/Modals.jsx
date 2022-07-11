import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Modals(props) {
  const {type , handleChangeModal, modalValue , handleSubmitModal} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div style={{float:"right"  , textDecoration: "underline" , color: "#0d6efd"}} onClick={handleShow}>
          Not in list
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
      <div class="modal-body">
		<div class="mb-3">
			<label htmlFor="pwd">Country</label>
			<input type="text" id="notInListCountryValue" required="" name="country" class="form-control" onChange={handleChangeModal} />
		</div>

    {
      type === "city" || type === "institute" ?    <div class="mb-3">
			<label htmlFor="pwd">City</label>
			<input type="text" id="notInListCountryValue" required="" name="city" class="form-control" onChange={handleChangeModal} />
		</div> :""
    }

  {
      type === "institute" ?    <div class="mb-3">
			<label htmlFor="pwd">Institute</label>
			<input type="text" id="notInListCountryValue" required="" name="institute" class="form-control" onChange={handleChangeModal} />
		</div> :""
    }

      </div>
      <div class="modal-footer">
        {
          type === "country" ?  <button type="submit" id="notInListCountrybtn" class="btn btn-primary" onClick={ () => handleSubmitModal("user/countryNotList" , { country: modalValue?.country} , setShow(false))} >Submit</button> :""
        }

        {
          type === "city" ?  <button   class="btn btn-primary" onClick={ () => handleSubmitModal("user/cityNotList" , {country: modalValue?.country , city: modalValue?.city} , setShow(false))} >Submit</button> :""
        }

        {
           type === "institute" ?  <button type="submit" id="notInListCountrybtn" class="btn btn-primary" onClick={ () =>  handleSubmitModal("user/instituteNotList" , {country: modalValue?.country , city: modalValue?.city , institute: modalValue?.institute} , setShow(false))} >Submit</button> :""
        }
      </div>
        </Modal>
      </>
    );
  }

  export default Modals;