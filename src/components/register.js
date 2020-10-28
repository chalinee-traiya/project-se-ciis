import React, { Component } from "react";
// import { Form } from 'semantic-ui-react'
import './register.css';



export default class Register extends Component {

    render() {
        return (
            <form>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                      <div>
                        <h1>Register</h1>
                        <div className="under-register">
                          <p>Register on the platform </p>
                        </div>
                      </div>

                
                      <div class="form-row">
                        
                        <div class="form-group col-md-6">
                          <div>
                            <label for="inputEmail4">Nationality *</label>
                          </div>
                        
                          <div class="form-check form-check-inline">
                            
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">Thai</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Foreign</label>
                          </div>
                        </div>
                        
                        <div class="form-group col-md-6">
                          <label for="id">ID Card / Passport No. *</label>
                          <input type="id" class="form-control" id="id" placeholder="ex.1103702411xxx....."/>
                        </div> 
                      </div>


                      <div class="form-row">
                        
                        <div class="form-group col-md-6">
                          <label for="first-name">First Name *</label>
                          <input type="first-name" class="form-control" id="first-name" placeholder="Your First-Name - ex.Chalinee......" />
                        </div>
                        
                        <div class="form-group col-md-6">
                          <label for="last-name">Last Name *</label>
                          <input type="last-name" class="form-control" id="last-name" placeholder="Your Last-Name - ex.Traiyapanjawit......"/>
                          
                        </div>
                        
                      </div>



                      <div class="form-row">
                        
                        <div class="form-group col-md-6 ">
                          <label for="input-email">Email *</label>
                          <input type="email" class="form-control" id="input-email" placeholder="Email" />
                        </div>

                        <div class="form-group col-md-6">
                          <label for="inputState">Type identity verification *</label>
                          <select id="inputState" class="form-controldrop">
                            <option selected>Choose.......................................</option>
                            <option>Author / Regular Full Paper (Thai Only)</option>
                            <option>Author / Virtual Full Paper(Thai & Foreign)</option>
                            <option>Author / Regular Short Paper (Thai Only)</option>
                            <option>Author / Virtual Short Paper (Thai & Foreign)</option>
                            <option>Participant (Thai Only)</option>
                          </select>
                        </div>
                      
                      </div>


                   
                      <div class="form-group">
                          <label for="inputusername">Create Username *</label>
                          <input type="username" class="form-control" id="inputusername" placeholder="ex.chalinee......"/>
                      
                      </div>
                      
                      <div class="form-group">
                        <label for="inputpassword">Create Password *</label>
                        <input type="password" class="form-control" id="inputpassword" placeholder="ex.Chalinee1234....."/>
                      </div>

                      
                      <div class="form-group">
                        <label for="inputconfirm">Confirm Password *</label>
                        <input type="confirm-password" class="form-control" id="inputconfirm" placeholder="Chalinee1234......"/>
                      </div>
                      
                      <div align="right"> 
                        <button type="submit" class="btn btn-secondary ">SUBMIT</button>
                      </div> 

                      <p className="have-account">
                        You have an account? <a href="#">Sign In</a>
                      </p>

                      
     
                    </div>
                </div>
            </form>
        );
    }
}