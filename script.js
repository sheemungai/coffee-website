const navbar = document.getElementById('navbar')
navbar.addEventListener("click",(event) =>{
    if (event.target.tagName === 'A'){
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
);
const buyNowButton =document.getElementById("buy")
    buyNowButton.addEventListener('click', (event)=>{
        event.preventDefault();
            const menuSection = document.getElementById('menu');

     if (menuSection){
        menuSection.scrollIntoView({
            behaviour: 'smooth'
        });
     }
        
    }
    )



