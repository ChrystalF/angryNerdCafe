function init() {
    let year = new Date().getFullYear();
    document.querySelector('footer').innerHTML = `Copyright &copy; ${year} Angry Nerd Cafe &nbsp; | &nbsp;
    <a href="mailto:emailAddress@EmailService.com">emailAddress@EmailService.com</a>`;
    };
    
document.addEventListener('DOMContentLoaded', init);