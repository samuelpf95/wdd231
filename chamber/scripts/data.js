const params = new URLSearchParams(window.location.search);
const result = document.querySelector("#results");
console.log(params.get('firstName'));
result.innerHTML=`<p>Welcome, ${params.get('firstName')} ${params.get('lastName')}! We are eager to work with ${params.get('organization')}!</p>
<p>Your email: ${params.get('email')}
<p>Yout Mobile Phone Number:  ${params.get('mobilePhone')}</p>
<p>Title Within Organization: ${params.get('orgTitle')}</p>
<p>Organization Name: ${params.get('organization')}</p>
<p>Membership level: ${params.get('mlevel')}</p>
<p>Business/organization's description: ${params.get('description')}</p>`