document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            const buttonId = buttons[i].id;
            escondeTodasAbas();

            const characters = document.getElementsByClassName('characters__character');

            for (let i = 0; i < characters.length; i++) {
                const aba = characters[i].id;
                if(aba == buttonId){
                    characters[i].classList.add('characters__character--is-active')
                }
            }   
        })
    }
})

function escondeTodasAbas() {
    const tabsContainer = document.getElementsByClassName('characters__character');

    for ( i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('characters__character--is-active');
    }
}