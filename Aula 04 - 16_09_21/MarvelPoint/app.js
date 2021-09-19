let filmesAssistidos = [
  "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
  "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg",
  "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg",
  "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg",
  "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
  "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg",
  "https://media.comicbook.com/2017/10/thor-the-dark-world-movie-poster-marvel-cinematic-universe-1038895.jpg",
  "https://media.comicbook.com/2017/10/captain-america-the-winter-soldier-movie-poster-marvel-cinematic-1038896.jpg",
  "https://media.comicbook.com/2017/10/avengers-2-movie-poster-marvel-cinematic-universe-1038898.jpg",
  "https://media.comicbook.com/2017/10/captain-america-3-movie-poster-marvel-cinematic-universe-1038906.jpg",
  "https://media.comicbook.com/2017/10/doctor-strange-movie-poster-marvel-cinematic-universe-1038908.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/The_Incredible_Hulk.jpg/250px-The_Incredible_Hulk.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg",
  "https://br.web.img2.acsta.net/c_310_420/pictures/17/03/03/19/15/268212.jpg",
  "https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg",
];

filmesAssistidos.push(
  "https://pbs.twimg.com/media/DMQuyI5V4AAUHP0?format=jpg&name=900x900"
);
filmesAssistidos.push(
  "https://upload.wikimedia.org/wikipedia/pt/9/90/Avengers_Infinity_War.jpg"
);
filmesAssistidos.push(
  "https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131069-uau-posters-filmes-avengers-endgame-vingadores-ultimato.jpg"
);

for (var i = 0; i < filmesAssistidos.length; i++) {
  document.write("<img src=" + filmesAssistidos[i] + ">");
}

function adicionarFilme() {
  var novoFilme = document.getElementById("URL").value;
  if (filmesAssistidos.includes("URL")) {
    document.getElementById("novo").innerHTML =
      "Que coincidência?! Este filme já está aqui!";
  } else {
    filmesAssistidos.push(novoFilme);
    document.body.innerHTML +=
      "<img src=" + filmesAssistidos[filmesAssistidos.length - 1] + ">";
    document.getElementById("novo").innerHTML =
      "Sua recomendação foi adicionada! Ela aparecerá no final da página.";
  }
}
