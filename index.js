const express = require('express');
const noblox = require('noblox.js');
const { HttpsProxyAgent } = require('https-proxy-agent'); // Import the proxy agent

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Roblox Shouting Bot with Proxy is Live!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Configure your Proxy credentials and address
// Note: Replace with your actual proxy IP/Port or use Environment Variables
const proxyUrl = "http://pmvewvju:a8x6w13xiar4@31.59.20.176:6754"; 
const agent = new HttpsProxyAgent(proxyUrl);

// Force all fetch/network commands to go through the proxy agent
global.GLOBAL_AGENT_HTTP_PROXY = proxyUrl; 

async function startBot() {
    try {
        console.log("Attempting to connect via Proxy...");
        
        // Log in using your cookie 
        const currentUser = await noblox.setCookie(process.env.KEO6K6dIAEyimllirmlktlLrvK68JEcDA9W3gvfFJjr3y5KpZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SWt0RlR6WkxObVJKUVVWNWFXMXNiR2x5Yld4cmRHeE1jblpMTmpoS1JXTkVRVGxYTTJkMlprWkthbkl6ZVRWTGNDSXNJbTkzYm1WeVNXUWlPaUl4TVRJek5UZ3dNalkxTXlJc0ltVjRjQ0k2TVRjNE16STNNemt5TXl3aWFXRjBJam94Tnpnek1qY3dNekl6TENKdVltWWlPakUzT0RNeU56QXpNak45LmNPYkZ3Z1FZWDgteDY0WkR2Ui1zQmNnYjAwR19UUFlkd3pGck95Mlo0SF9lbG10SEppREtSeWJ2YmE3ejVsMGh0Q2lKVGQwbnVUWlcxVXd5NTRTQ0hzUE9rTW9YUDJwR2E5N0pvbUNOTjBIeHM1MDJOMS0zMldpN3R2aVp0NThDWFdrc005dkVXR1JybW1xZTJIM3lBeHVDVkdFX2d4YzNadk1PV3gtT0NCMG1zSzBWNnFjelk0VUx3NlpHcTVHdDJpU2FxMXFWVXRWeU1FanlQZ1RsQkxHenZPTGdOem9ueF9lbWo0UXJ0R3c2dXI2bnRiRmVCNGdVSW8wYzJCWnY0cmZMd1lCTFhpMXpkc1BzamJhRXUxRTZtTG5xRjZ4UWNzdU1XZzlFQnVMb0ZXd3RoMDA1X3pUaU5MSmx2dFBLOUt2ZmJScjJTbWRmUFN6eC1xOGhPQQ==);
        console.log(`Successfully logged in as ${currentUser.UserName}`);

        const groupId = process.env.12013007; 
        const shoutMessage = "HELL YAA"; 

        // Execute the shout
        await noblox.shout(groupId, shoutMessage);
        console.log(`Successfully shouted: "${shoutMessage}"`);
        
    } catch (error) {
        console.error("Bot failed to execute:", error);
    }
}

startBot();
