window.addEventListener("load", removeAd);

var episodes = document.querySelectorAll(".episode > a");
episodes.forEach(function(episode) {
  episode.addEventListener("click", removeAd);
});

/** Remove the flash-overlay ad element */
function removeAd() {
  try {
    document.querySelector("#preroll-overlay").remove();
  } catch (error) {
    console.log("No preroll-overlay element");
  }
}
