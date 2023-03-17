//submitForm.js

import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { getGoogleCredentials } from "../../getGoogleCredentials"

const handler = async (req, res) => {

    if (req.method === "POST") {
        const { email, name, phone, properties, message } = req.body;

        try {
            const googleCredentials = getGoogleCredentials();

            // Set up Google Sheets API credentials
            const auth = new google.auth.GoogleAuth({
                credentials: googleCredentials,
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            });

            const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

            // Replace with your Google Sheets ID and the range you want to update
            const spreadsheetId = "1OlQKIn6ZtHWlfDRohcbP7UCdALJaaZMzmWmfeKKW_Q8";
            const range = "emails!A1:E1";

            const response = await sheets.spreadsheets.values.append({
                spreadsheetId,
                range,
                valueInputOption: "RAW",
                insertDataOption: "INSERT_ROWS",
                requestBody: {
                    values: [[email, name, phone, properties, message]],
                },
            });

            res.status(200).json({ message: "Form submitted successfully" });
        } catch (error) {
            console.error("Error submitting form:", error);
            res.status(500).json({ message: "Error submitting form" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
