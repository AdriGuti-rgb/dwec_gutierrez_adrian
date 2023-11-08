let li = document.querySelectorAll("li")

for (let item of li) {
    item.innerHTML = item.textContent =="Google" ? item.innerHTML = "<a href='https://google.com'>Google</a>"
                        : item.textContent == "DuckDuckGo" ? item.innerHTML = "<a href='https://duckduckgo.com'>DuckDuckGo</a>"
                        : item.textContent == "Bing" ? item.innerHTML = "<a href='https://bing.com'>Bing</a>"
                        : item.textContent == "Ecosia" ? item.innerHTML = "<a href='https://www.ecosia.org/'>Ecosia</a>"
                        : item.innerHTML = "<a href='https://wolframalpha.com'>Wolfram Alpha</a>";               
}