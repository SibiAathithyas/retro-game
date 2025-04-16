document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');
    const collectionItems = document.querySelectorAll('.collectible-item');
    const itemDetailsDiv = document.getElementById('item-details');

    // Function to show a specific page and highlight the active nav button
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        navButtons.forEach(button => {
            button.classList.remove('active-nav');
            if (button.dataset.target === pageId) {
                button.classList.add('active-nav');
            }
        });
        const pageToShow = document.getElementById(pageId);
        if (pageToShow) {
            pageToShow.classList.add('active');
        }
    }

    // Event listeners for navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.dataset.target;
            showPage(targetPage);
        });
    });

    // Initially show the homepage
    showPage('homepage');

    // Event listeners for collectible items (for displaying details)
    collectionItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemName = this.dataset.name;
            const itemDescription = this.dataset.description;
            itemDetailsDiv.innerHTML = `<h3 class="pixel-font">${itemName}</h3><p class="pixel-font">${itemDescription}</p>`;
            itemDetailsDiv.style.display = 'block';
        });
    });

    // Hide item details when clicking outside the items
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.collectible-item')) {
            itemDetailsDiv.style.display = 'none';
        }
    });
});