
        function checkFortune() {
            var number = document.getElementById('colour-select').value;
            var gender = parseInt(document.getElementById('number-input').value, 10);
            var result = "動物"; // デフォルトの値

            if (number === "1" && gender === 女) {
                result = "犬タイプ";
            } else if (number === "1" && gender === 男) {
                result = "キツネタイプ";
            } else if (number === "2" && gender === 女) {
                result = "猫タイプ";
            } else if (number === "2" && gender === 男) {
                result = "犬タイプ";
            } else if (number === "3" && gender === 女) {
                result = "くまタイプ";
            } else if (number === "3" && gender === 男) {
                result = "猫タイプ";
            } else if (number === "4" && gender === 女) {
                result = "うさぎタイプ";
            } else if (number === "4" && gender === 男) {
                result = "トラタイプ";
            } else if (number === "5" && gener === 女) {
                result = "キツネタイプ";
            } else if (number === "5" && gener === 男) {
                result = "うさぎタイプ";
　　　　　　} else if (number === "6" && gener === 女) {
                result = "ひつじタイプ";
　　　　　　} else if (number === "6" && gener === 男) {
                result = "くまタイプ";

            document.getElementById('result-output').innerText = "あなたの動物のタイプは？【" + result + "】です";
        }
