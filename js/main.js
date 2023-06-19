// KhoaTD handle slider Project SectionĐôi chút về dự án của nhóm

const projectContents = document.querySelectorAll('.project-content');
const btnProjects = document.querySelectorAll('.btn-project');

btnProjects.forEach((item, index) => {
    item.addEventListener('click', () => {
        const projectContent = projectContents[index];
        const currentActiveBtnProject = document.querySelector('.btn-project.active');
        const currentActiveContentProject = document.querySelector('.project-content.active');


        currentActiveContentProject.classList.remove('active');
        currentActiveBtnProject.classList.remove('active');

        projectContent.classList.add('active');
        item.classList.add('active');
    })
})

//IT members
$(document).ready(function () {
    $("#members-it").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            2000: {
                items: 1
            },
        },
    });
});

//Commercial members
$(document).ready(function () {
    $("#members-c").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            2000: {
                items: 1
            },
        },
    });
});
$(document).ready(function () {
    $('.slideshow img:first-child').addClass('active').show();

    setInterval(function () {
        var active = $('.slideshow img.active');
        var next = active.next('img');

        if (next.length === 0) {
            next = $('.slideshow img:first-child');
        }

        active.removeClass('active').fadeOut(0);
        next.addClass('active').fadeIn(2000);
    }, 3000); // Thời gian chuyển đổi giữa các hình ảnh (3 giây trong ví dụ)
});
$(document).ready(function () {
    $('.slideshow1 img:first-child').addClass('active').show();

    setInterval(function () {
        var active = $('.slideshow1 img.active');
        var next = active.next('img');

        if (next.length === 0) {
            next = $('.slideshow1 img:first-child');
        }

        active.removeClass('active').fadeOut(0);
        next.addClass('active').fadeIn(2000);
    }, 3000); // Thời gian chuyển đổi giữa các hình ảnh (3 giây trong ví dụ)
});

