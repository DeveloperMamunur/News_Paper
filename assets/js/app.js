// const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

// sideLinks.forEach(item => {
//     const li = item.parentElement;
//     item.addEventListener('click', () => {
//         sideLinks.forEach(i => {
//             i.parentElement.classList.remove('active');
//         })
//         li.classList.add('active');
//     })
// });

// const menuBar = document.querySelector('.content nav .bx.bx-menu');
const menuBar = document.getElementById('menu_btn');
const close = document.getElementById('close');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.style.display = "block";
    close.addEventListener('click', () => {
        sideBar.style.display = "none"; 
    });
});


// const searchBtn = document.querySelector('.content nav form .form-input button');
// const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
// const searchForm = document.querySelector('.content nav form');

// searchBtn.addEventListener('click', function (e) {
//     if (window.innerWidth < 576) {
//         e.preventDefault;
//         searchForm.classList.toggle('show');
//         if (searchForm.classList.contains('show')) {
//             searchBtnIcon.classList.replace('bx-search', 'bx-x');
//         } else {
//             searchBtnIcon.classList.replace('bx-x', 'bx-search');
//         }
//     }
// });

// window.addEventListener('resize', () => {
//     if (window.innerWidth < 768) {
//         sideBar.classList.add('close');
//     } else {
//         sideBar.classList.remove('close');
//     }
//     if (window.innerWidth > 576) {
//         searchBtnIcon.classList.replace('bx-x', 'bx-search');
//         searchForm.classList.remove('show');
//     }
// });

const toggler = document.getElementById('theme-toggle');


toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

// const darkMode = document.querySelector('.switch');

// darkMode.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode-variables');
//     darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
//     darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
// });