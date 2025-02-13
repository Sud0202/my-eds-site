export default async function decorate(block) {
        const response = await fetch("http://localhost:3000/sampledata.json");

        const data = await response.json();

        const table = document.createElement('table');
        
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        for (let column in data.data[0]) {
            const th = document.createElement('th');
            th.textContent = column;
            headerRow.appendChild(th);
        }
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        const tbody = document.createElement('tbody');
        
        for (let i = 0; i < data.data.length; i++) {
            const row = document.createElement('tr');
            for (let column in data.data[i]) {
                const td = document.createElement('td');
                td.textContent = data.data[i][column];
                row.appendChild(td);
            }
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        
        block.appendChild(table);
}
