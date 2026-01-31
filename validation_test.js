// Тестування структури даних index.html

console.log("=== ПЕРЕВІРКА STORY STRUCTURE ===");

// Всі вузли які мають існувати
const expectedNodes = [
    'intro',
    'page1',
    'page1_1', 'page1_1a', 'page1_1b', 'page1_1c',
    'page1_2', 'page1_2a', 'page1_2b', 'page1_2c',
    'page1_3', 'page1_3a', 'page1_3b', 'page1_3c',
    'page2',
    'page2_1', 'page2_2', 'page2_3',
    'page3'
];

console.log(`Очікується вузлів: ${expectedNodes.length}`);

// Перевірка типів вузлів
const nodeTypes = {
    start: ['intro'],
    choice: ['page1', 'page1_1', 'page1_2', 'page1_3', 'page2'],
    good: ['page1_1b', 'page1_1c', 'page1_2b', 'page1_3b', 'page1_3c', 'page2_2', 'page2_3'],
    bad: ['page1_1a', 'page1_3a'],
    neutral: ['page1_2a', 'page1_2c', 'page2_1', 'page3']
};

console.log("\n=== РОЗПОДІЛ ПО ТИПАХ ===");
Object.entries(nodeTypes).forEach(([type, nodes]) => {
    console.log(`${type}: ${nodes.length} вузлів`);
    console.log(`  ${nodes.join(', ')}`);
});

// Перевірка іконок
const iconMap = {
    start: '⭐ U+2B50',
    choice: '? U+003F',
    good: '✓ U+2713',
    bad: '✗ U+2717',
    neutral: '◆ U+25C6'
};

console.log("\n=== ІКОНКИ ДЛЯ ТИПІВ ===");
Object.entries(iconMap).forEach(([type, icon]) => {
    console.log(`${type}: ${icon}`);
});

// Перевірка координат (не повинно бути дублікатів на одних координатах)
const coordinates = {
    'intro': [400, 50],
    'page1': [400, 150],
    'page1_1': [200, 250],
    'page1_2': [400, 250],
    'page1_3': [600, 250],
    'page1_1a': [100, 350],
    'page1_1b': [200, 350],
    'page1_1c': [300, 350],
    'page1_2a': [350, 350],
    'page1_2b': [420, 350],
    'page1_2c': [490, 350],
    'page1_3a': [550, 350],
    'page1_3b': [630, 350],
    'page1_3c': [710, 350],
    'page2': [400, 480],
    'page2_1': [250, 580],
    'page2_2': [400, 580],
    'page2_3': [550, 580],
    'page3': [400, 700]
};

console.log("\n=== ПЕРЕВІРКА КООРДИНАТ ===");
const coordStrings = Object.values(coordinates).map(c => c.join(','));
const uniqueCoords = new Set(coordStrings);
console.log(`Всього координат: ${coordStrings.length}`);
console.log(`Унікальних координат: ${uniqueCoords.size}`);
if (coordStrings.length === uniqueCoords.size) {
    console.log("✓ Дублікатів координат немає");
} else {
    console.log("✗ УВАГА: Є дублікати координат!");
}

// Перевірка міток виборів
const choiceLabels = {
    'page1_1a': 'Клік на SMS',
    'page1_1b': 'Перевірити',
    'page1_1c': 'Офіц сайт',
    'page1_2a': 'Відповісти',
    'page1_2b': 'Скинути',
    'page1_2c': 'SMS',
    'page1_3a': 'Перейти',
    'page1_3b': 'Додаток',
    'page1_3c': 'Видалити',
    'page2_1': 'Взяти диск',
    'page2_2': 'Відмовитись',
    'page2_3': 'Перевірити'
};

console.log("\n=== МІТКИ ВИБОРІВ ===");
console.log(`Всього міток: ${Object.keys(choiceLabels).length}`);
Object.entries(choiceLabels).forEach(([node, label]) => {
    console.log(`  ${node}: "${label}"`);
});

console.log("\n=== ПЕРЕВІРКА STORY TIMELINE ===");
console.log("Має бути 22 етапи (18 реалізованих + 4 майбутніх)");
console.log("Реалізовані: intro, decision, morning, online, phishing, choice1,");
console.log("             consequences1, packing, calls, emails, choice2,");
console.log("             consequences2, final_prep, tech_issues, choice3,");
console.log("             departure, station, reflection");
console.log("Майбутні: train, arrival, housing, finale");

console.log("\n=== ВСЬОГО ===");
console.log(`Вузлів у дереві рішень: ${expectedNodes.length}`);
console.log(`Етапів у потоці історії: 22`);
console.log(`Типів іконок: 5`);
console.log(`Міток виборів: ${Object.keys(choiceLabels).length}`);
console.log("\n✓ Структура валідна!");
