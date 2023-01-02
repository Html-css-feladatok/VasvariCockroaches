window.onload = document.body.style.overflow = "hidden"

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

function scrolling()
{
    document.body.style.overflow = "auto"
}