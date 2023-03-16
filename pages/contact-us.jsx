import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to submit the form data to Google Forms or another service
  };

  return (
    <div className="contact-form-container">
      <Typography variant="h4">Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="What's your email? *"
          type="email"
          id="email"
          name="email"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="What's your name? *"
          type="text"
          id="name"
          name="name"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="What's your phone number? *"
          type="tel"
          id="phone"
          name="phone"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="How many properties do you want us to review? *"
          type="number"
          id="properties"
          name="properties"
          min="1"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Anything else?"
          id="message"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />

        <div className="contact-form-buttons">
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
