
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "backend"
    });
});

// Service information endpoint
res.status(200).json({
    service: "backend",
    description: "Backend JSON API microservice",
    version: "1.0.0",
    port: PORT
});


// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend service running on port ${PORT}`);
});
