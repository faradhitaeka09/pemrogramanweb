document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    alert(`Tiket berhasil dipesan!\nKeberangkatan: ${departure}\nTujuan: ${destination}\nTanggal: ${date}`);
});
