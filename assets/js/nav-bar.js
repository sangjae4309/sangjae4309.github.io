
function loadNavbar(currentPage){
    fetch('/assets/html/nav-bar.html')
        .then(response => response.text())
        .then(html => {
            const placeholder = document.getElementById('navbar-placeholder');
            placeholder.innerHTML = html;
        
            // Dynamically set active class and insert '(current)'
            const links = placeholder.querySelectorAll('.nav-link');
            links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.parentElement.classList.add('navbar-active', 'font-weight-bold');
                const spanCurrent = document.createElement('span');
                spanCurrent.className = 'sr-only';
                spanCurrent.textContent = ' (current)';
                link.appendChild(spanCurrent);
            }
            });
        })
      .catch(err => console.error('Failed to load navbar:', err));  
}