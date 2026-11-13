/* ===== CONFIG ===== */
// Relationship start date: 01.05.2026 (1 May 2026, local time)
const START = new Date(2026, 4, 1, 0, 0, 0);

/* ===== ELEMENTS ===== */
const $ = (id) => document.getElementById(id);
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const lightbox = $('lightbox');
const lightboxImage = $('lightboxImage');
const lightboxClose = $('lightboxClose');
const loveBtn = $('loveBtn');
const messageBtn = $('messageBtn');
const letterText = $('letterText');
const music = $('bg-music');
const musicBtn = $('musicBtn');

const SEC = 1000, MIN = 60 * SEC, HOUR = 60 * MIN, DAY = 24 * HOUR, WEEK = 7 * DAY;
const fmt = (n) => Number(n).toLocaleString('en-US');
const pad = (n) => String(n).padStart(2, '0');

/* ===== SECTION REVEAL ===== */
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('section').forEach((section, index) => {
    section.style.setProperty('--section-delay', `${Math.min(index, 3) * 0.08}s`);
    sectionObserver.observe(section);
});

/* ===== NAV ===== */
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ===== LIGHTBOX (gallery + date photos) ===== */
document.querySelectorAll('.gallery-grid img, .date-photo img').forEach((img) => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.style.display = 'flex';
    });
});
const closeLightbox = () => { lightbox.style.display = 'none'; };
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

/* ===== FLOATING HEARTS ===== */
const createHeart = () => {
    if (document.hidden) return;
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
setInterval(createHeart, 500);

/* ===== LOVE NOTES ===== */
const loveNotes = [
    "ស្នាមញញឹមរបស់អូនធ្វើឱ្យបងមានអារម្មណ៍ល្អណាស់💞។",
    "បងនឹងស្រលាញ់អូនតែ​ ៣ ថ្ងៃទេ គឺ ម្សិលមិញ ថ្ងៃនេះ និង ថ្ងៃស្អែក!🥰",
    "បងស្រលាញ់អូនណាស់! អូនសម្លាញ់!!!",
    "សេចក្ដីស្រឡាញ់របស់បងចំពោះអូនកាន់តែជ្រាលជ្រៅជាមួយនឹងរាល់ការចងចាំដែលពួកយើងបានបង្កើតវាឡើង😊",
    "ឱ្យតែមានអូន កន្លែងណាក៏ជាផ្ទះរបស់បងដែរ",
    "រាល់ពេលបេះដូងបងលោត គឺខ្សឹបហៅឈ្មោះអូនគ្រប់ពេល",
    "អរគុណអូនសម្លាញ់ដែលធ្វើឱ្យស្នេហាមានអារម្មណ៍ថាមិនបាច់ប្រឹង និងនៅជាមួយបងរហូតណាអូនសម្លាញ់💖💕"
];
const showLoveNote = () => {
    letterText.textContent = loveNotes[Math.floor(Math.random() * loveNotes.length)];
};
loveBtn.addEventListener('click', () => {
    showLoveNote();
    $('letter').scrollIntoView({ behavior: 'smooth' });
});
messageBtn.addEventListener('click', showLoveNote);

/* ===== TIME TOGETHER (calendar-accurate) ===== */
const addMonths = (date, months) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
};

const monthsBetween = (from, to) => {
    let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    if (addMonths(from, months) > to) months--;
    return Math.max(months, 0);
};

const updateTogether = () => {
    const now = new Date();
    const total = Math.max(now - START, 0);

    // Breakdown: years, months, weeks, days, hours, minutes, seconds
    const totalMonths = monthsBetween(START, now);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const rem = Math.max(now - addMonths(START, totalMonths), 0);
    const remDays = Math.floor(rem / DAY);
    const weeks = Math.floor(remDays / 7);
    const days = remDays % 7;
    const hours = Math.floor((rem % DAY) / HOUR);
    const minutes = Math.floor((rem % HOUR) / MIN);
    const seconds = Math.floor((rem % MIN) / SEC);

    $('cYears').textContent = years;
    $('cMonths').textContent = months;
    $('cWeeks').textContent = weeks;
    $('cDays').textContent = days;
    $('cHours').textContent = pad(hours);
    $('cMinutes').textContent = pad(minutes);
    $('cSeconds').textContent = pad(seconds);

    $('counterSentence').textContent =
        `យើងស្រលាញ់គ្នាបាន ${years} ឆ្នាំ ${months} ខែ ${weeks} សប្តាហ៍ ${days} ថ្ងៃ ${hours} ម៉ោង ${minutes} នាទី ${seconds} វិនាទី 💞`;

    // Totals
    const totalDays = Math.floor(total / DAY);
    $('tMonths').textContent = fmt(totalMonths);
    $('tWeeks').textContent = fmt(Math.floor(total / WEEK));
    $('tDays').textContent = fmt(totalDays);
    $('tHours').textContent = fmt(Math.floor(total / HOUR));
    $('tMinutes').textContent = fmt(Math.floor(total / MIN));
    $('tSeconds').textContent = fmt(Math.floor(total / SEC));

    $('heroDays').textContent = `${fmt(totalDays)} ថ្ងៃ ❤️`;
    $('daysTogether').textContent = `${fmt(totalDays)} Days ❤️`;
};

/* ===== MILESTONES ===== */
const milestones = [
    { icon: '💗', label: '១០០ ថ្ងៃ', date: new Date(START.getTime() + 100 * DAY) },
    { icon: '🌷', label: '២០០ ថ្ងៃ', date: new Date(START.getTime() + 200 * DAY) },
    { icon: '🌹', label: '៦ ខែ', date: addMonths(START, 6) },
    { icon: '💞', label: '៣០០ ថ្ងៃ', date: new Date(START.getTime() + 300 * DAY) },
    { icon: '💍', label: '១ ឆ្នាំ', date: addMonths(START, 12) },
    { icon: '🎀', label: '៥០០ ថ្ងៃ', date: new Date(START.getTime() + 500 * DAY) },
    { icon: '👑', label: '២ ឆ្នាំ', date: addMonths(START, 24) },
];

const dateText = (d) =>
    d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

const renderMilestones = () => {
    const now = new Date();
    $('milestoneList').innerHTML = milestones.map((m) => {
        const done = m.date <= now;
        const pct = Math.min(100, Math.max(0, ((now - START) / (m.date - START)) * 100));
        const left = Math.ceil((m.date - now) / DAY);
        return `
        <div class="milestone ${done ? 'done' : ''}">
            <div class="milestone-icon">${m.icon}</div>
            <div class="milestone-body">
                <div class="milestone-top">
                    <h3>${m.label}</h3>
                    <span class="milestone-date">${dateText(m.date)}</span>
                </div>
                <div class="progress"><div class="progress-bar" style="width:${pct.toFixed(1)}%"></div></div>
                <small>${done ? '✅ សម្រេចបានហើយ!' : `នៅសល់ ${fmt(left)} ថ្ងៃ · ${pct.toFixed(0)}%`}</small>
            </div>
        </div>`;
    }).join('');
};

/* ===== NEXT ANNIVERSARY + MONTHSARY ===== */
const nextAnniversary = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), 4, 1, 0, 0, 0);
    if (target <= now) target = new Date(now.getFullYear() + 1, 4, 1, 0, 0, 0);
    return target;
};

const nextMonthsary = () => {
    const now = new Date();
    let target = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
    if (target <= now) target = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    return target;
};

const updateCountdown = () => {
    const now = new Date();
    const target = nextAnniversary();
    const diff = target - now;
    const yearNo = target.getFullYear() - START.getFullYear();

    $('days').textContent = pad(Math.floor(diff / DAY));
    $('hours').textContent = pad(Math.floor((diff % DAY) / HOUR));
    $('minutes').textContent = pad(Math.floor((diff % HOUR) / MIN));
    $('seconds').textContent = pad(Math.floor((diff % MIN) / SEC));
    $('nextLabel').textContent = `ខួបទី ${yearNo} · ${dateText(target)}`;

    const m = nextMonthsary() - now;
    $('monthsaryCountdown').textContent =
        `${Math.floor(m / DAY)} ថ្ងៃ ${pad(Math.floor((m % DAY) / HOUR))}:${pad(Math.floor((m % HOUR) / MIN))}:${pad(Math.floor((m % MIN) / SEC))}`;
};

const tick = () => { updateTogether(); updateCountdown(); };
tick();
renderMilestones();
setInterval(tick, 1000);
setInterval(renderMilestones, 60 * 60 * 1000);

/* ===== MUSIC ===== */
const setMusicIcon = () => { musicBtn.textContent = music.paused ? '🔇' : '🎵'; };
const startMusic = () => music.play().then(setMusicIcon).catch(() => {});

window.addEventListener('DOMContentLoaded', () => {
    music.play().then(setMusicIcon).catch(() => setMusicIcon());
    // Browsers block autoplay, so start on the first interaction
    const once = () => {
        ['click', 'touchstart'].forEach((ev) => window.removeEventListener(ev, once));
        if (!userToggledMusic && music.paused) startMusic();
    };
    ['click', 'touchstart'].forEach((ev) =>
        window.addEventListener(ev, once, { passive: true })
    );
});

let userToggledMusic = false;
musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userToggledMusic = true;
    if (music.paused) startMusic(); else { music.pause(); setMusicIcon(); }
});