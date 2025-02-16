document.addEventListener('DOMContentLoaded', function() {
    const profileMenu = document.getElementById('profileMenu');
    const profile = document.getElementById('profile');
    const signUpPopup = document.getElementById('signUpPopup');
    const signInPopup = document.getElementById('signInPopup');
    const searchButton = document.getElementById('searchButton');
    const initialContent = document.getElementById('initialContent');
    const skeletonLoading = document.getElementById('skeletonLoading');
    const searchResults = document.getElementById('searchResults');

    if (profileMenu && profile) {
        document.addEventListener('click', function(e) {
            if (!profile.contains(e.target)) {
                profileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                profileMenu.classList.remove('opacity-100', 'scale-100');
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            if (initialContent) initialContent.classList.add('hidden');
            if (skeletonLoading) skeletonLoading.classList.remove('hidden');

            // Simulate loading
            setTimeout(() => {
                if (skeletonLoading) skeletonLoading.classList.add('hidden');
                if (searchResults) searchResults.classList.remove('hidden');
            }, 2000);
        });
    }

    function toggleSignUpPopup() {
        if (!signUpPopup) return;
        const dialog = signUpPopup.querySelector('div');
        
        if (signUpPopup.classList.contains('opacity-0')) {
            // Show sign up popup
            signUpPopup.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                dialog.classList.remove('scale-95', 'opacity-0');
            }, 10);
            // Hide sign in popup if open
            if (signInPopup && !signInPopup.classList.contains('opacity-0')) {
                toggleSignInPopup();
            }
        } else {
            // Hide sign up popup
            dialog.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                signUpPopup.classList.add('opacity-0', 'pointer-events-none');
            }, 200);
        }
    }

    function toggleSignInPopup() {
        if (!signInPopup) return;
        const dialog = signInPopup.querySelector('div');
        
        if (signInPopup.classList.contains('opacity-0')) {
            // Show sign in popup
            signInPopup.classList.remove('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                dialog.classList.remove('scale-95', 'opacity-0');
            }, 10);
            // Hide sign up popup if open
            if (signUpPopup && !signUpPopup.classList.contains('opacity-0')) {
                toggleSignUpPopup();
            }
        } else {
            // Hide sign in popup
            dialog.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                signInPopup.classList.add('opacity-0', 'pointer-events-none');
            }, 200);
        }
    }

    window.toggleSignUpPopup = toggleSignUpPopup;
    window.toggleSignInPopup = toggleSignInPopup;
});












document.addEventListener('DOMContentLoaded', function() {
    // Get both desktop and mobile create buttons
    const mobileCreateButton = document.getElementById('createButton');
    
    if (mobileCreateButton) {
        mobileCreateButton.addEventListener('click', function(e) {
            e.preventDefault();
            togglePopup();
        });
    }
});

function togglePopup() {
    const popup = document.getElementById('domainPopup');
    const dialog = popup.querySelector('div');
    
    if (popup.classList.contains('opacity-0')) {
        // Show popup
        popup.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            dialog.classList.remove('scale-95', 'opacity-0');
        }, 10);
    } else {
        // Hide popup
        dialog.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            popup.classList.add('opacity-0', 'pointer-events-none');
        }, 200);
    }
}



function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    const isHidden = menu.classList.contains('opacity-0');
    
    if (isHidden) {
        menu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
        menu.classList.add('opacity-100', 'scale-100');
    } else {
        menu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
        menu.classList.remove('opacity-100', 'scale-100');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const menu = document.getElementById('profileMenu');
    const profile = document.getElementById('profile');
    if (!profile.contains(e.target)) {
        menu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
        menu.classList.remove('opacity-100', 'scale-100');
    }
});


 // Simulate loading
 setTimeout(() => {
    const skeletonLoading = document.getElementById('skeletonLoading');
    const content = document.getElementById('content');
    const noResults = document.getElementById('noResults');

    // Hide skeleton loading
    skeletonLoading.classList.add('hidden');

    // Show content or no results
    const hasResults = true; // Change this to simulate no results
    if (hasResults) {
        content.classList.remove('hidden');
    } else {
        noResults.classList.remove('hidden');
    }
}, 2000);







document.getElementById('searchButton').addEventListener('click', function() {
    const initialContent = document.getElementById('initialContent');
    const heroSection = document.getElementById('heroSection');
    const resultsArea = document.getElementById('resultsArea');
    const skeletonLoading = document.getElementById('skeletonLoading');
    const searchResults = document.getElementById('searchResults');

    // Hide initial content and hero section
    initialContent.classList.add('hidden');
    heroSection.classList.add('hidden');
    resultsArea.classList.add('hidden');

    // Show skeleton loading
    skeletonLoading.classList.remove('hidden');

    // Simulate loading
    setTimeout(() => {
        // Hide skeleton loading
        skeletonLoading.classList.add('hidden');

        // Show search results
        searchResults.classList.remove('hidden');
    }, 2000);
});




function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuContent = menu.children[0];
    const menuButton = document.getElementById('menuButton');
    const menuIcon = menuButton.querySelector('.menu-icon');
    const closeIcon = menuButton.querySelector('.close-icon');
    
    if (menu.classList.contains('opacity-0')) {
        // Show menu
        menu.classList.remove('opacity-0', 'pointer-events-none');
        menuContent.classList.remove('scale-95', 'opacity-0');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        // Hide menu
        menu.classList.add('opacity-0', 'pointer-events-none');
        menuContent.classList.add('scale-95', 'opacity-0');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const menuButton = document.getElementById('menuButton');
    
    if (!menu.contains(e.target) && !menuButton.contains(e.target) && !menu.classList.contains('opacity-0')) {
        toggleMenu();
    }
});






