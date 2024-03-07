const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const JournalEntry = require('./models/JournalEntry'); // Import the JournalEntry model

const app = express();

// ... (other configurations)

// Example route for handling journal entry creation
app.post('/create-entry', isAuthenticated, (req, res) => {
    const { title, content } = req.body;
    
    // Create a new entry
    const newEntry = new JournalEntry({
        title,
        content,
        // Add other fields as needed
    });

    // Save the entry to the database
    newEntry.save()
        .then(() => {
            console.log('Journal entry created successfully');
            res.redirect('/dashboard');
        })
        .catch(err => {
            console.error('Error creating journal entry:', err);
            res.status(500).send('Internal Server Error');
        });
});

// ... (other routes and middleware)
const multer = require('multer');

// ... (other imports and configurations)

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Specify the file name
    },
});

const upload = multer({ storage });

// ... (other middleware and configurations)

// Example route for handling file upload
app.post('/upload-file', isAuthenticated, upload.single('file'), (req, res) => {
    // Access the uploaded file via req.file
    console.log('File uploaded successfully:', req.file);
    res.redirect('/dashboard');
});

// ... (other routes and middleware)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
