<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/plugin/codemirror-5.59.0/lib/codemirror.css"/>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="/plugin/codemirror-5.59.0/theme/colorforth.css"/>
    <link href="/plugin/bootstrap-select-1.13.9/dist/css/bootstrap-select.min.css" rel="stylesheet"/>
    <style>
        .CodeMirror {
            border: 1px solid #2f1e2e;
            background: url(/js/edit.png) !important;
            font-size: 20px;
            height: 600px;
        }

        .container {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        @media (min-width: 768px) {
            .container {
                width: 750px;
            }
        }

        @media (min-width: 992px) {
            .container {
                width: 970px;
            }
        }

        @media (min-width: 1200px) {
            .container {
                width: 1170px;
            }
        }

        .container-fluid {
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        body {
            background: url(/js/bg.jpg);
            padding: 10px;
        }

        h1 {
            color: #90a4ae;
        }
    </style>
</head>

<body>
<div class="container" style="width: 100%;">
    <h1>Edit Panle</h1>
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu"
                    aria-expanded="false">
                <span class="sr-only">Edit Panle</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>
        <div id="navbar-menu" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
            </ul>
        </div>
    </nav>
    <div id="content" class="row-fluid">
        <div class="col-md-5">
            <div style="width: 100%;">
                <input type="text" class="form-control" id="name1" placeholder="请输入文件夹名称"
                       style="width: 80%;float: left;">
                <button id="edit-newdic-submit" onclick="newFile(this,true)" type="button" class="btn btn-primary"
                        style="width: 10%;float: right;">提交
                </button>
            </div>
            <div style="width: 100%;">
                <select id="dicSelect" class="selectpicker" data-live-search="true">
                    <option value=''>请选择</option>
                </select>
                <input type="text" class="form-control" id="name2" placeholder="请输入文件名称"
                       style="width: 40%;float: left;">
                <button id="edit-newfile-submit" onclick="newFile(this,false)" type="button" class="btn btn-primary"
                        style="width: 10%;float: right;">提交
                </button>
            </div>
            <div style="width: 100%;">
                <select id="pathSelect" class="selectpicker" data-live-search="true">
                    <option value=''>请选择</option>
                </select>
                <button id="edit-submit" type="button" class="btn btn-primary" style="width: 10%;float: right;">提交
                </button>
            </div>
            <div style="width: 100%;">
                <textarea class="form-control" id="code" name="code"></textarea>
            </div>
            <div class="col-md-7">

            </div>
        </div>

    </div>
</body>

<script src="/plugin/codemirror-5.59.0/lib/codemirror.js"></script>
<#--<script src="https://unpkg.com/vue/dist/vue.js"></script>-->
<!--使用Bootstrap的js插件，必须先调入jQuery-->
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.min.js"></script>

<!-- 包括所有bootstrap的js插件或者可以根据需要使用的js插件调用　-->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="/plugin/bootstrap-select-1.13.9/dist/js/bootstrap-select.min.js"></script>
<script>
    $(".selectpicker").selectpicker({width: '80%'});
    $("#dicSelect").selectpicker({width: '40%'});
    fileDicSelect();
    fileSelect();
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        theme: "colorforth",                  //选中的theme
    });
    $("#edit-submit").click(function () {
        if ($("#pathSelect").val() === '') {
            alert("路径为空")
            return false;
        }
        var value = editor.getValue();
        $.ajax({
            type: "post",
            url: "/edit/data",
            data: {value: value, path: $("#pathSelect").val()},
            dataType: "text",
            success: function (data) {
                alert("ok")
                editor.setValue(data);
            }
        });
    });
    $("#pathSelect").change(function () {
        if ($(this).val() !== '') {
            $.ajax({
                type: "post",
                url: "/edit/fileRead",
                data: {path: $(this).val()},
                dataType: "text",
                success: function (data) {
                    editor.setValue(data);
                }
            });
        }
    });

    function newFile(ele, isDic) {
        if (isDic) {
            let val = $("#name1").val();
            if (!val) {
                alert("请输入文件名")
                return;
            }
            $.ajax({
                type: "post",
                url: "/edit/newFile",
                data: {isDic: isDic, name: val},
                dataType: "json",
                success: function (data) {
                    alert("ok")
                    $("#pathSelect").html("<option value=''>请选择</option>")
                    $("#dicSelect").html("<option value=''>请选择</option>")
                    if (data.fileList) {
                        $.each(data.fileList, function (i, o) {
                            $("#pathSelect").append("<option value='" + o.path + "'>" + o.path + "</option>");
                        });
                    }
                    $("#pathSelect").selectpicker('refresh');

                    if (data.pathList) {
                        $.each(data.pathList, function (i, o) {
                            $("#dicSelect").append("<option value='" + o.path + "'>" + o.path + "</option>");
                        });
                    }
                    $("#dicSelect").selectpicker('refresh');
                }
            });
        } else {
            let val = $("#name2").val();
            if (!val) {
                alert("请输入文件名")
                return;
            }
            if (!$("#dicSelect").val()) {
                alert("请选择文件路径")
                return;
            }
            $.ajax({
                type: "post",
                url: "/edit/newFile",
                data: {isDic: isDic, name: val, path: $("#dicSelect").val()},
                dataType: "json",
                success: function (data) {
                    alert("ok")
                    $("#pathSelect").html("<option value=''>请选择</option>")
                    $("#dicSelect").html("<option value=''>请选择</option>")
                    if (data.fileList) {
                        $.each(data.fileList, function (i, o) {
                            $("#pathSelect").append("<option value='" + o.path + "'>" + o.path + "</option>");
                        });
                    }
                    $("#pathSelect").selectpicker('refresh');

                    if (data.pathList) {
                        $.each(data.pathList, function (i, o) {
                            $("#dicSelect").append("<option value='" + o.path + "'>" + o.path + "</option>");
                        });
                    }
                    $("#dicSelect").selectpicker('refresh');
                }
            });
        }

    }

    function fileSelect() {
        $.ajax({
            type: "post",
            url: "/edit/fileSelect",
            data: {},
            dataType: "json",
            success: function (data) {
                if (data) {
                    $.each(data, function (i, o) {
                        $("#pathSelect").append("<option value='" + o.path + "'>" + o.path + "</option>");
                    });
                }
                $("#pathSelect").selectpicker('refresh');
            }
        });
    }

    function fileDicSelect() {
        $.ajax({
            type: "post",
            url: "/edit/fileDicSelect",
            data: {},
            dataType: "json",
            success: function (data) {
                if (data) {
                    $.each(data, function (i, o) {
                        $("#dicSelect").append("<option value='" + o.path + "'>" + o.path + "</option>");
                    });
                }
                $("#dicSelect").selectpicker('refresh');
            }
        });
    }
</script>

</html>
