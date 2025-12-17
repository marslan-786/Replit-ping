const axios = require('axios');
const http = require('http');

// Yahan apna Replit wala Link dalen
const targetURL = "https://d791ed0b-0cf5-455b-b7f0-d2275db16c93-00-3cktsp4pelwe8.pike.replit.dev/";

// Railway ko khush rakhne k liye fake server (Port 8080)
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Main Replit ko jaga raha hun!');
});
server.listen(process.env.PORT || 8080);

// Asal Kaam: Har 2 minute baad Replit ko Ping krna
console.log("Thappad Bot Started... 😈");

setInterval(async () => {
    try {
        const response = await axios.get(targetURL);
        console.log(`Thappad Maara! 👋 (Status: ${response.status}) - Time: ${new Date().toLocaleTimeString()}`);
    } catch (error) {
        // Agar Replit V2Ray hai to wo aksar 404 ya error deta hai simple request pe, 
        // lekin traffic chala jata hai, maqsad pura ho jata hai.
        console.log(`Thappad Maara (Error aya par jag gya): ${error.message}`);
    }
}, 6000); // 120000 ms = 2 Minutes
