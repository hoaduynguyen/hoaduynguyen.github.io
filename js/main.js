document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');

    // ===== Scroll to Top Button =====
    // Tham khảo: OpenLibraryVN/includes/js/page.js
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.title = 'Lên đầu trang';
    scrollBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 1em; height: 1em; fill: currentColor;"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Print / Export PDF Button =====
    const printBtn = document.createElement('button');
    printBtn.className = 'print-btn';
    printBtn.title = 'In / Xuất PDF';
    printBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 1em; height: 1em; fill: currentColor;"><path d="M128 0C92.7 0 64 28.7 64 64v96H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h16v96c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-96h16c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-16V64c0-35.3-28.7-64-64-64H128zm0 64h256v96H128V64zm0 288h256v96H128v-96zm288-80a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>';
    document.body.appendChild(printBtn);

    printBtn.addEventListener('click', () => {
        window.print();
    });
});
