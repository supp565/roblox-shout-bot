// Switched from native fetch to Axios for maximum system compatibility
const axios = require('axios'); 

const groupId = 12013007;
// Ensure your API Key is pasted perfectly inside the quotes below!
const apiKey = "YOUR-API-KEY"; 
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
