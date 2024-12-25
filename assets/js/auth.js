const clientId = '<REACT_APP_AZURE_CLIENT_ID>';
const authority = '<REACT_APP_AZURE_AUTHORITY>';
const redirectUri = '<REACT_APP_AZURE_REDIRECT_URI>';
const scope = 'openid';
const responseType = 'code';
const nonce = 'defaultNonce';
const prompt = 'login';

// Function to get the ID token from URL hash fragment
function getTokenFromUrl() {
    const params = new URLSearchParams(window.location.hash.substring(1));
    return params.get('id_token');
}

// Store the token securely after authentication
const idToken = getTokenFromUrl();
if (idToken) {
    localStorage.setItem('id_token', idToken); // Store the ID token securely
    // Redirect to dashboard.html after login
    window.location.href = '/dashboard.html';
}

// Protect pages by checking authentication
function checkAuthentication() {
    const token = localStorage.getItem('id_token');
    if (!token) {
        window.location.href = '/index.html'; // Redirect to login if not authenticated
    }
}

// Event listener for the Sign In button
document.getElementById('azure-b2c-btn').addEventListener('click', function () {
    const authUrl = `${authority}/oauth2/v2.0/authorize?p=B2C_1_signupsignin&client_id=${clientId}&nonce=${nonce}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    window.location.href = authUrl;
});

// Event listener for the Sign Up link
document.getElementById('signup-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const signupUrl = `${authority}/oauth2/v2.0/authorize?p=B2C_1_signupsignin&client_id=${clientId}&nonce=${nonce}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    window.location.href = signupUrl; // Redirect to the signup flow
});
