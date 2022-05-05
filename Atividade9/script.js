const maior = (a, b, c) => (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

const maior_alt = (a, b, c) => {
    let arr = new Array(a, b, c);
    arr.sort((a,b) => (b-a));
    return arr[0];
};

const organiza = (a, b, c) => {
    let arr = new Array(a, b, c);
    arr.sort((a,b) => (a-b));
    return arr;
};

window.onload = function() {
    document.getElementById("vermaior").onclick = () => {
        let arr = [];
        for (i = 0; i < 3; i++) {
            arr[i] = parseInt(prompt("Passa o número " + (i+1)));
        }

        let maior_num = maior(...arr);
        document.getElementById("maior").innerHTML = maior_num;
    };

    document.getElementById("organizar").onclick = () => {
        let values = [];
        for (i = 0; i < 3; i++) {
            values[i] = parseInt(prompt("Passa o número " + (i+1)));
        }

        let arr = organiza(...values);
        document.getElementById("organiza").innerHTML = arr[0] + " " + arr[1] + " " + arr[2] + ".";
    };
};