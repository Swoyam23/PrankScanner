const video = document.getElementById('video');
const startButton = document.getElementById('startVerification');
const scannerDiv = document.getElementById('scanner');
const loadingDiv = document.getElementById('loading');
const resultDiv = document.getElementById('result');
const finalScreen = document.getElementById('finalScreen');

const funnyImages = [
    'images/funny1.jpg',
    'images/funny2.jpg',
    'images/funny3.jpg',
    'images/funny4.jpg'
];

startButton.addEventListener('click', () => {
    document.getElementById('welcome').classList.add('hidden');
    scannerDiv.classList.remove('hidden');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => video.srcObject = stream)
        .catch(error => console.error("Camera access denied!", error));

    setTimeout(() => {
        scannerDiv.classList.add('hidden');
        loadingDiv.classList.remove('hidden');
    }, 3000);

    setTimeout(() => {
        loadingDiv.innerHTML = "<h2>AI Face Analysis...</h2>";
    }, 5000);

    setTimeout(() => {
        loadingDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');

        const randomImage = funnyImages[Math.floor(Math.random() * funnyImages.length)];
        resultDiv.innerHTML = `<h2>Verification Complete!</h2>
                               <img src="${randomImage}" alt="Funny Face">
                               <p>Our AI thinks this is your true look! 😂</p>`;

        setTimeout(() => {
            resultDiv.classList.add('hidden');
            finalScreen.classList.remove('hidden');
        }, 4000);
    }, 7000);
});