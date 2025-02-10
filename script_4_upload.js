// Znajdź elementy HTML
const fileInput = document.getElementById("file-upload");
const uploadButton = document.getElementById("upload-button");

// Obsługa przycisku "Prześlij plik"
uploadButton.addEventListener("click", () => {
  const file = fileInput.files[0]; // Pobierz wybrany plik

  if (!file) {
    alert("Wybierz plik przed przesłaniem!");
    return;
  }

  console.log("Wybrany plik:", file.name);
  console.log("Rozmiar pliku:", file.size, "bajtów");
  console.log("Typ pliku:", file.type);

  // Tutaj możesz zaimplementować dalsze kroki, np. przesłanie pliku do serwera
});