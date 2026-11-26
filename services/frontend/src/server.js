
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "frontend"
    });
});

// Service information endpoint
// Service information endpoint
app.get("/info", (req, res) => {
    res.status(200).json({
        service: "frontend",
        description: "Frontend HTTP microservice",
        version: "1.0.0",
        port: PORT
    });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend service running on port ${PORT}`);
});
