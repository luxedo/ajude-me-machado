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
};

const ajuda = () => {
  const el = document.getElementById("texto");
  const texto = el.innerHTML.replace(/<br\/?>/g, "\n") || "Era uma vez...";
  document.getElementById("modalCarregando").style.opacity = 1;
  fetch("http://35.193.158.12/gpt_de_assis?q="+encodeURI(texto))
    .then((response) => {
      response.text()
      .then((text) => {
        let a = text
          .substring(texto.length)
          .replace(/(\\n|\\r)/g, "<br/>")
          .replace(/[—]/g, "<br/>—")
          .replace(/([:.!?;,])\n/g, "$1<br/>")
          .replace(/(.*)[^.,:;?!]*$/g, "$1")
          .replace(/\s[^.\s]+$/, "")
          .replace(/(<br\/>)+/g, "<br/>")
          .replace(/^(<br\/>)+/m, "")
          .replace(/([:.!?;,])[^:.!?;,]*$/s, "$1");
        console.log(a);
        el.innerHTML += a;
        document.getElementById("modalCarregando").style.opacity = 0;
      });
    });
};

const apagar = () => {
  window.location.assign("/");
};
