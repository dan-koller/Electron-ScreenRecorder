// Import modules (from browser)
const { desktopCapturer, remote } = require("electron");
const { Menu } = remote;

const { dialog } = remote;
const { writeFile } = require("fs");

// Global variables
let mediaRecorder;
const recordedFrames = [];

// Define buttons
const videoElement = document.querySelector("input");
const  startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const inputSelectBtn = document.getElementById("inputSelectBtn");

// Event handler
inputSelectBtn.onclick = getInputSources;

// List available input sources
async function getInputSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ["window", "screen"]
    });

    const inputOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            };
        })
    );

    inputOptionsMenu.popup();

}

// Select the available input (video) source
async function selectSource(source) {
    inputSelectBtn.innerText = source.name;
    
    const restrictions = {
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: source.id
            }
        }
    };

    // Create stream from browser
    const stream = await navigator.mediaDevices.getUserMedia(restrictions);

    // Preview source in an element
    videoElement.srcObject = stream;
    videoElement.play();

    // Capture footage
    const options = {mimeType: "video/webm; codecs=vp9"};
    mediaRecorder = new MediaRecorder(stream, options);

    // Register event handlers
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.onstop = handleStop;

}

// Capture all recorded frames
function handleDataAvailable(a) {
    console.log("video data available");
    recordedFrames.push(a.data);
}

// Save output file on stop
async function handleStop(a) {
    const blob = new Blob(recordedFrames, {
        type: "video/webm; codecs=vp9"
    });

    const buffer = Buffer.from(await blob.arrayBuffer());

    const {filepath} = await dialog.showSaveDialog({

        buttonLabel: "Save video",
        defaultPath: `vid-${Date.now()}.webm`
    });

    console.log(filePath);
    writeFile(filePath, buffer, () => console.log("Video successfully saved!"));


}
