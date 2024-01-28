sizeElement = document.querySelectorAll(`.font-size`);
const colorParentElement = document.querySelector('.book__control_color');
const backgroundParentElement = document.querySelector('.book__control_background');
colorElements = colorParentElement.querySelectorAll('.color');
backgroundElements = backgroundParentElement.querySelectorAll('.color');
book = document.getElementById(`book`);

sizeElement.forEach((element) => {
    element.addEventListener(`click`, (event) => {
        event.preventDefault();
        size = element.getAttribute('data-size');
        sizeElement.forEach(t => {
            t.classList.remove('font-size_active');
        });
        element.classList.add('font-size_active');
        book.classList.remove(`book_fs-big`, `book_fs-small`)
        if (size !== null) {
            book.classList.add(`book_fs-${size}`)
        }
    });
});

colorElements.forEach((element) => {
    element.addEventListener(`click`, (event) => {
        event.preventDefault();
        console.log(element)
        color = element.getAttribute('data-text-color');
        console.log(color)
        colorElements.forEach(t => {
            t.classList.remove(
                'color_active',
            );
        });
        element.classList.add('color_active');
        book.classList.remove(
            `book_color-whitesmoke`,
            `book_color-gray`,
            `book_color-black`
        )
        book.classList.add(`book_color-${color}`)
    });
});

backgroundElements.forEach((element) => {
    element.addEventListener(`click`, (event) => {
        event.preventDefault();
        console.log(element)
        colorBg = element.getAttribute('data-bg-color');
        console.log(colorBg)
        backgroundElements.forEach(t => {
            t.classList.remove(
                'color_active',
            );
        });
        element.classList.add('color_active');
        book.classList.remove(
            `book_bg-gray`,
            `book_bg-black`,
            `book_bg-white`,
        )
        book.classList.add(`book_bg-${colorBg}`)
    });
});