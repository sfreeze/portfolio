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

// 경기도청
var tempWidth = $(".imgArea").css("width");
var tempSplitWidth = tempWidth.split("px");
var imgWidth = tempSplitWidth[0];

$('.origImg').resizable({
    handles: "e",
    minWidth: 38,
    maxWidth: imgWidth-40
});

var handles = $(".handle").resizable("option", "handles");
$(".handle").resizable("option", "handles", "e");
$(".origImg").css("width","854px");