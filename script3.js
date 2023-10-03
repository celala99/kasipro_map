let customMarker; // カスタムマーカーを格納する変数
        let map;

        // マップを初期化
        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                mapId: "39d03b6e2c12d6e6",
                center: { lat: 34.73871, lng: 137.59298 },
                zoom: 12.3,
            });
            // カスタムマーカー
            customMarker = new google.maps.Marker({
                position: { lat: 34.79186, lng: 137.59682 },
                map: map,
                title: "ジャンプ",
                season: "夏", // 季節情報を持たせる
                animation: google.maps.Animation.BOUNCE,
                icon:"icon3.png"
            });

            // カスタム情報ウィンドウを生成
            const customInfoWindow = new google.maps.InfoWindow({
                content: '<img src="box.jpg" alt="写真" style="max-width: 200px;">',
                maxWidth: 200, // 吹き出しの最大幅
            });

            // カスタムマーカーにマウスオーバー時のイベントリスナーを追加
            customMarker.addListener("mouseover", () => {
                customMarker.setAnimation(google.maps.Animation.BOUNCE);
                customInfoWindow.open(map, customMarker); // カスタム情報ウィンドウを表示
            });

            // カスタムマーカーにマウスアウト時のイベントリスナーを追加
            customMarker.addListener("mouseout", () => {
                customMarker.setAnimation(null);
                customInfoWindow.close(); // カスタム情報ウィンドウを閉じる
            });

            // マーカークリック時の処理
            customMarker.addListener("click", () => {
                // 写真の情報を設定
                const photoUrl = "box.jpg";
                const photoTitle = "写真のタイトル";
                const photoDescription = "写真の説明";

                // 写真と情報を表示
                document.getElementById("photo").src = photoUrl;
                document.getElementById("photo-title").textContent = photoTitle;
                document.getElementById("photo-description").textContent = photoDescription;

                // 写真と情報を表示する要素を表示
                document.getElementById("photo-info").style.display = "flex";
            });

            // 写真を閉じるボタンのクリック処理
            document.getElementById("close-photo").addEventListener("click", () => {
                // 写真と情報を表示する要素を非表示にする
                document.getElementById("photo-info").style.display = "none";
            });
        }

        // マップ初期化関数をウィンドウスコープに追加
        window.initMap = initMap;