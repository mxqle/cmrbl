
        function checkFortune() {
            var gender = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "動物"; // デフォルトの値

            if (gender === "女" && number === 1) {
                result = "犬タイプ";
            } else if (gender === "男" && number === 1) {
                result = "キツネタイプ";
            } else if (gender === "女" && number === 2) {
                result = "猫タイプ";
            } else if (gender === "男" && number === 2) {
                result = "犬タイプ";
            } else if (gender === "女" && number === 3) {
                result = "くまタイプ";
            } else if (gender === "男" && number === 3) {
                result = "猫タイプ";
           }
        
            document.getElementById('result-output').innerText = "あなたの動物のタイプは？【" + result + "】です";
        }
