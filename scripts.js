import { data } from './data.js';
import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

    return (
    <div>
    {rows.map((row) => (
        <div key={row.id}>
        {row.id} - {row.quantity}
        </div>
    ))}
    </div>
    );
}

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
        "Nopienso": {color: "warrior-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/115/183510643-avatar.jpg"},
        "Mângo": {color: "mage-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/172/185198508-avatar.jpg"},
        "Gaston": {color: "warrior-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/123/183851131-avatar.jpg"},
        "Korteza": {color: "paladin-color", img: "https://render.worldofwarcraft.com/eu/character/sanguino/109/163680109-avatar.jpg"},
    };

    const userSection = document.getElementById('player-section');

    for (const player in players) {
        const itemsplayer = data.filter(item => item.player.includes(player));
        if (itemsplayer.length > 0) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-6');

            const card = document.createElement('div');
            card.classList.add('card', 'mb-4', 'card-custom-bg');

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

                link.classList.add(`${item.class.toLowerCase()}-text-color`);

                if (item.type === 'craft') {
                    link.classList.add('link-craft');
                } else if (item.type === 'tier') {
                    link.classList.add('link-tier-catalyst');
                } else if (item.type === 'dungeon') {
                    link.classList.add('link-dungeon');
                } else if (item.type === 'raid') {
                    link.classList.add('link-raid');
                }

                if (item.loot === 1) {
                    link.classList.add('tachado');
                }

                const spandungeon = document.createElement('span');
                spandungeon.classList.add('dungeon-span');
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
    dungeonSection.innerHTML = '';

    const raidDiv = createSection("Raid");
    const dungeonDiv = createSection("Dungeon");
    const othersDiv = createSection("Otros");

    const raids = {};
    const dungeons = {};
    const others = {};

    data.forEach(item => {
        const section = item.type === 'raid' ? raids : item.type === 'dungeon' ? dungeons : others;
        if (!section[item.dungeon]) section[item.dungeon] = [];
        section[item.dungeon].push(item);
    });

    createGridSection(raids, raidDiv);
    createGridSection(dungeons, dungeonDiv);
    createGridSection(others, othersDiv);

    dungeonSection.appendChild(raidDiv);
    dungeonSection.appendChild(dungeonDiv);
    dungeonSection.appendChild(othersDiv);
}

function createSection(title) {
    const section = document.createElement('div');
    section.classList.add('w-100', 'mb-4');
    section.innerHTML = `<h3>${title}</h3>`;
    return section;
}

function createGridSection(dungeonList, divElement) {
    const row = document.createElement('div');
    row.classList.add('row');

    const dungeonNames = Object.keys(dungeonList);

    dungeonNames.slice(0, 8).forEach((dungeon, index) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3', 'mb-2');

        const card = document.createElement('div');
        card.classList.add('m-2', 'border-sides');

        const header = document.createElement('h5');
        header.textContent = dungeon;
        card.appendChild(header);

        const displayedItems = new Set();

        dungeonList[dungeon].forEach(item => {
            const uniqueKey = `${item.class}-${item.ID}`;
            if (!displayedItems.has(uniqueKey)) {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('my-1');

                const link = document.createElement('a');
                link.href = `https://www.wowhead.com/item=${item.ID}`;
                link.setAttribute('data-wowhead', `item=${item.ID}`);
                link.textContent = item.name;

                link.classList.add(`${item.class.toLowerCase()}-text-color`);

                itemDiv.appendChild(link);
                card.appendChild(itemDiv);
                displayedItems.add(uniqueKey);
            }
        });

        colDiv.appendChild(card);
        row.appendChild(colDiv);
    });

    divElement.appendChild(row);
}
