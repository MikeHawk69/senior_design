/**
 * Created by Alexander on 11/9/2016.
 */

var activeSlider = "";
var activeToolOption = "";
var rNum = 2;
var cNum = 2;
var dNum = 2;
var questionNumber = 1;



/** TOOLBAR SLIDER FUNCTION
 *  when document is ready, slide options on click and set active to open slider
 *  if a slider is already open, close it and set active slider to new slider
 *  if the open slider is clicked again, close it and reset active slider
 */
$(document).ready(function () {
    $(".slider").click(function () {
        if (activeToolOption != "") {
            $("#" + activeToolOption).toggle();
            activeToolOption = "";
        }
        var name = $(this).attr("name");
        if (activeSlider == name) {
            $("#" + name).slideToggle("slow");
            activeSlider = "";
        }
        else {
            if (activeSlider != "") $("#" + activeSlider).slideToggle("slow");
            $("#" + name).slideToggle("slow");
            activeSlider = name;
        }
    });
});

/** TOGGLE TOOL OPTION WINDOW FUNCTION
 *  when document is ready and a tool is selected, open tool option window and save active window
 *  if a window is already open, close it and open new window and change active window
 *  if tool is clicked again, closw window and reset active window
 */
$(document).ready(function () {
    $(".tool").click(function () {
        var name = $(this).attr("name");
        if (activeToolOption == name) {
            $("#" + name).toggle();
            activeToolOption = "";
        }
        else {
            if (activeToolOption != "") $("#" + activeToolOption).toggle();
            $("#" + name).toggle();
            activeToolOption = name;
        }
    });
});

/** resets the panel and gets rid of excess options
 * @param panName : id of panel needed to be reset
 */
function resetPan(panName) {
    switch (panName) {
        case"ddForm":
            while (dNum > 2) {
                dNum--;
                $('#dtb' + dNum).remove();
                $('#dSpace' + dNum).remove();
            }
            document.getElementById("ddForm").reset();
            break;
        case"chkForm":
            while (cNum > 2) {
                cNum--;
                $('#ctb' + cNum).remove();
                $('#cSpace' + cNum).remove();
            }
            document.getElementById("chkForm").reset();
            break;
        case"rdoForm":
            while (rNum > 2) {
                rNum--;
                $('#rtb' + rNum).remove();
                $('#rSpace' + rNum).remove();
            }
            document.getElementById("rdoForm").reset();
            break;
    }
}

/** delete and option that was addded
 * @param panName : id of the panel called
 */
function remOption(panName) {
    switch (panName) {
        case "ddForm" :
            if (dNum > 2) {
                dNum--;
                $('#dtb' + dNum).remove();
                $('#dSpace' + dNum).remove();
            }
            break;
        case "chkForm" :
            if (cNum > 2) {
                cNum--;
                $('#ctb' + cNum).remove();
                $('#cSpace' + cNum).remove();
            }
            break;
        case "rdoForm" :
            if (rNum > 2) {
                rNum--;
                $('#rtb' + rNum).remove();
                $('#rSpace' + rNum).remove();
            }
            break;
    }
}

/** adds an option to the panel specified
 * @param panName : id of the panel
 */
function addOption(panName) {
    switch (panName) {
        case "ddForm" :
            if (dNum != 11) {
                $('#ddAdd').before('<input type=text style="width:98%" class="input" id="dtb' + dNum +
                    '" value="Option ' + dNum + '" /> <div  id= "dSpace' + dNum + '" style="height:5px;width:100%"></div>');
                dNum++;
            }
            break;

        case "rdoForm" :
            if (rNum != 11) {
                $('#rdoAdd').before('<input type=text style="width:98%" class="input" id="rtb' + rNum +
                    '" value="Option ' + rNum + '" /> <div id= "rSpace' + rNum + '" style="height:5px;width:100%"></div>');
                rNum++;
            }
            break;

        case "chkForm" :
            if (cNum != 11) {
                $('#chkAdd').before('<input type=text style="width:98%" class="input" id="ctb' + cNum +
                    '" value="Option ' + cNum + '" /> <div id= "cSpace' + cNum + '" style="height:5px;width:100%"></div>');
                cNum++;
            }
            break;
    }
}

$(document).ready(function () {
    $("#headerButton").click(function () {
        $(this).toggle();
        if($("#proInfoRadio").val() == "yes");
        //$("#surveyHeader").toggle();
        if($("#proInfoName").val() != ""); //change name;
        if($("#proInfoDesc").val() != ""); //change desc;
    });
});

/** addQuestion adds questions to the created survey form.
 * Depending on the option added, different inputs are available
 * @param panName : id of the panel used to add the question
 */
function addToSurvey(panName, divName) {
    var i;
    switch (panName) {
        case "stForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<button style="position:absolute;right:5%;border:none;background-color:transparent"' +
                ' onclick="openOptions(questionNumber , "s" )"><i id="q'+questionNumber+'opts" class="fa fa-cog" ' +
                'style="color:green;font-size: 20px"></i></button>');
            $('#q' + questionNumber).append('<p style="text-align:left">Question ' + questionNumber + ': ' + ($("#stQuestion").val()) + '</p>');
            $('#q' + questionNumber).append(
                '<input id="q' + questionNumber + '" type="text" value="Enter answer Here"/>');
            break;
        case "tbForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<button style="position:absolute;right:5%;border:none;background-color:transparent"' +
                ' onclick="openOptions(questionNumber, "t")"><i id="q'+questionNumber+'opts" class="fa fa-cog" ' +
                'style="color:green;font-size: 20px"></i></button>');
            $('#q' + questionNumber).append('<p style="text-align:left">Question ' + questionNumber + ': ' + ($("#tbQuestion").val()) + '</p>');
            $('#q' + questionNumber).append('<textarea style="width:90%" id="q' + questionNumber + '" style="resize:none;width:100%">' +
                'Enter Answer Here</textarea>');
            break;
        case "chkForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<button style="position:absolute;right:5%;border:none;background-color:transparent"' +
                ' onclick="openOptions(questionNumber, "c")"><i id="q'+questionNumber+'opts" class="fa fa-cog" ' +
                'style="color:green;font-size: 20px"></i></button>');
            $('#q' + questionNumber).append('<p style="text-align:left">Question ' + questionNumber + ': ' + ($("#chkQuestion").val()) + '</p>');
            for (i = 1; i < cNum; i++) {
                $('#q' + questionNumber).append('<input type="checkbox">' + $('#ctb' + i).val() + '</input>')
            }
            break;
        case "rdoForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<button style="position:absolute;right:5%;border:none;background-color:transparent"' +
                ' onclick="openOptions(questionNumber,"r")"><i id="q'+questionNumber+'opts" class="fa fa-cog" ' +
                'style="color:green;font-size: 20px"></i></button>');
            $('#q' + questionNumber).append('<p style="text-align:left">Question ' + questionNumber + ': ' + ($("#rdoQuestion").val()) + '</p>');
            for (i = 1; i < rNum; i++) {
                $('#q' + questionNumber).append('<input name="q' + questionNumber + '"type="radio">' + $('#rtb' + i).val() + '</input>')
            }

            break;
        case "ddForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<button style="position:absolute;right:5%;border:none;background-color:transparent"' +
                ' onclick="openOptions(questionNumber,"d")"><i id="q'+questionNumber+'opts" class="fa fa-cog" ' +
                'style="color:green;font-size: 20px"></i></button>');
            $('#q' + questionNumber).append('<p style="text-align:left">Question ' + questionNumber + ': ' + ($("#ddQuestion").val()) + '</p>');
            var str = "";
            str = str + '<select style="width:30%">';
            for (i = 1; i < dNum; i++) {
                str = str + '<option value="' + $('#dtb' + i).val() + '">' + $('#dtb' + i).val() + '' +
                    '</input>';
            }
            str = str + '</select>';
            $('#q' + questionNumber).append(str);
            break;
    }
    questionNumber++;
    $('#' + divName).toggle();
    activeToolOption = "";
}

function openOptions(qNum, qType){
    switch (qType){
        case "s": //st form options
            addToSurvey("stForm", "sTextOption");
            break;
        case "t": //tb form
            $("#q"+qNum).attr("background-color", "black");
            break;
        case "c": //chk form
            $("#q"+qNum).attr("background-color", "black");
            break;
        case "r": //rdo form
            $("#q"+qNum).attr("background-color", "black");
            break;
        case "d": //dd form
            $("#q"+qNum).attr("background-color", "black");
            break;
    }
}
//TODO
// add functionality to other sliders