$(document).ready(function () {
    $("#tab").tabs({
        fit: true,
        border: true,
    });
    $(".easyui-linkbutton").click(function () {
        var title = $(this).text();
        var href = $(this).attr("href");
        if ($('#tab').tabs('exists', title)) {
            $('#tab').tabs('select', title);
        } else {
            $('#tab').tabs('add', {
                fit: true,
                title: title,
                closable: true,
                href: href,
            });
            return false;
        }
    });

    $("#logout-btn").click(function () {
        $.messager.confirm('确认对话框', "您确认退出系统吗?", function (r) {
            if (r) {
                $.ajax({
                    data: {
                        // id: id,
                    },
                    // traditional: true,
                    method: 'get',
                    url: '/system/logout',
                    async: false,
                    dataType: 'json',
                    success: function (result) {
                        location = "/"
                    },
                });
            }
        });
    });
});