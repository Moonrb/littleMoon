require('../style/index.scss');
var $ = require('jquery');
// -------------轮播图ajax取图----------------------
$.ajax({
    url: '../../assets/lunbo.json',

    success: function (resp) {

        let a = $('#lunbo .carousel li a');


        for (let i = 0; i < a.length; i++) {
            let img = $('<img>');
            img[0].src = resp[i].src;
            a.eq(i).append(img);
        }
    },

    error: function (xhr) {
        console.error(xhr)
    }

});
// ----------------------实现轮播效果

let num = 0;



function lunbo() {
    let classFirst = $('#lunbo .first');
    let li = $('#lunbo .carousel li');
    if (num > 5) {
        num = 0;
    }
    classFirst[0].className = '';
    li[num].className = 'first';
    hand();
}

// ---------auto
var auto = setInterval(function () {
    lunbo();
    anchor();
    hand();
    num++;
}, 3000);

// --------------实现锚点
function anchor() {
    let classAnchor = $('#lunbo .ico');
    let liA = $('#lunbo .anchor li');
    classAnchor[0].className = '';
    liA[num].className = 'ico';
}

// ---------锚点控制图片跳转-------------------
function hand() {
    let liA = $('#lunbo .anchor li');
    for (var i = 0; i < liA.length; i++) {
        liA[i].ada = i;
        liA.eq(i).on('mouseover', function () {
            num = this.ada;
        })
    }
};

// ---------------图--------------------------
//----------------------------------------






