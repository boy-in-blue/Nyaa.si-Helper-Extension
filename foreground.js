let isChecked = (e) => e.checked;

const get_table = () => document.querySelector("table");

const cop = () => {
    let str = '';
    // THIS IS CODE TO SELECT ALL ON THE PAGE
    // document.querySelectorAll('td.text-center a:nth-of-type(2)').forEach(
    //     href => str += href.getAttribute('href') + '\n'
    // );
    let t = get_table();
    let rows = [...t.rows];
    rows.shift();
    let selected = rows.filter(c => isChecked(c.querySelector("INPUT")));
    selected.forEach(e => {
        let href = e.querySelector('td.text-center a:nth-of-type(2)');
        str += href.getAttribute('href') + '\n';
    });

    console.log(str);
    navigator.clipboard.writeText(str).then(() => console.log('Copied'),
        (err) => console.error('Error:', err));
}

const selectall = () => {
    let t = get_table();
    let rows = [...t.rows];
    rows.shift();
    rows.forEach((c) => {
        c.querySelector("input").checked = true;
    })
}

const first = document.createElement('li');
first.innerHTML = `<a href="#">Copy Selected 🧲</a>`;
first.id = "36first";
document.querySelector('ul').appendChild(first);
document.getElementById('36first').addEventListener('click', cop);

let t = get_table();
let rows = [...t.rows];
let head = rows.shift();

rows.forEach(row => {
    let cell = row.insertCell(-1);
    cell.setAttribute("class", "text-center");
    let check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    cell.appendChild(check);
});

let th = document.createElement("th");
th.setAttribute("class", "text-center");
th.style.width = "50px";
th.innerHTML = `<a href="#" id="36all" title="All"></a>✅`;
head.appendChild(th);
th.addEventListener('click', selectall);

