var dataTable;
var tree;
$(function () {
    dataTable = $('#MyTable').DataTable({
        /**
         l - Length changing 
         f - Filtering input 
         t - The Table
         i - Information 
         p - Pagination 
         r - pRocessing 
         **/
        "dom": "tr",
        "ordering": false,
        "data": other,
        //"processing": true,
        //"serverSide": true,
        // "ajax": {
        //     "url": "json/data.json",
        //     // "async": false
        // },
        "columns": [
            { className: 'forChild', "data": function (data, type, row) { return GetChkBox(data); } },
            {
                className: 'treegrid-control forChild',
                data: function (item) {
                    if (item.children != null && item.children.length > 0) {
                        return '<img src="/img/plus.png">';
                    }
                    return '';

                }
            },
            { "data": "ab" },
            { "data": "id", className: "myId" },
            { "data": "name", render: function (data, type, row) { return GetName(data); } },
            { "data": "mang", render: function (data, type, row) { return GetMang(data); } },
            { "data": "tech", render: function (data, type, row) { return GetTech(data); } },
            { "data": "descrp" },
            { "data": "natur", render: function (data, type, row) { return GetNatur(data); } },
            { "data": "proc_type", render: function (data, type, row) { return GetProc_Type(data); } },
            { "data": "percent", render: function (data, type, row) { return GetPercent(data); } },
            {
                "data": function () {
                    return `<input type="hidden" class="site" />
                        <input type = "hidden" class= "myuser" />
                        <input type="hidden" class="proj_d" />
                        <button class="btn btn-primary cmdProj_d" onclick="cmdProj_d(this)">البنود </button>
                        <button class="btn btn-success cmdSite" onclick="cmdSite(this)">المواقع</button>
                        <button class="btn btn-dark cmdMyUser" onclick="cmdMyUser(this)">الأشخاص</button>
                        <button class="btn btn-warning cmdTable" onclick="cmdTable(this)">الإجراءات</button>`;
                }
            }

        ],
        "columnDefs": [
            {
                "defaultContent": "",
                "targets": "_all"
            }
        ]
    });

    // <input class="groupB" type="checkbox" data-row_id="1" onclick="setCheckAll_out()"></input>
    // collapseAll();
    tree = new $.fn.dataTable.TreeGrid(dataTable, {
        left: 15,
        expandAll: true,
        expandIcon: '<img src="/img/plus.png">',
        collapseIcon: '<img src="/img/minus.png">'
    });
    //tree.expandAll();
});




//-------------------------------------------------------------------------------------------------
var lastrow;

function GetChkBox(data) {
    //console.log("data=", data);
    // console.log("row=", row);
    lastrow = data;
    return `<input class="groupB" type="checkbox" data-row_id="${data.id}" onclick="setCheckAll_out()">`;
}
function GetPercent(data) {
    return `<strong>${data}%</strong>` + IsOk(data);
}
function IsOk(data) {
    var imgx = '';
    if (data == 100) {
        imgx = ' <img src="/img/ok.png">';
    }
    return imgx;
}
