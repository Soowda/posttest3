const toggleButton = document.getElementById("toggleMode");
const container = document.querySelector(".container");

toggleButton.addEventListener("click", () => {
    container.classList.toggle("dark-mode");
    const isDarkMode = container.classList.contains("dark-mode");
    if (isDarkMode) {
        // Simpan preferensi dark mode ke localStorage jika diinginkan.
        localStorage.setItem("darkMode", "enabled");
    } else {
        // Hapus preferensi dark mode dari localStorage jika diinginkan.
        localStorage.removeItem("darkMode");
    }
});

// Cek apakah dark mode sebelumnya diaktifkan
const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
if (isDarkModeEnabled) {
    container.classList.add("dark-mode");
}
