# ⚡️ JavaScript | Trello For Poor v0.2.5

Никогда не пользовался Trello, но всё же решил написать такой проект.
Решил попробовать использовать что-то похожее на MVC-паттерн.

🔗 [GitHub Pages](https://devkirkir.github.io/JavaScript-Trello_for_poor/)

## Технологии

-   HTML
-   SCSS
-   JS

## Дерево проекта

    ┣ js/
    ┃ ┣ img/
    ┃ ┣ ┃ cross.svg
    ┃ ┣ ┃ plus.svg
    ┃ ┣ utils/                     # вспомогательные функции
    ┃ ┃ ┣ handlers/
    ┃ ┃ ┃ ┃ addTask.js             # добавление задач
    ┃ ┃ ┃ ┃ deleteTask.js          # удаление задач
    ┃ ┃ ┃ ┗ dragBoardContent.js    # навешиване событий DnD для досок
    ┃ ┃ ┃ renderComponents.js      # рендер задач
    ┃ ┃ ┗ updateModel.js           # кастомное событие updateModel
    ┃ ┣ views/                     # представления
    ┃ ┃ ┣ boardsView.js            # вид и рендер досок
    ┃ ┃ ┗ tasksView.js             # вид задач
    ┃ ┣ controller.js              # контроллер
    ┃ ┗ model.js                   # модель, местный стейт
    ┣ styles/
    ┃ ┣ style.css
    ┃ ┣ style.css.map
    ┃ ┗ style.scss
    ┣ index.html
    ┗ README.md

## Версии

Здесь буду публиковать какие изменения произошли, не знаю зачем... 🤔

### v0.2.5

-   Добавлено: добавление задач в стейт
-   Добавлено: новое событие
-   В работе: ререндер компонент, чтобы полностью зависили от стейта

### v0.2.3

-   Улучшено: CSS

### v0.2.2

-   Добавлено: скелетон рендера досок
-   Улучшено: рендер досок и задач
-   Улучшено: дерево проекта

### v0.2.0

-   Добавлено: удаление задач
-   Улучшено: HTML структура задачи
-   Изменено: ренейм функции DnD для досок

### v0.1.8

-   Добавлено: статические теги для задач
-   Добавлено: скелетон рендера задач
-   Улучшено: изменение рендера задач
-   Улучшено: изменение общего CSS

### v0.1.5

-   Добавлено: кастомное событие updateModel
-   Улучшено: изменение стейта для события drop
-   Улучшено: изменение рендера досок и задач
-   Улучшено: изменение общего CSS

### v0.1.0

-   Добавлено: Базовая структура досок и задач
-   Добавлено: Базовый стейт
-   Добавлено: Рендер досок и задач
-   Добавлено: Базовый Drag-and-Drop
