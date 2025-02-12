export default async function decorate(block) {
    let currentPage = 1;
    const resultsPerPage = 20;

    async function renderTable() {
        try {
            const response = await fetch("http://localhost:3000/sampledata.json");
            const data = await response.json();
            const totalPages = Math.ceil(data.total / resultsPerPage);
            const offset = (currentPage - 1) * resultsPerPage;

            block.innerHTML = '';
            block.appendChild(createTable(data, offset));
            block.appendChild(createPagination(totalPages));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function createTable(data, offset) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        thead.innerHTML = `<tr>${data.columns.map(col => `<th>${col}</th>`).join('')}</tr>`;
        tbody.innerHTML = data.data.slice(offset, offset + resultsPerPage).map(row =>
            `<tr>${data.columns.map(col => `<td>${row[col]}</td>`).join('')}</tr>`
        ).join('');
        
        table.appendChild(thead);
        table.appendChild(tbody);
        return table;
    }

    function createPagination(totalPages) {
        const pagination = document.createElement('div');
        pagination.classList.add('pagination');

        const prevButton = createPaginationButton('Previous', currentPage > 1, () => { currentPage--; renderTable(); });
        const pageIndicator = document.createElement('span');
        pageIndicator.classList.add('page-indicator');
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
        const nextButton = createPaginationButton('Next', currentPage < totalPages, () => { currentPage++; renderTable(); });

        pagination.appendChild(prevButton);
        pagination.appendChild(pageIndicator);
        pagination.appendChild(nextButton);

        return pagination;
    }

    function createPaginationButton(text, enabled, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.disabled = !enabled;
        button.addEventListener('click', onClick);
        return button;
    }

    renderTable();
}
