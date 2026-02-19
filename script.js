const map = document.getElementById("map");
const card = document.getElementById("card");
const cardTitle = document.getElementById("card-title");
const cardContent = document.getElementById("card-content");

const nodes = [
    { title: "Узел 1", content: "Описание первого узла", x: 100, y: 150 },
    { title: "Узел 2", content: "Описание второго узла", x: 300, y: 250 }
];

nodes.forEach(node => {
    const div = document.createElement("div");
    div.className = "node";
    div.style.left = node.x + "px";
    div.style.top = node.y + "px";
    div.innerText = node.title;

    div.onclick = () => {
        cardTitle.innerText = node.title;
        cardContent.innerText = node.content;
        card.classList.remove("hidden");
    };

    map.appendChild(div);
});

function closeCard() {
    card.classList.add("hidden");
}
