// Данные сцен новеллы "Ворона и Лиса"
const scenes = [
    { background: 'images/backgrounds/Image00.webp', character: null, speaker: '', text: 'Уж сколько раз твердили миру,' },
    { background: 'images/backgrounds/Image00.webp', character: null, speaker: '', text: 'Что лесть гнусна, вредна; но только всё не впрок,' },
    { background: 'images/backgrounds/Image00.webp', character: null, speaker: '', text: 'И в сердце льстец всегда отыщет уголок.' },
    { background: 'images/backgrounds/Image01.webp', character: null, speaker: '', text: 'Вороне где-то бог послал кусочек сыру;' },
    { background: 'images/backgrounds/Image01.webp', character: null, speaker: '', text: 'На ель Ворона взгромоздясь,' },
    { background: 'images/backgrounds/Image01.webp', character: null, speaker: '', text: 'Позавтракать-было совсем уж собралась,' },
    { background: 'images/backgrounds/Image02.webp', character: null, speaker: '', text: 'Да позадумалась, а сыр во рту держала.' },
    { background: 'images/backgrounds/Image03.webp', character: null, speaker: '', text: 'На ту беду Лиса близехонько бежала;' },
    { background: 'images/backgrounds/Image05.webp', character: null, speaker: '', text: 'Вдруг сырный дух Лису остановил:' },
    { background: 'images/backgrounds/Image06.webp', character: null, speaker: '', text: 'Лисица видит сыр, — Лисицу сыр пленил.' },
    { background: 'images/backgrounds/Image07.webp', character: null, speaker: '', text: 'Плутовка к дереву на цыпочках подходит;' },
    { background: 'images/backgrounds/Image08.webp', character: null, speaker: '', text: 'Вертит хвостом, с Вороны глаз не сводит,' },
    { background: 'images/backgrounds/Image09.webp', character: null, speaker: '', text: 'И говорит так сладко, чуть дыша:' },
    { background: 'images/backgrounds/Image10.webp', character: null, speaker: '', text: '«Голубушка, как хороша!' },
    { background: 'images/backgrounds/Image10.webp', character: null, speaker: '', text: 'Ну что за шейка, что за глазки!' },
    { background: 'images/backgrounds/Image10.webp', character: null, speaker: '', text: 'Рассказывать, так, право, сказки!' },
    { background: 'images/backgrounds/Image10.webp', character: null, speaker: '', text: 'Какие перушки! какой носок!' },
    { background: 'images/backgrounds/Image11.webp', character: null, speaker: '', text: 'И верно ангельский быть должен голосок!' },
    { background: 'images/backgrounds/Image11.webp', character: null, speaker: '', text: 'Спой, светик, не стыдись! Что ежели, сестрица,' },
    { background: 'images/backgrounds/Image11.webp', character: null, speaker: '', text: 'При красоте такой, и петь ты мастерица,' },
    { background: 'images/backgrounds/Image13.webp', character: null, speaker: '', text: 'Ведь ты б у нас была царь-птица!»' },
    { background: 'images/backgrounds/Image14.webp', character: null, speaker: '', text: 'Вещуньина с похвал вскружилась голова,' },
    { background: 'images/backgrounds/Image14.webp', character: null, speaker: '', text: 'От радости в зобу дыханье сперло, —' },
    { background: 'images/backgrounds/Image14.webp', character: null, speaker: '', text: 'И на приветливы лисицыны слова' },
    { background: 'images/backgrounds/Image15.webp', character: null, speaker: '', text: 'Ворона каркнула во все воронье горло:' },
    { background: 'images/backgrounds/Image16.webp', character: null, speaker: '', text: 'Сыр выпал' },
    { background: 'images/backgrounds/Image18.webp', character: null, speaker: '', text: 'С ним была плутовка такова.' }
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
    backgroundEl.style.background = `url('${scene.background}')`;
    backgroundEl.style.backgroundSize = 'cover';
    backgroundEl.style.backgroundPosition = 'center';

    // Отображаем персонажа
    charactersEl.innerHTML = '';
    if (scene.character) {
        const charEl = document.createElement('img');
        charEl.className = 'character';
        charEl.src = scene.character;
        charEl.alt = 'Персонаж';
        charactersEl.appendChild(charEl);
    }

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
