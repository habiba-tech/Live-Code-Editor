const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");
const runBtn = document.getElementById("run-btn");
const clearBtn = document.getElementById("clear-btn");

function run() {
  const html = htmlCode.value;
  const css = "<style>" + cssCode.value + "</style>";
  const js = "<script>" + jsCode.value + "<\/script>";
  output.srcdoc = html + css + js;
}

runBtn.addEventListener("click", run);

clearBtn.addEventListener("click", () => {
  htmlCode.value = "";
  cssCode.value = "";
  jsCode.value = "";
  output.srcdoc = "";
});

// Optional: Run code automatically while typing
document.querySelectorAll("textarea").forEach(area => {
  area.addEventListener("keyup", run);
});
