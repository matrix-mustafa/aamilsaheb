import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./MuzeForm.css";
import DatePick from "./Datepick";

export default function MuzeProfileForm() {
  return (
    <div className='form-container'  >
    <div className='container mt-3 row form-cotent' >
       <div className='form-header' >
        <h2>
        1443 Shehrullah - Mustafa Rampuarawala - AMRELI
        </h2>
       </div>

       <div className='form-input-container' >
       <div className='col-8' >
        <div>
            <label>Check ITS ID</label>
            <textarea class="form-control" id="its_id_list" required="" name="its_id_list" rows="8"></textarea>
            <button type="submit" id="checkItsIdBtn" class="btn btn-primary">Check</button>
        </div>
       </div>
       <div className='col-4' >
        <div style={{marginLeft:"20px" , marginBottom:"20px"}} >
          <label>ITS ID</label>
          <textarea class="form-control" id="its_id" required="" name="its_id" rows="8"></textarea>
        </div>

        <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Marhala</label>		
		<Form.Select aria-label="Default select example">
      <option>Select Marala</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Course</label>		
		<select id="course" name="course" required="" className="form-control">
		</select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Country</label>		
		<Form.Select aria-label="Default select example">
      <option>India</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">City</label>		
		<Form.Select aria-label="Default select example">
      <option>Surat</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Institute</label>		
		<select id="course" name="course" required="" className="form-control">
		</select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Accommodation</label>		
		<Form.Select aria-label="Default select example">
      <option>Own House</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>
    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
    <label for="marhala-selectized">Course Start Date</label>	
    <DatePick/>
    </div>
    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
    <label for="marhala-selectized">Course End Date</label>	
    <DatePick/>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="course">Annual Fees</label>		
		<select id="course" name="course" required="" className="form-control">
		</select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Currency</label>		
		<Form.Select aria-label="Default select example">
      <option>INR Indian Rupee</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>

    <div style={{marginLeft:"20px" , marginBottom:"20px"}}>
		<label for="marhala-selectized">Scholarship</label>		
		<Form.Select aria-label="Default select example">
      <option>Self Arranged</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
    </div>
   <div style={{marginLeft:"20px" , marginBottom:"20px"}} >
    <button type="submit" id="checkItsIdBtn" class="btn btn-primary">Submit</button>
   </div>

       </div >
      
       </div>
    </div>
    </div>
  )
}
