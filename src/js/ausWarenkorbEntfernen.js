function removeItem(i) {
    let pan = JSON.parse(localStorage.getItem('warenkorb'));
    pan.splice(i, 1);
    localStorage.setItem('warenkorb', JSON.stringify(pan));
    window.location.reload();
}