
$(document).ready(function() {
    // 스크롤 맞춰 내비 이동
    var $menu     = $('.side_nav a'),
        $list     = $('.side_nav ul'),
        $contents = $('.page'),
        $doc      = $('html, body');

    $(function() {
        // 해당 섹션으로 스크롤 이동
        $menu.on('click', 'a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 800);
            return false;
        });
    });

    // menu class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(0 <= scltop)) {
                $menu.removeClass('on');
            }
        });
    });

    // 팝업 열기
    $('.btn-open').on('click', function() {
        $('.popup').show();
        return false;
    });
    $('.close_btn').on('click', function() {
        $('.popup').hide();
    });
});
// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
    var LayerPopup = $(".popup");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.hide();
    }
});

