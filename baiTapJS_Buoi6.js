/**
 * Bài tập 1 - tím số nguyên dương n nhỏ nhất sao cho:
 * 1 + 2 + ... + n > 10.000
 */
function timSo() {
    var sum = 0;
    for (var i = 0; i < 10000; i++) {
        if (sum < 10000) {
            sum += i;
            document.getElementById("txtResultbai1").innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
        }
    }
}
timSo();

/**
 * Bài tập 2: nhập só x và số n, tính tổng: S(n) = x + x^2 + x^3 + ... + x^n
 */

function tinhSn() {
    var x = Number(document.getElementById("soX").value);
    var n = Number(document.getElementById("soN").value);
    var sum = 0;
    for (var i = 1; i < n + 1; i++) {
        sum = sum + Math.pow(x, i)
        console.log(sum)
    }
    document.getElementById("txtResultbai2").innerHTML = "Tổng: " + sum;
}
document.getElementById("tinhBai2").onclick = tinhSn;

/**
 * Bài tập 3: nhập só n, tính n!
 */

function tinhGiaiThua() {
    var n = Number(document.getElementById("soN2").value);
    var tich = 1;
    for (let i = 2; i < n + 1; i++) {
        tich = tich * i;
        console.log(tich);
        document.getElementById("txtResultbai3").innerHTML = n + "! = " + tich;

    }
}
document.getElementById("tinhBai3").onclick = tinhGiaiThua;

/**
 * Bài tập 4: tạo Div
 */

function taoDiv() {
    var content = "";

    for (let i = 1; i < 11; i++) {
        if (i % 2 == 0) {
            content = content + "<p style='background-color: blue; color: white; margin: 0px; padding: 0px'>div chẵn</p>"
        } else {
            content = content + "<p style='background-color: red; color: white; margin: 0px; padding: 0px'>div lẻ</p>"
        }
    }
    document.getElementById("txtResultbai4").innerHTML = content;
}
document.getElementById("tinhBai4").onclick = taoDiv;

/**
 * In số nguyên tố
 */

// function soNguyenTo() {
//     var num = Number(document.getElementById("soNguyenTo").value);
//     var content = "";
//         for (var i = 1; i < num + 1; i++) {
//             for (var j = 2; j <= Math.sqrt(num); j++){
//                 if (i % j != 0){
//                     content = content + i;
//                 }
//             }
//         }
//     console.log(content);
// }
// document.getElementById("tinhBai5").onclick = soNguyenTo;


function kiemTraSo(num) {
    var ketqua = true;
    
    if (num < 2) {
        ketqua = false;
    } else if (num == 2) {
        ketqua = true;
    }else if (num % 2 == 0) {
        ketqua = false;
    }else {
        for (var i = 3; i <=  Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                return  false;
            }
        }
    }
    return ketqua;
}
function inSoNT() {
    var n = document.getElementById("soNguyenTo").value;
    var content = '';

    for (var i = 1; i <= n; i++) {
        if (kiemTraSo(i)) {
            content += "  " + i;
        }
        document.getElementById("txtResultbai5").innerHTML = content;
    }
}
document.getElementById("tinhBai5").onclick = inSoNT;