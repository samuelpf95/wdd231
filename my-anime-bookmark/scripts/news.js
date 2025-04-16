async function loadCurrentSeasonAnime() {
    const container = document.getElementById("seasonal-anime");
    container.innerHTML = "Cargando...";
  
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
  
        section.innerHTML = `
          <img src="${image}" alt="${title}" width="200">
          <h2>${title}</h2>
          <p><strong>Rating:</strong> ${rating}</p>
          <p><strong>Ranking:</strong> ${rank}</p>
          <p><strong>Géneros:</strong> ${genres}</p>
          <a href="${url}" target="_blank">More information</a>
        `;
  
        container.appendChild(section);
      });
    } catch (err) {
      container.innerHTML = "Error loading the animes.";
      console.error(err);
    }
  }
  
  loadCurrentSeasonAnime();