// Данные сцен новеллы
const scenes = [
    {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        characters: [],
        speaker: '',
        text: 'Добро пожаловать в визуальную новеллу! Это демонстрационная сцена.'
    },
    {
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        characters: [
            { name: 'hero', image: '👦', position: 'left' }
        ],
        speaker: 'Главный герой',
        text: 'Привет! Я главный герой этой истории. Здесь мог бы быть мой спрайт!'
    },
    {
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        characters: [
            { name: 'heroine', image: '👧', position: 'right' }
        ],
        speaker: 'Героиня',
        text: 'А я героиня! Мы можем добавлять персонажей и менять фоны между сценами.'
    },
    {
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        characters: [
            { name: 'hero', image: '👦', position: 'left' },
            { name: 'heroine', image: '👧', position: 'right' }
        ],
        speaker: 'Главный герой',
        text: 'Теперь мы оба на экране! Кнопка "Далее" переключает сцены.'
    },
    {
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        characters: [],
        speaker: '',
        text: 'Это последняя сцена демо-версии. Вы можете расширять эту структуру, добавляя новые сцены, изображения и логику!'
    }
];

// Текущее состояние игры
let currentSceneIndex = 0;

// DOM элементы
const backgroundEl = document.getElementById('background');
const charactersEl = document.getElementById('characters');
const speakerNameEl = document.getElementById('speaker-name');
const dialogueTextEl = document.getElementById('dialogue-text');
const nextBtn = document.getElementById('next-btn');

// Функция отображения сцены
function showScene(index) {
    if (index >= scenes.length) {
        // Конец новеллы - начинаем сначала
        currentSceneIndex = 0;
        index = 0;
    }

    const scene = scenes[index];

    // Устанавливаем фон
    backgroundEl.style.background = scene.background;
    backgroundEl.style.backgroundSize = 'cover';
    backgroundEl.style.backgroundPosition = 'center';

    // Отображаем персонажей
    charactersEl.innerHTML = '';
    scene.characters.forEach(char => {
        const charEl = document.createElement('div');
        charEl.className = 'character';
        charEl.textContent = char.image;
        charEl.style.fontSize = '150px';
        charactersEl.appendChild(charEl);
    });

    // Устанавливаем текст
    speakerNameEl.textContent = scene.speaker;
    dialogueTextEl.textContent = scene.text;

    currentSceneIndex = index + 1;
}

// Обработчик кнопки "Далее"
nextBtn.addEventListener('click', () => {
    showScene(currentSceneIndex);
});

// Запуск первой сцены
showScene(0);
