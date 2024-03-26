// Pertama-tama, tambahkan script Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyCa3I4apiXBBEg8lHkOKUZJj5HJqfpqs3c",
  authDomain: "tambahkanbarang.firebaseapp.com",
  databaseURL: "https://tambahkanbarang-default-rtdb.firebaseio.com",
  projectId: "tambahkanbarang",
  storageBucket: "tambahkanbarang.appspot.com",
  messagingSenderId: "349178081242",
  appId: "1:349178081242:web:5fb7c93d0313288b5b1ae3",
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
databaseURL = "https://tambahkanbarang-default-rtdb.firebaseio.com/";

// Mengambil referensi database
const database = firebase.database();

// Mengambil data dari Firebase
const ref = database.ref("NamaBarang");

// Menambahkan event listener untuk satu kali pengambilan data
ref.once("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    const data = childSnapshot.val();
    // Menampilkan data di dalam elemen HTML dengan id "NamaBarang"
    document.getElementById("NamaBarang").innerHTML += `
        <h6 class="blog-title">${data.nama_barang}</h6>
        <div class="recom-price"><span class="font-4">${data.harga}</span></div>
        <p class="mb-30">${data.open} - ${data.closed}</p>
        <a href="shop-grid.html" class="recom-button">Read more</a>
        <a href="shop-grid.html" class="cws-button small alt">ORDER NOW</a>
      `;
  });
});
