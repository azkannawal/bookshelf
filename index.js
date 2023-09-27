let x = [];
function data(data) {
        data.preventDefault();
        const title = document.querySelector('#bookTitle'),
              author = document.querySelector('#author'),
              year = document.querySelector('#year'), 
              finished = document.querySelector('#finished'),
              identity = {
            id: +new Date,
            title: title.value,
            author: author.value,
            year: year.value,
            isComplete: finished.checked
            };
        console.log(identity),
        x.push(identity),
        document.dispatchEvent(new Event('update'))
    }
function title(data) {
        data.preventDefault();
        const title = document.querySelector("#searchTitle");
        query = title.value,
        query ? identity(x.filter((function(x) {
            return x.title.toLowerCase().includes(query.toLowerCase())
        }
        ))) : identity(x)
    }
function author(data) {
        const title = Number(data.target.id)
          , author = x.findIndex((function(x) {
            return x.id === title
        }
        ));
        -1 !== author && (x[author] = {
            ...x[author],
            isComplete: !0
        },
        document.dispatchEvent(new Event('update')))
    }
function year(data) {
        const title = Number(data.target.id)
          , author = x.findIndex((function(x) {
            return x.id === title
        }
        ));
        -1 !== author && (x[author] = {
            ...x[author],
            isComplete: !1
        },
        document.dispatchEvent(new Event('update')))
    }
function finished(data) {
        const title = Number(data.target.id)
          , author = x.findIndex((function(x) {
            return x.id === title
        }
        ));
        -1 !== author && (x.splice(author, 1),
        document.dispatchEvent(new Event('update')))
    }
function identity(x) {
        const data = document.querySelector('#toRead');
        const title = document.querySelector('#read');
        data.innerHTML = "";
        title.innerHTML = "";
        for (const identity of x) {
            const x = document.createElement('article');
            x.classList.add('item');
            const a = document.createElement('h2');
            a.innerText = identity.title;
            const u = document.createElement("p");
            u.innerText = "Author: " + identity.author;
            const r = document.createElement("p");
            if (r.innerText = "Year: " + identity.year,
            x.appendChild(a),
            x.appendChild(u),
            x.appendChild(r),
            identity.isComplete) {
                const data = document.createElement('div');
                data.classList.add('action');
                const author = document.createElement('button');
                author.id = identity.id,
                author.innerText = 'Not finished',
                author.classList.add('green'),
                author.addEventListener('click', year);
                const a = document.createElement('button');
                a.id = identity.id,
                a.innerText = 'Delete',
                a.classList.add('red'),
                a.addEventListener('click', finished),
                data.appendChild(author),
                data.appendChild(a),
                x.appendChild(data),
                title.appendChild(x)
            } else {
                const title = document.createElement('div');
                title.classList.add('action');
                const year = document.createElement('button');
                year.id = identity.id,
                year.innerText = 'Finished',
                year.classList.add('green'),
                year.addEventListener('click', author);
                const a = document.createElement('button');
                a.id = identity.id,
                a.innerText = 'Delete',
                a.classList.add('red'),
                a.addEventListener('click', finished),
                title.appendChild(year),
                title.appendChild(a),
                x.appendChild(title),
                data.appendChild(x)
            }
        }
    }
function a() {
        !function(x) {
            localStorage.setItem('books', JSON.stringify(x))
        }(x),
        identity(x)
    }
window.addEventListener('load', (function() {
        x = JSON.parse(localStorage.getItem("books")) || [],
        identity(x);
        const author = document.querySelector("#inputForm")
          , year = document.querySelector("#searchBook");
        author.addEventListener("submit", data),
        year.addEventListener("submit", title),
        document.addEventListener('update', a)
    }
    ))