const url = "data/members.json";
async function fetchMembers() {
    const response = await fetch(url);
    const data = await response.json();
    return data.members;
}
const displayMembers=(members)=>{
    const cards=document.querySelector(".cards");
    cards.innerHTML="";

members.forEach(company => {
    const card = document.createElement("div");
    card.classList.add("card");
    const logo = document.createElement("img");
    logo.setAttribute("src", company.image);
    logo.setAttribute("alt", company.name);
    const name = document.createElement("h2");
    name.textContent = company.name;
    const address = document.createElement("p");
    address.innerHTML = `<span class="label">Address:</span> ${company.address}`;
    const phone = document.createElement("p");
    phone.innerHTML = `<span class="label">Phone:</span> ${company.phone}`;
    const website = document.createElement("p");
    website.innerHTML = `<span class="label">Website:</span> <a href="${company.website}" target="_blank">${company.website}</a>`;
    const membershipLevel = document.createElement("p");
    membershipLevel.classList.add("level");
    const site = document.createElement("p");
    site.innerHTML=`<span class="label">Country: </span> ${company.country}`;
    switch(company.membership_level) {
        case 1:
            membershipLevel.classList.add("member");
            membershipLevel.textContent = "Member";
            break;
        case 2:
            membershipLevel.classList.add("silver");
            membershipLevel.textContent = "Silver Member";
            break;
        case 3:
            membershipLevel.classList.add("gold");
            membershipLevel.textContent = "Gold Member";
            break;
    }
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(site);
    cards.appendChild(card);
});
};
fetchMembers().then(members => displayMembers(members));
