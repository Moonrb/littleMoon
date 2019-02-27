var $ = require('jquery');
// ==========ajax的模块插件=========
function ajax(src,callback){
    $.ajax({
        url: src,

        success: function (resp) {
            callback(resp);
        },

        error: function (xhr) {
            console.error(xhr)
        }
    });
}

module.exports = {
    ajax:ajax
};