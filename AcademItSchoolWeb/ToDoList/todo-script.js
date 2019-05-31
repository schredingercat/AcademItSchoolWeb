"use strict";

$(function () {
    $(".add-button").on("click", function () {
        var input = $(".input-text");
        if (input.val().trim().length !== 0) {
            var guid = getNewGuid();
            var insert = $("<div class='row justify-content-between pl-3 pr-3 pt-1 pb-1'><div id='" + guid + "'>" + encodeHtml(input.val()) + "</div>"
                + "<div class='btn-group' role='group'>"
                + "<button type='button' class='btn btn-outline-primary' data-toggle='modal' data-target='.bd-modal-lg' data-uniqueid='" + guid + "'><i class='fas fa-edit'></i></button>"
                + "<button type='button' class='btn btn-outline-danger removeButton'><i class='fas fa-trash-alt'></i></button>"
                + "</div></div>");
            $(".todo-list").append(insert);

            $(".removeButton").on("click", function () {
                var note = $(this).parent().parent();
                removeNote(note);
            });
        }
        input.val("");
    });

    $(".bd-modal-lg").on("show.bs.modal", function (e) {
        var elementId = $(e.relatedTarget).data("uniqueid");
        var text = $("#" + elementId).text();

        var textInput = $(".change-text");
        textInput.val(text);

        $(".save-button").on("click",
            function () {
                if (textInput.val().trim().length !== 0) {
                    $("#" + elementId).html(encodeHtml(textInput.val()));
                    $(".bd-modal-lg").modal("hide");
                } else {
                    textInput.val("");
                }
            });
    });

    $(".bd-modal-lg").on("hide.bs.modal", function () {
        $(".save-button").off("click");
    });

    $(".cancel-button").on("click", function () {
        $(".bd-modal-lg").modal("hide");
    });

});

var removeNote = function (note) {
    note.remove();
};

var getNewGuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
};

function encodeHtml(value) {
    return $("<textarea/>").text(value).html();
}