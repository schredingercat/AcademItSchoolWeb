"use strict";

$(function () {

    $(".add-button").on("click", function () {

        var input = $(".input-text");
        if (input.val().trim().length !== 0) {
            var guid = getNewGuid();
            var insert = $("<div class='row justify-content-between pl-3 pr-3 pt-1 pb-1'><div id='" + guid + "'>" + input.val() + "</div>"
                + "<div class='btn-group' role='group'>"
                + "<button type='button' class='btn btn-outline-primary' data-toggle='modal' data-target='.bd-example-modal-lg' data-uniqueid='" + guid + "'><i class='fas fa-edit'></i></button>"
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

    $(".bd-example-modal-lg").on("show.bs.modal", function (e) {
        var elementId = e.relatedTarget.dataset.uniqueid;
        var originalTextInput = $("#" + elementId)[0];
        var text = originalTextInput.innerHTML;

        var textInput = $(".change-text");
        textInput.val(text);

        $(".save-button").on("click",
            function () {
                $("#" + elementId)[0].innerHTML = $(textInput).val();
                $(".bd-example-modal-lg").modal('hide');
                //$(".save-button").off("click");
            });
    });

    $(".bd-example-modal-lg").on("hide.bs.modal",
        function () {
            $(".save-button").off("click");
        });

    $(".cancel-button").on("click",
        function () {
            $(".bd-example-modal-lg").modal('hide');
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