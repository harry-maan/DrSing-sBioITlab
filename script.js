// Counter Animation for Metrics (update with real values)
function animateMetrics() {
    const metrics = { citations: 234, hindex: 7, i10: 6 };
    Object.keys(metrics).forEach(key => {
        const el = document.getElementById(key);
        let count = 0;
        const increment = metrics[key] / 100;
        const timer = setInterval(() => {
            count += increment;
            if (count >= metrics[key]) {
                el.textContent = metrics[key] + (key === 'citations' ? '+' : '');
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(count) + (key === 'citations' ? '+' : '');
            }
        }, 20);
    });
}

// Form Submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! Message sent.'); // Replace with emailJS/Netlify
    });
});

// Navbar Mobile
// Add hamburger toggle logic here

window.addEventListener('load', animateMetrics);
