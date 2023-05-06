# ⚡️ JavaScript | Trello For Poor v1.0.0

I have never used Trello, but I decided to write such a project anyway.
I decided to try to use something similar to the MVC pattern.

🔗 [GitHub Pages](https://devkirkir.github.io/javascript-trello_for_poor/)

## Technologies

-   HTML
-   SCSS
-   JS

## Work's tree

    ┣ img/
    ┃ ┃ cross.svg
    ┃ ┗ plus.svg
    ┣ js/
    ┃ ┣ utils/                     
    ┃ ┃ ┣ handlers/
    ┃ ┃ ┃ ┃ addBoard.js            # add board func
    ┃ ┃ ┃ ┃ addTask.js             # add task func
    ┃ ┃ ┃ ┃ changeBoardTitle.js    # change board's title func
    ┃ ┃ ┃ ┃ changeTag.js           # change task's tag func
    ┃ ┃ ┃ ┃ changeTaskTitle.js     # change task's title func
    ┃ ┃ ┃ ┃ deleteBoard.js         # remove board func
    ┃ ┃ ┃ ┃ deleteTask.js          # remove task func
    ┃ ┃ ┃ ┗ dragBoardContent.js    # handle DnD for board
    ┃ ┣ modals/                    
    ┃ ┃ ┗ tagsSettings.js          # tag's settings modal
    ┃ ┣ renderComponents.js        # render func
    ┃ ┣ updateModel.js             # custom event for update model
    ┃ ┣ utils.js                   # supporting func
    ┃ ┣ views/                     
    ┃ ┃ ┣ boardsView.js            # board view
    ┃ ┃ ┗ tasksView.js             # task view
    ┃ ┣ controller.js              
    ┃ ┗ model.js                   
    ┣ styles/
    ┃ ┣ boards-wrapper/            
    ┃ ┣ header/                    
    ┃ ┣ tags-settings/             
    ┃ ┣ style.css
    ┃ ┣ style.css.map
    ┃ ┗ style.scss
    ┣ index.html
    ┗ README.md
