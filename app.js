
        function checkFortune() {
            var color = document.getElementById('color-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "動物"; // デフォルトの値

            if (color === "青" && number === 1) {
                result = "犬タイプ";
            } else if (color === "赤" && number === 1) {
                result = "キツネタイプ";
            } else if (color === "緑" && number === 1) {
                result = "猫タイプ";
            } else if (color === "青" && number === 2) {
                result = "犬タイプ";
            } else if (color === "赤" && number === 2) {
                result = "くまタイプ";
            } else if (color === "緑" && number === 2) {
                result = "猫タイプ";
           }
        
            document.getElementById('result-output').innerText = "あなたの動物のタイプは【" + result + "】です";
        }
