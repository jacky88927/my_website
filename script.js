const quotes = [
    "保持微笑，生活會更美好！",
    "每天進步一點點。",
    "相信自己，你可以做到！",
    "成功是努力的結果。",
    "夢想需要行動來實現。"
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

function uploadPhoto() {
    const photoUpload = document.getElementById('photo-upload');
    if (photoUpload.files && photoUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('photos').appendChild(img);
        }
        reader.readAsDataURL(photoUpload.files[0]);
    }
}

document.getElementById('hidden-surprise').addEventListener('click', () => {
    alert('恭喜你找到了隱藏的驚喜！');
});

function showRecommendations() {
    const recommendations = [
        "推薦內容 1",
        "推薦內容 2",
        "推薦內容 3"
    ];
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = recommendations.map(item => `<p>${item}</p>`).join('');
}

document.addEventListener('DOMContentLoaded', showRecommendations);
