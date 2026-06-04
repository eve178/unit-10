document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box1');

    const plusPink = 'images/plus-pink.svg';
    const plusHover = 'images/plus-white.svg'; 
    const minusWhite = 'images/minus-white.svg';

    boxes.forEach((box) => {
        const icon = box.querySelector('.toggle-icon');

        box.addEventListener('mouseenter', () => {
            if (!box.hasAttribute('open')) {
                icon.src = plusHover;
            }
        });

        box.addEventListener('mouseleave', () => {
            if (!box.hasAttribute('open')) {
                icon.src = plusPink;
            }
        });

        document.addEventListener('click', function (event) {
            setTimeout(() => {
                if (box.hasAttribute('open')) {
                    icon.src = minusWhite;
                } else {
                    if (box.contains(event.target)) {
                        icon.src = plusHover;
                    } else {
                        icon.src = plusPink;
                    }
                }
            }, 10);

            if (box.hasAttribute('open') && !box.contains(event.target)) {
                box.removeAttribute('open');
                icon.src = plusPink;
            }
        });
    });
});