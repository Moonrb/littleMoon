var $ = require('jquery');
let num = 0;

class  lunbo {
    constructor(resp,div){
        this.id;
        this.istimeout = true;
        this.num = 0;
        this.carousel = $('<ul></ul>');
        this.anchor = $('<ul></ul>');
        this.carousel[0].className = 'carousel';
        this.anchor[0].className= 'anchor';
        this.resp = resp;
        this.div = div;
        this.jiedian();
        this.carousel.children('li')[0].className = 'first';
        this.anchor.children('li')[0].className = 'ico';
        this.div.append(this.carousel);
        this.div.append(this.anchor);
        this.imghover();
        this.auto();
        this.tructh();

    }
    jiedian(){
        for (let i=0;i<(this.resp).length;i++){
            let li_img = $('<li></li>');
            let li_ico = $('<li></li>');

            li_img[0].innerHTML =
                `
           <a href="#"><img src="${(this.resp )[i].src}"></a>
          `;
         this.carousel.append(li_img);
         this.anchor.append(li_ico);
        }

    }
    lunbo_index(index){
        $('.first')[0].className = '';
        $('.ico')[0].className = '';
        $('.carousel li')[index].className = 'first';
        $('.anchor li')[index].className = 'ico';
    }
    add(){
        (this.num)++;
        if (this.num > ($('.carousel li').length)-1){
            this.num = 0;
        }
        this.lunbo_index(this.num);
    }
    min(){
        (this.num)--;
        if (this.num < 0){
            this.num = ($('.carousel li').length)-1;
        }
        this.lunbo_index(this.num);
    }
    auto(){
        let self = this;
        if(this.istimeout){
            this.id = setTimeout(function () {
                self.add();
                self.auto();
            },5000)
        }

    }
    tructh(){
        let self = this;
        $('#lunbo .anchor li').on('mouseover',function () {
           self.num = $(this).index();
           self.lunbo_index(self.num);
        })
    }
    imghover(){
        let self = this;
        $('#lunbo').on('mouseenter',function () {
            clearTimeout(self.id);
            self.istimeout = false;
        }).on('mouseleave',function () {
            clearTimeout(self.id);
            self.istimeout = true;
            self.auto();
        });
    }
}
module.exports = {
    lunbo:lunbo
};