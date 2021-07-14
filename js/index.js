$(window).scroll(function () {// عند حدث نزولاً للإسفل و صعوداً للأعلى 

    if ($(this).scrollTop() >= 200) {// noTransparrent إذا كانت أكبر من 200 قم بإضافة 
        $("#navBar").addClass("noTransparrent");
    }
    else {// noTransparrent و إلا إذا كانت أقل من 200 قم بإزالة 
        $("#navBar").removeClass("noTransparrent");
    }

});

$(document).ready(function () {
    //في هذا السطر يتم إرفاق دالة للحدث 
    //Ready
    //الموجود ضمن الـ
    //document
    //اي انه يتم تنفيذ دالة من اختيارنا عندما يكتمل تحميل الصفحة
    $("a.scroll").on('click', function (event) {
        // هنا يتم تحديد كل الوسوم 
        // <a>
        //التي تحتوي على الكلاس
        //scroll
        // ويتم تعريف دالة يتم تنفيذها عند وقوع الحدث 
        //Click
        // على العناصر السابقة

        var hash = this.hash;
        // هنا نقوم بتخزين المعرف الخاص بالعناصر لكي نستخدمها لاحقا ونقوم بعمل
        //scroll
        //اليها

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function () { });
        // هنا يتم استخدام الدالة 
        //animate
        //لعمل تحريكل للاسفل وصلا للعنصر الذي
        //يتم الضغط عليه
    });

    $('.circle').circleProgress({
        
        startAngle: -Math.PI / 2,// هنا نقوم بتحديد زاوية البداية
        fill: "#0575e6"// هنا نختار اللون الخاص بالدائرة
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });                                 //يتم اظهار  النسبة المئوية الخاصة بالدائرة

    $(function () {
        $("#commentForm").validate();// حقل إلزامي 
    });

});