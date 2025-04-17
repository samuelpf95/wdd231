const topAnimeURL = 'https://api.jikan.moe/v4/top/anime';

async function showTopThreeAnimes() {
  try {
    const response = await fetch(topAnimeURL);
    if (!response.ok) throw new Error("Error fetching top animes");

    const data = await response.json();
    const top3 = data.data.slice(0, 3);


    const list = document.createElement('ul');
    top3.forEach((anime, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${anime.title}`;
      list.appendChild(li);
    });

  
    const div = document.getElementById('rankingtn');
    div.innerHTML = '';
    div.appendChild(list);

    const img = document.createElement('img');
    img.src = top3[0].images.jpg.large_image_url;
    img.alt = `Image of ${top3[0].title}`;
    img.loading = "lazy";
    div.appendChild(img);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

showTopThreeAnimes();
