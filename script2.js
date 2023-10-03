let customMarker; // カスタムマーカーを格納する変数
let customInfoWindow; // カスタムインフォウィンドウを格納する変数
let toukoInfoWindow; // "とうこの写真"情報ウィンドウを格納する変数

// 地図を初期化
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "39d03b6e2c12d6e6",
        center: { lat: 34.73871, lng: 137.59298 },
        zoom: 12.3,
    });

    // とうこの写真
    const ToukoNoShashin = { lat: 34.684999, lng: 137.598998 };

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">とうこの写真</h1>' +
        '<div id="bodyContent">' +
        '<img src="box.jpg" width="200px" height="150px">' + // 画像の表示部分
        "<p><b>題名</b>, 文章 " +
        "文章２段落目" +
        "</div>" +
        "</div>";

    // "とうこの写真"用のカスタム情報ウィンドウ
    toukoInfoWindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "とうこの写真",
    });

    const marker = new google.maps.Marker({
        position: ToukoNoShashin,
        map: map,
        icon: "icon3.png",
        title: "とうこの写真",
        animation: google.maps.Animation.DROP, // マーカーをドロップするアニメーション
    });

    // 新しい地点の緯度経度
    const customPoint = { lat: 34.79186, lng: 137.59682 };

    // 新しい地点のタイトル
    const customPointTitle = "ジャンプ";

    // 新しい地点のアイコン画像
    const customPointIcon = "icon3.png";

    // 新しい地点のテキスト
    const customPointText = 
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">ここはジャンプ</h1>' +
        '<div id="bodyContent">' +
        '<img src="box.jpg" width="200px" height="150px">' + // 画像の表示部分
        "<p><b>題名</b>, 文章 " +
        "文章２段落目" +
        "</div>" +
        "</div>";
    customMarker = new google.maps.Marker({
        position: customPoint,
        map: map,
        icon: customPointIcon,
        title: customPointTitle,
        animation: google.maps.Animation.DROP, // マーカーをドロップするアニメーション
    }); 

    // "新しい地点"用のカスタム情報ウィンドウ
    customInfoWindow = new google.maps.InfoWindow({
        content: '<img src="icon3.png" width="100px" height="100px"><br>' + customPointText, // 画像とテキストを組み合わせて表示
    });

    // "新しい地点"マーカーにクリックリスナーを追加
    customMarker.addListener("click", () => {
        if (customInfoWindow.getMap()) {
            // カスタムインフォウィンドウが既に開いている場合、閉じる
            customInfoWindow.close();
        } else {
            // カスタムインフォウィンドウを開く
            customInfoWindow.open(map, customMarker);
             // アニメーション効果を適用してウィンドウを拡大表示
            customMarker.setAnimation(google.maps.Animation.BOUNCE);
            // アニメーション終了後、マーカーのアニメーションを停止
            setTimeout(function() {
            customMarker.setAnimation(null);
            }, 2100); // アニメーションは約2秒間続きます
        }
    });

    // "とうこの写真"マーカーにクリックリスナーを追加
    marker.addListener("click", () => {
        if (toukoInfoWindow.getMap()) {
            // "とうこの写真"のカスタムインフォウィンドウが既に開いている場合、閉じる
            toukoInfoWindow.close();
        } else {
            // "とうこの写真"のカスタムインフォウィンドウを開く
            toukoInfoWindow.open(map, marker);
        }
    });
}

window.initMap = initMap;
