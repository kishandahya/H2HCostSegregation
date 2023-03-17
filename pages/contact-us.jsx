// contact-us.jsx

import React from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import getConfig from "next/config";



const ContactFormContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2),
    },
}));

const Form = styled("form")(({ theme }) => ({
    width: "100%",
    maxWidth: "600px",
    marginTop: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const SubmitButtonContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
}));

const ContactUs = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        try {
            const { publicRuntimeConfig } = getConfig();
            const response = await fetch(`/api/submitForm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.get("email"),
                    name: formData.get("name"),
                    phone: formData.get("phone"),
                    properties: formData.get("properties"),
                    message: formData.get("message"),
                }),
            });

            if (response.ok) {
                alert("Form submitted successfully!");
            } else {
                alert("Error submitting form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form.");
        }
    };

    return (
        <Box className="container">
            <ContactFormContainer>
                <Typography variant="h4">Contact Us</Typography>
                <Form onSubmit={handleSubmit}>
                    <StyledTextField
                        label="What's your email? *"
                        type="email"
                        id="email"
                        name="email"
                        required
                        fullWidth
                        margin="normal"
                    />

                    <StyledTextField
                        label="What's your name? *"
                        type="text"
                        id="name"
                        name="name"
                        required
                        fullWidth
                        margin="normal"
                    />

                    <StyledTextField
                        label="What's your phone number? *"
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        fullWidth
                        margin="normal"
                    />

                    <StyledTextField
                        label="How many properties do you want us to review? *"
                        type="number"
                        id="properties"
                        name="properties"
                        min="1"
                        required
                        fullWidth
                        margin="normal"
                    />

                    <StyledTextField
                        label="Anything else?"
                        id="message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />

                    <SubmitButtonContainer>
                        <Button type="submit" variant="contained" color="secondary">
                            Submit
          </Button>
                    </SubmitButtonContainer>
                </Form>
            </ContactFormContainer>
        </Box >
    );
};

export default ContactUs;
