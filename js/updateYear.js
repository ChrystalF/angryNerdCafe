function init() {
    let year = new Date().getFullYear();
    document.querySelector('footer').innerHTML = `Copyright &copy; ${year} Chrystal F. All rights reserved.`;
    };
    
document.addEventListener('DOMContentLoaded', init);
