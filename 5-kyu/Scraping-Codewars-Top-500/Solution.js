const cheerio = require("cheerio");
const URL = "https://www.codewars.com/users/leaderboard";

const { JSDOM } = require("jsdom");

async function solution() {
    const response = await fetch("https://www.codewars.com/users/leaderboard");
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const rows = document.querySelectorAll("table tr");
    const position = {};
    let rank = 1;

    for (const row of rows) {
        if (row.querySelector("th")) continue;

        const cells = row.querySelectorAll("td");
        if (cells.length < 4) continue;

        const nameCell = cells[1];
        const nameLink = nameCell.querySelector("a");
        const name = (
            nameLink ? nameLink.textContent : nameCell.textContent
        ).trim();

        const clanCell = cells[2];
        const clanLink = clanCell.querySelector("a");
        let clan = (
            clanLink ? clanLink.textContent : clanCell.textContent
        ).trim();
        if (clan === "None") clan = "None";

        const honorText = cells[3].textContent.trim().replace(/,/g, "");
        const honor = parseInt(honorText, 10);

        position[rank] = { name, clan, honor };
        rank++;
        if (rank > 500) break;
    }

    return { position };
}
