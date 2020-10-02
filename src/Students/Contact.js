import React from "react";
import Form from "react-bootstrap/Form";
import "./contact-form.styles.css";
import * as emailjs from "emailjs-com";
import FB from './fb.png'
import IG from './tw.png'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          message: "",
          disabled: false,
          emailSent: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
    
        // this.setState({
        //     [name]: value
        // })
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        emailjs
          .sendForm(
            "gmail",
            "template_k9yqk43",
            "ContactForm",
            "user_5XAqgDlPyeaPcOblpLoOc"
          )
          .then((res) => {
            if (res.data.success) {
              this.setState({
                disabled: false,
                emailSent: true,
              });
            } else {
              this.setState({
                disabled: false,
                emailSent: false,
              });
            }
          })
          .catch((err) => {
            console.log(err);
    
            this.setState({
              disabled: false,
              emailSent: false,
            });
          });
    
        this.setState({
          name: "",
          email: "",
          message: "",
        });
      };
      render(){
          return (
              <div id="contact">
        <h1 className="Contact-me">CONTACT ME</h1>
        <div className="social-icons" >
            <a rel="noopener noreferrer" href="https://www.facebook.com/nicky_gouna_art-105095717867984" target="_blank"><img  src={FB} alt="fb" /></a>
            <a rel="noopener noreferrer" href="https://www.instagram.com/nicky.artist/" target="_blank"><img  src={IG} alt="fb" /></a>
        </div>
        <div>
          <Form id="ContactForm" onSubmit={this.handleSubmit.bind(this)} className="input-group4">
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <input
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                className="input-field4"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <input
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className="input-field4"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <input
                id="message"
                name="message"
                type="text"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
                className="input-field4"
              />
            </Form.Group>
            <Form.Group>
              <button
                className="send-btn"
                variant="primary"
                size="small"
                block
                type="submit"
              >
                Send
              </button>

              {this.state.emailSent === true && (
                <p className="d-inline success-msg">Email Sent!</p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg">Email Sent!</p>
              )}
            </Form.Group>
          </Form>
        </div>
      </div>
    )
}
}

export default Contact