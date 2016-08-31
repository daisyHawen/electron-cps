const $ = require('jQuery');
// $.getJSON('http://blog.csdn.net/sinat_25127047/article/list/2',function(data) {
//   console.log(data);
// });
var id = 1;
var btnCmt = $("#btn-commit");
var addScoreFilter = $("#add_score_filter");
var addDataFilter = $("#add_data_filter");
var scoreFilterCount = 1;
var ageFilterCount = 1;
var ip=0;
addScoreFilter.click(function() {
    var item = "#score-item" + scoreFilterCount;
    // console.log(item);
    var last_score = $(item);
    // console.log(last_score[0]);
    // last_score.after('<div>hello</div>')
    if (scoreFilterCount < 4) {
        addNewItem(last_score, 'score');
    } else {
        alert("只允许添加3个限制");
    }
    // console.log(last_score);
});
addDataFilter.click(function() {
    var item = "#age-item" + ageFilterCount;

    var last_age = $(item);

    if (ageFilterCount < 4) {
        addNewItem(last_age);
    } else {
        alert("只允许添加3个限制");
    }
    // console.log(last_age, 'age');
})

function addNewItem(last_score, choice) {
    if (choice == 'score') {
        scoreFilterCount++;
        var number = scoreFilterCount;
        var div_class = 'score-item'
        var div_id = 'score-item' + number;
        var select_id = 'input-sco-op' + number;
        var select_class = 'sco-op';
        var option_name = 'score';
        var input_class = 'sco-num';
        var input_id = 'input-sco-num' + number;
    } else {
        ageFilterCount++;
        var number = ageFilterCount;
        var div_class = 'age-item';
        var div_id = 'age-item' + number;
        var select_id = 'input-age-op' + number;
        var select_class = 'age-op';
        var option_name = 'age';
        var input_class = 'age-num';
        var input_id = 'input-age-num' + number;
    }
    var newhtml = "<div class=" + div_class + " id=" + div_id + ">";
    newhtml = newhtml + "<select class=" + select_class + " id=" + select_id + ">";
    newhtml = newhtml + "<option name='score'> &lt </option>";
    newhtml = newhtml + "<option name='score'> &gt </option>";
    newhtml = newhtml + "<option name='score'> &lt = </option>";
    newhtml = newhtml + "<option name='score'> &gt =</option>";
    newhtml = newhtml + "<option name='score'> &gt =</option>";
    newhtml = newhtml + "<option name='score'> ! =</option>";
    newhtml = newhtml + "<option name='score'> =</option>";
    newhtml = newhtml + "</select>";
    newhtml = newhtml + "</select>";
    newhtml = newhtml + "<input class=" + input_class + " id=" + input_id + "' type='text' name='age' placeholder='请输入0-100的数字'>";
    last_score.after(newhtml);
}

btnCmt.click(function() {

    // console.log('test');
    var score = [];
    var age = [];
    var name = $("#input-name input")[0].value;
    name.replace('.', '-');

    var scoreItems = $(".score-item");
    var scoredatas = $(".score-item .sco-num");


    /*scores*/
    for (var i = 1; i <= scoreItems.length; i++) {
        var score_item = {};
        var number = "scoreFilter" + i;
        var operationNum = "operation" + i;
        var operator_id = "#input-sco-op" + i + " option:selected";
        var dataNum = "data" + i;
        score_item["data"] = parseInt(scoredatas[i - 1].value);
        score_item["operation"] = $(operator_id)[0].value;
        // score_item.push(scoredatas[i - 1].value);

        score.push(score_item);
    }

    /*age*/
    var ageItems = $(".age-item");
    var agedatas = $(".age-item .age-num");
    for (var i = 1; i <= ageItems.length; i++) {
        var age_item = {};
        var number = "ageFilter" + i
        var operationNum = "operation" + i;
        var operator_id = "#input-age-op" + i + " option:selected";
        var dataNum = "data" + i;
        age_item["data"] = parseInt(agedatas[i - 1].value);
        age_item["operation"] = $(operator_id)[0].value;
        // age_item.push(agedatas[i - 1].value);

        age.push(age_item);
    }

    console.log(score);
    console.log(age);
    console.log(name);
    var target = {
        // name: name,
        score: score,
        age: age
    };
    console.log(target);

    var jsonData = {
        ip: "192-168-1-55",
        target: target
    };
    console.log(jsonData);
    var newJsonData = JSON.stringify(jsonData)
    console.log(newJsonData);
    $.ajax({
        type: "post",
        // url: "http://192.168.1.61:8000/",
        url:ip,
        data: newJsonData,
        datatype: "json",
        success: function(data) {
            if (data == 0) //0  成功  1  不成功  
            {
                alert("提交数据成功");
                window.location.reload();
            }
        }
    })

    id++;
});
$("#ip-btn").click(function() {
    ip = $("#ip-addr")[0].value;
    console.log(ip);
})
$("#reload").click(function() {
    window.location.reload();
})
