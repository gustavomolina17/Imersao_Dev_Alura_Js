let imagemFilme = document.getElementById("imagem-filme");
let nomeFilme = document.getElementById("nome-filme");
let selectCategoria = document.getElementById("select-categoria");
let mensagemDeErro = document.getElementById("mensagemErro");
let caixaFilmesComedia = document.getElementById("caixaFilmesComedia");
let caixaFilmesTerror = document.getElementById("caixaFilmesTerror");
let buttonEnviar = document.getElementById("enviar");
let indiceComedia = 0;
let indiceTerror = 0;

var nomeFilmesComedia = [
  "Os Estagiários",
  "Minha mãe é uma peça 3",
  "Se beber, não case!",
  "Gente Grande",
];

var nomeFilmesTerror = ["A Freira", "Annabelle", "IT", "O Exorcista"];

var listaFilmesComedia = [
  "https://br.web.img3.acsta.net/c_310_420/pictures/210/068/21006856_20130517195500909.jpg",
  "https://s2.glbimg.com/DVvxZCVjJOIqFXBTZbJE-zFlpUU=/https://wp-globofilmes.tsuru.glbimg.com/uploads/2019/09/mmeup3_0002_cartaz_hospital_tel_lado_rgb_72dpis_final_01_jt.jpg",
  "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/87/29/37/19874003.jpg",
  "https://www.cafecomfilme.com.br/media/k2/items/cache/d61d44254608dd06ccdd2ff02982d14d_XL.jpg?t=20181026_230951",
];

var listaFilmesTerror = [
  "https://br.web.img3.acsta.net/pictures/18/07/18/21/53/1348208.jpg",
  "http://vortexcultural.com.br/images/2014/10/annabelle.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/8/82/It_2017.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41hdhjujI1L.jpg",
];

atualizarLista();

function enviar() {
  var imagemRecebida = imagemFilme.value;
  var categoriaSelecionada = selectCategoria.value;
  var nomeFilmeRecebido = nomeFilme.value;

  if (imagemRecebida == "" || nomeFilmeRecebido == "") {
    mensagemDeErro.innerHTML =
      "Insira o link da imagem e o nome do filme a ser adicionado.";
    imagemFilme.value = "";
    nomeFilme.value = "";
    return;
  } else if (
    listaFilmesComedia.indexOf(imagemRecebida) > -1 ||
    listaFilmesTerror.indexOf(imagemRecebida) > -1 ||
    nomeFilmesComedia.indexOf(nomeFilmeRecebido) > -1 ||
    nomeFilmesTerror.indexOf(nomeFilmeRecebido) > -1
  ) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Esse filme já está no catálogo.";
    return;
  } else if (!imagemRecebida.endsWith(".jpg")) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Insira um link de imagem válido.";
    return;
  } else {
    if (categoriaSelecionada == "comedia") {
      listaFilmesComedia.push(imagemRecebida);
      nomeFilmesComedia.push(nomeFilmeRecebido);
      atualizarLista();
    } else if (categoriaSelecionada == "terror") {
      listaFilmesTerror.push(imagemRecebida);
      nomeFilmesTerror.push(nomeFilmeRecebido);
      atualizarLista();
    }
  }
  imagemFilme.value = "";
  nomeFilme.value = "";
  return;
}

function remover() {
  var imagemRecebida = imagemFilme.value;
  var categoriaSelecionada = selectCategoria.value;
  var nomeFilmeRecebido = nomeFilme.value;

  if (imagemRecebida == "" || nomeFilmeRecebido == "") {
    mensagemDeErro.innerHTML =
      "Insira o link da imagem e o nome do filme a ser removido.";
    imagemFilme.value = "";
    nomeFilme.value = "";
    return;
  } else if (
    listaFilmesComedia.indexOf(imagemRecebida) < 0 &&
    listaFilmesTerror.indexOf(imagemRecebida) < 0 &&
    nomeFilmesComedia.indexOf(nomeFilmeRecebido) < 0 &&
    nomeFilmesTerror.indexOf(nomeFilmeRecebido) < 0
  ) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Esse filme não está no catálogo.";
    return;
  } else if (!imagemRecebida.endsWith(".jpg")) {
    imagemFilme.value = "";
    nomeFilme.value = "";
    mensagemDeErro.innerHTML = "Insira um link de imagem válido.";
    return;
  } else {
    if (categoriaSelecionada == "comedia") {
      var posicao = listaFilmesComedia.indexOf(imagemRecebida);
      listaFilmesComedia.splice(posicao, 1);
      nomeFilmesComedia.splice(posicao, 1);
      atualizarLista();
    } else if (categoriaSelecionada == "terror") {
      var posicao = listaFilmesTerror.indexOf(imagemRecebida);
      listaFilmesTerror.splice(posicao, 1);
      nomeFilmesTerror.splice(posicao, 1);
      atualizarLista();
    }
  }
  imagemFilme.value = "";
  nomeFilme.value = "";
  return;
}

function atualizarLista() {
  indiceComedia = 0;
  indiceTerror = 0;

  caixaFilmesComedia.innerHTML = "";
  caixaFilmesTerror.innerHTML = "";

  while (indiceComedia < listaFilmesComedia.length) {
    caixaFilmesComedia.innerHTML +=
      "<figure><img src=" +
      listaFilmesComedia[indiceComedia] +
      "><figcaption>" +
      nomeFilmesComedia[indiceComedia] +
      "</figcaption></figure>";
    indiceComedia++;
  }

  while (indiceTerror < listaFilmesTerror.length) {
    caixaFilmesTerror.innerHTML +=
      "<figure><img src=" +
      listaFilmesTerror[indiceTerror] +
      "><figcaption>" +
      nomeFilmesTerror[indiceTerror] +
      "</figcaption></figure>";
    indiceTerror++;
  }
  return;
}
