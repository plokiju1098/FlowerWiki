import emailjs from 'emailjs-com';
import React from 'react';

export default function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_q3c55vo',
        e.target,
        'user_WKD7fnMUnUHjga3NJmbIr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className='contact-form-container'>
        <form onSubmit={sendEmail}>
          <div className='contact-form'>
            <div className='form-text'>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Nazwa'
              />
            </div>
            <div className='form-email'>
              <input
                type='text'
                className='form-control'
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='form-text'>
              <input
                type='text'
                className='form-control'
                name='subject'
                placeholder='Temat'
              />
            </div>
            <div className='form-text'>
              <textarea
                name='message'
                id=''
                cols='30'
                rows='10'
                placeholde='Twoja wiadomość'
              ></textarea>
            </div>
            <div className='form-submit'>
              <input
                type='submit'
                className='form-send-submit'
                value='Send Message'
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
