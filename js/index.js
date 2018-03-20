window.onload = function () {
    var arr = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }
    ];

    var slide = document.getElementById("slide");
    var liArr = document.getElementsByTagName("li");
    var arrow = document.getElementById("arrow");
    var flag = true;

    slide.onmouseenter = function () {
        animate(arrow,{"opacity":100});
    }
    slide.onmouseleave = function () {
        animate(arrow,{"opacity":0});
    }
    move();
    arrow.children[0].onclick = function () {
        if(flag){
            flag = false;
            move(true);
        }
    }
    arrow.children[1].onclick = function () {
        if(flag){
            flag = false;
            move(false);
        }
    }

    function move (bool){
        if(bool === true || bool === false){
            if(bool){
                var ele = arr.shift();
                arr.push(ele);
            }else {
                var ele = arr.pop();
                arr.unshift(ele);
            }
        }

        for(var i=0;i<arr.length;i++){
            animate(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }

}