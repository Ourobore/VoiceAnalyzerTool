console.log("[index.js] Loaded");

window.onload = function () {
  // DOM elements
  const uploadElement = document.getElementById("newAudio");
  const audioElement = document.getElementById("audioFile");

  // Get input file
  uploadElement.addEventListener("change", () => {
    // console.log("New file: ", uploadElement.files[0]);
    audioElement.src = URL.createObjectURL(uploadElement.files[0]);
  });

  // TO-DO: Compute audio file to get what we want
  audioElement.addEventListener("loadeddata", () => {
    console.log("Loaded audio");
    // Analyzer setup
    // const audioContext = new AudioContext();
    // const audioTrack = audioContext.createMediaElementSource(audioElement);
    // const audioAnalyzer = audioContext.createAnalyser();
    // audioTrack.connect(audioAnalyzer);
    // audioAnalyzer.connect(audioContext.destination);
  });
};
