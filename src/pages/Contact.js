import React from 'react';
import ContactForm from '../components/contactForm';
import '../css/contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    };
  }

  render() {
    return (
      <>
        <ContactForm></ContactForm>
      </>
    );
  }
}

export default Contact;
