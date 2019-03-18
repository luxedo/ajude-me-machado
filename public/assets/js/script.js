const carregado = () => {
  document.getElementById("texto").focus();
  const urlParams = new URLSearchParams(location.search);
  if (urlParams.has('aleatorio')) {

  }
  if (urlParams.has('texto')) {
    document.getElementById("citar-texto").innerHTML = urlParams.get('texto');
    document.getElementById("texto").innerHTML = urlParams.get('texto');
    if (urlParams.has('citar') && urlParams.get('citar') == 'true') {
      document.getElementById("texto").style.display = "none";
      document.getElementById("citar").style.display = "block";
      if (urlParams.has('autor') && urlParams.get('autor') != "") {
        document.getElementById("autor").innerHTML = urlParams.get('autor') + " e ";
      }
    }
  }
}

const ajuda = () => {
  const el = document.getElementById("texto");
  const texto = el.innerHTML;
  fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then((response) => response.json())
    .then((json) => {
      const palavras = json[0].split(" ");
      const indice = Math.floor(Math.random() * palavras.length);
      const palavra = palavras[indice];
      el.innerHTML = texto.replace(/\&nbsp;/g, " ").trim() + " " + palavra;
    });
}

const apagar = () => {
  window.location.assign("/");
}
