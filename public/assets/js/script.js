// Applied globally on all textareas with the "autoExpand" class
const textAreaAdjust = (el) => {
  el.setAttribute("rows", 3);
  growArea(el);
}

const growArea = (el) => {
  const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  const rows = parseInt(el.getAttribute("rows"));
  if (isOverflowing) {
    el.setAttribute("rows", rows+1);
    growArea(el);
  }
}

const checkQuery = () => {
  const urlParams = new URLSearchParams(location.search);
  if (urlParams.has('texto')) {
    document.getElementById("texto").value = urlParams.get('texto');
  }
}
