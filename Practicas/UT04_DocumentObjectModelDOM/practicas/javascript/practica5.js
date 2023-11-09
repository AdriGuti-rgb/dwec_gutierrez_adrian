let li = document.querySelectorAll("li")
let a = document.createElement("a");

const urls = {
    google: "https://www.google.com",
    duckDuckGo: "https://www.duckduckgo.com",
    bing: "https://www.bing.com",
    ecosia: "https://www.ecosia.org",
    wolframAlpha: "https://www.wolframalpha.com",
}

let lis = document.getElementsByTagName("li")

Array.from(lis)
    .forEach( li => {
        li.innerHTML = `<a href='${urls[li.textContent.toLowerCase()]}'>${li.textContent}</a>`
    });
    

// for (let item of li) {
//     item.innerHTML = item.textContent =="Google" ? item.innerHTML = "<a href='https://google.com'>Google</a>"
//                         : item.textContent == "DuckDuckGo" ? item.innerHTML = "<a href='https://duckduckgo.com'>DuckDuckGo</a>"
//                         : item.textContent == "Bing" ? item.innerHTML = "<a href='https://bing.com'>Bing</a>"
//                         : item.textContent == "Ecosia" ? item.innerHTML = "<a href='https://www.ecosia.org/'>Ecosia</a>"
//                         : item.innerHTML = "<a href='https://wolframalpha.com'>Wolfram Alpha</a>";               
// }


// for (let item of li) {
//     if (item.textContent == "Google") {
//         a.setAttribute("href", "https://google.com")
//     } else if (item.textContent == "DuckDuckGo") {
//         a.setAttribute("href", "https://duckduckgo.com")
//     } else if (item.textContent == "Bing") {
//         a.setAttribute("href", "https://bing.com")
//     } else if (item.textContent == "Ecosia") {
//         a.setAttribute("href", "https://ecosia.org")
//     } else {
//         a.setAttribute("href", "https://wolframalpha.com")
//     }

//     a.textContent = item.textContent;
//     item.textContent = null;

//     item.append(a);
//     a = document.createElement("a");
// }