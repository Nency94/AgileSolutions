const data = {
    "client_id": "Usw2gA0sFPvl9snuyTqTdw6yNRcCI4ng",
    "client_secret":"fkAX03ILXCbH5sIFiaVDeC3J_Hy1iZrL5gPaKN8zmMqQ32J5GTQ-Z3OAC_91t3xS",
    "Callback_URL":"https://9e6d2e3f5870.ngrok.io",
    "YOUR_USER_BOUND_VALUE":"",
    "API":{
        getAuth:'https://auth.atlassian.com/oauth/token'
    },
    "backendURL": "http://localhost:5000",
    
}
data.REST_API_authorization_URL = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${data.client_id}&scope=write%3Ajira-work%20read%3Ame%20read%3Ajira-work%20manage%3Ajira-project%20manage%3Ajira-configuration%20manage%3Ajira-data-provider%20read%3Ajira-user%20report:personal-data&redirect_uri=${data.Callback_URL}&state=${data.YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent`

export default data;

