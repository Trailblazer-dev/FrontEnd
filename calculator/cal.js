function appendToResult(value) {
  const resultInput = document.getElementById("result");
  if (value === "÷") {
    resultInput.value += "/";
  } else if (value === "×") {
    resultInput.value += "*";
  } else {
    resultInput.value += value;
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  try {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function backspace() {
  const result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}
