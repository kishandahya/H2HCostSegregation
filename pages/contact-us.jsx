import React, { useState } from "react";
import { Button, TextField, Typography, Box, Snackbar } from "@mui/material";
import { styled } from "@mui/system";
import getConfig from "next/config";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

const SuccessBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const ContactUs = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [submitted, setSubmitted] = useState(false);

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
                setShowSuccess(true);
                setSubmitted(true);
            } else {
                setShowError(true);
                setErrorText("Error submitting form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setShowError(true);
            setErrorText("Error submitting form.");
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setShowError(false);
    };

    return (
        <Box className="container">
            <ContactFormContainer>
                {!submitted && (
                    <>
                        <Typography variant="h4">Contact Us</Typography>
                        <Form onSubmit={handleSubmit}>
                            <StyledTextField
                                label="What's your email?"
                                type="email"
                                id="email"
                                name="email"
                                required
                                fullWidth
                                margin="normal"
                            />

                            <StyledTextField
                                label="What's your name?"
                                type="text"
                                id="name"
                                name="name"
                                required
                                fullWidth
                                margin="normal"
                            />

                            <StyledTextField
                                label="What's your phone number?"
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                fullWidth
                                margin="normal"
                            />

                            <StyledTextField
                                label="How many properties do you want us to review?"
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
                    </>
                )}
                {showSuccess && (
                    <SuccessBox>
                        <img
                            src="assets/poolside.jpg"
                            alt="hotel image"
                            style={{
                                borderRadius: "8px 8px 8px 8px",
                                maxWidth: "400px",
                                maxHeight: "400px",
                                objectFit: "cover",
                                marginBottom: "3rem"
                            }}
                        />
                        <Typography variant="h4" gutterBottom>
                            Thank you for your submission! We will contact you shortly.
                        </Typography>
                    </SuccessBox>
                )}
            </ContactFormContainer>
            <Snackbar
                open={showError}
                autoHideDuration={7000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleClose} severity="error">
                    {errorText}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactUs;