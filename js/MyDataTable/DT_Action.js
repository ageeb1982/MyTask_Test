//#region DataTable Methods



/*
        l - Length changing 
        f - Filtering input 
        t - The Table
        i - Information 
        p - Pagination 
        r - pRocessing 
*/
var dataTable;
var dt_body;
var rightClickSelect_Item;
var selectId;
var CutId = "";
var CopyId = "";
var contextMenu;
$(function () {



    Reload_dataTable();





    // <input class="groupB" type="checkbox" data-row_id="1" onclick="setCheckAll_out()"></input>
    // collapseAll();

    //tree.expandAll();





    //#region ContextMenu Section


    // هل تم نسخ السطر او قصه
    function IsCutAndCopyEmpty() {
        var Result = (!CopyId && !CutId);
        return Result;
    }

    // title: 'لصق إجراء/مهمة قبل الإجراء الحالي',
    function Paste_row_Main_befor(e) {
        removeClassFromAll("cutColor");
        CopyId = "";
        CutId = "";
        console.log("Paste_row_Main_befor", e);
    }

    // title: 'لصق إجراء/مهمة قبل الإجراء الحالي',
    function Paste_row_Main_after(e) {
        removeClassFromAll("cutColor");
        CopyId = "";
        CutId = "";
        console.log("Paste_row_Main_befor", e);
    }



    // title: 'لصق إجراء/مهمة جديدة - فرعية أول القائمة',

    function Paste_row_Child_before(e) {
        removeClassFromAll("cutColor");
        CopyId = "";
        CutId = "";
        console.log("Paste_row_Child_before", e);
    }

    // title: 'لصق إجراء/مهمة جديدة - فرعية آخر القائمة', icon: '◀▽',
    function Paste_row_Child_after(e) {
        removeClassFromAll("cutColor");
        CopyId = "";
        CutId = "";
        console.log("Paste_row_Child_after", e);
    }

    //    title: 'حذف المهمة الحالية بجميع تفرعاتها',
    function Delete_row(e) {
        console.log("Delete_row", e);
    }













    dt_body = document.querySelector(".rClick");
    //    dt_body.classList.remove("colX1");

    var Duplicate_F = "duplicate_full";
    var Duplicate_O = "duplicate_one";
    var Insert_row_Main_b = "insert_row_main_before";
    var Insert_row_Main_a = "insert_row_main_after";
    var Insert_row_Child_b = "insert_row_child_before";
    var Insert_row_Child_a = "insert_row_child_after";
    var Paste_row_Main_b = "paste_row_main_befor";
    var Paste_row_Main_a = "paste_row_main_after";
    var Paste_row_Child_b = "paste_row_child_before";
    var Paste_row_Child_a = "paste_row_child_after";
    var CutR = "cut_row";
    var Delete_r = "delete_row";
    var Copy_F = "copy_full";
    var Copy_O = "copy_one";
    var Past_Area = "paste_area";
    contextMenu = jSuites.contextmenu(dt_body, {
        items: [
            {
                item_id: Duplicate_F,
                title: 'تكرار -Dublicate - بكامل تفرعاته',
                icon: '⇊',
                onclick: function () { Duplicate_Full(rightClickSelect_Item); }

            },

            {
                item_id: Duplicate_O,
                title: 'تكرار -Dublicate -  (السطر الحالي)',
                icon: '⇊',
                onclick: function () { Duplicate_One(rightClickSelect_Item); }

            },
            { type: 'line' },
            {
                title: 'إجراء/مهمة جديدة - رئيسية',
                icon: 'content_paste',

                submenu: [
                    {
                        item_id: Insert_row_Main_b,
                        title: 'إجراء/مهمة رئيسي قبل الإجراء الحالي',
                        icon: '△',
                        onclick: function () {
                            Insert_row_Main_before(rightClickSelect_Item);
                        }
                    },
                    {
                        item_id: Insert_row_Main_a,
                        title: 'إجراء رئيسي بعد الإجراء الحالي',
                        icon: '▽',
                        onclick: function () {

                            Insert_row_Main_after(rightClickSelect_Item);
                        }
                    },
                ]
            },
            {
                title: 'إجراء/مهمة جديدة - فرعية',
                icon: 'content_paste',

                submenu: [
                    {
                        item_id: Insert_row_Child_b,
                        title: 'إجراء/مهمة فرعي أول القائمة',
                        icon: '◀△',
                        onclick: function () {
                            Insert_row_Child_before(rightClickSelect_Item);

                        }
                    },
                    {
                        item_id: Insert_row_Child_a,
                        title: 'إجراء/مهمة فرعي آخر القائمة',
                        icon: '◀▽',
                        onclick: function () { Insert_row_Child_after(rightClickSelect_Item); }
                    },
                ]
            },
            {
                type: 'line'
            },

            {
                item_id: CutR,
                title: 'قص الإجراء/المهمة (السطر)',
                icon: 'content_cut',
                onclick: function () { CutRow(rightClickSelect_Item); }
            },
            { type: 'line' },
            {
                item_id: Copy_F,
                title: 'نسخ السطر بكامل تفرعاته',
                icon: 'content_copy',
                onclick: function () { Copy_Full(rightClickSelect_Item); }

            },

            {
                item_id: Copy_O,
                title: 'نسخ إجراء/مهمة ا الحالي فقط (السطر)',
                icon: 'content_copy',
                onclick: function () { Copy_One(rightClickSelect_Item); }

            },
            { type: 'line' },


            {
                item_id: Past_Area,
                title: 'لصق إجراء/مهمة',
                icon: 'content_paste',
                disabled: IsCutAndCopyEmpty(),

                submenu: [
                    {
                        title: 'لصق الإجراء/المهمة كرئيسي',
                        icon: 'content_paste',
                        submenu: [
                            {
                                item_id: Paste_row_Main_b,
                                title: 'لصق إجراء/مهمة قبل الإجراء الحالي',
                                icon: '△',
                                onclick: function () { Paste_row_Main_befor(rightClickSelect_Item); },

                            },
                            {
                                item_id: Paste_row_Main_a,
                                title: 'لصق إجراء/مهمة بعد الإجراء الحالي',
                                icon: '▽',
                                onclick: function () {

                                    Paste_row_Main_after(rightClickSelect_Item);
                                }
                            },
                        ]
                    },
                    {
                        title: 'لصق إجراء/مهمة جديدة - فرعية',
                        icon: 'content_paste',

                        submenu: [
                            {
                                item_id: Paste_row_Child_b,
                                title: 'لصق إجراء/مهمة جديدة - فرعية أول القائمة',
                                icon: '◀△',
                                onclick: function () {
                                    Paste_row_Child_before(rightClickSelect_Item);

                                }
                            },
                            {
                                item_id: Paste_row_Child_a,
                                title: 'لصق إجراء/مهمة جديدة - فرعية آخر القائمة', icon: '◀▽',
                                onclick: function () {
                                    Paste_row_Child_after(rightClickSelect_Item);
                                }
                            },
                        ]
                    },


                ]
            },
            {
                type: 'line'
            },

            {
                item_id: Delete_r,
                title: 'حذف المهمة الحالية بجميع تفرعاتها',
                icon: 'delete',
                onclick: function () { Delete_row(rightClickSelect_Item); }
            }
        ],
        onclick: function () {
            contextMenu.close(false);
        }
    });
    var DT_Body = $(document.querySelector(".DT_Body"));
    //console.log("datatable:", dataTable); 
    DT_Body.on("contextmenu", function (e) {
        try {
            rightClickSelect_Item = e.target;
            selectId = rightClickSelect_Item.parentElement.querySelector(".myId").innerText;
        } catch { }
        console.log(contextMenu);
        // console.log(contextMenu.open(e));
        // contextMenu.options.items[11].disabled = IsCutOrCopy();
        var item = contextMenu.options.items.find(w => w.item_id == Past_Area);
        if (item) {
            item.disabled = IsCutAndCopyEmpty();
            var elems = document.querySelectorAll(`[data-item_id="${Past_Area}"]`);

            if (elems) {
                //for (const [key, myElm] of Object.entries(elems)) {
                elems.forEach(myElm => {
                    if (item.disabled == false) {
                        myElm.classList.remove('jcontextmenu-disabled');
                    }
                    else {
                        myElm.classList.add('jcontextmenu-disabled');
                    }

                });
            }
        }

        contextMenu.open(e);
        e.preventDefault();
    });


    var MyThead = $(document.querySelector(".MyThead"));
    MyThead.on("contextmenu", function (e) {
        //contextMenu.open(e);
        e.preventDefault();
    });

    // title: 'إجراء/مهمة رئيسي قبل الإجراء الحالي',
    function Insert_row_Main_before(w) {
        var arr = [];
        arr[0] = "mohamed";
        arr[1] = "khidir";
        arr[2] = "ageeb";
        arr[3] = "hamed";
        arr[4] = "adlan";

        console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
        arr.splice(2, 0, "mosmar");
        console.log("Insert_row_Main_before id ===", selectId);
    }



    // title: 'إجراء رئيسي بعد الإجراء الحالي',
    function Insert_row_Main_after(w) {
        console.log("Insert_row_Main_after id ===", selectId);

    }


    // title: 'إجراء/مهمة فرعي أول القائمة',
    function Insert_row_Child_before(w) {
        console.log("Insert_row_Child_before id ===", selectId);

    }

    //    title: 'إجراء/مهمة فرعي آخر القائمة',
    function Insert_row_Child_after(w) {
        console.log("Insert_row_Child_after id ===", selectId);

    }

    // title قص الإجراء/المهمة (السطر)
    function CutRow(w) {
        removeClassFromAll("cutColor");
        rightClickSelect_Item.parentElement.classList.add("cutColor");
        CutId = selectId;

        console.log("Cut id ===", selectId);

    }

    //    title: 'نسخ السطر بكامل تفرعاته',
    function Copy_Full(w) {
        removeClassFromAll("cutColor");
        //rightClickSelect_Item.parentElement.classList.add("cutColor");
        CopyId = selectId;
        CutId = "";
        console.log("full Copy id ===", selectId);

    }

    // title: 'نسخ إجراء/مهمة ا الحالي فقط (السطر)',
    function Copy_One(w) {
        removeClassFromAll("cutColor");
        //rightClickSelect_Item.parentElement.classList.add("cutColor");
        CopyId = selectId;
        CutId = "";
        console.log("full Copy id ===", selectId);

    }


    //title: 'تكرار -Dublicate - بكامل تفرعاته',
    function Duplicate_Full(w) {
        removeClassFromAll("cutColor");
        //rightClickSelect_Item.parentElement.classList.add("cutColor");
        CopyId = selectId;
        CutId = "";
        console.log("full Copy id ===", selectId);

    }


    //    title: 'تكرار -Dublicate -  (السطر الحالي)',
    function Duplicate_One(w) {
        removeClassFromAll("cutColor");
        CopyId = selectId;
        CutId = "";
        console.log("full Copy id ===", selectId);

    }




    //#endregion





});


function removeClassFromAll(className) {
    try {

        var elems = document.querySelectorAll("." + className);

        [].forEach.call(elems, function (el) {
            el.classList.remove(className);
        });
    } catch { }
}

//-------------------------------------------------------------------------------------------------
var lastrow;

function GetChkBox(data, className) {
    if (!className) className = "groupB";
    //console.log("data=", data);
    // console.log("row=", row);
    lastrow = data;
    return `<input class="${className}" type="checkbox" data-row_id="${data.id}" onclick="setCheckAll_out(this)">`;
}

function GetPercent_text(data) {
    if (isNaN(data)) { data = 0; }
    return `<strong>${data}%</strong>` + IsOk(data);
}
function GetPercent_All_Text(data) {
    if (isNaN(data)) { data = 0; }
    return `<strong>${data}%</strong>` + IsOk(data);
}
function IsOk(data) {
    var imgx = "";
    if (data == 100) {
        imgx = ' <img src="./img/ok.png">';
    }
    return imgx;
}

function Copy_Object(obj) {
    // var newObj = {};
    // for (var key in obj) {
    //     newObj[key] = obj[key];
    // }
    // return newObj;
    return structuredClone(obj);
}

//#endregion

