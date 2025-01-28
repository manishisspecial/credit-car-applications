const awsconfig = {
    Auth: {
        region: 'us-east-1',
        userPoolId: 'YOUR_USER_POOL_ID',
        userPoolWebClientId: 'YOUR_USER_POOL_CLIENT_ID',
    },
    API: {
        endpoints: [
            {
                name: "YOUR_API_NAME",
                endpoint: "YOUR_API_URL"
            }
        ]
    }
};

export default awsconfig;
