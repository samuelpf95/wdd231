async function loadCurrentSeasonAnime() {
  const container = document.getElementById("seasonal-anime");
  container.innerHTML = "Loading...";

  try {
    const res = await fetch("https://api.jikan.moe/v4/seasons/now");
    if (!res.ok) throw new Error("Couldn't get the information.");
    const data = await res.json();

    const animeList = data.data;
    container.innerHTML = "";

    animeList.forEach(anime => {
      const section = document.createElement("section");
      section.classList.add("cards");

      const image = anime.images.jpg.image_url;
      const title = anime.title;
      const rating = anime.score ?? "N/A";
      const rank = anime.rank ?? "N/A";
      const genres = anime.genres.map(g => g.name).join(", ");
      const url = anime.url;
      const synopsis = anime.synopsis ?? "No synopsis available.";

      section.innerHTML = `
        <img src="${image}" alt="${title}" width="200">
        <h2>${title}</h2>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Ranking:</strong> ${rank}</p>
        <p><strong>Genres:</strong> ${genres}</p>
        <button class="info-btn">More Info</button>
      `;

      section.querySelector(".info-btn").addEventListener("click", () => {
        showDialog({ image, title, synopsis, url });
      });

      container.appendChild(section);
    });
  } catch (err) {
    container.innerHTML = "Error loading the animes.";
    console.error(err);
  }
}

function showDialog({ image, title, synopsis, url }) {
  const dialog = document.getElementById("anime-dialog");

  dialog.classList.remove("closing");

  document.getElementById("dialog-image").src = image;
  document.getElementById("dialog-image").alt = title;
  document.getElementById("dialog-title").textContent = title;
  document.getElementById("dialog-synopsis").textContent = synopsis;
  document.getElementById("dialog-link").href = url;

  dialog.showModal();
}

const dialog = document.getElementById("anime-dialog");
const closeBtn = document.getElementById("close-dialog");

closeBtn.addEventListener("click", () => {
  dialog.classList.add("closing");
  dialog.addEventListener("animationend", () => {
    dialog.close();
    dialog.classList.remove("closing");
  }, { once: true });
});

loadCurrentSeasonAnime();