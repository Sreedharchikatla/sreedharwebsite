const clientId = '<REACT_APP_AZURE_CLIENT_ID>';
const authority = '<REACT_APP_AZURE_AUTHORITY>';
const redirectUri = '<REACT_APP_AZURE_REDIRECT_URI>';
const scope = 'openid';
const responseType = 'code';
const nonce = 'defaultNonce';
const prompt = 'login';

document.getElementById('azure-b2c-btn').addEventListener('click', function () {
    const authUrl = `${authority}/oauth2/v2.0/authorize?p=B2C_1_signupsignin&client_id=${clientId}&nonce=${nonce}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    window.location.href = authUrl;
});
// Sign Up link handler
document.getElementById('signup-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const signupUrl = `${authority}/oauth2/v2.0/authorize?p=B2C_1_signupsignin&client_id=${clientId}&nonce=${nonce}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    window.location.href = signupUrl; // Redirect to the signup flow
});