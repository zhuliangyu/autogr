/**
 * Created by macbook on 2016-10-15.
 */

$(document).ready(function () {

    $("#project-name-submit").click(function () {
       var name=$("#project-name").val();
        $("#project-name-script").html("rails new "+name+" -T -d postgresql");
    });


    $("#submit").click(function () {
        var resource_name_singal = $("#resource-name").val();
        var resource_name_plural = pluralize.plural(resource_name_singal);

        var model_field_name_1 = $("#model-field-name-1").val();
        var model_field_type_1 = $("#model-field-type-1").val();
        var model_field_name_2 = $("#model-field-name-2").val();
        var model_field_type_2 = $("#model-field-type-2").val();
        var model_field_name_3 = $("#model-field-name-3").val();
        var model_field_type_3 = $("#model-field-type-3").val();
        var model_field_name_4 = $("#model-field-name-4").val();
        var model_field_type_4 = $("#model-field-type-4").val();

        var controller_method_manual = $("#controller-method-manual").val();
        var controller_method_checkbox_array = [];
        $(':checkbox:checked').each(function (i) {
            controller_method_checkbox_array[i] = $(this).val();
        });

        $("#script-controller").html("rails g controller " + resource_name_plural + " index new create show edit update delete " + controller_method_manual);

        $("#script-model").html("rails g model " + resource_name_singal + " " + model_field_name_1 + model_field_type_1 + " " + model_field_name_2+ model_field_type_2 + " " + model_field_name_3 + model_field_type_3 + " " + model_field_name_4 + model_field_type_4);
        $("#resources").html("resources: :"+resource_name_plural);


        //change route table
        //index method
        var index_url = "/" + resource_name_plural;
        var index_url_http = "http://localhost:3000" + index_url;

        $("#index-url").html("<a target='_blank' href='" + index_url_http + "'>" + index_url + "</a>");
        $("#index-method").html(resource_name_plural + "#index");
        $("#index-path").html(resource_name_plural + "_path");


        //new method
        var new_url = "/" + resource_name_plural + "/new";
        var new_url_http = "http://localhost:3000" + new_url;
        $("#new-url").html("<a target='_blank' href='" + new_url_http + "'>" + new_url + "</a>");
        $("#new-method").html(resource_name_plural + "#new");
        $("#new-path").html("new_" + resource_name_singal + "_path");

        //create method

        $("#create-url").html("/" + resource_name_plural);
        $("#create-method").html(resource_name_plural + "#create");
        $("#create-path").html(resource_name_plural + "_path");

        //show method
        var show_url = "/" + resource_name_plural + "/1";
        var show_url_http = "http://localhost:3000" + show_url;
        $("#show-url").html("<a target='_blank' href='" + show_url_http + "'>" + show_url + "</a>");
        $("#show-method").html(resource_name_plural + "#show");
        $("#show-path").html(resource_name_singal + "_path(:id)");

        //edit method
        var edit_url = "/" + resource_name_plural + "/1/edit";
        var edit_url_http = "http://localhost:3000" + edit_url;

        $("#edit-url").html("<a target='_blank' href='" + edit_url_http + "'>" + edit_url + "</a>");
        $("#edit-method").html(resource_name_plural + "#edit");
        $("#edit-path").html("edit_" + resource_name_singal + "_path(:id)");

        //update method
        $("#update-url").html("/" + resource_name_plural + "/1");
        $("#update-method").html(resource_name_plural + "#update");
        $("#update-path").html(resource_name_singal + "_path(:id)");

        //delete method
        $("#delete-url").html("/" + resource_name_plural + "/1");
        $("#delete-method").html(resource_name_plural + "#destroy");
        $("#delete-path").html(resource_name_singal + "_path(:id)");


    });


    // var $insert=$('<br><input type="text" name="model-field-name" id="model-field-name"> <select id="model-field-type"> <option value="string" >:string</option> <option value="integer">:integer</option> <option value="mercedes"></option> <option value="audi">Audi</option> </select>');
    //
    // $("#add-field").click(function () {
    //
    //     $("#model").append($insert);
    //
    //
    // });


});