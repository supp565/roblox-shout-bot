const express = require('express');
const noblox = require('noblox.js');
const axios = require('axios'); // Add axios for direct API requests

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Roblox Shouting Bot is Live!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

async function startBot() {
    try {
        console.log("Initializing session...");
        
        const cookie = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CAEaBBAEGAEiGwoEZHVpZBITNzc4NjMxNzg4MTYxMDQ0ODAzNSgD.P9wuHcKP8QNrnXHyN92WuctoIDRmibYsGNcpJV3WaG8jN2S20FLf4zcAEp3dEodkxSss_mrAgODNjv9rrR9onaI0HG_0o6EKgjaIoMXkXuZ23S1-OcTt81lpHcAdhe6GUjTak-wiTsmiBQ2q00egZkyVJIL4IjBOlUpuYNSVIlSLPuvw3nJcrf6bOEKvh7MZArEKK3R7o4kGogDBLsbVo3bEfDdg7ZPGdqOqLa6m898n-QA7t079DxVNNajRIEMSu0qpS6yjRmsCNZW1ijjn1dTn2wv2MXUg6B_4YEo9MRBgz_ILWhK6oiylvMM8c4-BMkYvf8bZXVNAOI_WyAymxkKtoPWK0M-Jt39fmJ8S7opYw5SIq6EgQGqJ6Pq7f67wuWZ4O9oQo8sJBJmXc8NrUZBtrQuQI1E9NyDWnCpEVAMn-2umvv1AQ_OJM8CepW8rboaFTUij0x9-C5eiMNGvp-i776-vJokNUVscxi6L4NULkcnlQ8mlgtazrvbt5BiSoukAFXUVFPNOryQ33letQxAo980ptsCQl6Zz7FzclsigyX3WUcy5yEHSiisUW24Ms7LQxjZHYKMDzrIg9jZYzcjtK3j6WN8O3b6bv9uYgnRBJXE406do-d6UtmgxcOJ2z40yai7WptTvDuzW7v5ggQVZdtfrS2Q6MO21IZxi96vzSOBn6Bfb2vVzsCpYZLQXsY6y3vnT9K_R2xZLbNifYpmCEXL77Cd59hhQubjpcsDBggjFQ0i2EHG4cH0D6fsmb_3aGFmtv4qmCpn9GnrGM2hTbE2eueEl9aoDajAOdv9rFJRWTQH8n3a5lwyorordczpVEDkhat1hSgHeRiVK-5nQ3iYoK3Si_OwrLz_T1afw9AeVXiYrpDjItvje_KNButFLJ64ajYTQMW6_Tl4JXuL5aLS9-H_Q0Sfmv1phHkI.TumKx7ChG5eOC6ID8RqoX1mO2wE';
        
        await noblox.setCookie(cookie);
        const currentUser = await noblox.getCurrentUser();
        console.log(`Logged in as: ${currentUser.UserName}`);

        const groupId = 12013007; 
        const shoutMessage = "HELL YAA"; 

        // Fetch the security CSRF token noblox generated for us
        const generalToken = await noblox.getGeneralToken();

        console.log("Sending direct v2 endpoint request...");
        
        // Push direct patch request to Roblox groups v2 api endpoint
        await axios({
            method: 'PATCH',
            url: `https://roblox.com${groupId}/shout`,
            data: { message: shoutMessage },
            headers: {
                'Cookie': `.ROBLOSECURITY=${cookie}`,
                'X-CSRF-TOKEN': generalToken,
                'Content-Type': 'application/json'
            }
        });

        console.log(`Successfully shouted: "${shoutMessage}" via API v2`);
        
    } catch (error) {
        if (error.response) {
            console.error("Roblox API rejected it:", error.response.data);
        } else {
            console.error("Bot failed to execute:", error.message);
        }
    }
}

startBot();
