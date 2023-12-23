

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


// 
let toggle = document.querySelector('.toggle-body');
let toggleBoxs = document.querySelectorAll('.toggle-box');
let isToggle;

toggle.onclick = function () {
    if (!isToggle) {
        toggleBoxs[0].classList.add('toggle-box1');
        toggleBoxs[1].classList.add('toggle-box2');
        toggleBoxs[2].classList.add('toggle-box3');
        toggleBoxs[3].classList.add('toggle-box4');
        toggleBoxs[5].classList.add('toggle-box6');
        toggleBoxs[6].classList.add('toggle-box7');
        toggleBoxs[7].classList.add('toggle-box8');
        toggleBoxs[8].classList.add('toggle-box9');
        isToggle = true;
    }
    else {
        toggleBoxs[0].classList.remove('toggle-box1');
        toggleBoxs[1].classList.remove('toggle-box2');
        toggleBoxs[2].classList.remove('toggle-box3');
        toggleBoxs[3].classList.remove('toggle-box4');
        toggleBoxs[5].classList.remove('toggle-box6');
        toggleBoxs[6].classList.remove('toggle-box7');
        toggleBoxs[7].classList.remove('toggle-box8');
        toggleBoxs[8].classList.remove('toggle-box9');
        isToggle = false;
    }

}



