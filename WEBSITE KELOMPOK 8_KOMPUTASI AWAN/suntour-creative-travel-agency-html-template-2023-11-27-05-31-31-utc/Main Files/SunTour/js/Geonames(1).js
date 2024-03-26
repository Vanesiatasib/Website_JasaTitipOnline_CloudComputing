// Fungsi untuk mengambil daftar negara dari GeoNames API
function fetchCountries() {
    fetch('https://secure.geonames.org/countryInfoJSON?username=aliefsyakiren')
        .then(response => response.json())
        .then(data => {
            // Mengisi dropdown origin country
            const originCountrySelect = document.getElementById("originCountry");
            // Mengisi dropdown destination country
            const destinationCountrySelect = document.getElementById("destinationCountry");

            data.geonames.forEach(country => {
                const option = document.createElement("option");
                option.text = country.countryName;
                option.value = country.countryCode;
                originCountrySelect.add(option.cloneNode(true)); // Kloning option untuk origin country
                destinationCountrySelect.add(option.cloneNode(true)); // Kloning option untuk destination country
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
}

// Fungsi untuk mengambil daftar kota berdasarkan negara dari GeoNames API
function fetchCities(countryCode) {
    fetch(`https://secure.geonames.org/searchJSON?country=${countryCode}&orderby=name&maxRows=1000&username=aliefsyakiren`)
        .then(response => response.json())
        .then(data => {
            const citySelect = document.getElementById("destinationCity");
            citySelect.innerHTML = ""; // Menghapus opsi kota yang ada sebelumnya
            data.geonames.forEach(city => {
                const option = document.createElement("option");
                option.text = city.name;
                option.value = city.name;
                citySelect.add(option);
            });
        })
        .catch(error => console.error('Error fetching cities:', error));
}

// Memanggil fungsi untuk mengambil daftar negara saat halaman dimuat
fetchCountries();

// Memanggil fungsi untuk mengisi dropdown kota saat negara origin dipilih
document.getElementById("originCountry").addEventListener("change", function() {
    const countryCode = this.value;
    // Anda dapat menambahkan logika tambahan di sini jika diperlukan
});

// Memanggil fungsi untuk mengisi dropdown kota saat negara destinasi dipilih
document.getElementById("destinationCountry").addEventListener("change", function() {
    const countryCode = this.value;
    fetchCities(countryCode);
});
