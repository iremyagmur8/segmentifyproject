const menuItem = document.querySelectorAll('.menu-item');
const contents = document.getElementById('contents');
const ar_contents = Array.from(contents.children);
const db = 'd-block';
const dn = 'd-none';


menuItem.forEach(element => {
    element.addEventListener('click', (e) => {
    console.log(element.children[0].getAttribute('data-tab'))
    let item = document.getElementById(element.children[0].getAttribute('data-tab'));

    ar_contents.forEach(element => {
        element.classList.remove(db);
        element.classList.add(dn);
    });

    item.classList.add(db);
    item.classList.remove(dn);

    })
});