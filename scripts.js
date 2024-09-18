const data = [
    // Cynox
    {loot: 0, dungeon: 'Estela Necrótica', slot: 'Head', name: 'Yelmo de escarcha oscura', player: 'Nopienso', ID: 178777},
    {loot: 0, dungeon: 'Nieblas de Tirna Scithe', slot: 'Neck', name: 'Llavero de "parada de emergencia"', player: 'Nopienso', ID: 221077},
    {loot: 0, dungeon: 'Tier', slot: 'Shoulder', name: 'Espaldares astados de escultor de guerra', player: 'Nopienso', ID: 211982},
    {loot: 0, dungeon: 'La Petrocámara', slot: 'Cloak', name: 'Manteo yunquepiel', player: 'Nopienso', ID: 221088},
    {loot: 0, dungeon: 'Tier', slot: 'Chest', name: 'Pechera de piel de escultor de guerra', player: 'Nopienso', ID: 211987},
    {loot: 0, dungeon: 'Craft', slot: 'Wrist', name: 'Avambrazos de forja eterna', player: 'Nopienso', ID: 222435},
    {loot: 0, dungeon: 'Tier', slot: 'Hands', name: 'Trituradores de escultor de guerra', player: 'Nopienso', ID: 211985},
    {loot: 0, dungeon: 'El Rompealbas', slot: 'Belt', name: 'Faja de ardides sombríos', player: 'Nopienso', ID: 221133},
    {loot: 0, dungeon: 'Tier', slot: 'Legs', name: 'Quijotes de escultor de guerra', player: 'Nopienso', ID: 211983},
    {loot: 0, dungeon: 'Asedio de Boralus', slot: 'Boots', name: 'Botas del baluarte negro', player: 'Nopienso', ID: 159428},
    {loot: 1, dungeon: 'Raid - Reina Ansurek', slot: 'Ring 1', name: 'Sello del pacto envenenado', player: 'Nopienso', ID: 225578},
    {loot: 0, dungeon: "Raid - Tuercelinajes Ovi'nax", slot: 'Ring 2', name: 'Gusanillo avieso', player: 'Nopienso', ID: 225576},
    {loot: 0, dungeon: 'Ara-Kara', slot: 'Trinket 1', name: 'Saco eclosionador de Ara-Kara', player: 'Nopienso', ID: 219314},
    {loot: 0, dungeon: "Raid - Princesa del Nexo Ky'veza", slot: 'Trinket 2', name: 'Transmisor traicionero', player: 'Nopienso', ID: 221023},
    {loot: 0, dungeon: 'Grim Batol', slot: 'Weapon 1', name: 'Martillo salvaje', player: 'Nopienso', ID: 133298},
    {loot: 0, dungeon: 'Craft', slot: 'Weapon 2', name: 'Manndoble cargado', player: 'Nopienso', ID: 222447},

    // Goi
    {loot: 0, dungeon: 'Nieblas de Tirna Scithe', slot: 'Head', name: 'Capucha de seda de crisálida', player: 'Mângo', ID: 178693},
    {loot: 0, dungeon: 'Raid - Sikran', slot: 'Neck', name: 'Insignia de zelote sureki', player: 'Mângo', ID: 225577},
    {loot: 0, dungeon: 'Tier', slot: 'Shoulder', name: 'Balizas de renacer violeta', player: 'Mângo', ID: 212090},
    {loot: 0, dungeon: 'Catalyst', slot: 'Cloak', name: 'Resguardo de renacer violeta', player: 'Mângo', ID: 212087},
    {loot: 0, dungeon: 'Tier', slot: 'Chest', name: 'Abrigo rúnico de renacer violeta', player: 'Mângo', ID: 212095},
    {loot: 0, dungeon: 'Craft', slot: 'Wrist', name: 'Puños consagrados', player: 'Mângo', ID: 222815},
    {loot: 0, dungeon: 'Tier', slot: 'Hands', name: 'Guanteletes con joyas de renacer violeta', player: 'Mângo', ID: 212093},
    {loot: 0, dungeon: 'Raid - Reina Ansurek', slot: 'Belt', name: 'Fajín de ascendiente mordaz', player: 'Mângo', ID: 225585},
    {loot: 0, dungeon: 'Tier', slot: 'Legs', name: 'Cubrecolas de renacer violeta', player: 'Mângo', ID: 212091},
    {loot: 0, dungeon: 'Catalyst', slot: 'Boots', name: 'Zapatillas de renacer violeta', player: 'Mângo', ID: 212094},
    {loot: 0, dungeon: 'Raid - Reina Ansurek', slot: 'Ring 1', name: 'Sello del pacto envenenado', player: 'Mângo', ID: 225578},
    {loot: 0, dungeon: "Raid - Tuercelinajes Ovi'nax", slot: 'Ring 2', name: 'Gusanillo avieso', player: 'Mângo', ID: 225576},
    {loot: 0, dungeon: "Raid - Anub'arash", slot: 'Trinket 1', name: 'Red de maestro de espías', player: 'Mângo', ID: 220202},
    {loot: 0, dungeon: 'Ara-Kara', slot: 'Trinket 2', name: 'Saco eclosionador de Ara-Kara', player: 'Mângo', ID: 219314},
    {loot: 0, dungeon: 'Raid - Reina Ansurek', slot: 'Weapon 1', name: 'Desdén de la soberana', player: 'Mângo', ID: 212394},
    {loot: 0, dungeon: 'Craft', slot: 'Weapon 2', name: 'Antorcha de vagabundo', player: 'Mângo', ID: 212394},

    // Katashi
    {loot: 0, dungeon: 'Estela Necrótica', slot: 'Head', name: 'Yelmo de escarcha oscura', player: 'Gaston', ID: 178777},
    {loot: 0, dungeon: 'Nieblas de Tirna Scithe', slot: 'Neck', name: 'Llavero de "parada de emergencia"', player: 'Gaston', ID: 221077},
    {loot: 0, dungeon: 'La Petrocámara', slot: 'Cloak', name: 'Manteo yunquepiel', player: 'Gaston', ID: 221088},
    {loot: 0, dungeon: 'Tier', slot: 'Shoulder', name: 'Espaldares astados de escultor de guerra', player: 'Gaston', ID: 211982},
    {loot: 0, dungeon: 'Tier', slot: 'Chest', name: 'Pechera de piel de escultor de guerra', player: 'Gaston', ID: 211987},
    {loot: 0, dungeon: 'Craft', slot: 'Wrist', name: 'Avambrazos de forja eterna', player: 'Gaston', ID: 222435},
    {loot: 0, dungeon: 'Tier', slot: 'Hands', name: 'Trituradores de escultor de guerra', player: 'Gaston', ID: 211985},
    {loot: 0, dungeon: 'El Rompealbas', slot: 'Belt', name: 'Faja de ardides sombríos', player: 'Gaston', ID: 221133},
    {loot: 0, dungeon: 'Tier', slot: 'Legs', name: 'Quijotes de escultor de guerra', player: 'Gaston', ID: 211983},
    {loot: 0, dungeon: 'Asedio de Boralus', slot: 'Boots', name: 'Botas del baluarte negro', player: 'Gaston', ID: 159428},
    {loot: 0, dungeon: 'Raid - Reina Ansurek', slot: 'Ring 1', name: 'Sello del pacto envenenado', player: 'Gaston', ID: 225578},
    {loot: 0, dungeon: "Raid - Tuercelinajes Ovi'nax", slot: 'Ring 2', name: 'Gusanillo avieso', player: 'Gaston', ID: 225576},
    {loot: 0, dungeon: 'Ara-Kara', slot: 'Trinket 1', name: 'Saco eclosionador de Ara-Kara', player: 'Gaston', ID: 219314},
    {loot: 0, dungeon: "Raid - Princesa del Nexo Ky'veza", slot: 'Trinket 2', name: 'Transmisor traicionero', player: 'Gaston', ID: 221023},
    {loot: 0, dungeon: 'Grim Batol', slot: 'Weapon 1', name: 'Martillo salvaje', player: 'Gaston', ID: 133298},
    {loot: 0, dungeon: 'Craft', slot: 'Weapon 2', name: 'Manndoble cargado', player: 'Gaston', ID: 222447},
];
// subete cabron

window.onload = function() {
    loadData();
};

function loadData() {
    clearSections();
    loadUser(data);
    loadDungeon(data);
}

function clearSections() {
    const userSection = document.getElementById('player-section');
    const dungeonSection = document.getElementById('dungeon-section');
    userSection.innerHTML = '';
    dungeonSection.innerHTML = '';
}

function loadUser(data) {
    const players = {
        "Nopienso": {color: "warrior", img: "https://render.worldofwarcraft.com/eu/character/sanguino/115/183510643-avatar.jpg?alt=/wow/static/images/2d/avatar/4-0.jpg"},
        "Mângo": {color: "mage", img: "https://render.worldofwarcraft.com/eu/character/sanguino/172/185198508-avatar.jpg?alt=/wow/static/images/2d/avatar/3-0.jpg"},
        "Gaston": {color: "warrior", img: "https://render.worldofwarcraft.com/eu/character/sanguino/123/183851131-avatar.jpg?alt=/wow/static/images/2d/avatar/36-0.jpg"},
    };

    const userSection = document.getElementById('player-section');

    for (const player in players) {
        const itemsplayer = data.filter(item => item.player.includes(player));
        if (itemsplayer.length > 0) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-6');

            const card = document.createElement('div');
            card.classList.add('card', 'mb-4');
            card.style.backgroundColor = '#1C1C1C';

            const header = document.createElement('div');
            header.classList.add('card-header', players[player].color + '-color');
            header.innerHTML = `<img src="${players[player].img}" alt="${player} Avatar" class="avatar-img"><h3>${player}</h3>`;
            card.appendChild(header);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const ul = document.createElement('ul');
            ul.classList.add('list-group');

            itemsplayer.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'bg-light-dark');

                const link = document.createElement('a');
                link.href = `https://www.wowhead.com/item=${item.ID}`;
                link.setAttribute('data-wowhead', `item=${item.ID}`);
                link.textContent = item.name;

                if (item.loot === 1) {
                    link.style.textDecoration = "line-through";
                }
                if (item.dungeon.includes("Raid")) link.style.color = "#a335ee";
                else if (item.dungeon.includes("Craft")) link.style.color = "#007bff";
                else if (item.dungeon.includes("Tier") || item.dungeon.includes("Catalyst")) link.style.color = "#ff851b";


                const spandungeon = document.createElement('span');
                spandungeon.style.fontStyle = "italic";
                spandungeon.style.float = "right";
                spandungeon.style.color = "white";
                spandungeon.textContent = item.dungeon;

                li.appendChild(link);
                li.appendChild(spandungeon);
                ul.appendChild(li);
            });

            cardBody.appendChild(ul);
            card.appendChild(cardBody);
            cardDiv.appendChild(card);
            userSection.appendChild(cardDiv);
        }
    }
}

function loadDungeon(data) {
    const dungeonSection = document.getElementById('dungeon-section');
    const dungeons = {};

    const playerClases = {
        'Nopienso': 'Warrior-F',
        'Mângo': 'Mage-A',
        'Gaston': 'Warrior-F',
    }

    // Agrupar por dungeon y excluir ítems looteados
    data.forEach(item => {
        if (item.loot === 0) {
            const playerClass = playerClases[item.player];
            const dungeon = item.dungeon;
            if (!dungeons[dungeon]) {
                dungeons[dungeon] = [];
            }
            const classHasItem = dungeons[dungeon].some(i => playerClases[i.player] === playerClass && i.name === item.name);

            if (!classHasItem) {
                dungeons[dungeon].push(item);
            }
        }
    });

    const dungeonKeys = Object.keys(dungeons).sort();

    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'mb-4');

    dungeonKeys.forEach((dungeon, index) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3', 'mb-4');

        const header = document.createElement('h4');
        header.textContent = dungeon;

        const ul = document.createElement('ul');
        ul.classList.add('list-group');

        dungeons[dungeon].forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'bg-light-dark');

            const link = document.createElement('a');
            link.href = `https://www.wowhead.com/item=${item.ID}`;
            link.setAttribute('data-wowhead', `item=${item.ID}`);
            link.textContent = item.name;

            if (item.player.includes("Mângo")) link.style.color = "#3FC7EB";
            else if (item.player.includes("Nopienso")) link.style.color = "#C69B6D";
            else if (item.player.includes("Gaston")) link.style.color = "#C69B6D";
            li.appendChild(link);
            ul.appendChild(li);
        });

        colDiv.appendChild(header);
        colDiv.appendChild(ul);
        rowDiv.appendChild(colDiv);

    });

    if (rowDiv.childElementCount > 0) {
        dungeonSection.appendChild(rowDiv);
    }
}