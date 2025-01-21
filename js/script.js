// ham Menu
const hamMenuIcon = document.querySelectorAll('.ham-menu-icon>i')
const hamMenuList = document.querySelector('#ham-menu-list')

hamMenuIcon.forEach(i => {
    i.addEventListener('click', () => {
        if (i.classList.contains('bi-list')) {
            i.classList.add('hidden')
            i.nextElementSibling.classList.remove('hidden')
            hamMenuList.classList.remove('h-0')
            hamMenuList.classList.remove('overflow-hidden')
            hamMenuList.classList.add('h-[192px]')
            hamMenuList.classList.add('overflow-visible')
        } else {
            i.classList.add('hidden')
            i.previousElementSibling.classList.remove('hidden')
            hamMenuList.classList.remove('h-[192px]')
            hamMenuList.classList.remove('overflow-visible')
            hamMenuList.classList.add('h-0')
            hamMenuList.classList.add('overflow-hidden')
        }
    })
})
// ham Menu


// type writer
const h1Elem = document.getElementById('typeWriter')

let h1ElemTypeWriter = new Typewriter(h1Elem, {
    loop: true,
})

h1ElemTypeWriter
    .typeString('beau.')
    .pauseFor(400)
    .deleteAll()
    .typeString('clair.')
    .pauseFor(400)
    .deleteAll()
    .typeString('rapide.')
    .pauseFor(400)
    .deleteAll()
    .typeString('fluide.')
    .pauseFor(400)
    .deleteAll()
    .typeString('soigne.')
    .pauseFor(400)
    .deleteAll()
    .typeString('moderne.')
    .pauseFor(400)
    .deleteAll()
    .typeString('elegant.')
    .pauseFor(400)
    .deleteAll()
    .typeString('puissant.')
    .pauseFor(400)
    .deleteAll()
    .typeString('efficace.')
    .pauseFor(400)
    .deleteAll()
    .typeString('simple.')
    .pauseFor(400)
    .deleteAll()
    .typeString('mieux.')
    .pauseFor(400)
    .start()
// type writer


// scroll
const header = document.querySelector('header')
const blurTitle = document.querySelector('#blur-title')
const blurTitle2 = document.querySelector('#blur-title2')
const blurTitle3 = document.querySelector('#blur-title3')
const blurTitle4 = document.querySelector('#blur-title4')
const items = document.querySelectorAll('#items>div')
const items2 = document.querySelectorAll('#items2>div')
const para1 = document.querySelectorAll('.para1')
const para2 = document.querySelectorAll('.para2')
const toRightItem = document.querySelector('#to-right')
const toLeftItem = document.querySelector('#to-left')
const content = document.querySelector('#content')

window.addEventListener('scroll', () => {
    let st = window.scrollY
    console.log(st)

    // fixed header scroll
    if (st > 0) {
        header.classList.remove('w-[90%]')
        header.classList.add('fixed-top')
    } else {
        header.classList.add('w-[90%]')
        header.classList.remove('fixed-top')
    }
    // fixed header scroll


    // blur title
    if (st > 550) blurTitle.classList.remove('blur-sm')
    else blurTitle.classList.add('blur-sm')
    // blur title


    // Translate items
    if (st > 600 && st < 900) {
        let scrollProgress = (st - 600) / 300

        items[0].style.transition = 'transform 0.3s ease'
        let translateY1 = scrollProgress * 200
        let rotateDeg1 = scrollProgress * -12
        items[0].style.transform = `translateX(144px) rotate(${rotateDeg1}deg) translateY(-${translateY1}px)`

        items[1].style.transition = 'transform 0.3s ease';
        let translateY2 = scrollProgress * 200
        let scaleValue = 1 + scrollProgress * 0.04
        items[1].style.transform = `translateY(-${translateY2}px) scale(${scaleValue})`

        items[2].style.transition = 'transform 0.3s ease'
        let translateY3 = scrollProgress * 200
        let rotateDeg3 = scrollProgress * 12
        items[2].style.transform = `translateX(-144px) rotate(${rotateDeg3}deg) translateY(-${translateY3}px)`

    } else if (st >= 900) {
        items[0].style.transform = 'translateX(144px) rotate(-12deg) translateY(-200px)'
        items[1].style.transform = 'translateY(-200px) scale(1.04)'
        items[2].style.transform = 'translateX(-144px) rotate(12deg) translateY(-200px)'
    } else {
        items[0].style.transform = 'translateX(144px) rotate(0deg) translateY(0px)'
        items[1].style.transform = 'translateY(0px) scale(1)'
        items[2].style.transform = 'translateX(-144px) rotate(0deg) translateY(0px)'
    }
    // Translate items


    // blur title2
    if (st > 1500) blurTitle2.classList.remove('blur-sm')
    else blurTitle2.classList.add('blur-sm')
    // blur title2


    // Translate items
    if (st > 1500 && st < 1800) {
        let scrollProgress = (st - 1500) / 300
        items2.forEach(item => {
            item.style.transition = 'transform .5s ease'
            let translateY2 = scrollProgress * 200
            item.style.transform = `translateY(-${translateY2}px)`
        })
    } else if (st >= 1800) {
        items2.forEach(item => item.style.transform = 'translateY(-200px)')
    } else {
        items2.forEach(item => item.style.transform = 'translateY(0px)')
    }
    // Translate items


    // Change opacity
    if (window.innerWidth >= 1024) {
        if (st > 2200 && st < 3000) {
            para1.forEach(p => {
                p.style.transition = 'opacity 0.5s ease'
                p.style.opacity = 1
            })
        } else {
            para1.forEach(p => {
                p.style.opacity = 0
            })
        }

        if (st > 2400 && st < 3000) {
            para2.forEach(p => {
                p.style.transition = 'opacity 0.5s ease'
                p.style.opacity = 1
            });
        } else {
            para2.forEach(p => {
                p.style.opacity = 0
            })
        }
    }
    // Change opacity


    // blur title3
    if (st > 2950) blurTitle3.classList.remove('blur-sm')
    else blurTitle3.classList.add('blur-sm')
    // blur title3


    // blur title4
    if (st > 4100) blurTitle4.classList.remove('blur-sm')
    else blurTitle4.classList.add('blur-sm')
    // blur title4


    // translate left & right
    if (window.innerWidth >= 1024) {
        if (st > 4400 & st < 5200) {
            toRightItem.classList.remove('lg:-translate-x-20')
            toLeftItem.classList.remove('lg:translate-x-20')
        } else {
            toRightItem.classList.add('lg:-translate-x-20')
            toLeftItem.classList.add('lg:translate-x-20')
        }
    }
    // translate left & right


    // opacity content
    if (window.innerWidth >= 1024) {
        if (st > 5300 && st < 5800) {
            content.classList.remove('lg:opacity-0')
            content.classList.remove('lg:translate-y-14')
            content.classList.remove('lg:blur-sm')
        } else {
            content.classList.add('lg:opacity-0')
            content.classList.add('lg:translate-y-14')
            content.classList.add('lg:blur-sm')
        }
    }
    // opacity content
})
// scroll


// change opacity
items2.forEach(item => {
    item.addEventListener('mouseenter', () => {
        items2.forEach(otherItem => {
            if (otherItem !== item) otherItem.classList.add('opacity-50')
        })
    })

    item.addEventListener('mouseleave', () => {
        items2.forEach(otherItem => otherItem.classList.remove('opacity-50'))
    })
})
// change opacity


// zoom img
const zoomImg = document.querySelectorAll('.zoom-img')
let zoomFactor = 1.5

zoomImg.forEach(img => {
    img.addEventListener('mousemove', (e) => {
        let x = e.offsetX
        let y = e.offsetY
        img.style.transformOrigin = `${x}px ${y}px`
        img.style.transform = `scale(${zoomFactor})`
    })

    img.addEventListener('mouseleave', () => {
        img.style.transformOrigin = 'center'
        img.style.transform = 'scale(1)'
    })
})
// zoom img