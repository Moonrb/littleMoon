var $ = require('jquery');
const click = (el,fn)=>{
    el.click(function () {
        fn();
    })
};
module.exports={
  click:click
};