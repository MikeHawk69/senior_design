/**
 * Created by Alexander on 11/6/2016.
 */
// variables used in calculations
var chk = 0;
var rNum = 2;
var cNum = 2;
var dNum = 2;
var questionNumber = 1;
var actPan = "";
var actBut = "";

/** The show function toggles a hidden option panel to displayed. The chk variable checks to make sure that only one
 * option panel is open at a time
 * @param panName : id of panel activated
 * @param butName : id of button clicked
 * */
function show(panName, butName) {
    if (chk != 0) {
        document.getElementById(actBut).classList.toggle("active");
        document.getElementById(actPan).classList.toggle("show");
    }
    if(butName!==actBut) {
        document.getElementById(butName).classList.toggle("active");
        document.getElementById(panName).classList.toggle("show");
        actPan = panName;
        actBut = butName;
        chk = 1;
    }
    else{
        actPan="";
        actBut="";
        chk=0;
    }
}

/**  The cancelAdd function toggles the displayed panel and changes it to hidden.
 *   The chk didgt is then reset to zero. activated when the cancel button is clicked
 * @param panName : id of panel activated
 * @param butName : id of button activated (left side button)
 */
function cancelAdd(panName, butName) {
    document.getElementById(butName).classList.toggle("active");
    document.getElementById(panName).classList.toggle("show");
    chk = 0;
    actPan="";
    butPan="";
}

/** addQuestion adds questions to the created survey form.
 * Depending on the option added, different inputs are available
 * @param panName : id of the panel used to add the question
 */
function addQuestion(panName) {
    switch (panName) {
        case "ratForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<p>Question ' + questionNumber + ': ' + ($("#ratQuestion").val()) + '</p>');
            $('#q' + questionNumber).append(
                '<input id="q' + questionNumber + '" type="number" ' +
                'min="' + ($("#ratMax").val()) +
                '" max="' + ($("#ratMin").val()) +
                '" step="1" value="0"/>');
            questionNumber++;
            break;
        case "txtForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<p>Question ' + questionNumber + ': ' + ($("#txtQuestion").val()) + '</p>');
            $('#q' + questionNumber).append('<textarea id="q' + questionNumber + '" value="write answer here" style="resize:none;width:100%"/>');
            questionNumber++;
            break;
        case "chkForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<p>Question ' + questionNumber + ': ' + ($("#chkQuestion").val()) + '</p>');
            var i;
            for (i = 1; i < cNum; i++) {
                $('#q' + questionNumber).append('<input type="checkbox">' + $('#ctb' + i).val() + '</input>')
            }
            questionNumber++;
            break;
        case "rdoForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<p>Question ' + questionNumber + ': ' + ($("#rdoQuestion").val()) + '</p>');
            var i;
            for (i = 1; i < rNum; i++) {
                $('#q' + questionNumber).append('<input name="q' + questionNumber + '"type="radio">' + $('#rtb' + i).val() + '</input>')
            }
            questionNumber++;
            break;
        case "ddForm":
            $('#survey').append('<div class="question" id="q' + questionNumber + '"></div>');
            $('#q' + questionNumber).append('<p>Question ' + questionNumber + ': ' + ($("#ddQuestion").val()) + '</p>');
            var i;
            for (i = 1; i < dNum; i++) {
                $('#q' + questionNumber).append('<input type="dropdown">' + $('#dtb' + i).val() + '</input>')
            }
            questionNumber++;
            break;
    }
}

/** resets the panel and gets rid of excess options
 * @param panName : id of panel needed to be reset
 */
function resetPan(panName) {
    switch (panName) {
        case"ddForm":
            while (dNum > 2) {
                dNum--;
                $('#dtb' + dNum).remove();
            }
            document.getElementById("ddForm").reset();
            break;
        case"chkForm":
            while (cNum > 2) {
                cNum--;
                $('#ctb' + cNum).remove();
            }
            document.getElementById("chkForm").reset();
            break;
        case"rdoForm":
            while (rNum > 2) {
                rNum--;
                $('#rtb' + rNum).remove();
            }
            document.getElementById("rdoForm").reset();
            break;
    }
}

/** delete and option that was addded
 * @param panName : id of the panel called
 */
function deleteOption(panName) {
    switch (panName) {
        case "ddForm" :
            if (dNum > 2) {
                dNum--;
                $('#dtb' + dNum).remove();
            }
            break;
        case "chkForm" :
            if (cNum > 2) {
                cNum--;
                $('#ctb' + cNum).remove();
            }
            break;
        case "rdoForm" :
            if (rNum > 2) {
                rNum--;
                $('#rtb' + rNum).remove();
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
                $('#ddAdd').before('<input type=text style="width:100%" class="input" id="dtb' + dNum +
                    '" value="Option ' + dNum + '" />');
                dNum++;
            }
            break;

        case "rdoForm" :
            if (rNum != 11) {
                $('#rdoAdd').before('<input type=text style="width:100%" class="input" id="rtb' + rNum +
                    '" value="Option ' + rNum + '" />');
                rNum++;
            }
            break;

        case "chkForm" :
            if (cNum != 11) {
                $('#chkAdd').before('<input type=text style="width:100%" class="input" id="ctb' + cNum +
                    '" value="Option ' + cNum + '" />');
                cNum++;
            }
            break;
    }
}

