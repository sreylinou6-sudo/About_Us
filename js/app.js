const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const loveBtn = document.getElementById('loveBtn');
const messageBtn = document.getElementById('messageBtn');
const letterText = document.getElementById('letterText');
const countdown = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.18,
    rootMargin: '0px 0px -80px 0px',
});

document.querySelectorAll('section').forEach((section, index) => {
    section.style.setProperty('--section-delay', `${index * 0.12}s`);
    sectionObserver.observe(section);
});

const loveNotes = [
    "ស្នាមញញឹមរបស់អូនធ្វើឱ្យបងមានអារម្មណ៍ល្អណាស់💞។",
    "បងនឹងស្រលាញ់អូនតែ​ ៣ ថ្ងៃទេ គឺ ម្សិលមិញ,ថ្ងៃនេះ និង ថ្ងៃស្អែក!🥰",
    "បងស្រលាញ់អូនណាស់! អូនសម្លាញ៉!!!",
    "សេចក្ដីស្រឡាញ់របស់បងចំពោះអូនកាន់តែជ្រាលជ្រៅជាមួយនឹងរាល់ការចងចាំដែលពួកយើងបានបង្កើតវាឡើង😊",
    "ឱ្យតែមានអូន កន្លែងណាក៏ជាផ្ទះរបស់បងដែរ",
    "រាល់ពេលបេះដូងបងលោត គឺខ្សឹបហៅឈ្មោះអូនគ្រប់ពេល",
    "អរគុណអូនសម្លាញ់ដែលធ្វើឱ្យស្នេហាមានអារម្មណ៍ថាមិនបាច់ប្រឹង និងនៅជាមួយបងរហូតណាអូនសម្លាញ់💖💕"
];

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.classList.add('visible');
        lightbox.style.display = 'flex';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('visible');
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        lightbox.classList.remove('visible');
        lightbox.style.display = 'none';
    }
});

const createHeart = () => {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = `${Math.random() * 90}vw`;
    heart.style.bottom = '-40px';
    heart.style.fontSize = `${Math.random() * 20 + 24}px`;
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.9';
    heart.style.zIndex = '10';
    heart.style.transition = 'transform 5s linear, opacity 5s ease';
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
        heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 90 - 45}deg)`;
        heart.style.opacity = '0';
    });

    setTimeout(() => heart.remove(), 5000);
};

setInterval(createHeart, 350);

const getRandomNote = () => loveNotes[Math.floor(Math.random() * loveNotes.length)];

const showLoveNote = () => {
    letterText.textContent = getRandomNote();
};

loveBtn.addEventListener('click', showLoveNote);
messageBtn.addEventListener('click', showLoveNote);

const anniversaryDate = new Date();
anniversaryDate.setMonth(anniversaryDate.getMonth() + 1);
anniversaryDate.setDate(14);
anniversaryDate.setHours(0, 0, 0, 0);

const updateCountdown = () => {
    const now = new Date();
    let diff = anniversaryDate - now;

    if (diff <= 0) {
        anniversaryDate.setFullYear(anniversaryDate.getFullYear() + 1);
        diff = anniversaryDate - now;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.days.textContent = String(days).padStart(2, '0');
    countdown.hours.textContent = String(hours).padStart(2, '0');
    countdown.minutes.textContent = String(minutes).padStart(2, '0');
    countdown.seconds.textContent = String(seconds).padStart(2, '0');
};

updateCountdown();
setInterval(updateCountdown, 1000);
// For start days with us
const startDate = new Date("2026-05-01");
const today = new Date();

const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysTogether").innerText =
    diffDays + " Days ❤️";

// For auto song
window.addEventListener('DOMContentLoaded', () => {
        const music = document.getElementById('bg-music');

        // ព្យាយាមចាក់អូតូពេលបើកមកភ្លាម (ប្រសិនបើ Browser អនុញ្ញាត)
        music.play().catch(error => {
            console.log("Browser បានទប់ស្កាត់ការចាក់អូតូ។ ចម្រៀងនឹងចាក់ពេលអ្នកចុចលើ Web។");
        });

        // ដំណោះស្រាយច្បាស់លាស់៖ ឱ្យចម្រៀងចាក់ភ្លាម ពេលអ្នកប្រើប្រាស់ចុចលើ Menu ណាមួយក្នុង navbar
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // ប្រសិនបើចម្រៀងមិនទាន់ចាក់ វានឹងចាក់ភ្លាម
                if (music.paused) {
                    music.play();
                }
            });
        });
    });