require('../style/index.scss');
var $ = require('jquery');
// -------------轮播图ajax取图--并运行轮播图插件--------------------
let lunbo_ajax = require('./main_module/ajax');
let lunbo_go = require('./main_module/lunbo');
const getLunboimg =(resp)=>{
    let div= $('#lunbo');
    let lunbo_go1 = new (lunbo_go.lunbo)(resp,div);
};
lunbo_ajax.ajax('../../assets/lunbo.json',getLunboimg);
//=============点击跳转登录页面=========================
let click = require('./main_module/click');
const main_login =()=>{
    window.location.href ='./html/enter.html';
};
click.click($('.main_login'),main_login);
// =============点击跳转注册页==================
const main_register =()=>{
    window.location.href ='./html/register.html';
};
click.click($('.main_register'),main_register);
// ===============点击跳转购物车================
const main_shopping =()=>{
    window.location.href ='./html/shopping-trolley.html';
};
click.click($('.main_shopping'),main_shopping);

// ================ajax请求一堆商标=====================
const shangbiao =(resp) =>{
    let ul = $('#trademark ul');
    for (let i=0;i<resp.length;i++){
    let shangbiao_li = $('<li></li>');
    shangbiao_li[0].innerHTML =
        `
         <a href="#">
            <span>
                <div>点击进入</div>
            </span>
            <img src="${resp[i].src}">
        </a>
        `;
    ul.append(shangbiao_li);
}
};
lunbo_ajax.ajax('../../assets/json/shangbiao.json',shangbiao);
// ============鼠标移上商标出现的遮罩层==================/
const  shangbaio_zhezhao = ()=>{
    $('#trademark').on('mouseenter','span',function (evt) {
        var target = $(evt.target);
        target.css( "background","rgba(51,51,51,.9)");
        target.children('div').css("display","block");
    }).on('mouseleave','span',function (evt) {
        var target = $(evt.target);
        target.css( "background","rgba(51,51,51,0)");
        target.children('div').css("display","none");
    });
};
shangbaio_zhezhao();
// ==============商品模块====================
//创建一个函数动态添加节点框架
const sp_module=(resp)=>{
let s_moduleone =$('s_moduleone');
let moduleone= $('<div></div>');
moduleone[0].className = 'moduleone';
    moduleone[0].innerHTML=
        `
             <div class="m_nav">
                <img src="../assets/images/newimg/(25).png" class="l">
                <ul class="r">
                    <li><a href="#">进口食品</a></li>
                    <li><a href="#">食品饮料</a></li>
                    <li><a href="#">粮油副食</a></li>
                    <li><a href="#">美容洗护</a></li>
                    <li><a href="#">家具家电</a></li>
                    <li><a href="#">家具清理</a></li>
                    <li><a href="#">母婴用品</a></li>
                    <li><a href="#">生鲜水果</a></li>
                </ul>
            </div>
            <!--下面全部-->
            <div>
                <!--左边盒子-->
             <div>
                 <span></span>
                 <img src="../assets/images/sp_mould/c1.png">
             </div>
                <!--右边盒子-->
                <div>
                    <!--右边盒子里的4个盒子-->
                    <!--第一个盒子小轮播图-->
                    <div class="sp_lunbo">
                        <p>
                            <a href="#" class="ag">今日疯抢</a>
                            <a href="#">限贩装</a>
                        </p>
                        <img src="../assets/images/0.jpg" alt="">
                    </div>
                            <div>
                                <div>
                                    <span></span>
                                    <img src="../assets/images/sp_mould/s1.jpg">
                                    <p>商品信息</p>
                                </div>
                                <div>
                                    <span></span>
                                    <img src="../assets/images/sp_mould/s2.jpg">
                                    <p>商品信息</p>

                                </div>
                            </div>
                            <div>
                                <div>
                                    <span></span>
                                    <img src="../assets/images/sp_mould/s3.jpg">
                                    <p>商品信息</p>

                                </div>
                                <div>
                                    <span></span>
                                    <img src="../assets/images/sp_mould/s4.jpg">
                                    <p>商品信息</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span></span>
                                    <img src="../assets/images/sp_mould/s5.jpg">
                                    <p>商品信息</p>
                                </div>
                                <div>
                                    <span></span>
                                    <img src="../assets/images/sp_mould/s6.jpg">
                                    <p>商品信息</p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
        `;
        s_moduleone.append(moduleone);
};
// ===========节点框架里的鼠标移上切换图片=================
let num=0;
const sp_span = ()=>{
    let a = $('.moduleone .sp_lunbo p a');
  let img = $('.moduleone .sp_lunbo img');
    if(num === 2){
        num =0
    }
    a.on('mouseenter',function () {
        num = $(this).index();
        img[0].src = `../assets/images/${num}.jpg`;
        $('.moduleone .sp_lunbo p a.ag')[0].className='';
        a[num].className = 'ag';
        return;
    });
    $('.moduleone .sp_lunbo p a.ag')[0].className='';
    a[num].className = 'ag';
    img[0].src = `../assets/images/${num}.jpg`;
};
setInterval(function () {
    num++;
    sp_span();
},3000);

const div_red = ()=>{
    let div = $('.moduleone >div:nth-of-type(2) >div:nth-of-type(2) >div >div');
  div.on('mouseenter',function () {
      this.className= 'div_ico';
  }).on('mouseleave',function () {
      this.className= '';
  })
};
div_red();

// =================懒加载==================
const condition = () => {
    let lastBox = $('.moduleone >div:nth-of-type(2) >div:nth-of-type(2) >div >div:last-of-type');
    if (lastBox[0].getBoundingClientRect().top > window.innerHeight) {
        return false;
    } else {
        return true;
    }
};
const lanjiazai =()=>{
    if(condition()){
        let start = (new Date()).getTime();
        let pageNo = 0;
        const loadData = () => {

            let now = (new Date()).getTime();

            if (now - start < 1000) {
                return;
            }

            sp_module();
            start = now;
        };
    }

};
// ===================监控滚轮事件========
const scroll = ()=>{
  window.onscroll=(evt)=>{
      lanjiazai();
  }
};
scroll();


