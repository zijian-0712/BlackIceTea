


document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('pre').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}


let lists01 = document.querySelectorAll('.item');
    if (lists01.onclick==true) {
        lists01[2].onclick = function ()
        {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
        lists01 = document.querySelectorAll('.item');
        }
    
    }

   


