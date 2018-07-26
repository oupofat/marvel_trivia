var score = 0;
$("#marvel_question2").hide();
$("#marvel_question3").hide();
$("#marvel_question4").hide();
$("#marvel_question5").hide();
//question 1
$("#marvel_question1").on("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    let answer1 = $("[name=answer1]:checked").val();
    //console.log(answer1);
    if (answer1 === "loki")
        score++;
    //console.log(score);
    $("[name=score]").text(score);
    $("#marvel_question1").hide();
    $("#marvel_question2").show();
});
//question 2
$("#marvel_question2").on("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    let answer2 = $("[name=aether]").val()
    //console.log(answer2);
    if (answer2 === "the_collector")
        score++;
    $("[name=score]").text(score);
    $("#marvel_question2").hide();
    $("#marvel_question3").show();
});
//question 3
$("#marvel_question3").on("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    let answer3 = $("[name=question3]").prop("checked");
    console.log(answer3);
    if (answer3)
        score++;
    //console.log(score);
    $("[name=score]").text(score);
    $("#marvel_question3").hide();
    $("#marvel_question4").show();
});
//question 4
$("#marvel_question4").on("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    let answer4 = $("[name=answer4]:checked").val();
    //console.log(answer2);
    if (answer4 === "mind_stone")
        score++;
    //console.log(score);
    $("[name=score]").text(score);
    $("#marvel_question4").hide();
    $("#marvel_question5").show();
});

//question 5
$("#marvel_question5").on("submit", function (event) {
    event.preventDefault();
    //console.log(event);
    let answer5 = $("[name=taserface]").val()
    //console.log(answer2);
    if (answer5 === "taserface")
        score++;
    $("[name=score]").text(score);
    $("#marvel_question5").hide();
    var background = $("#background").css("background-image", "url('css/images/marvel_background.jpg')");
    alert("great job, you got " + score + " out of 5");
    console.log(background);
});
