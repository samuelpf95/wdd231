const params = new URLSearchParams(window.location.search);
const result = document.querySelector("#results");

const donation = params.get('donation') === 'other' 
  ? `$${params.get('donationAmount') || 'N/A'}`
  : params.get('donation');

result.innerHTML = `
  <p>Welcome, ${params.get('firstName')} ${params.get('lastName')}!</p>
  <p>Nickname: ${params.get('Nickname')}</p>
  <p>Your email: ${params.get('email')}</p>
  <p>Password: ${params.get('password')}</p>
  <p>Favorite Anime: ${params.get('confirmPassword')}</p>
  <p>Donation: ${donation} Thank you!</p>
  <p>Submitted on: ${new Date(params.get('timestamp')).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</p>`;