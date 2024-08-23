const constructListComponent = async (root) => {
    let data;

    const resp = await fetch("./items");
    data = await resp.json();

    const renderItem = (item) => `
        <li>
            <input type="checkbox" name="items" id="${item.id}" value="${item.id}" />
            <label for="${item.id}">
                <div>${item.name}</div>
                <div>${item.description}</div>
            </label>
        </li>`;

    render = () => {
        let html = data.map(d => renderItem(d)).join("");
        root.innerHTML = html;
    };

    render();
}

constructListComponent(document.querySelector("ul"));

// Hanterar submit formularen for valda objekt
function handleSubmit(event) {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Rensa formen för de valda objekter 
        const root = document.querySelector("form");
        root.innerHTML = ""; 

      // container för korten
      const cardsContainer = document.createElement('div');
      cardsContainer.id = 'cards-container';
      root.appendChild(cardsContainer);

      // Rendera objekt som kort (cards)
      data.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
              <img src="https://robohash.org/${item.id}" alt="${item.name}" />
              <h3>${item.name}</h3>
              <p>${item.description}</p>`;
          cardsContainer.appendChild(card);
      });

       // Tillbaka till Start knapp
       const backButton = document.createElement('button');
       backButton.textContent = "Tillbaka till Start";
       backButton.onclick = () => {
        root.innerHTML = ''; // Rensar korten
        constructListComponent(root); // Anropa constructListComponent för att återställa listan
        };
       root.appendChild(backButton);

    })
    .catch(error => {
        console.error('Error:', error);
    });
}
