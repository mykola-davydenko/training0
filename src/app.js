import data from "./data.json"
import autoTemplate from "./template.hbs"

const list = document.querySelector(".list")
list.innerHTML = autoTemplate({data})