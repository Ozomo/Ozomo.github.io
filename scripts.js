// Znajdź elementy HTML
const textarea = document.getElementById("textarea");
const saveButton = document.getElementById("save-button");

// Funkcja zapisująca tekst jako plik
saveButton.addEventListener("click", () => {
  // Pobierz tekst z pola tekstowego
  const text = textarea.value;

  // Utwórz plik Blob z tekstem
  const blob = new Blob([text], { type: "text/plain" });

  // Utwórz tymczasowy link do pobrania pliku
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "plik.txt"; // Domyślna nazwa pliku
  link.click();

  // Zwolnij pamięć
  URL.revokeObjectURL(link.href);
});