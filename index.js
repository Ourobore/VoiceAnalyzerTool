console.log("[index.js] Loaded");

const audioFiles = new Array();
function addFile(file) {
  console.log("New file: ", file);
  audioFiles.push(file);
  console.log("Files: ", audioFiles);
}

window.onload = function () {
  // Web Audio API tests
  const audioElement = document.getElementById("newAudio");

  audioElement.onload = function () {
    // Analyzer setup
    const audioContext = new AudioContext();
    const audioTrack = audioContext.createMediaElementSource(audioElement);
    const audioAnalyzer = audioContext.createAnalyser();
    audioTrack.connect(audioAnalyzer);
    audioAnalyzer.connect(audioContext.destination);
  };
};
