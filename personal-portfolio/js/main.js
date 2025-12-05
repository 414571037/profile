// This file contains JavaScript functionality for the personal portfolio website.
// It handles smooth scrolling for anchor links, hover effects, and other interactive features.

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links (enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                e.preventDefault();
                const el = document.querySelector(targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Animate progress bars when visible
    const progressEls = document.querySelectorAll('.progress');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const value = el.dataset.percentage || '0';
                el.style.width = value + '%';
                el.classList.add('show');
            }
        });
    }, { threshold: 0.35 });
    progressEls.forEach(el => obs.observe(el));

    // Reveal animations for cards, skills, timeline
    const revealEls = document.querySelectorAll('.project-card, .skill, .timeline-item');
    const rev = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.18 });
    revealEls.forEach(el => { el.classList.add('reveal'); rev.observe(el); });

    // Back to top
    const topBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        topBtn.style.display = (window.scrollY > 320) ? 'block' : 'none';
    });
    if (topBtn) topBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
});