

let lists = document.getElementsByClassName('item');
document.getElementById('next').onclick = function () {
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('pre').onclick = function () {
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}




let runtime = document.querySelector('.runtime');

runtime.addEventListener("mouseenter", function () {
    lists[1].classList.remove('item-js-hover')
    lists[2].classList.remove('item-js-hover');
    lists[3].classList.remove('item-js-hover');
})

runtime.addEventListener("mouseout", function () {
    lists[1].classList.remove('item-js-hover')
    lists[2].classList.remove('item-js-hover');
    lists[3].classList.remove('item-js-hover');
})

// runtime.addEventListener("mousemove", function () {
//     lists[1].classList.remove('item-js-hover')
//     lists[2].classList.remove('item-js-hover');
//     lists[3].classList.remove('item-js-hover');
// })

let hots = document.querySelectorAll('.item-hot');

hots[0].addEventListener("mousemove", function () {
    lists[2].classList.add('item-js-hover')
})

hots[0].addEventListener("mouseout", function () {
    lists[2].classList.remove('item-js-hover')
})

hots[0].addEventListener("mousedown", function () {
    document.getElementById('slide').appendChild(lists[0]);
    lists[1].classList.remove('item-js-hover')
})


// 
hots[1].addEventListener("mousemove", function () {
    lists[3].classList.add('item-js-hover')
    lists[2].classList.remove('item-js-hover')
})

hots[1].addEventListener("mouseout", function () {
    lists[3].classList.remove('item-js-hover')
})

hots[1].addEventListener("mousedown", function () {
    document.getElementById('slide').appendChild(lists[0]);

    setTimeout(function () {
        document.getElementById('slide').appendChild(lists[0])
    }, 500);
    lists[1].classList.remove('item-js-hover')
    lists[2].classList.remove('item-js-hover')
    lists[3].classList.remove('item-js-hover')

})

hots[2].addEventListener("mousemove", function () {
    lists[4].classList.add('item-js-hover')
    lists[3].classList.remove('item-js-hover')
    lists[2].classList.remove('item-js-hover')
})

hots[2].addEventListener("mouseout", function () {
    lists[4].classList.remove('item-js-hover')
})

hots[2].addEventListener("mousedown", function () {
    document.getElementById('slide').appendChild(lists[0]);

    setTimeout(function () {
        document.getElementById('slide').appendChild(lists[0]);
        setTimeout(function () {
            document.getElementById('slide').appendChild(lists[0])
        }, 500);
    }, 500);


    lists[1].classList.remove('item-js-hover')
    lists[2].classList.remove('item-js-hover')
    lists[3].classList.remove('item-js-hover')
    lists[4].classList.remove('item-js-hover')

})



