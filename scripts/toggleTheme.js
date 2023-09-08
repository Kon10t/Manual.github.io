if (!localStorage.theme) localStorage.theme = ""
document.body.className = localStorage.theme

WHITE = document.getElementById("white");
WHITE.onclick = () => {
  document.body.classList.add("dark")
  localStorage.theme = document.body.className || "light"
}
black.onclick = () => {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    localStorage.theme = document.body.className || "dark"
}