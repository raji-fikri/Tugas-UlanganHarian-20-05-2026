// TUGAS 1
function inputAngka() {

    let a = Number(document.getElementById("angkaPertama").value);
    let b = Number(document.getElementById("angkaKedua").value);
    let jumlah = a + b;

    if (a == 50 || b == 50 || jumlah == 50) {
        document.getElementById("hasil").innerHTML =
        "Hasil Penjumlahan : " + jumlah + "<br>Hasil Kebenarannya : TRUE";
    } else {
        document.getElementById("hasil").innerHTML =
        "Hasil Penjumlahan : " + jumlah + "<br>Hasil Kebenarannya : FALSE";
    }
}

// TUGAS 2
function cekNilai() {

    let nilai = parseInt(document.getElementById("nilai").value);

    if (nilai >= 80 && nilai <= 100) {
        document.getElementById("status").innerHTML =
        "Grade A - (Lulus)";
    }
    else if (nilai >= 70 && nilai <= 79) {
        document.getElementById("status").innerHTML =
        "Grade B - (Lulus)";
    }
    else {
        document.getElementById("status").innerHTML =
        "Grade C - (Tidak Lulus)";
    }

}

