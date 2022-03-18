var btnSearch= document.querySelector('.search-box__btn');
// var searchBox= document.querySelector('.search-box')

function openSearch(){
    // searchBox.classList.toggle('open');
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
}

btnSearch.addEventListener('click',openSearch);