const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("Quote");
const authorEl = document.getElementById("author");
const apiurl = "https://api.quotable.io/random";

btnEl.addEventListener("click", async function () {
  try {
    quoteEl.innerText = "Updating..";
    authorEl.innerText = "Updating..";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const respons = await fetch(apiurl);
    const data = await respons.json();

    quoteEl.innerText = data.content;
    authorEl.innerText = "~" + data.author;
    btnEl.disabled = false;
    btnEl.innerText = "GET A QUOTE";
  } catch (error) {
    quoteEl.innerText = "an error happing please try again";
    authorEl.innerText = "an error happing please try again";
    btnEl.disabled = false;
    btnEl.innerText = "GET A QUOTE";
  }
});
