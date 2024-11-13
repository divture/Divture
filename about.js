document.addEventListener("DOMContentLoaded", () => {
    const founders = document.querySelectorAll('.founder');
    
    // Adding a simple fade-in effect to the founders section when it scrolls into view
    const onScroll = () => {
        founders.forEach(founder => {
            const position = founder.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                founder.classList.add('fade-in');
            }
        });
    };
    
    // Listen to scroll event
    window.addEventListener('scroll', onScroll);
    
    // Trigger scroll event on page load to check for any initial visibility
    onScroll();
});
