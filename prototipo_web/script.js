// Theme Management
function setTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        updateThemeButtons('dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        updateThemeButtons('light');
    }
}

function updateThemeButtons(theme) {
    const lightBtn = document.getElementById('lightModeBtn');
    const darkBtn = document.getElementById('darkModeBtn');
    
    if (lightBtn && darkBtn) {
        if (theme === 'dark') {
            lightBtn.classList.remove('active');
            darkBtn.classList.add('active');
        } else {
            lightBtn.classList.add('active');
            darkBtn.classList.remove('active');
        }
    }
}

// Font Size Management
function setFontSize(size) {
    const body = document.body;
    
    body.classList.remove('font-small', 'font-large');
    
    if (size === 'small') {
        body.classList.add('font-small');
    } else if (size === 'large') {
        body.classList.add('font-large');
    }
    
    localStorage.setItem('fontSize', size);
    updateFontSizeButtons(size);
}

function updateFontSizeButtons(size) {
    const smallBtn = document.getElementById('fontSmallBtn');
    const mediumBtn = document.getElementById('fontMediumBtn');
    const largeBtn = document.getElementById('fontLargeBtn');
    
    if (smallBtn && mediumBtn && largeBtn) {
        smallBtn.classList.remove('active');
        mediumBtn.classList.remove('active');
        largeBtn.classList.remove('active');
        
        if (size === 'small') {
            smallBtn.classList.add('active');
        } else if (size === 'large') {
            largeBtn.classList.add('active');
        } else {
            mediumBtn.classList.add('active');
        }
    }
}

// Contrast Management
function setContrast(highContrast) {
    const body = document.body;
    
    if (highContrast) {
        body.classList.add('high-contrast');
        localStorage.setItem('contrast', 'high');
        updateContrastButtons(true);
    } else {
        body.classList.remove('high-contrast');
        localStorage.setItem('contrast', 'normal');
        updateContrastButtons(false);
    }
}

function updateContrastButtons(highContrast) {
    const offBtn = document.getElementById('contrastOffBtn');
    const onBtn = document.getElementById('contrastOnBtn');
    
    if (offBtn && onBtn) {
        if (highContrast) {
            offBtn.classList.remove('active');
            onBtn.classList.add('active');
        } else {
            offBtn.classList.add('active');
            onBtn.classList.remove('active');
        }
    }
}

// Tab Switching for Tournament Detail
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all triggers
    const triggers = document.querySelectorAll('.tab-trigger');
    triggers.forEach(trigger => trigger.classList.remove('active'));}
