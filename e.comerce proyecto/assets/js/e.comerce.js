addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if( btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_itms')
            menu_items.classList.toggle('show')
        })
    }
})

windos.addEventListener ('load', () =>{
    let button = document.querySelector('.store')

    button.addEventListener( 'click', (e)=>{
        e.preventDefault();
        alert("Listo para comprar")
    })
})