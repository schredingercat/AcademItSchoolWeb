"use strict";

$(function () {

    $(".add-button").on("click", function () {

        var input = $(".input-text");
        if (input.val().trim().length !== 0) {
            var insert = $("<div class='row justify-content-between pl-3 pr-3 pt-1 pb-1'><div>" + input.val() + "</div>"
                + "<div class='btn-group' role='group'>"
                + "<button type='button' class='btn btn-outline-primary'><i class='fas fa-edit'></i></button>"
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




});

var removeNote = function (note) {
    note.remove();
};