// Azure B2C Configuration for Login Flow
const loginConfig = {
    auth: {
        clientId: '3b68b2c1-7a19-4ef2-93ff-a7fea2cd5f0c',
        authority: 'https://sreedharchikatla.b2clogin.com/sreedharchikatla.onmicrosoft.com/B2C_1_signupsignin',
        knownAuthorities: ['sreedharchikatla.b2clogin.com'],
        redirectUri: 'https://www.sreedharchikatla.xyz/dashboard.html'
    }
};

document.getElementById('azure-b2c-btn').addEventListener('click', function () {
    const { auth } = loginConfig;
    const authUrl = `${auth.authority}?client_id=${auth.clientId}&response_type=token&redirect_uri=${encodeURIComponent(auth.redirectUri)}&scope=openid&state=12345`;
    window.location.href = authUrl;
});

document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Please contact admin@sreedharchikatla.xyz to create an account to use');
});
