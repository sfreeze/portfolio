// 팝업 열기
$(document).ready(function() {
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