//#region  Models

//#region  Itemx Class
class Itemx {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.is_select = false;
    }
}

//#endregion

//#region Task_List Class
class Task_List {
    constructor(id) {
        this.id = id;
        this.proj_d = [];
        this.sites = [];
        this.myuser = [];
    }
}

class One_Task {
    constructor(id, site, myuser, proj_d) {
        this.id = id;
        this.site = site;
        this.myuser = myuser;
        this.proj_d = proj_d;
        this.percent = 0;
        this.descrp = "";
        this.emp_note = "";
    }
}


//#endregion

//#region  Task Class
class Task {
    constructor(ab, id, id_name, mang, tech, natur, proc_type, percent, sn, descrp, children) {

        // "التسلسلي",
        this.id = id;

        //الاب
        this.ab = ab;
        // الإجراء
        this.id_name = id_name;

        // تسلسلي العمل
        this.name = id;

        // "الإدارة",
        this.mang = mang;

        // "مدير الإجراء",
        this.mang_name = 0;

        // "الموظفيين الإداريين",
        this.emps_mang = [];


        // "المهام الفنية",
        this.tech = tech;

        // "الوصف",
        this.descrp = descrp;

        //طبيعة العمل",
        this.natur = natur;

        //نوع الإجراء",
        this.proc_type = proc_type;

        //النسبة";
        this.percent = percent;
        this.percent_one = () => { return GetPercent_One(this); };
        //نسبة الكل";
        this.percent_all = () => { return GetPercent_All(this); };

        this.sn = sn;

        // الأبناء
        this.children = children;

        // "البنود",
        this.proj_ds = () => { return GetTask_Proj_ds_Ids(this); };

        // "المواقع",
        this.sites = () => { return GetTask_Sites_Ids(this); };

        // "مدير الموقع",
        this.site_mang = 0;

        // "المسؤولون بالتنفيذ",
        this.site_emps = [];

        // "المدة",
        this.duration = 0;

        this.strart_date = "";
        this.end_date = "";
        //البداية والنهاية
        this.start_end_date = () => { return GetTask_Start_End_Date(this); };


    }
}
//#endregion

//#endregion

//#region  Data Section

//#region Var_Data

var techs = [
    new Itemx(1, "توريد"),
    new Itemx(2, "تحليل نصوص"),
    new Itemx(3, "رسم مخطط"),
    new Itemx(4, "قراءة مخططات"),
    new Itemx(5, "فنيات تنفيذ"),
    new Itemx(6, "استلام"),
    new Itemx(7, "تسليم"),
    new Itemx(8, "متابعة"),
    new Itemx(9, "تقييم"),
    new Itemx(10, "توقيع"),
    new Itemx(11, "تنفيذ"),
    new Itemx(12, "تخطيط"),
    new Itemx(13, "تحليل أعمال"),
    new Itemx(14, "عملية الشراء"),
];
var admins = [
    new Itemx(1, "تقديم خطاب بوضع الشركة وقبولها للمنافسة"),
    new Itemx(2, "تجهيز شروط الدخول للمنافسة"),
    new Itemx(3, "معرفة ثمن الوثيقة"),
    new Itemx(4, "مناقشة الجهة في طبيعة العمل"),
    new Itemx(5, "مراجعة اسم المشروع وتخصصه"),
    new Itemx(6, "تحديد المشروع"),
    new Itemx(7, "شراء منافسة"),
    new Itemx(8, "إعتماد مهندس"),
    new Itemx(9, "شهادة الجامعة"),
    new Itemx(10, "الخبرات"),
    new Itemx(11, "الإقامة"),
    new Itemx(12, "خطاب"),
    new Itemx(13, "عقد العمل"),
    new Itemx(14, "تحديد الوزارة"),
    new Itemx(15, "تسعير منافسة"),
    new Itemx(16, "استقدام عمال"),
    new Itemx(17, "إدارة المشروع"),
    new Itemx(18, "إعتماد جهاز"),
    new Itemx(19, "حصر"),
    new Itemx(20, "مقابلة العملاء"),
    new Itemx(21, "تشجيع عمال"),
    new Itemx(22, "تطوير الذات"),
    new Itemx(23, "تطوير الفنيي"),
];

var other = [
    new Task("0", "1", 1, 3, 11, 5, 1, 100, 1, "تقديم خطاب بوضع الشركة وقبولها للمنافسة", []),
    new Task("0", "2", 15, 3, 5, 1, 1, 50, 2, "", []),
    new Task("0", "3", 17, 3, 4, 2, 3, 0, 3, "", [
        new Task("3", "55.1", 2, 6, 12, 5, 2, 50, 4, "تجهيز شروط الدخول للمنافسة", [
            new Task("55.1", "55.1.1", 16, 3, 5, 1, 2, 0, 5, "", [
                new Task("55.1.1", "55.1.1.1", 18, 3, 3, 1, 2, 100, 6, "", []),
                new Task("55.1.1", "55.1.1.2", 19, 3, 2, 2, 1, 0, 7, "", []),
                new Task("55.1.1", "55.1.1.3", 20, 3, 2, 1, 2, 100, 8, "", []),
                new Task("55.1.1", "55.1.1.4", 21, 3, 1, 2, 3, 0, 9, "", []),

            ]),
            new Task("3.1", "3.1.2", 7, 3, 5, 1, 3, 100, 10, "", []),

        ]),
    ]),


    new Task("0", "4", 4, 6, 10, 5, 2, 30, 11, "مناقشة الجهة في طبيعة العمل", [
        new Task("0", "4.1", 3, 5, 9, 5, 3, 100, 12, "التأكد من ثمن الوثيقة", []),
    ]),
    new Task("0", "5", 5, 7, 1, 5, 1, 0, 13, "مراجعة اسم المشروع وتخصصه", []),
    new Task("0", "6", 6, 8, 2, 5, 3, 50, 14, " ", [])
];
var buy =
    new Task("0", "7", 7, 2, 6, 6, 1, 10, 15, "إجراءات شراء المنافسة",
        //أبناء شراء المنافسة 
        [
            new Task("7", "7.1", 14, 3, 5, 1, 1, 50, 16, "",
                [
                    new Task("7", "7.1.2", 15, 3, 5, 1, 1, 50, 17, "", []),
                    new Task("7", "7.1.3", 16, 3, 5, 1, 2, 0, 18, "", [
                        new Task("7.1.3", "7.1.3.1", 17, 3, 4, 2, 3, 0, 19, "", []),
                        new Task("7.1.3", "7.1.3.2", 18, 3, 3, 1, 2, 100, 20, "", []),
                        new Task("7.1.3", "7.1.3.3", 19, 3, 2, 2, 1, 0, 21, "", []),
                        new Task("7.1.3", "7.1.3.4", 20, 3, 2, 1, 2, 100, 22, "", []),
                        new Task("7.1.3", "7.1.3.5", 21, 3, 1, 2, 3, 0, 23, "", []),

                    ]),
                    new Task("7", "7.1.4", 7, 3, 5, 1, 3, 100, 24, "", []),

                ]),
            new Task("7", "7.2", 1, 3, 5, 1, 2, 0, 25, "", []),
            new Task("7", "7.3", 2, 3, 5, 1, 3, 100, 26, "", []),
            new Task("7", "7.4", 3, 3, 5, 1, 2, 0, 27, "", []),
            new Task("7", "7.5", 4, 3, 5, 1, 1, 100, 28, "", []),
            new Task("7", "7.6", 5, 3, 5, 1, 2, 0, 29, "", []),
            new Task("7", "7.7", 6, 3, 5, 1, 3, 0, 30, "", []),
            new Task("7", "7.8", 7, 3, 5, 1, 2, 0, 31, "", []),
            new Task("7", "7.9", 8, 3, 5, 1, 1, 0, 32, "", []),
            new Task("7", "7.10", 9, 3, 5, 1, 2, 0, 33, "", [])
        ])
    ;

var Eng = new Task("0", "8", 8, 2, 6, 6, 1, 50, 34, "تجهيز اوراق اعتماد المهندس",
    //أبناء اعتماد المهندس
    [
        new Task("8", "8.1", 9, 2, 6, 6, 1, 25, 35, "تجهيز الشهادة الجامعة", []),
        new Task("8", "8.2", 10, 2, 6, 6, 2, 0, 36, "تجهيز شهادات الخبرة", []),
        new Task("8", "8.3", 11, 2, 6, 6, 1, 25, 37, "", []),
        new Task("8", "8.4", 12, 2, 6, 6, 2, 0, 38, "", []),
        new Task("8", "8.5", 13, 2, 6, 6, 3, 0, 39, "", [])
    ]
);






other.push(buy);
other.push(Eng);

var mangs = [
    new Itemx(1, "الإدارة العامة "),
    new Itemx(2, "الإدارة الهندسية "),
    new Itemx(3, "المشتريات "),
    new Itemx(4, "التنفيذ "),
    new Itemx(5, "التطوير "),
    new Itemx(6, "إدارة التخطيط")

];

var naturs = [
    new Itemx(1, "إداري"),
    new Itemx(2, "فني"),
    new Itemx(3, "الجودة"),
    new Itemx(4, "التسليم والإستلام"),
    new Itemx(5, "الإشراف"),
    new Itemx(6, "التصميم والتحليل"),
    new Itemx(7, "دراسة المنافسات")
];
var proc_types = [
    new Itemx(1, "شرط"),
    new Itemx(2, "مرحلة"),
    new Itemx(3, "مهمة")
];

var sites = [
    new Itemx(1, "مدرسة 1"),
    new Itemx(2, "مدرسة 2"),
    new Itemx(3, "مستودعات التعليم"),
    new Itemx(4, "إدارة التعليم")];

var proj_d = [
    new Itemx(1, "توريد وتركيب طفايات حريق"),
    new Itemx(2, "تمديد مواسير المياه"),
    new Itemx(3, "تكريب اجهزة انذار"),
];

var myuser = [
    new Itemx(1, "عبدالله احمد"),
    new Itemx(2, "عمر حمدان"),
    new Itemx(3, "عبدالرحمن المهندس"),
    new Itemx(4, "كمال صالح"),
];


var tablex = [
    new Itemx(1, "الحصورات"),
    new Itemx(2, "المستخلصات"),
    new Itemx(3, "المخاطبات_والإجتماعات"),
    new Itemx(4, "أوامر_التغيير"),
    new Itemx(5, "خطابات_التوجيه"),
    new Itemx(6, "الحصر"),
    new Itemx(7, "الغرامات"),
    new Itemx(8, "الضمانات"),
];



//#endregion



//#region DataMethods






function GetPercent_All(task) {
    if (!task) return 0;
    var sum = 0;
    try {
        var myTask = new Task(task);
        var count = myTask.children.length;
        var Real_Count = 0;
        if (count == 0) return myTask.percent;
        var current_Sum = 0;
        for (var i = 0; i < count; i++) {
            if (myTask.children[i]) {
                Real_Count++;
                var curr_Child = new Task(myTask.children[i]);
                var result = GetPercent_One(curr_Child);

                var Curr_Count = 1;

                if (curr_Child.children.length != 0) {
                    Curr_Count++;
                    result += GetPercent_All(curr_Child);
                }
                else {
                }

                current_Sum += Math.round(result / Curr_Count, 0);

            }
        }
        if (Real_Count == 0) return 100;
        var avarge = current_Sum / Real_Count;
        sum = Math.round(avarge, 0);


    }
    catch { }



    return sum;
}

function GetPercent_One(task) {
    if (!task) return 0;
    var sum = 0;
    try {
        var curr_Child = new Task(task);
        if (!curr_Child.emps_mang) curr_Child.emps_mang = [];
        if (!curr_Child.site_emps) curr_Child.site_emps = [];

        if (curr_Child.emps_mang.length == 0
            && curr_Child.site_emps.length == 0) {
            return curr_Child.percent;
        }

        var Emp_mange = GetPercent_Emps_mang(curr_Child);
        var Site_emps = GetPercent_site_emps(curr_Child);
        sum = Math.round((Emp_mange + Site_emps) / 2, 0);
    }
    catch { }
    return sum;
}
function GetPercent_Emps_mang(task) {
    if (!task) return 0;
    var sum = 0;
    try {
        var myTask = new Task(task);
        var count = myTask.emps_mang.length;
        var Real_Count = 0;
        if (count == 0) return 100;
        var current_Sum = 0;
        for (var i = 0; i < count; i++) {
            if (myTask.emps_mang[i]) {
                var curr_Child = new One_Task(myTask.emps_mang[i]);
                Real_Count++;
                current_Sum += curr_Child.percent;
            }
        }
        if (Real_Count == 0) return 100;
        var avarge = current_Sum / Real_Count;
        sum = Math.round(avarge, 0);


    }
    catch { }



    return sum;
}
function GetPercent_site_emps(task) {
    if (!task) return 0;
    var sum = 0;
    try {
        var myTask = new Task(task);
        var count = myTask.site_emps.length;
        var Real_Count = 0;
        if (count == 0) return 100;
        var current_Sum = 0;
        for (var i = 0; i < count; i++) {
            if (myTask.site_emps[i]) {
                var curr_Child = new One_Task(myTask.site_emps[i]);
                Real_Count++;
                current_Sum += curr_Child.percent;
            }
        }
        if (Real_Count == 0) return 100;
        var avarge = current_Sum / Real_Count;
        sum = Math.round(avarge, 0);
    }
    catch { }



    return sum;
}

function GetName(id) {
    var result = "---";
    try {
        var name = admins.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}

function GetMang(id) {
    var result = "---";
    try {
        var name = mangs.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}
function GetUser_Name(id) {
    var result = "---";
    try {
        var name = myuser.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}
function GetUsers_Name(usrs_ids) {
    var result = "---";
    try {
        for (const [key, id] of Object.entries(usrs_ids)) {
            if (result == "---") { result = ""; }
            var u = GetUser_Name(id);
            if (u) {
                if (u != "---") {
                    if (result != "") { result += " , "; }
                    result += u.name.substr(0, 8);
                }
            }
        }
    } catch { }
    return result;
}
function GetDuration(duration) {
    if (!duration) { duration = 0; }
    return duration + " يوم";
}

function Get_start_end_date(row) {

    return "___";
}
function GetProj_d_Name(id) {
    var result = "---";
    try {
        var name = proj_d.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}

function GetProj_ds_Name(proj_d_ids) {
    var result = "---";
    try {
        for (const [key, id] of Object.entries(proj_d_ids)) {
            if (result == "---") { result = ""; }
            var u = GetProj_d_Name(id);
            if (u) {
                if (u != "---") {
                    if (result != "") { result += " , "; }
                    result += u.name.substr(0, 8);
                }
            }
        }
    } catch { }
    return result;
}

function GetSite_Name(id) {
    var result = "---";
    try {
        var name = sites.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}

function GetSites_Name(sites_ids) {
    var result = "---";
    try {
        for (const [key, id] of Object.entries(sites_ids)) {
            if (result == "---") { result = ""; }
            var u = GetSite_Name(id);
            if (u) {
                if (u != "---") {
                    if (result != "") { result += " , "; }
                    result += u.name.substr(0, 8);
                }
            }
        }
    } catch { }
    return result;
}



function GetTech(id) {
    var result = "---";
    try {
        var name = techs.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}

function GetNatur(id) {
    var result = "---";
    try {
        var name = naturs.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}


function GetProc_Type(id) {
    var result = "---";
    try {
        var name = proc_types.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}


//#endregion


//#endregion





var table_User = "myuser";
var table_Site = "sites";
var table_proj_d = "proj_d";



function expandAll() {
    tree.expandAll();
}

function collapseAll() {
    tree.collapseAll();
}


//-------------------------------------------------------------------------------------------------



var oper_type = "";
var oper_all = "all";
var oper_one = "one";


var myData = [];
var forAll_site = sites.map(a => new Itemx(a.id, a.name));
var forAll_proj_d = proj_d.map(a => new Itemx(a.id, a.name));
var forAll_myuser = myuser.map(a => new Itemx(a.id, a.name));


var MyModal = new bootstrap.Modal(document.getElementById('MyModal'));

function GetAllId() {
    var listId = document.querySelectorAll(".myId");
    var myResult = [];
    listId.forEach(a => myResult.push(a.innerText));

    return myResult;

}


function chkAllData() {
    oper_type = oper_all;
    var ids = GetAllId();
    if (!ids) return;

    if (!myData) { myData = []; }
    var current;
    ids.forEach(ww => {

        var index1 = myData.findIndex(w => w.id == ww);
        if (index1 == -1) {
            var current = new Task_List(ww);
            myData.push(current);
            index1 = myData.findIndex(w => w.id == ww);

        }
        if (myData[index1].myuser.length == 0) { myData[index1].myuser = myuser.map(a => new Itemx(a.id, a.name)); };
        if (myData[index1].proj_d.length == 0) { myData[index1].proj_d = proj_d.map(a => new Itemx(a.id, a.name)); };
        if (myData[index1].sites.length == 0) { myData[index1].sites = sites.map(a => new Itemx(a.id, a.name)); };
    });
    // for (const [key, w] of Object.entries(myData)) {
    //     //  myData.forEach(w => {
    //     if (w.id == ids) {
    //         //if (w.myuser.length == 0) { w.myuser = myuser.map(a => { return { ...a }; }); }
    //         if (w.myuser.length == 0) { w.myuser = myuser.map(a => new Itemx(a.id, a.name)); };
    //         if (w.proj_d.length == 0) { w.proj_d = proj_d.map(a => new Itemx(a.id, a.name)); };
    //         if (w.sites.length == 0) { w.sites = sites.map(a => new Itemx(a.id, a.name)); };

    //         var entry;
    //         if (table == table_User) { entry = w.myuser; }
    //         else if (table == table_proj_d) { entry = w.proj_d; }
    //         else if (table == table_Site) { entry = w.sites; }

    //         return entry;
    //     }
    //        }
    //  }//
    //});
    //return null;
}

function chkData(myId, table) {
    oper_type = oper_one;
    if (!myId) return;

    if (!myData) { myData = []; }
    var current;

    myData.forEach(qq => {
        if (qq.id == myId) {
            current = qq;
        }
    });
    if (!current) {
        current = new Task_List(myId);
        myData.push(current);
    }
    for (const [key, w] of Object.entries(myData)) {
        //  myData.forEach(w => {
        if (w.id == myId) {
            //if (w.myuser.length == 0) { w.myuser = myuser.map(a => { return { ...a }; }); }
            if (w.myuser.length == 0) { w.myuser = myuser.map(a => new Itemx(a.id, a.name)); };
            if (w.proj_d.length == 0) { w.proj_d = proj_d.map(a => new Itemx(a.id, a.name)); };
            if (w.sites.length == 0) { w.sites = sites.map(a => new Itemx(a.id, a.name)); };

            var entry;
            if (table == table_User) { entry = w.myuser; }
            else if (table == table_proj_d) { entry = w.proj_d; }
            else if (table == table_Site) { entry = w.sites; }

            return entry;
        }
    }
    //});
    return null;
}

function getMyId(oe) {
    return oe.parentNode.parentNode.querySelector(".myId").innerText;

}

function clearAll() {
    forAll_site = sites.map(a => new Itemx(a.id, a.name));
    forAll_proj_d = proj_d.map(a => new Itemx(a.id, a.name));
    forAll_myuser = myuser.map(a => new Itemx(a.id, a.name));
}
function cmdProj_d_All(oe) {
    chkAllData();
    clearAll();
    showModel_All(table_proj_d, forAll_proj_d);
}
function cmdProj_d(oe) {

    var myId = getMyId(oe);
    var entry = chkData(myId, table_proj_d);
    if (!entry) return;
    proj_d.forEach(x => {
        let obj;
        for (const [key, w] of Object.entries(entry)) {
            if (w.id == x.id) { obj = w; break; }
        }

        if (!obj) entry.push(new Itemx(x.id, x.name));
    }
    );

    showModel(table_proj_d, myId, entry);
}





function cmdSite_All(oe) {

    chkAllData();
    clearAll();
    showModel_All(table_Site, forAll_site);

}




function cmdSite(oe) {
    var myId = getMyId(oe);
    var entry = chkData(myId, table_Site);
    if (!entry) return;
    sites.forEach(x => {
        let obj;

        for (const [key, w] of Object.entries(entry)) {
            if (w.id == x.id) { obj = w; break; }
        }
        if (!obj) entry.push(new Itemx(x.id, x.name));
    }
    );

    showModel(table_Site, myId, entry);
}

function cmdMyUser_All(oe) {

    chkAllData();
    clearAll();
    showModel_All(table_User, forAll_myuser);
}

function cmdMyUser(oe) {
    var myId = getMyId(oe);
    var entry = chkData(myId, table_User);
    if (!entry) return;
    myuser.forEach(x => {
        let obj;
        for (const [key, w] of Object.entries(entry)) {
            if (w.id == x.id) { obj = w; break; }
        }
        if (!obj) entry.push(new Itemx(x.id, x.name));
    }
    );


    showModel(table_User, myId, entry);
}


function cmdTable_All(oe) {
    showModel_Table();
}
function cmdTable(oe) {
    showModel_Table();
}
function showModel_Table() {



    var Table_Body = document.getElementById("Table_Body");
    var tr = "";
    for (const [key, w] of Object.entries(tablex)) {
        var chk = "unchecked";
        tr += ` <tr>
                    <td><input class="groupC" type="checkbox" ${chk}  data-id="${w.id}"   onclick=""> </td>
                    <td>
                        ${w.name}
                    </td>
                     <td>
                    <!--   <button>عرض المواقع</button>
                      <button>عرض الأشخاص</button>-->
                    </td>
                    <td></td>
                </tr>`;
    }

    Table_Body.innerHTML = tr;
    var Table_Location_Body = document.getElementById("Table_Location_Body");
    var tr2 = "";
    for (const [key, w] of Object.entries(sites)) {
        var chk = "unchecked";
        tr2 += ` <tr>
                    <td><input class="groupD" type="checkbox" ${chk}  data-id="${w.id}"   onclick=""> </td>
                    <td>
                        ${w.name}
                    </td>
                     <td>
                        <!-- <button>عرض المواقع</button> -->
                    </td>
                </tr>`;
    }

    Table_Location_Body.innerHTML = tr2;

    var Table_User_Body = document.getElementById("Table_User_Body");
    var tr3 = "";
    for (const [key, w] of Object.entries(myuser)) {
        var chk = "unchecked";
        tr3 += ` <tr>
                    <td><input class="groupE" type="checkbox" ${chk}  data-id="${w.id}"   onclick=""> </td>
                    <td>
                        ${w.name}
                    </td>
                     <td>
                        <!-- <button>عرض الأشخاص</button> -->
                    </td>
                </tr>`;
    }

    Table_User_Body.innerHTML = tr3;


    //setCheckAll();
    //setCheckAll_out();
    var MyModal = new bootstrap.Modal(document.querySelector("#MyTableAction"));
    MyModal.show();





}

function showModel_All(table, entry) {

    var modal_MyErr = new bootstrap.Modal(document.querySelector("#modal_MyErr"));
    var modal_Err_title = document.querySelector(".modal_Err_title");
    var modal_Err_desc = document.querySelector(".modal_Err_desc");

    var len = document.querySelectorAll('.groupB:checked').length;

    if (!len || len == 0) {

        modal_Err_title.innerText = "خطأ لا يمكن اتمام العملية";
        modal_Err_desc.innerText = "لم تقم بإختيار احد الخيارات يمين الشاشة ، نرجو الإختار المواصلة";

        modal_MyErr.show();


        return;
    }

    oper_type = oper_all;
    var tbody = document.getElementById("tbody");
    var tr = "";


    if (!entry) return;
    if (entry.length == 0) return;


    for (const [key, w] of Object.entries(entry)) {


        var chk = "unchecked";
        // if (w.is_select) chk = "checked";
        //        <td><input class="groupA" type="checkbox" ${chk} data-row_id="${myId}" data-id="${w.id}" data-table="${table}" onchange="checkChange(this)" onclick="setCheckAll()"> </td>

        tr += ` <tr>
                    <td><input class="groupA" type="checkbox" ${chk}  data-id="${w.id}" data-table="${table}"  onclick="setCheckAll()"> </td>
                    <td>
                        ${w.name}
                    </td>
                </tr>`;
    }


    // });
    tbody.innerHTML = tr;
    setCheckAll();
    //setCheckAll_out();
    MyModal = new bootstrap.Modal(document.getElementById('MyModal'));
    var MyModalLabel = document.getElementById("MyModalLabel");
    var cmdSave = document.getElementById("cmdSaveModal");
    var cur_color = "primary";
    var colors = ["btn-primary", "btn-dark", "btn-info"];
    var col_Name = document.getElementById("col_Name");
    if (table == table_proj_d) {
        MyModalLabel.innerText = "شاشة اختيار بنود للمهام المختارة";
        col_Name.innerText = "إختر البنود المراد إضافتها";
        cmdSave.innerText = "حفظ البنود المختارة";
        cur_color = colors[0];
    }
    else
        if (table == table_Site) {
            MyModalLabel.innerText = "شاشة اختيار مواقع للمهام المختارة";
            col_Name.innerText = "إختر المواقع المراد إضافتها";
            cmdSave.innerText = "حفظ المواقع المختارة";
            cur_color = colors[2];

        }
        else if (table == table_User) {

            MyModalLabel.innerText = "شاشة اختيار مسؤولين عن المهام المختارة";
            col_Name.innerText = "إختر الموظفين المراد إضافتهم";
            cmdSave.innerText = "حفظ المسؤلين المختارون";
            cur_color = colors[1];

        }
    colors.forEach(w => cmdSave.classList.remove(w));
    cmdSave.classList.add(cur_color);


    MyModal.show();





}


function showModel(table, myId, entry) {
    oper_type = oper_one;
    var tbody = document.getElementById("tbody");
    var tr = "";


    if (!entry) return;
    if (entry.length == 0) return;


    for (const [key, w] of Object.entries(entry)) {


        var chk = "unchecked";
        if (w.is_select) chk = "checked";
        //        <td><input class="groupA" type="checkbox" ${chk} data-row_id="${myId}" data-id="${w.id}" data-table="${table}" onchange="checkChange(this)" onclick="setCheckAll()"> </td>

        tr += ` <tr>
                    <td><input class="groupA" type="checkbox" ${chk} data-row_id="${myId}" data-id="${w.id}" data-table="${table}"  onclick="setCheckAll()"> </td>
                    <td>
                        ${w.name}
                    </td>
                </tr>`;
    }


    // });
    tbody.innerHTML = tr;
    setCheckAll();
    MyModal = new bootstrap.Modal(document.getElementById('MyModal'));
    var MyModalLabel = document.getElementById("MyModalLabel");
    var cmdSave = document.getElementById("cmdSaveModal");
    var cur_color = "primary";
    var colors = ["btn-primary", "btn-dark", "btn-info"];
    var col_Name = document.getElementById("col_Name");
    if (table == table_proj_d) {
        MyModalLabel.innerText = "شاشة اختيار بنود للمهمة الحالية";
        col_Name.innerText = "إختر البنود المراد إضافتها";
        cmdSave.innerText = "حفظ البنود المختارة";
        cur_color = colors[0];
    }
    else
        if (table == table_Site) {
            col_Name.innerText = "إختر المواقع المراد إضافتها";
            MyModalLabel.innerText = "شاشة اختيار مواقع للمهمة الحالية";
            cmdSave.innerText = "حفظ المواقع المختارة";
            cur_color = colors[2];

        }
        else if (table == table_User) {

            col_Name.innerText = "إختر الموظفين المراد إضافتهم";
            MyModalLabel.innerText = "شاشة اختيار مسؤولين عن المهمة الحالية";
            cmdSave.innerText = "حفظ المسؤلين المختارون";
            cur_color = colors[1];

        }
    colors.forEach(w => cmdSave.classList.remove(w));
    cmdSave.classList.add(cur_color);


    MyModal.show();





}



function cmdSave() {
    if (oper_type == oper_one) {

        document.querySelectorAll('.groupA').forEach(el => {
            checkChange(el);
        }
        );
    }
    if (oper_type = oper_all) {

        document.querySelectorAll('.groupA').forEach(el => {
            document.querySelectorAll(".groupB").forEach(bb => {
                var isCheck = bb.checked;
                var row_id = bb.dataset.row_id;
                if (isCheck) {
                    checkChangeAll(el, row_id);
                }

            });

        }
        );




    }
    MyModal.hide();
}

function checkChange(oe) {
    var myId = oe.dataset.id;
    var table = oe.dataset.table;
    var RowId = oe.dataset.row_id;
    var isCheck = oe.checked;

    updateSelect(RowId, table, myId, isCheck);

}

function checkChangeAll(oe, RowId) {
    var myId = oe.dataset.id;
    var table = oe.dataset.table;
    // var RowId = oe.dataset.row_id;
    var isCheck = oe.checked;

    updateSelect(RowId, table, myId, isCheck);

}
function checkAll(inp) {
    document.querySelectorAll('.groupA').forEach(el => {
        el.checked = inp.checked;
        //  checkChange(el);
    }
    );

}
function checkAll_out(inp) {
    document.querySelectorAll('.groupB').forEach(el => {
        el.checked = inp.checked;
        //  checkChange(el);
    }
    );

}

function checkAll_Table(inp) {
    document.querySelectorAll('.groupC').forEach(el => {
        el.checked = inp.checked;
        //  checkChange(el);
    }
    );

}
function checkAll_Table_Location(inp) {
    document.querySelectorAll('.groupD').forEach(el => {
        el.checked = inp.checked;
        //  checkChange(el);
    }
    );

}
function checkAll_Table_User(inp) {
    document.querySelectorAll('.groupE').forEach(el => {
        el.checked = inp.checked;
        //  checkChange(el);
    }
    );

}
function setCheckAll() {
    document.querySelector('input.checkAll').checked =
        document.querySelectorAll('.groupA').length ==
        document.querySelectorAll('.groupA:checked').length;
}
function setCheckAll_out() {
    document.querySelector('input.checkAll_out').checked =
        document.querySelectorAll('.groupB').length ==
        document.querySelectorAll('.groupB:checked').length;
}

document.onload = function () {

};


function updateSelect(rowId, table, id, isSelect) {
    chkData(rowId, table);

    var index1 = myData.findIndex(w => w.id == rowId);
    console.log(table);
    var mytable = myData[index1][table];
    var index2 = -1;// mytable.findIndex(w => w.id == id);
    //    mytable.forEach(function (element, index2, array) {
    for (const [key, w] of Object.entries(mytable)) {
        index2++;
        if (w.id == id) {
            myData[index1][table][index2]['is_select'] = isSelect;
            return;
        }
    }
    // for (const [key, w] of Object.entries(mytable)) {


    //myData[rowId].myuser[id].is_select = isSelect;
    // for (const [key, w] of Object.entries(myData)) {
    //     if (w.id == rowId) {
    //         for (const [key, rowx] of Object.entries(w)) {
    //             if (rowx.id == id) {


    //                 rowx.is_select = isSelect;
    //             }

    //         }

    //     }
    // }
}

function change_Serial_No(tasks, abId) {
    try {
        var myAb = Copy_Object(abId);
        if (!tasks) return;
        var count = 0;
        if (!abId) { abId = ""; }
        if (abId == undefined) { abId = ""; }
        if (abId == 0) { abId = ""; }
        for (const [key, myTask] of Object.entries(tasks)) {
            if (!myTask) continue;
            count++;
            var id = abId + "." + count;
            if (abId == "") { id = count; }
            myTask.id = id;
            if (myTask.children) {
                if (myTask.children.length > 0) {
                    change_Serial_No(myTask.children, id);
                }
            }
        }
    } catch { }

}

