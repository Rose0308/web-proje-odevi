// İletişim formu doğrulaması
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Lütfen tüm alanları doldurun.");
        e.preventDefault();
    }
});
