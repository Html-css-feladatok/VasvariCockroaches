window.onload = document.body.style.overflow = "hidden";

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// asdasfa

function scrolling() {
  document.body.style.overflow = "auto";
  //document.getElementById("fejresz").style.display = "none";
  //document.getElementById("tartalom").style.opacity = "1";
}