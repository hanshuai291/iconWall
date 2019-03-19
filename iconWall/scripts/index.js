window.onload = function () {
    var btnRefresh = document.querySelector("#btnRefresh");
    var iconRefresh = document.querySelector(".iconRefresh");

    var clickTimes = 1;

    var img3dList = document.querySelectorAll(".img-3d");
    var len = img3dList.length;
    var lineCount = 6;
    btnRefresh.onclick = function () {
        iconRefresh.style.transition = ".3s linear";
        iconRefresh.style.transform = "rotate("+360*clickTimes+"deg)";

        for (var i = 0; i < len; i++) {
            var colNum = parseInt(i/lineCount);
            var rowNum = i%lineCount;
            var delaytime = (colNum+rowNum)*100;

            img3dList[i].style.transition=".3s "+delaytime+"ms linear";
            img3dList[i].style.transform="rotateY("+180*clickTimes+"deg)"

        }
        clickTimes++;
    }
}