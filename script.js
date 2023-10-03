// Google Mapsの初期化とマップの作成
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "39d03b6e2c12d6e6",
        center: { lat: 34.73871, lng: 137.59298 },
        zoom: 12.3,
    });

    // マップにマーカーを追加するコードをここに追加
}

// ウィンドウが読み込まれたときにマップを初期化
window.onload = function () {
    initMap();
};

