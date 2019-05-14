"use strict";

$(function () {

    $(".add-button").on("click", function (e) {

        var input = $(".input-text");
        if (input.val().trim().length !== 0) {
            var insert = $("<div>" + input.val() + "<button type='button' class='btn btn-outline-danger m-1 removeButton'><img src='./images/x.svg'/></button></div>");
            $(".todo-list").append(insert);

            $(".removeButton").on("click", function (e) {
                var note = $(this).parent();
                removeNote(note);
            });
        }
        input.val("");
    });




});

var removeNote = function (note) {
    note.remove();
};