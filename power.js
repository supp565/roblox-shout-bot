// Switched from native fetch to Axios for maximum system compatibility
const axios = require('axios'); 

const groupId = 12013007;
// Ensure your API Key is pasted perfectly inside the quotes below!
const apiKey = "KEO6K6dIAEyimllirmlktlLrvK68JEcDA9W3gvfFJjr3y5KpZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SWt0RlR6WkxObVJKUVVWNWFXMXNiR2x5Yld4cmRHeE1jblpMTmpoS1JXTkVRVGxYTTJkMlprWkthbkl6ZVRWTGNDSXNJbTkzYm1WeVNXUWlPaUl4TVRJek5UZ3dNalkxTXlJc0ltVjRjQ0k2TVRjNE16STNNemt5TXl3aWFXRjBJam94Tnpnek1qY3dNekl6TENKdVltWWlPakUzT0RNeU56QXpNak45LmNPYkZ3Z1FZWDgteDY0WkR2Ui1zQmNnYjAwR19UUFlkd3pGck95Mlo0SF9lbG10SEppREtSeWJ2YmE3ejVsMGh0Q2lKVGQwbnVUWlcxVXd5NTRTQ0hzUE9rTW9YUDJwR2E5N0pvbUNOTjBIeHM1MDJOMS0zMldpN3R2aVp0NThDWFdrc005dkVXR1JybW1xZTJIM3lBeHVDVkdFX2d4YzNadk1PV3gtT0NCMG1zSzBWNnFjelk0VUx3NlpHcTVHdDJpU2FxMXFWVXRWeU1FanlQZ1RsQkxHenZPTGdOem9ueF9lbWo0UXJ0R3c2dXI2bnRiRmVCNGdVSW8wYzJCWnY0cmZMd1lCTFhpMXpkc1BzamJhRXUxRTZtTG5xRjZ4UWNzdU1XZzlFQnVMb0ZXd3RoMDA1X3pUaU5MSmx2dFBLOUt2ZmJScjJTbWRmUFN6eC1xOGhPQQ=="; 
const message = "Hello from the official Open Cloud bot!";

async function postGroupShout() {
    console.log("Attempting to connect HEHE...");
    
    try {
        const response = await axios.patch(
            `https://roblox.com{groupId}/shout`,
            {
                shout: {
                    message: message
                }
            },
            {
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log(`Server responded with status code: ${response.status}`);
        
        if (response.status === 200) {
            console.log("Success! Group shout posted perfectly via Open Cloud.");
        }
    } catch (error) {
        console.error("\n--- CONNECTION OVERVIEW ---");
        if (error.response) {
            // The server received the request but rejected the execution
            console.error(`Roblox Rejected Request. Status Code: ${error.response.status}`);
            console.error("Error Breakdown:", JSON.stringify(error.response.data, null, 2));
        } else if (error.request) {
            // The computer failed to get an answer back entirely
            console.error("Network Communication Error: No response received from Roblox.");
            console.error("Tip: Check if your antivirus/firewall is blocking node.exe.");
        } else {
            console.error("Local Script Error:", error.message);
        }
    }
}

postGroupShout();
