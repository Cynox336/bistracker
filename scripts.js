const data = [
    // Cynox
    {loot: 0, type: "dungeon", dungeon: 'Estela Necrótica', slot: 'Head', name: 'Yelmo de escarcha oscura', player: 'Nopienso', class: 'Warrior', ID: 178777},
    {loot: 0, type: "dungeon", dungeon: 'La Petrocámara', slot: 'Neck', name: 'Llavero de "parada de emergencia"', player: 'Nopienso', class: 'Warrior', ID: 221077},
    {loot: 0, type: "dungeon", dungeon: 'La Petrocámara', slot: 'Cloak', name: 'Manteo yunquepiel', player: 'Nopienso', class: 'Warrior', ID: 221088},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Shoulder', name: 'Espaldares astados de escultor de guerra', player: 'Nopienso', class: 'Warrior', ID: 211982},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Chest', name: 'Pechera de piel de escultor de guerra', player: 'Nopienso', class: 'Warrior', ID: 211987},
    {loot: 0, type: "craft", dungeon: 'Craft', slot: 'Wrist', name: 'Avambrazos de forja eterna', player: 'Nopienso', class: 'Warrior', ID: 222435},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Hands', name: 'Trituradores de escultor de guerra', player: 'Nopienso', class: 'Warrior', ID: 211985},
    {loot: 0, type: "dungeon", dungeon: 'El Rompealbas', slot: 'Belt', name: 'Faja de ardides sombríos', player: 'Nopienso', class: 'Warrior', ID: 221133},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Legs', name: 'Quijotes de escultor de guerra', player: 'Nopienso', class: 'Warrior', ID: 211983},
    {loot: 0, type: "dungeon", dungeon: 'Asedio de Boralus', slot: 'Boots', name: 'Botas del baluarte negro', player: 'Nopienso', class: 'Warrior', ID: 159428},
    {loot: 1, type: "raid", dungeon: 'Raid - Reina Ansurek', slot: 'Ring 1', name: 'Sello del pacto envenenado', player: 'Nopienso', class: 'Warrior', ID: 225578},
    {loot: 0, type: "raid", dungeon: "Raid - Tuercelinajes Ovi'nax", slot: 'Ring 2', name: 'Gusanillo avieso', player: 'Nopienso', class: 'Warrior', ID: 225576},
    {loot: 1, type: "dungeon", dungeon: 'Ara-Kara', slot: 'Trinket 1', name: 'Saco eclosionador de Ara-Kara', player: 'Nopienso', class: 'Warrior', ID: 219314},
    {loot: 0, type: "raid", dungeon: "Raid - Princesa del Nexo Ky'veza", slot: 'Trinket 2', name: 'Transmisor traicionero', player: 'Nopienso', class: 'Warrior', ID: 221023},
    {loot: 0, type: "dungeon", dungeon: 'Grim Batol', slot: 'Weapon 1', name: 'Martillo salvaje', player: 'Nopienso', class: 'Warrior', ID: 133298},
    {loot: 0, type: "craft", dungeon: 'Craft', slot: 'Weapon 2', name: 'Manndoble cargado', player: 'Nopienso', class: 'Warrior', ID: 222447},

    // Goi
    {loot: 0, type: "dungeon", dungeon: 'Nieblas de Tirna Scithe', slot: 'Head', name: 'Capucha de seda de crisálida', player: 'Mângo', class: 'Mage', ID: 178693},
    {loot: 0, type: "dungeon", dungeon: 'Raid - Sikran', slot: 'Neck', name: 'Insignia de zelote sureki', player: 'Mângo', class: 'Mage', ID: 225577},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Shoulder', name: 'Balizas de renacer violeta', player: 'Mângo', class: 'Mage', ID: 212090},
    {loot: 0, type: "catalyst", dungeon: 'Catalyst', slot: 'Cloak', name: 'Resguardo de renacer violeta', player: 'Mângo', class: 'Mage', ID: 212087},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Chest', name: 'Abrigo rúnico de renacer violeta', player: 'Mângo', class: 'Mage', ID: 212095},
    {loot: 0, type: "craft", dungeon: 'Craft', slot: 'Wrist', name: 'Puños consagrados', player: 'Mângo', class: 'Mage', ID: 222815},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Hands', name: 'Guanteletes con joyas de renacer violeta', player: 'Mângo', class: 'Mage', ID: 212093},
    {loot: 0, type: "raid", dungeon: 'Raid - Reina Ansurek', slot: 'Belt', name: 'Fajín de ascendiente mordaz', player: 'Mângo', class: 'Mage', ID: 225585},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Legs', name: 'Cubrecolas de renacer violeta', player: 'Mângo', class: 'Mage', ID: 212091},
    {loot: 0, type: "catalyst", dungeon: 'Catalyst', slot: 'Boots', name: 'Zapatillas de renacer violeta', player: 'Mângo', class: 'Mage', ID: 212094},
    {loot: 0, type: "raid", dungeon: 'Raid - Reina Ansurek', slot: 'Ring 1', name: 'Sello del pacto envenenado', player: 'Mângo', class: 'Mage', ID: 225578},
    {loot: 0, type: "raid", dungeon: "Raid - Tuercelinajes Ovi'nax", slot: 'Ring 2', name: 'Gusanillo avieso', player: 'Mângo', class: 'Mage', ID: 225576},
    {loot: 0, type: "raid", dungeon: "Raid - Anub'arash", slot: 'Trinket 1', name: 'Red de maestro de espías', player: 'Mângo', class: 'Mage', ID: 220202},
    {loot: 0, type: "dungeon", dungeon: 'Ara-Kara', slot: 'Trinket 2', name: 'Saco eclosionador de Ara-Kara', player: 'Mângo', class: 'Mage', ID: 219314},
    {loot: 0, type: "raid", dungeon: 'Raid - Reina Ansurek', slot: 'Weapon 1', name: 'Desdén de la soberana', player: 'Mângo', class: 'Mage', ID: 212394},
    {loot: 0, type: "craft", dungeon: 'Craft', slot: 'Weapon 2', name: 'Antorcha de vagabundo', player: 'Mângo', class: 'Mage', ID: 212394},

    // Katashi
    {loot: 0, type: "dungeon", dungeon: 'Estela Necrótica', slot: 'Head', name: 'Yelmo de escarcha oscura', player: 'Gaston', class: 'Warrior', ID: 178777},
    {loot: 0, type: "dungeon", dungeon: 'La Petrocámara', slot: 'Neck', name: 'Llavero de "parada de emergencia"', player: 'Gaston', class: 'Warrior', ID: 221077},
    {loot: 0, type: "dungeon", dungeon: 'La Petrocámara', slot: 'Cloak', name: 'Manteo yunquepiel', player: 'Gaston', class: 'Warrior', ID: 221088},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Shoulder', name: 'Espaldares astados de escultor de guerra', player: 'Gaston', class: 'Warrior', ID: 211982},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Chest', name: 'Pechera de piel de escultor de guerra', player: 'Gaston', class: 'Warrior', ID: 211987},
    {loot: 0, type: "craft", dungeon: 'Craft', slot: 'Wrist', name: 'Avambrazos de forja eterna', player: 'Gaston', class: 'Warrior', ID: 222435},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Hands', name: 'Trituradores de escultor de guerra', player: 'Gaston', class: 'Warrior', ID: 211985},
    {loot: 0, type: "dungeon", dungeon: 'El Rompealbas', slot: 'Belt', name: 'Faja de ardides sombríos', player: 'Gaston', class: 'Warrior', ID: 221133},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Legs', name: 'Quijotes de escultor de guerra', player: 'Gaston', class: 'Warrior', ID: 211983},
    {loot: 0, type: "dungeon", dungeon: 'Asedio de Boralus', slot: 'Boots', name: 'Botas del baluarte negro', player: 'Gaston', class: 'Warrior', ID: 159428},
    {loot: 0, type: "raid", dungeon: 'Raid - Reina Ansurek', slot: 'Ring 1', name: 'Sello del pacto envenenado', player: 'Gaston', class: 'Warrior', ID: 225578},
    {loot: 0, type: "raid", dungeon: "Raid - Tuercelinajes Ovi'nax", slot: 'Ring 2', name: 'Gusanillo avieso', player: 'Gaston', class: 'Warrior', ID: 225576},
    {loot: 0, type: "dungeon", dungeon: 'Ara-Kara', slot: 'Trinket 1', name: 'Saco eclosionador de Ara-Kara', player: 'Gaston', class: 'Warrior', ID: 219314},
    {loot: 0, type: "raid", dungeon: "Raid - Princesa del Nexo Ky'veza", slot: 'Trinket 2', name: 'Transmisor traicionero', player: 'Gaston', class: 'Warrior', ID: 221023},
    {loot: 0, type: "dungeon", dungeon: 'Grim Batol', slot: 'Weapon 1', name: 'Martillo salvaje', player: 'Gaston', class: 'Warrior', ID: 133298},
    {loot: 0, type: "craft", dungeon: 'Craft', slot: 'Weapon 2', name: 'Manndoble cargado', player: 'Gaston', class: 'Warrior', ID: 222447},

    //Kortes
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Head', name: 'Borgoñota de serafín sepultado', player: 'Korteza', class: 'Paladin', ID: 211993},
    {loot: 0, type: "dungeon", dungeon: 'Ciudad Tejida', slot: 'Neck', name: 'Talismán hemolintáfico de anciano', player: 'Korteza', class: 'Paladin', ID: 221181},
    {loot: 0, type: "dungeon", dungeon: 'Ara-Kara', slot: 'Cloak', name: 'Sudario de clamaenjambres', player: 'Korteza', class: 'Paladin', ID: 221154},
    {loot: 0, type: "dungeon", dungeon: 'Ciudad Tejida', slot: 'Shoulder', name: 'Cubrehombros de conector de carne', player: 'Korteza', class: 'Paladin', ID: 221185},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Chest', name: 'Coraza de serafín sepultado', player: 'Korteza', class: 'Paladin', ID: 211996},
    {loot: 0, type: "dungeon", dungeon: 'Ciudad Tejida', slot: 'Wrist', name: 'Brazales de subyugador vociferante', player: 'Korteza', class: 'Paladin', ID: 221167},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Hands', name: 'Escarmiento de serafín sepultado', player: 'Korteza', class: 'Paladin', ID: 211994},
    {loot: 0, type: "dungeon", dungeon: 'Grim Batol', slot: 'Belt', name: 'Cinturón del maestro de forja', player: 'Korteza', class: 'Paladin', ID: 133289},
    {loot: 0, type: "tier", dungeon: 'Tier', slot: 'Legs', name: 'Grebas de serafín sepultado', player: 'Korteza', class: 'Paladin', ID: 211992},
    {loot: 0, type: "dungeon", dungeon: 'Ciudad Tejida', slot: 'Boots', name: 'Zapatos herrados manchados de icor', player: 'Korteza', class: 'Paladin', ID: 221178},
    {loot: 0, type: "dungeon", dungeon: 'Estela Necrótica', slot: 'Ring 1', name: 'Sello extraviado de Cosecarne', player: 'Korteza', class: 'Paladin', ID: 178736},
    {loot: 0, type: "dungeon", dungeon: "Ciudad Tejida", slot: 'Ring 2', name: 'Sortija del experimento 08752', player: 'Korteza', class: 'Paladin', ID: 221189},
    {loot: 0, type: "dungeon", dungeon: 'Ara-Kara', slot: 'Trinket 1', name: 'Saco eclosionador de Ara-Kara', player: 'Korteza', class: 'Paladin', ID: 219314},
    {loot: 0, type: "dungeon", dungeon: "Grim Batol", slot: 'Trinket 2', name: 'Vendaval de sombras', player: 'Korteza', class: 'Paladin', ID: 133304},
    {loot: 0, type: "dungeon", dungeon: 'Estela Necrótica', slot: 'Weapon 1', name: 'Hoja de hechizo de Amarth', player: 'Korteza', class: 'Paladin', ID: 178737},
    {loot: 0, type: "dungeon", dungeon: 'Ciudad Tejida', slot: 'Weapon 2', name: 'Hielaman sangre vieja', player: 'Korteza', class: 'Paladin', ID: 221177},
];

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
    const dungeonSection = document.getElementById('content-section');
    userSection.innerHTML = '';
    dungeonSection.innerHTML = '';
}

function loadUser(data) {
    const players = {
        "Nopienso": {color: "warrior-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/115/183510643-avatar.jpg?alt=/wow/static/images/2d/avatar/4-0.jpg"},
        "Mângo": {color: "mage-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/172/185198508-avatar.jpg?alt=/wow/static/images/2d/avatar/3-0.jpg"},
        "Gaston": {color: "warrior-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/123/183851131-avatar.jpg?alt=/wow/static/images/2d/avatar/36-0.jpg"},
        "Korteza": {color: "paladin-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/109/163680109-avatar.jpg?alt=/wow/static/images/2d/avatar/10-1.jpg"},
    };

    const userSection = document.getElementById('player-section');

    for (const player in players) {
        const itemsplayer = data.filter(item => item.player.includes(player));
        if (itemsplayer.length > 0) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-6');

            const card = document.createElement('div');
            card.classList.add('card', 'mb-4');
            card.classList.add('card-custom-bg');

            const header = document.createElement('div');
            header.classList.add('card-header', players[player].color);
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
    const dungeonSection = document.getElementById('content-section');
    const dungeonsByType = {};

    const playerClases = {
        'Nopienso': 'Warrior-F',
        'Mângo': 'Mage-A',
        'Gaston': 'Warrior-F',
    }

    data.forEach(item => {
        if (item.loot === 0) {
            const playerClass = playerClases[item.player];
            const type = item.type;
            const dungeon = item.dungeon;

            if (!dungeonsByType[type]) {
                dungeonsByType[type] = {};
            }

            if (!dungeonsByType[type][dungeon]) {
                dungeonsByType[type][dungeon] = [];
            }

            const classHasItem = dungeonsByType[type][dungeon].some(i => playerClases[i.player] === playerClass && i.name === item.name);

            if (!classHasItem) {
                dungeonsByType[type][dungeon].push(item);
            }
        }
    });

    let typeKeys = Object.keys(dungeonsByType);

    typeKeys = typeKeys.sort((a, b) => {
        if (a === 'dungeon') return -1;
        if (b === 'dungeon') return 1;
        if (a === 'raid') return -1;
        if (b === 'raid') return 1;
        if (a === 'tier') return -1;
        if (b === 'tier') return 1;
        if (a === 'catalyst') return -1;
        if (b === 'catalyst') return 1;
        if (a === 'craft') return -1;
        if (b === 'craft') return 1;
        return a.localeCompare(b);
    });

    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'mb-4');

    typeKeys.forEach(type => {
        const dungeonKeys = Object.keys(dungeonsByType[type]).sort();

        dungeonKeys.forEach(dungeon => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-md-3', 'mb-4');

            const header = document.createElement('h4');
            header.textContent = dungeon;

            const ul = document.createElement('ul');
            ul.classList.add('list-group');

            dungeonsByType[type][dungeon].forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'bg-light-dark');

                const link = document.createElement('a');
                link.href = `https://www.wowhead.com/item=${item.ID}`;
                link.setAttribute('data-wowhead', `item=${item.ID}`);
                link.textContent = item.name;

                if (item.class.includes("Mage")) link.classList.add("mage-text-color");
                else if (item.class.includes("Warrior")) link.classList.add("warrior-text-color");
                else if (item.class.includes("Paladin")) link.classList.add("paladin-text-color");

                li.appendChild(link);
                ul.appendChild(li);
            });

            colDiv.appendChild(header);
            colDiv.appendChild(ul);
            rowDiv.appendChild(colDiv);
        });
    });

    if (rowDiv.childElementCount > 0) {
        dungeonSection.appendChild(rowDiv);
    }
}


