const url = "data/members.json";
async function fetchMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load data');
        }
        
        const data = await response.json();
        const filteredMembers = data.members.filter(member => member.membership_level === 3 || member.membership_level === 2);
        const randomMembers = getRandomMembers(filteredMembers, 3);
        const memberList = document.getElementById('member-list');
        memberList.innerHTML = '';

        randomMembers.forEach(member => {
            const memberCard = `
                <div class="member-card">
                    <h3>${member.name}</h3>
                    <img src="${member.image}" alt="${member.name}" />
                    <p>Dirección: ${member.address}</p>
                    <p>Teléfono: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visitar sitio web</a></p>
                    <p>País: ${member.country}</p>
                </div>
            `;
            memberList.innerHTML += memberCard;
        });
    } catch (error) {
        console.error('Error fetching the members:', error);
    }
}
function getRandomMembers(arr, max) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, max);
}
window.onload = fetchMembers;