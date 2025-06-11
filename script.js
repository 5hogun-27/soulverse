// Pagination settings
const itemsPerPage = 30;
let currentPage = 1;
let filteredData = data; // From data.js

// DOM elements
const contentDiv = document.getElementById('content');
const searchInput = document.getElementById('search');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

// Render data for the current page
const renderData = (items, page) => {
    contentDiv.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);
    
    pageItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card bg-white p-6 rounded-lg shadow-md';
        card.innerHTML = `
            <h2 class="text-xl font-semibold text-blue-900">${item.name}</h2>
            <p class="text-gray-600 mt-2">${item.bio}</p>
            <blockquote class="mt-4 text-gray-800 italic">"${item.quote}"</blockquote>
        `;
        contentDiv.appendChild(card);
    });

    // Update pagination info
    const totalPages = Math.ceil(items.length / itemsPerPage);
    pageInfo.textContent = `Page ${page} of ${totalPages}`;
    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;
};

// Initial render
renderData(data, currentPage);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filteredData = data.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.quote.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderData(filteredData, currentPage);
});

// Pagination controls
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderData(filteredData, currentPage);
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderData(filteredData, currentPage); // Fixed typo: 'rendreData' to 'renderData'
    }
});