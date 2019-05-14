"use strict";

$(function () {

    $(".add-button").on("click", function (e) {

        var input = $(".input-text");
        if (input.val().trim().length !== 0) {
            var insert = $("<div class='row'><div>" + input.val() + "</div></div>");
            $(".todo-list").append(insert);
        }
        input.val("");
    });

});