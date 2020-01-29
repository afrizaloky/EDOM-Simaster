for (i = 0; i < 13; i++) {
  var elements = document.getElementsByName(
    "jawabanInstrumenPilihan[" + i + "]"
  );
  for (j = 0; j < elements.length; j++) {
    if (elements[j].value == "2") {
      elements[j].checked = true;
    }
  }
}
