const animeURL = 'https://api.jikan.moe/v4/random/anime';

async function getOneRecommendation() {
  try {
    const response = await fetch(animeURL);
    if (!response.ok) throw new Error("Error fetching data");

    const data = await response.json();
    const anime = data.data;

    const title = anime.title;
    const type = anime.type;
    const episodes = anime.episodes || 'N/A';
    const image = anime.images.jpg.large_image_url;
    const url = anime.url;
    const synopsis = anime.synopsis || 'No synopsis available';
    const rating = anime.score || 'No rating available';
    const rank = anime.rank || 'No rank available';
    const recomDiv = document.getElementById('recom');
    recomDiv.innerHTML = `
      <article>
        <figure>
          <img src="${image}" alt="Image of ${title}" />
          <figcaption><h2>${title}</h2></figcaption>
        </figure>
        <p id="typ"><strong>Type:</strong> ${type}</p>
        <p id="ep"><strong>Episodes:</strong> ${episodes}</p>
        <p id="rat"><strong>Rating:</strong> ${rating}</p>
        <p id="rank"><strong>Rank:</strong> ${rank}</p>
        <p id="syn"><strong>Synopsis:</strong> ${synopsis}</p>
        <p><a href="${url}" target="_blank">More Info</a></p>
      </article>
    `;
  } catch (err) {
    console.error("Error:", err.message);
  }
}

getOneRecommendation();