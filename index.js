let counter = 0;

function incrementCounter() {
  document.getElementById("counter-label").innerHTML = ++counter;
}

function store(key, value) {
  localStorage.setItem(key, value);
}

console.log("Loaded at page startup");

window.onload = function () {
  // Web Audio API tests
  const audioElement = document.querySelector("audio");

  // Analyzer
  audioElement.onplay = function () {
    // Init and audio file loading
    const audioContext = new AudioContext();
    // console.log("Audio source: ", audioElement.currentSrc);
    const audioTrack = audioContext.createMediaElementSource(audioElement);
    const audioAnalyzer = audioContext.createAnalyser();
    audioTrack.connect(audioAnalyzer);
    audioAnalyzer.connect(audioContext.destination);
    audioAnalyzer.fftSize = 16384;
    const bufferLength = audioAnalyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    console.log("Data array: ", dataArray);
    // setTimeout(() => console.log("Data array LATER: ", dataArray), 10000);
    const intervalID = setInterval(() => {
      for (const value in dataArray) {
        console.log("HZ: ", value);
      }
    }, 1000);
  };
};
