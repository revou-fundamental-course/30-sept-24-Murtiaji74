function konversiSuhu() {
    const suhu = parseFloat(document.getElementById("inputSuhu").value);
    const satuan = document.getElementById("inputSatuan").value;
    let hasil = '';
    let rumus = '';

    if (satuan === 'C') {
        hasil += `${suhu} °C = ${(suhu + 273.15).toFixed(2)} K\n`;
        hasil += `${suhu} °C = ${(suhu * 9/5 + 32).toFixed(2)} °F`;
        rumus = `Kelvin: K = C + 273.15<br>Fahrenheit: F = (C * 9/5) + 32`;
    } else if (satuan === 'K') {
        hasil += `${suhu} K = ${(suhu - 273.15).toFixed(2)} °C\n`;
        hasil += `${suhu} K = ${(suhu * 9/5 - 459.67).toFixed(2)} °F`;
        rumus = `Celcius: C = K - 273.15<br>Fahrenheit: F = (K * 9/5) - 459.67`;
    } else if (satuan === 'F') {
        hasil += `${suhu} °F = ${((suhu - 32) * 5/9).toFixed(2)} °C\n`;
        hasil += `${suhu} °F = ${((suhu - 32) * 5/9 + 273.15).toFixed(2)} K`;
        rumus = `Celcius: C = (F - 32) * 5/9<br>Kelvin: K = C + 273.15`;
    }

    document.getElementById("hasil").innerText = hasil;
    document.getElementById("rumus").innerHTML = rumus; // gunakan innerHTML untuk menampilkan <br>
}