function selectLanguage() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
        document.getElementById("name-entry").style.display = "none";
        document.getElementById("language-selection").style.display = "block";
    } else {
        alert("Please enter your name.");
    }
}

function showWords() {
    var selectedLanguage = document.getElementById("languageSelect").value;
    var wordList = document.getElementById("wordList");
    // Clear previous word list
    wordList.innerHTML = "";
    // Here you should have an object or API call to get words and translations for the selected language
    // For demonstration, let's assume we have a hardcoded list
    var words = {
        "english": ["Hello", "Goodbye", "Thank you", /* Add more words */],
        // Add translations for other languages here
    };
    words[selectedLanguage].forEach(function(word) {
        var listItem = document.createElement("li");
        listItem.textContent = word;
        wordList.appendChild(listItem);
    });
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("word-translations").style.display = "block";
}
