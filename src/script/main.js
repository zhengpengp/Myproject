require.config({
    paths: { //path:给路径内部的代码设置一个名称，名称就是最后使用的模块的名称。
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min', //扩展名一定要省略
        'jlazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min',
        'jcookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min'
    },
    shim: { //让不支持AMD的模块支持AMD
        'jlazyload': {
            deps: ['jquery'], //deps:表示当前的模块依赖那个模块。

        },
        'jcookie': {
            deps: ['jquery'], //deps:表示当前的模块依赖那个模块。
        }
    }
});


require(['jquery'], function() {
    console.log($('#currentpage').attr('data-origin'));
    let $modulepage = $('#currentpage').attr('data-origin');
    require([$modulepage], function(modulepage) { //不同的页面加载不同的模块
        modulepage.init();
    });
});