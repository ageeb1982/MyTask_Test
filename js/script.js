
//جدول النظام
var Mydb_Table = [];

//الجدول المؤقت
var Mydb_AllSelection_tmp = [];

//#region  Models

//#region General Method
function Copy_Object(obj) { return structuredClone(obj); }



// function Copy_Object2(obj) {
//     var newObj = {};
//     for (var key in obj) {
//         newObj[key] = obj[key];
//     }
//     return newObj;

// }


//#endregion

//#region Projs
class Proj {
    constructor(sn, name, id, children) {
        this.sn = sn;
        if (!id) {
            this.id = GetGuid();
        } else {
            this.id = id;
        }
        this.name = name;
        this.children = children;


    }
}
//#endregion
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

//مهمة واحدة
class One_Task {
    constructor(id, site, myuser, proj_d, percent, descrp, emp_note) {
        if (!id) id = GetNewId();
        if (typeof (percent) != "number") percent = 0;
        if (!descrp) descrp = "";
        if (!emp_note) emp_note = "";
        this.id = id;
        this.site = site;
        this.myuser = myuser;
        this.proj_d = proj_d;
        this.percent = percent;
        this.descrp = descrp;
        this.emp_note = emp_note;
    }
}

//القوالب
class Task_Tmp {
    constructor(name, children) {
        this.guid = GetGuid();
        this.id = GetNewId();
        this.name = name;
        this.children = children;

    }
}
//#endregion

//#region  Task Class
// class Task {
//     constructor(ab, id, id_name, mang, tech, natur, proc_type, percent, sn, descrp, children) {

//         // "التسلسلي",
//         this.id = id;

//         //الاب
//         this.ab = ab;
//         // الإجراء
//         this.id_name = id_name;

//         // تسلسلي العمل
//         this.name = id;

//         // "الإدارة",
//         this.mang = mang;

//         // "مدير الإجراء",
//         this.mang_name = 0;

//         // "الموظفيين الإداريين",
//         this.emps_mang = [];


//         // "المهام الفنية",
//         this.tech = tech;

//         // "الوصف",
//         this.descrp = descrp;

//         //طبيعة العمل",
//         this.natur = natur;

//         //نوع الإجراء",
//         this.proc_type = proc_type;

//         //النسبة";
//         this.percent = percent;
//         this.percent_one = () => { return GetPercent_One(this); };
//         //نسبة الكل";
//         this.percent_all = () => { return GetPercent_All(this); };

//         this.sn = sn;

//         // الأبناء
//         this.children = children;

//         // "البنود",
//         this.proj_ds = () => { return GetTask_Proj_ds_Ids(this); };

//         // "المواقع",
//         this.sites = () => { return GetTask_Sites_Ids(this); };

//         // "مدير الموقع",
//         this.site_mang = 0;

//         // "المسؤولون بالتنفيذ",
//         this.site_emps = [];

//         // "المدة",
//         this.duration = 0;

//         this.strart_date = "";
//         this.end_date = "";
//         //البداية والنهاية
//         this.start_end_date = () => { return GetTask_Start_End_Date(this); };


//     }
// }

class Task {
    constructor(id, name, mang, tech, natur, proc_type, percent, sn, descrp, children) {
        this.id = "";
        // "التسلسلي",
        this.id_name = id;

        this.guid = GetGuid();
        //الاب
        this.ab = 0;
        // الإجراء
        this.name = name;
        // نوع التفتييت
        this.part_type = 0;


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
class Task_AllSelection {
    constructor(name, children) {
        this.guid = GetGuid();
        this.id = GetNewId();

        // الإجراء
        this.name = name;

        // نوع التفتييت
        this.part_type = 0;

        // "مدير الإجراء",
        this.mang_name = 0;

        // "الموظفيين الإداريين",
        this.emps_mang = [];


        // "مدير الموقع",
        this.site_mang = 0;

        // "المسؤولون بالتنفيذ",
        this.site_emps = [];
        this.children = children;

    }
}
//#endregion

//#endregion

//#region  Data Section

//#region Var_Data
//نوع التفتيت
var Par_types = [
    new Itemx(1, "إداري"),
    new Itemx(2, "تنتظيمي"),
    new Itemx(3, "إجرائي"),
    new Itemx(4, "وظيفي")
];

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

var projs = [
    new Proj(1, "مشروع توريد وتركيب الدفاع المدني - منطقة 1",
        "467d5b9e-f2e8-4916-b1de-657c890d2df7",
        [
            new Itemx(1, "بند 1 - الدفاع المدني"),
            new Itemx(2, "بند 2 - الدفاع المدني"),
            new Itemx(3, "بند 3 - الدفاع المدني"),
        ]),
    new Proj(2, "تركيب خطوط انابيت ارامكو",
        "e1b3534b-225b-4a09-9d1a-3fb1d3cacaed",
        [
            new Itemx(4, "بند 1 - تركيب خطوط ارامكو"),
            new Itemx(5, "بند 2 - تركيب خطوط ارامكو"),
            new Itemx(6, "بند 3 - تركيب خطوط ارامكو"),
        ]),
    new Proj(3, "صيانة سباكة مدارس منطقة عسير",
        "b6c92706-229e-4737-9ba8-f6640890fdf9",
        [
            new Itemx(7, "بند 1 - صيانة سباكة مدارس عسير"),
            new Itemx(8, "بند 2 - صيانة سباكة مدارس عسير"),
            new Itemx(9, "بند 3 - صيانة سباكة مدارس عسير"),
        ]),
    new Proj(4, "تمديد كيبلات شبكات الجيل الخامس",
        "23f2acb8-2d72-49ae-af26-42988d673cd7",
        [
            new Itemx(10, "بند 1 - تمديد كيبلات الجيل الخامس"),
            new Itemx(11, "بند 2 - تمديد كيبلات الجيل الخامس"),
            new Itemx(12, "بند 3 - تمديد كيبلات الجيل الخامس"),
        ]),
    new Proj(5, "تركيب وتوريد اجهزة الانذار المبكر",
        "b15ef980-f060-48a7-8e7e-0d88353b361d",
        [
            new Itemx(13, "بند 1 - الإنذار المبكر"),
            new Itemx(14, "بند 2 - الإنذار المبكر"),
            new Itemx(15, "بند 3 - الإنذار المبكر"),
        ])
];


var myproj = projs[0];

var proj_d = myproj.children;

var myuser = [
    new Itemx(1, "عبدالله احمد"),
    new Itemx(2, "عمر حمدان"),
    new Itemx(3, "عبدالرحمن المهندس"),
    new Itemx(4, "كمال صالح"),
    new Itemx(5, "احمد علي"),
    new Itemx(6, "بدر العامري"),
    new Itemx(7, "منصور العوارضي"),
    new Itemx(8, "عمار حسن"),
    new Itemx(9, "حذيفة احمد"),
    new Itemx(10, "ايمن سيد احمد"),
    new Itemx(11, "حمود عادل"),



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


//#region   Template Section

//تجهيز واعتمادات المخططات
var mapsOk = new Task_Tmp("تجهيز واعتماد المخططات", [
    new Task_Tmp("استخراج التصاريح", [
        new Task_Tmp("رخصة المباني", []),
        new Task_Tmp("رخصة الدفاع المدني", []),
        new Task_Tmp("رخص من البلدية", [])]),
    new Task_Tmp("اعتماد المخططات من مكتب إستشاري", [])]);

// الحفر والردم
var digging = new Task_Tmp("الحفر والردم", [
    new Task_Tmp("الحفر", [
        new Task_Tmp("حفر الخزان", []),
        new Task_Tmp("حفر البيارة", []),
        new Task_Tmp("حفر الأساسات", [])
    ]),
    new Task_Tmp("اسقاط النقط المخطط على الواقع", []),
    new Task_Tmp("الردم", []),
]);
// رش المياه
var water_TwoDay = new Task_Tmp("رش المياه لمدة يومين", [
    new Task_Tmp("رش اليوم الأول", []),
    new Task_Tmp("رش اليوم الثاني", [])
]);
var water_SevenDay = new Task_Tmp("رش المياه لمدة سبعة أيام", [
    new Task_Tmp("رش اليوم الأول", []),
    new Task_Tmp("رش اليوم الثاني", []),
    new Task_Tmp("رش اليوم الثالث", []),
    new Task_Tmp("رش اليوم الرابع", []),
    new Task_Tmp("رش اليوم الخامس", []),
    new Task_Tmp("رش اليوم السادس", []),
    new Task_Tmp("رش اليوم السابع", [])

]);

// أعمال الصبات
var build_Work = new Task_Tmp("اعمال الصبات", [
    new Task_Tmp("الحدادة", []),
    new Task_Tmp("النجارة", []),
    new Task_Tmp("تقفيل وتقوية النجارة", []),
    new Task_Tmp("الصبة", []),
    Copy_Object(water_TwoDay),
    new Task_Tmp("فك الخشب", [])
]);
var build_Work_Roof = new Task_Tmp("اعمال صبات السقف", [
    new Task_Tmp("الحدادة", []),
    new Task_Tmp("النجارة", []),
    new Task_Tmp("تقفيل وتقوية النجارة", []),
    new Task_Tmp("الصبة", []),
    Copy_Object(water_SevenDay),
    new Task_Tmp("فك الخشب", [])
]);
var build_Work_Ground = new Task_Tmp("اعمال الصبات الأرضية", [
    // اعمال الصبات
    Copy_Object(build_Work),
    new Task_Tmp("المباني", []),
    new Task_Tmp("عزل الصبيات", []),
    new Task_Tmp("دفن", [])

]);


// الميدات
var medat = new Task_Tmp("الميدات", [
    // اعمال المباني الأرضية
    Copy_Object(build_Work_Ground)
]);
// الأعمدة
var build_Columns = new Task_Tmp("الأعمدة", [
    // اعمال المباني 
    Copy_Object(build_Work)
]);

// اعمال القواعد
var build_Base = new Task_Tmp("أعمال القواعد", [
    // اعمال المباني الأرضية
    Copy_Object(build_Work_Ground)]);


// خزان المياه الأرضي
var water_Ground = new Task_Tmp("خزان المياه الأرضي", [
    // اعمال المباني الأرضية
    Copy_Object(build_Work_Ground)
]);
// عمل البيارة
var water_wells = new Task_Tmp("عمل البيارة", [
    // اعمال المباني الأرضية
    Copy_Object(build_Work_Ground)
]);
// الخزان والبيارة
var water_Ground_Wells = new Task_Tmp("الخزان والبيارة", [
    // خزان المياه الأرضي
    Copy_Object(water_Ground),

    // عمل البيارة
    Copy_Object(water_wells),

]);

// أعمال المباني
var building = new Task_Tmp("أعمال المباني", [
    new Task_Tmp("عمل المباني", []),
    new Task_Tmp("نجارة الخشب", []),
    new Task_Tmp("صب العتب", []),
    new Task_Tmp("استكمال المباني", [])
]);

// الإنشاءات في الدور الأرضي
var build_Ground_Flor = new Task_Tmp("الإنشاءات في الدور الأرضي", [

    //اعمال الحفر والردم
    Copy_Object(digging),

    // الميدات
    Copy_Object(medat),

    // اعمال القواعد
    Copy_Object(build_Base),

    // الخزان والبيارة
    Copy_Object(water_Ground_Wells),

    // الأعمدة
    Copy_Object(build_Columns),
    // اعمال السقف
    Copy_Object(build_Work_Roof),

    // أعمال المباني
    Copy_Object(building)

]);

// الإنشاءات في الدور المتكرر
var build_OtherFlor = new Task_Tmp("الإنشاءات في الدور المتكرر", [

    // الأعمدة
    Copy_Object(build_Columns),
    // اعمال السقف
    Copy_Object(build_Work_Roof),

    // أعمال المباني
    Copy_Object(building)

]);
// تأسيس التكييف
var AirCon_Base = new Task_Tmp("تأسيس التكييف", [
    new Task_Tmp("حفر وتمديد مواسير النحاس", []),
    new Task_Tmp("حفر وتمديد مواسير الصرف", []),
]);

// تشطيب التكييف
var AirCon_Finsh = new Task_Tmp("تشطيب التكييف", [
    new Task_Tmp("تركيب الوحدات الداخلية", []),
    new Task_Tmp("تركيب الوحدات الخارجية", []),
]);

// اعمال التكييف
var AirCon_Work = new Task_Tmp("اعمال التكييف", [
    // تأسيس التكييف
    Copy_Object(AirCon_Base),

    // تشطيب التكييف
    Copy_Object(AirCon_Finsh)
]);

// البلاط
var tiles_Work = new Task_Tmp("البلاط", [
    new Task_Tmp("تركيب بلاط الحوائط", []),
    new Task_Tmp("تركيب بلاط الأرضيات", []),
    new Task_Tmp("عمل الترويبة", [])
]);

// تأسيس الكهرباء

var Elect_Base = new Task_Tmp("تأسيس الكهرباء", [
    new Task_Tmp("تكسير الجدران لمسار المواسير", []),
    new Task_Tmp("تمديد المواسير", []),
    new Task_Tmp("تمديد الكيبلات", []),
    new Task_Tmp("تركيب علب الكهرباء", []),

]);
var Elect_Finsh = new Task_Tmp("تشطيب الكهرباء", [
    new Task_Tmp("تركيب الأفياش", []),
    new Task_Tmp("تركيب الإنارة", []),
    new Task_Tmp("تركيب مراوح الشفط", []),
    new Task_Tmp("تركيب السخانات", []),
    new Task_Tmp("تركيب المراوح", []),
    // تشطيب التكييف
    Copy_Object(AirCon_Finsh)
]);



var Water_Base_Internal = new Task_Tmp("تأسيس السباكة الداخلية", [
    new Task_Tmp("تكسير الجدران لمسار المواسير", []),
    new Task_Tmp("تمديد مواسير المياه", []),
    new Task_Tmp("تمديد مواسير الصرف", []),
    new Task_Tmp("صبة فوق مواسير الصرف", []),
    new Task_Tmp("ضغط المواسير", []),
    // تأسيس التكييف
    Copy_Object(AirCon_Base)

]);


// تأسيس السباكة الخارجية
var Water_Base_External = new Task_Tmp("تأسيس السباكة الخارجية", [
    new Task_Tmp("تمديد مواسير الصرف الصحي لأقرب بيارة", []),
    new Task_Tmp("تمديد مواسير المياه من الخزان إلى المبنى", []),
    new Task_Tmp("توصيل مياه البلدية للخزان الأرضي", []),
    new Task_Tmp("تمديد المياه من الخزان الأرضي إلى الخزان العلوي", [])
]);

// تأسيس السباكة
var Water_Base = new Task_Tmp("تأسيس السباكة", [
    // تأسيس السباكة الداخلية
    Copy_Object(Water_Base_Internal),
    // تأسيس السباكة الخارجية
    Copy_Object(Water_Base_External)
]);


// تشطيب السباكة
var Water_Finsh = new Task_Tmp("تشطيب السباكة", [
    new Task_Tmp("تركيب الأجهزة الصحية", []),
    new Task_Tmp("تركيب الخلاطات", []),

]);

var Water_Work = new Task_Tmp("اعمال السباكة", [
    // تأسيس السباكة
    Copy_Object(Water_Base),
    // تشطيب السباكة
    Copy_Object(Water_Finsh)
]);


var Elect_Work = new Task_Tmp("أعمال الكهرباء", [
    // تأسيس الكهرباء
    Copy_Object(Elect_Base),
    // تشطيب الكهرباء
    Copy_Object(Elect_Finsh)
]);












var finishing = new Task_Tmp("التشطيبات", [
    // تأسيس الكهرباء
    Copy_Object(Elect_Base),
    // تأسيس السباكة
    Copy_Object(Water_Base),
    new Task_Tmp("لياسة", []),
    new Task_Tmp("اعمال جبص", []),
    new Task_Tmp("تأسيس نقاشة", []),
    // البلاط
    Copy_Object(tiles_Work),
    // تشطيب السباكة
    Copy_Object(Water_Finsh),
    // تشطيب الكهرباء
    Copy_Object(Elect_Finsh),
    new Task_Tmp("تشطيب نقاشة", []),
    new Task_Tmp("تسليم المفتاح", []),
]);

var build_Tmp = new Task_Tmp("أعمال مقاولات", [
    // الإنشاءات في الدور الأرضي
    Copy_Object(build_Ground_Flor),

    // الإنشاءات في الدور المتكرر   
    Copy_Object(build_OtherFlor),
    // التشطيبات
    Copy_Object(finishing)

]);








//#endregion


//#region المشاريع

// إعتماد مهندس
var Eng_tmp = new Task_Tmp("إعتماد مهندس", [
    new Task_Tmp("شهادة الجامعة", []),
    new Task_Tmp("الخبرات", []),
    new Task_Tmp("الإقامة", []),
    new Task_Tmp("خطاب", []),
    new Task_Tmp("عقد العمل", []),
    new Task_Tmp("تحديد الوزارة", []),
    new Task_Tmp("استقدام عمال", [])
]);

// عمل منافسة
var competition = new Task_Tmp("عمل منافسة", [
    new Task_Tmp("تقديم خطاب بوضع الشركة وقبولها للمنافسة", []),
    new Task_Tmp("تسعير منافسة", []),
    new Task_Tmp("تجهيز شروط الدخول للمنافسة", []),
    new Task_Tmp("معرفة ثمن الوثيقة", []),
    new Task_Tmp("مناقشة الجهة في طبيعة العمل", []),
    new Task_Tmp("مراجعة اسم المشروع وتخصصه", []),
    new Task_Tmp("تحديد المشروع", []),
    new Task_Tmp("شراء منافسة", []),

]);
// استلام المشروع 
var proj_Recived_tmp = new Task_Tmp("استلام المشروع", [
    new Task_Tmp("استلام وثيقة المشروع", []),
    new Task_Tmp("استلام المخططات", []),
    new Task_Tmp("استلام المواقع", []),
    new Task_Tmp("بدء العمل على المشروع", [])
]);
// تسليم المشروع النهائي
var proj_Finsh = new Task_Tmp("تسليم المشروع نهائياً", [
    new Task_Tmp("عمل الحصورات", []),
    new Task_Tmp("المستخلصات", []),
    new Task_Tmp("تسليم المشروع", []),
]);

// إدارة المشروع
var Proj_mang = new Task_Tmp("إدارة المشروع", [
    new Task_Tmp("إدارة المشروع", []),
    new Task_Tmp("إعتماد جهاز", []),
    new Task_Tmp("مقابلة العملاء", []),
    new Task_Tmp("تشجيع عمال", []),
    new Task_Tmp("تطوير الذات", []),
    new Task_Tmp("تطوير الفنيي", [])
]);

// أعمال المشاريع
var proj_Work = new Task_Tmp("أعمال المشاريع", [
    // عمل منافسة
    Copy_Object(competition),

    // إعتماد مهندس
    Copy_Object(Eng_tmp),

    // استلام المشروع 
    Copy_Object(proj_Recived_tmp),

    // تسليم المشروع النهائي
    Copy_Object(proj_Finsh),

    // إدارة المشروع
    Copy_Object(Proj_mang),
]);
//#endregion

var p_tmp;
var proj_name = document.getElementById("proj_name");
// #region كل الأعمال
var All_Temp = [];

function Change_Proj_d(id) {
    if (!id) id = projs[0].id;
    var proj = projs.find(w => w.id == id);
    if (!proj) proj = projs[0];


    myproj = proj;
    proj_d = myproj.children;
    return proj;

}
var proj_count = 0;
function get_All_Temp(id) {
    Change_Proj_d(id);
    p_name = myproj.name;
    if (!p_name) { p_name = "---"; }
    p_tmp = new Task_Tmp("بنود المشروع - " + p_name, []);

    // إضافة البنود
    var p_tmp_child = proj_d.map(w => new Task_Tmp(w.name));
    p_tmp.children = p_tmp_child;




    All_Temp = [
        Copy_Object(p_tmp),
        // اعمال المشاريع
        Copy_Object(proj_Work),
        // إعتماد مهندس
        Copy_Object(Eng_tmp),
        // عمل منافسة
        Copy_Object(competition),

        // استلام المشروع 
        Copy_Object(proj_Recived_tmp),

        // تسليم المشروع النهائي
        Copy_Object(proj_Finsh),

        // إدارة المشروع
        Copy_Object(Proj_mang),
        // أعمال المقاولات
        Copy_Object(build_Tmp),
        // الأنشاءات في الدور الأرضي
        Copy_Object(build_Ground_Flor),
        // الأنشاءات في الأدوار المتكررة
        Copy_Object(build_OtherFlor),
        //تجهيز واعتمادات المخططات
        Copy_Object(mapsOk),

        //أعمال الصبات
        Copy_Object(build_Work),


        //----------الكهرباء--------------
        // اعمال الكهرباء
        Copy_Object(Elect_Work),
        // تأسيس الكهرباء
        Copy_Object(Elect_Base),
        // تشطيب الكهرباء
        Copy_Object(Elect_Finsh),

        //----------التكييف--------------
        // اعمال التكييف
        Copy_Object(AirCon_Work),
        // تأسيس التكييف
        Copy_Object(AirCon_Base),
        // تشطيب التكييف
        Copy_Object(AirCon_Finsh),
        //----------التكييف--------------
        //----------الكهرباء--------------

        //----------السباكة--------------
        // اعمال السباكة
        Copy_Object(Water_Work),
        // تأسيس السباكة
        Copy_Object(Water_Base),
        // تأسيس السباكة الداخلية
        Copy_Object(Water_Base_Internal),
        // تأسيس السباكة الخارجية
        Copy_Object(Water_Base_External),
        // تشطيب السباكة
        Copy_Object(Water_Finsh),

        //----------السباكة--------------
        // البلاط
        Copy_Object(tiles_Work),

        // اعمال الصبات الأرضية
        Copy_Object(build_Work_Ground),

        // اعمال صبات السقف
        Copy_Object(build_Work_Roof),

        // الأعمدة
        Copy_Object(build_Columns),

        //اعمال الميدات
        Copy_Object(medat),
        // القواعد
        Copy_Object(build_Base),

        // الخزان والبيارة
        Copy_Object(water_Ground_Wells),

        // الخزان الأرضي
        Copy_Object(water_Ground),

        // اعمال البيارة
        Copy_Object(water_wells),

        //اعمال الحفر والردم
        Copy_Object(digging),

        //رش المياه لمدة يومين
        Copy_Object(water_TwoDay)
    ];
    ++proj_count;
    if (proj_count != 1) {
        ReLoad_tmp_Task_Element();
        proj_name.value = id;
    }
    return All_Temp;
}
var oldId = localStorage.getItem("projId");


get_All_Temp(oldId);



// #endregion

//#region DataMethods

function GetNewId() {
    var id = new Date().getTime();
    var rnd = Math.round(Math.random() * 100000);
    return id + "" + rnd;
}
// get uuid code
function GetGuid() {
    return crypto.randomUUID();
}

proj_name.addEventListener('input', Proj_Change);
function Proj_Change(select) {
    // console.log(select);
    // console.log(select.target.value);
    localStorage.setItem("projId", select.target.value);
    get_All_Temp(select.target.value);
}

function createProjItem() {
    // var proj_name = document.getElementById("proj_name");
    var items = "";
    i = 0;
    projs.forEach(w => {
        var sel = "";
        if (i == 0) { sel = "selected='selected'"; }
        items += `<option value="${w.id}" ${sel}>${w.name}</option>`;
        i++;
    });
    proj_name.innerHTML = items;
}
createProjItem();
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

        if (curr_Child.emps_mang.length == 0 && curr_Child.site_emps.length == 0) {
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
function Getpart_type(id) {
    var result = "---";
    try {
        var name = Par_types.find(w => w.id == id);
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

function GetUser_Name_From_OneTask(id) {

    var result = "---";
    try {
        if (id) {
            console.log("fromOneTask", id);
        }

        var name = myuser.find(w => w.id == id);
        if (name) { result = name.name; }
    } catch { }
    return result;
}
function GetUsers_Name_From_OneTask(usrs_ids) {
    var result = "---";
    try {
        if (usrs_ids.length != 0) {
            console.log("UserId", usrs_ids);
        }


        var z = (Object.entries(usrs_ids).map(w => w[1].myuser));

        var uuu = [...new Set(z)];
        // for (const [key, id] of Object.entries(usrs_ids)) {
        console.log("uuu=>", uuu);
        for (const [key, id] of Object.entries(uuu)) {
            if (result == "---") { result = ""; }
            var u = GetUser_Name_From_OneTask(id);
            if (u) {
                if (u != "---") {
                    if (result != "") { result += " , "; }
                    result += u.substr(0, 8);
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
        var name = proj_d.find(w => w.id == id.proj_d);
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
                    result += u.substr(0, 8);
                }
            }
        }
    } catch { }
    return result;
}

function GetSite_Name(id) {
    var result = "---";
    try {
        var name = sites.find(w => w.id == id.site);
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
                    result += u.substr(0, 8);
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




//#region   Select Section
show_proj_d = "show_proj_d";
show_site = "show_site";
show_user = "show_user";
show_part_type = "show_part_type";

function Show_All(WithOther) {
    Select_All("", false);
    if (typeof WithOther != "boolean") WithOther = false;
    var cmdConfirm = document.querySelector(".cmdConfirm");
    var cmdOtherSelect = document.querySelector(".cmdOtherSelect");
    cmdOtherSelect.classList.add("visually-hidden");

    var dt_tmp_proj_d = document.querySelector(".dt_tmp_proj_d");
    var dt_tmp_site = document.querySelector(".dt_tmp_site");
    var dt_tmp_user = document.querySelector(".dt_tmp_user");
    //var dt_tmp_part_type = document.querySelector(".dt_tmp_part_type");

    if (WithOther) { cmdOtherSelect.classList.remove("visually-hidden"); }
    cmdConfirm.classList.remove("visually-hidden");


    dt_tmp_proj_d.classList.remove("visually-hidden");
    dt_tmp_site.classList.remove("visually-hidden");
    dt_tmp_user.classList.remove("visually-hidden");
    //dt_tmp_part_type.classList.remove("visually-hidden");

    //

    dt_tmp_proj_d.classList.remove("col-md-12");
    dt_tmp_site.classList.remove("col-md-12");
    dt_tmp_user.classList.remove("col-md-12");
    //dt_tmp_part_type.classList.remove("col-md-12");

    dt_tmp_proj_d.classList.add("col-md-4");
    dt_tmp_site.classList.add("col-md-4");
    dt_tmp_user.classList.add("col-md-4");


}
function show_hide_One(show_type_Only, IsShow) {
    Select_All("", false);
    var cmdConfirm = document.querySelector(".cmdConfirm");

    var dt_tmp_proj_d = document.querySelector(".dt_tmp_proj_d");
    var dt_tmp_site = document.querySelector(".dt_tmp_site");
    var dt_tmp_user = document.querySelector(".dt_tmp_user");
    var dt_tmp_part_type = document.querySelector(".dt_tmp_part_type");

    if (IsShow) {
        hide_All();
        if (show_type_Only == show_proj_d) { dt_tmp_proj_d.classList.remove("visually-hidden"); dt_tmp_proj_d.classList.add("col-md-12"); }
        if (show_type_Only == show_site) { dt_tmp_site.classList.remove("visually-hidden"); dt_tmp_site.classList.add("col-md-12"); }
        if (show_type_Only == show_user) { dt_tmp_user.classList.remove("visually-hidden"); dt_tmp_user.classList.add("col-md-12"); }
        if (show_type_Only == show_part_type) { dt_tmp_part_type.classList.remove("visually-hidden"); dt_tmp_part_type.classList.add("col-md-12"); }

    }
    else {
        Show_All();
        if (show_type_Only == show_proj_d) { dt_tmp_proj_d.classList.add("visually-hidden"); dt_tmp_site.classList.add("col-md-6"); dt_tmp_user.classList.add("col-md-6"); }
        if (show_type_Only == show_site) { dt_tmp_site.classList.add("visually-hidden"); dt_tmp_proj_d.classList.add("col-md-6"); dt_tmp_user.classList.add("col-md-6"); }
        if (show_type_Only == show_user) { dt_tmp_user.classList.add("visually-hidden"); dt_tmp_proj_d.classList.add("col-md-6"); dt_tmp_site.classList.add("col-md-6"); }
        if (show_type_Only == show_part_type) { dt_tmp_part_type.classList.add("visually-hidden"); dt_tmp_proj_d.classList.add("col-md-6"); dt_tmp_site.classList.add("col-md-6"); }

    }
    cmdConfirm.classList.remove("visually-hidden");


}

function hide_All(e) {
    Select_All("", false);
    //console.log(e);
    if (e) { if (e.dataset.cmd_name == "cmdOtherSelect") return; }
    var cmdConfirm = document.querySelector(".cmdConfirm");

    var cmdOtherSelect = document.querySelector(".cmdOtherSelect");


    cmdConfirm.classList.add("visually-hidden");
    cmdOtherSelect.classList.add("visually-hidden");

    var dt_tmp_proj_d = document.querySelector(".dt_tmp_proj_d");
    var dt_tmp_site = document.querySelector(".dt_tmp_site");
    var dt_tmp_user = document.querySelector(".dt_tmp_user");
    var dt_tmp_part_type = document.querySelector(".dt_tmp_part_type");

    dt_tmp_proj_d.classList.add("visually-hidden");
    dt_tmp_site.classList.add("visually-hidden");
    dt_tmp_user.classList.add("visually-hidden");
    dt_tmp_part_type.classList.add("visually-hidden");

    dt_tmp_proj_d.classList.remove("col-md-12");
    dt_tmp_site.classList.remove("col-md-12");
    dt_tmp_user.classList.remove("col-md-12");
    dt_tmp_part_type.classList.remove("col-md-12");

    dt_tmp_proj_d.classList.remove("col-md-4");
    dt_tmp_site.classList.remove("col-md-4");
    dt_tmp_user.classList.remove("col-md-4");
    // dt_tmp_user.classList.remove("col-md-4");

}

// تغيير مدير الإجراء
function Confirm_changeManager(e) {
    if (oper_type == oper_changeManger) {
        var myUser_Select = document.querySelectorAll('.tmp_user:checked');
        if (myUser_Select.length == 0) { msgbox_tmp("لم تقم بالإختيار ، من فضلك أختر موظف", "خطأ لا يمكن اتمام العملية"); return; }
        if (myUser_Select.length > 1) { msgbox_tmp("لا بد من اختيار شخص واحد فقط", "خطأ لا يمكن اتمام العملية"); return; }
        var myUser_id = myUser_Select[0].dataset.row_id;
        if (oper_Id && myUser_id) {
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                current.mang_name = myUser_id;
            }
        }
    }
    hide_All(e);
    ReLoad_tmpAllSelection();
}

// نوع التفتييت
function Confirm_change_part_type(e) {

    if (oper_type == oper_change_part_type) {
        var myPar_type_Select = document.querySelectorAll('.tmp_par_type:checked');
        if (myPar_type_Select.length == 0) { msgbox_tmp("لم تقم بالإختيار ، من فضلك أختر نوع التفتيت", "خطأ لا يمكن اتمام العملية"); return; }
        if (myPar_type_Select.length > 1) { msgbox_tmp("لا بد من اختيار نوع تفتيت واحد فقط", "خطأ لا يمكن اتمام العملية"); return; }
        var part_type_id = myPar_type_Select[0].dataset.row_id;
        // if (oper_Id && myUser_id) {
        // var part_type = document.querySelector(".part_type").value;
        if (oper_Id) {
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                current.part_type = part_type_id;
            }
        }
    }
    hide_All(e);
    ReLoad_tmpAllSelection();
}




// تغيير مدير الموقع
function Confirm_changeSiteManger(e) {
    if (oper_type == oper_changeSiteManger) {
        var myUser_Select = document.querySelectorAll('.tmp_user:checked');
        if (myUser_Select.length == 0) { msgbox_tmp("لم تقم بالإختيار ، من فضلك أختر موظف", "خطأ لا يمكن اتمام العملية"); return; }
        if (myUser_Select.length > 1) { msgbox_tmp("لا بد من اختيار شخص واحد فقط", "خطأ لا يمكن اتمام العملية"); return; }
        var myUser_id = myUser_Select[0].dataset.row_id;
        if (oper_Id && myUser_id) {
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                current.site_mang = myUser_id;
            }
        }
    }
    hide_All(e);
    ReLoad_tmpAllSelection();
}

// الموظفيين الإداريين
function Confirm_changeEmps_Mang(e) {
    if (oper_type == oper_emps_mang) {
        var myUser_Select = document.querySelectorAll('.tmp_user:checked');
        if (myUser_Select.length == 0) { msgbox_tmp("لم تقم بالإختيار ، من فضلك أختر موظف", "خطأ لا يمكن اتمام العملية"); return; }
        // if (myUser_Select.length > 1) { msgbox_tmp("لا بد من اختيار شخص واحد فقط", "خطأ لا يمكن اتمام العملية"); return; }
        if (oper_Id) {
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (save_Emps_mang(current) == 0) return;
        }
    }
    hide_All(e);
    ReLoad_tmpAllSelection();
}
save_Change_Emp_Mang = function (e) { };
//المسولون بالتنفيذ
function Confirm_changeSiteEmps(e) {

    if (oper_type == oper_changeSiteEmps) {
        var myUser_Select = document.querySelectorAll('.tmp_user:checked');
        if (myUser_Select.length == 0) { msgbox_tmp("لم تقم بالإختيار ، من فضلك أختر موظف", "خطأ لا يمكن اتمام العملية"); return; }
        // if (myUser_Select.length > 1) { msgbox_tmp("لا بد من اختيار شخص واحد فقط", "خطأ لا يمكن اتمام العملية"); return; }
        if (oper_Id) {
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (save_SiteEmps(current) == 0) return;
        }
    }
    hide_All(e);
    ReLoad_tmpAllSelection();
}

save_SiteEmps = function (e) {
    if (!e) { msgbox_tmp("يوجد خطأ حاول تحديث الصفحة وحاول مرة اخرى", "خطأ لا يمكن اتمام العملية"); return 0; }
    var Items = Select_Item_To_Array();
    e.site_emps = Items;
    return 1;

};

save_Emps_mang = function (e) {
    if (!e) { msgbox_tmp("يوجد خطأ حاول تحديث الصفحة وحاول مرة اخرى", "خطأ لا يمكن اتمام العملية"); return 0; }
    var Items = Select_Item_To_Array();
    e.emps_mang = Items;
    return 1;
};






Select_Item_To_Array = function (e) {
    var result = [];
    var check_user = document.querySelectorAll('.tmp_user:checked');
    var check_site = document.querySelectorAll('.tmp_site:checked');
    var check_proj_d = document.querySelectorAll('.tmp_proj_d:checked');
    // console.log("check_user", check_user.length);
    // console.log("check_site", check_site.length);
    // console.log("check_proj_d", check_proj_d.length);
    var SNQ = 0;
    var IsSiteNotEmpty = false;
    //if (!check_site) {
    if (check_site.length != 0) { IsSiteNotEmpty = true; }
    //}
    var IsProj_dNotEmpty = false;
    //if (!check_proj_d) { 
    if (check_proj_d.length != 0) { IsProj_dNotEmpty = true; }
    // }
    var IsUserNotEmpty = false;
    //if (!check_user) {
    if (check_user.length != 0) { IsUserNotEmpty = true; }
    //}
    if (IsUserNotEmpty) {
        check_user.forEach(userqq => {
            //console.log(userqq);
            if (IsSiteNotEmpty) {
                check_site.forEach(siteqq => {
                    //  console.log(userqq, "-", siteqq);
                    if (IsProj_dNotEmpty) {
                        check_proj_d.forEach(proj_dqq => {

                            var userIdz = 0;
                            var siteIdz = 0;
                            var proj_dIdz = 0;

                            if (userqq) { if (userqq.dataset) { if (userqq.dataset.row_id) { userIdz = userqq.dataset.row_id; } } }
                            if (siteqq) { if (siteqq.dataset) { if (siteqq.dataset.row_id) { siteIdz = siteqq.dataset.row_id; } } }
                            if (proj_dqq) { if (proj_dqq.dataset) { if (proj_dqq.dataset.row_id) { proj_dIdz = proj_dqq.dataset.row_id; } } }
                            //console.log(`SN: ${++SNQ} userId: `, userIdz, " - site: ", siteIdz, " - proj_d: ", proj_dIdz);
                            result.push(new One_Task(GetNewId(), siteIdz, userIdz, proj_dIdz));

                        });
                    }
                    else {
                        var userIdz = 0;
                        var siteIdz = 0;
                        var proj_dIdz = 0;
                        if (userqq) { if (userqq.dataset) { if (userqq.dataset.row_id) { userIdz = userqq.dataset.row_id; } } }
                        if (siteqq) { if (siteqq.dataset) { if (siteqq.dataset.row_id) { siteIdz = siteqq.dataset.row_id; } } }
                        // console.log(`SN: ${++SNQ} userId: `, userIdz, " - site: ", siteIdz, " - proj_d: ", proj_dIdz);


                        result.push(new One_Task(GetNewId(), siteIdz, userIdz, proj_dIdz));
                    }
                });
            }
            else {
                if (IsProj_dNotEmpty) {
                    check_proj_d.forEach(proj_dqq => {
                        var userIdz = 0;
                        var siteIdz = 0;
                        var proj_dIdz = 0;

                        if (userqq) { if (userqq.dataset) { if (userqq.dataset.row_id) { userIdz = userqq.dataset.row_id; } } }
                        // if (siteqq) { if (siteqq.dataset) { if (siteqq.dataset.row_id) { siteIdz = siteqq.dataset.row_id; } } }
                        if (proj_dqq) { if (proj_dqq.dataset) { if (proj_dqq.dataset.row_id) { proj_dIdz = proj_dqq.dataset.row_id; } } }
                        // console.log(`SN: ${++SNQ} userId: `, userIdz, " - site: ", siteIdz, " - proj_d: ", proj_dIdz);


                        result.push(new One_Task(GetNewId(), siteIdz, userIdz, proj_dIdz));

                    });
                }
                else {
                    var userIdz = 0;
                    var siteIdz = 0;
                    var proj_dIdz = 0;

                    if (userqq) { if (userqq.dataset) { if (userqq.dataset.row_id) { userIdz = userqq.dataset.row_id; } } }
                    // if (siteqq) { if (siteqq.dataset) { if (siteqq.dataset.row_id) { siteIdz = siteqq.dataset.row_id; } } }
                    // if (proj_dqq) { if (proj_dqq.dataset) { if (proj_dqq.dataset.row_id) { proj_dIdz = proj_dqq.dataset.row_id; } } }
                    // console.log(`SN: ${++SNQ} userId: `, userIdz, " - site: ", siteIdz, " - proj_d: ", proj_dIdz);


                    result.push(new One_Task(GetNewId(), siteIdz, userIdz, proj_dIdz));
                }
            }
        });
    }

    return result;



};






// تأكيد إختيار البنود والموظفين والمواقع
function Confirm(e) {
    // تغيير مدير الإجراء
    if (oper_type == oper_changeManger) { Confirm_changeManager(e); }

    // الموظفيين الإداريين
    else if (oper_type == oper_emps_mang) { Confirm_changeEmps_Mang(e); }

    // تغيير مدير الموقع
    else if (oper_type == oper_changeSiteManger) { Confirm_changeSiteManger(e); }
    //المسولون بالتنفيذ
    else if (oper_type == oper_changeSiteEmps) { Confirm_changeSiteEmps(e); }
    else if (oper_type == oper_change_part_type) { Confirm_change_part_type(e); }



}
var select_myUser = "select_myUser";
var select_proj_d = "select_proj_d";
var select_Task = "select_Task";
var select_site = "select_site";
var select_part_type = "select_part_type";

function Select_All(Exception_Table, IsSelect) {
    if (typeof isSelect != "boolean") { IsSelect = true; }
    var oe = "";
    oe.checked = IsSelect;
    var o2 = "";
    o2.checked = !IsSelect;


    // زر اختيار كل القوالب أو الإلغاء
    checkAll_tmp_User(oe);


    // زر اختيار كل القوالب أو الإلغاء
    checkAll_tmp_part_type(oe);

    // زر إختيار كل البنود أو الإلغاء
    checkAll_tmp_Proj_d(oe);

    // زر اختيار أو الغاء المستخدمين
    check_tmp_All_Task(oe);


    // زر إختيار المواقع أو الإلغاء
    checkAll_tmp_Location(oe);

    // var checkAll_tmp_Proj_dqq = document.querySelector(".checkAll_tmp_Proj_d");
    // var checkAll_tmp_Locationqq = document.querySelector(".checkAll_tmp_Location");
    // var checkAll_tmp_Userqq = document.querySelector(".checkAll_tmp_User");
    // checkAll_tmp_Proj_dqq.checked = IsSelect;
    // checkAll_tmp_Locationqq.checked = IsSelect;
    // checkAll_tmp_Userqq.checked = IsSelect;

    // زر اختيار كل القوالب أو الإلغاء
    if (Exception_Table == select_myUser) { checkAll_tmp_User(o2); } //checkAll_tmp_Userqq.checked=!IsSelect; }

    // زر إختيار كل البنود أو الإلغاء
    if (Exception_Table == select_proj_d) { checkAll_tmp_Proj_d(o2); }// checkAll_tmp_Proj_dqq.checked=!IsSelect; }

    // زر اختيار أو الغاء المستخدمين
    // if (Exception_Table == select_Task) check_tmp_All_Task(o2);


    // زر إختيار المواقع أو الإلغاء
    if (Exception_Table == select_site) { checkAll_tmp_Location(o2); }// checkAll_tmp_Locationqq.checked=!IsSelect; }

    // زر إختيار المواقع أو الإلغاء
    if (Exception_Table == select_part_type) { checkAll_tmp_part_type(o2); }// checkAll_tmp_Locationqq.checked=!IsSelect; }
}
//تغيير المدير
function changeManger(e) {
    oper_type = oper_changeManger;
    oper_Id = e.parentElement.parentElement.querySelectorAll('[data-row_id]')[0].dataset.row_id;

    show_hide_One(show_user, true);
    //إحضار البيانات
    if (oper_Id) {
        try {
            var myUser_Select = document.querySelectorAll('.tmp_user');
            myUser_Select.forEach(e => e.checked = false);
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                if (current.mang_name) {
                    myUser_Select.forEach(ee => {
                        ee.dataset.row_id == current.mang_name ? ee.checked = true : ee.checked = false;
                        //console.log(ee.querySelector('[data-row_id]'));
                        //ee.querySelector('[data-row_id]').dataset.row_id == current.mang_name ? ee.checked = true : ee.checked = false;
                    });
                }
            }
        } catch (z) { console.log("err=>", z); }
    }
    ReLoad_tmpAllSelection();

}

// مدير الموقع
function change_site_mang(e) {
    oper_type = oper_changeSiteManger;
    oper_Id = e.parentElement.parentElement.querySelectorAll('[data-row_id]')[0].dataset.row_id;

    show_hide_One(show_user, true);

    // var dt_tmp_proj_d = document.querySelector(".dt_tmp_proj_d");
    // var dt_tmp_site = document.querySelector(".dt_tmp_site");
    // var dt_tmp_user = document.querySelector(".dt_tmp_user");
    // var cmdConfirm = document.querySelector(".cmdConfirm");
    // cmdConfirm.classList.remove("visually-hidden");
    // dt_tmp_user.classList.remove("visually-hidden");

    //إحضار البيانات
    if (oper_Id) {
        try {
            var myUser_Select = document.querySelectorAll('.tmp_user');
            myUser_Select.forEach(e => e.checked = false);
            // console.log(myUser_Select);
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                if (current.site_mang) {
                    myUser_Select.forEach(ee => {
                        ee.dataset.row_id == current.site_mang ? ee.checked = true : ee.checked = false;
                        //console.log(ee.querySelector('[data-row_id]'));
                        //ee.querySelector('[data-row_id]').dataset.row_id == current.mang_name ? ee.checked = true : ee.checked = false;
                    });
                }
            }
        } catch (z) { console.log("err=>", z); }
    }
    ReLoad_tmpAllSelection();

    //  console.log("change_site_mang", e);
}

// الموظفيين الإداريين
function change_emps_mang(e) {
    oper_type = oper_emps_mang;
    oper_Id = e.parentElement.parentElement.querySelectorAll('[data-row_id]')[0].dataset.row_id;
    Show_All(true);


    //إحضار البيانات
    if (oper_Id) {
        try {
            var myUser_Select = document.querySelectorAll('.tmp_user');
            myUser_Select.forEach(e => e.checked = false);
            // console.log(myUser_Select);
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                // if (current.site_mang) {
                //     loadSite_mang(current.site_mang);
                // }
            }
        } catch (z) { console.log("err=>", z); }
    }
    ReLoad_tmpAllSelection();


}


// تغيير التفتييت
function change_part_type(e) {
    oper_type = oper_change_part_type;
    oper_Id = e.parentElement.parentElement.querySelectorAll('[data-row_id]')[0].dataset.row_id;
    //Show_All();
    //hide_All();

    show_hide_One(show_part_type, true);


    //إحضار البيانات
    if (oper_Id) {
        try {

            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                // if (current.site_mang) {
                //     loadSite_mang(current.site_mang);
                // }
            }
        } catch (z) { console.log("err=>", z); }
    }
    ReLoad_tmp_part_type_Element();


}



// المسؤولون بالتنفيذ
function change_site_emps(e) {
    oper_type = oper_changeSiteEmps;
    oper_Id = e.parentElement.parentElement.querySelectorAll('[data-row_id]')[0].dataset.row_id;
    Show_All(true);


    //إحضار البيانات
    if (oper_Id) {
        try {
            var myUser_Select = document.querySelectorAll('.tmp_user');
            myUser_Select.forEach(e => e.checked = false);
            // console.log(myUser_Select);
            var current = Mydb_AllSelection_tmp.find(w => w.id == oper_Id);
            if (current) {
                // if (current.site_mang) {
                //     loadSite_mang(current.site_mang);
                // }
            }
        } catch (z) { console.log("err=>", z); }
    }
    ReLoad_tmpAllSelection();

}


//#endregion




//#endregion





var table_User = "myuser";
var table_Site = "sites";
var table_proj_d = "proj_d";



function expandAll() {
    try {
        tree.expandAll();
    } catch {
        ReLoad_tree();
        tree.expandAll();
    }

}

function collapseAll() {
    try {
        tree.collapseAll();
    } catch {
        ReLoad_tree();
        tree.collapseAll();
    }
}


//-------------------------------------------------------------------------------------------------



var oper_type = "";
var oper_all = "all";
var oper_one = "one";
var oper_changeManger = "changeManger";
var oper_changeSiteManger = "changeSiteManger";
var oper_changeSiteEmps = "oper_changeSiteEmps";
var oper_emps_mang = "emps_mang";
var oper_change_part_type = "changepart_type";


var oper_Id = "";


var myData = [];
var forAll_site = sites.map(a => new Itemx(a.id, a.name));
var forAll_proj_d = proj_d.map(a => new Itemx(a.id, a.name));
var forAll_myuser = myuser.map(a => new Itemx(a.id, a.name));


// var MyModal = new bootstrap.Modal(document.getElementById('MyModal'));

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
        if (myData[index1].myuser.length == 0) { myData[index1].myuser = myuser.map(a => new Itemx(a.id, a.name)); }
        if (myData[index1].proj_d.length == 0) { myData[index1].proj_d = proj_d.map(a => new Itemx(a.id, a.name)); }
        if (myData[index1].sites.length == 0) { myData[index1].sites = sites.map(a => new Itemx(a.id, a.name)); }
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
            if (w.myuser.length == 0) { w.myuser = myuser.map(a => new Itemx(a.id, a.name)); }
            if (w.proj_d.length == 0) { w.proj_d = proj_d.map(a => new Itemx(a.id, a.name)); }
            if (w.sites.length == 0) { w.sites = sites.map(a => new Itemx(a.id, a.name)); }

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
var tree;
var other_Tree;
//تشغيل الجدول
function Open_Datatable(dataTableId, data, Isfixed, scroollYSize, columns) {
    if (!scroollYSize) scroollYSize = "39vh";
    var DT_Option = {
        data: data,
        columns: columns,
        dom: "tr",
        //dom: 'l<"H"Rf>t<"F"ip>',
        ordering: false,
        retrieve: true,

        rowReorder: false,
        colReorder: false,//تحريك الأعمدة
        "jQueryUI": true,
        //------------------------------------------
        //تثبيت الأعمدة
        // scrollY: scroll_Y,
        // scrollX: scroll_X,
        // scrollCollapse: scroll_Collapse,
        fixedColumns: {
            left: 1,
            right: 1
        },
        //        scrollY: "50vh",
        scrollY: scroollYSize,

        scrollX: Isfixed,
        scrollCollapse: Isfixed,
        paging: false,
        autoWidth: true,

        // `<input type="hidden" class="site" />
        //     <input type = "hidden" class= "myuser" />
        //     <input type="hidden" class="proj_d" />
        //     <button class="btn btn-primary cmdProj_d" onclick="cmdProj_d(this)">البنود </button>
        //     <button class="btn btn-success cmdSite" onclick="cmdSite(this)">المواقع</button>
        //     <button class="btn btn-dark cmdMyUser" onclick="cmdMyUser(this)">الأشخاص</button>
        //     <button class="btn btn-warning cmdTable" onclick="cmdTable(this)">الإجراءات</button>`

        columnDefs: [
            {
                defaultContent: "",
                targets: "_all",
            },
            // { orderable: true, className: 'reorder', targets: 0 },
            // { orderable: false, targets: '_all' }
        ],
        // rowReorder: {
        //     dataSrc: 'sn',
        //     // editor: editor
        // },
        //select: true,
        // buttons: [
        //     { extend: 'create', editor: editor },
        //     { extend: 'edit', editor: editor },
        //     { extend: 'remove', editor: editor }
        // ]
    };


    if (!Isfixed) {
        //scrollY: "50vh",
        //delete DT_Option.scrollY;
        //DT_Option.scrollY = "300px";
        delete DT_Option.fixedColumns;
        delete DT_Option.scrollX;
        delete DT_Option.scrollCollapse;

    }
    // function resizePage() {
    //     const container = $("#TableContainer");
    //     const height = container.height() - container.find(".dataTables_scrollHead").height();
    //     updateDataTable(height + "px");
    // };

    // var resizeTimer;

    // $(window).resize(function () {
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(resizePage, 100);
    // });

    // function updateDataTable(scrollHeight) {
    //     $('#example').DataTable(
    //         {
    //             destroy: true,
    //             paging: false,
    //             "bFilter": false,
    //             "bInfo": false,
    //             scrollY: scrollHeight,
    //             columnDefs: [{ width: "16%", targets: 0 }]
    //         }
    //     );
    // }

    // $(document).ready(function () {
    //     updateDataTable('1px'); // give it any height, it will be changed by the timer event, but it needs some size for the page to work
    //     resizeTimer = setTimeout(resizePage, 100);
    // });


    var dt = $('#' + dataTableId).DataTable(DT_Option);
    if (dt) {

        other_Tree = new $.fn.dataTable.TreeGrid(dt, {
            left: 15,
            expandAll: true,
            expandIcon: '<img class="tree_button" src="/img/plus.png">',
            collapseIcon: '<img class="tree_button" src="/img/minus.png">',
        });
    }






    dt.on('click', 'tr', function (e) {
        try {
            // console.log(e.target.parentNode);
            var eel = e.target.parentNode.querySelector('[type="checkbox"]');

            // console.log(eel);
            eel.checked = !eel.checked;
        } catch { }
    });

    tr_Event_Click();
    return dt;




}

function tr_Event_Click() {

    document.querySelectorAll('table tr').forEach(x => {
        x.onclick = function (e) {
            try {

                //console.log(e.target.parentNode);
                var eel = e.target.parentNode.querySelector('[type="checkbox"]');
                if (eel != e.target) {
                    // console.log(e.target);
                    if (!e.target.classList.contains("tree_button")) {
                        if (!e.target.classList.contains("treegrid-control-open")) {
                            if (!e.target.classList.contains("treegrid-control")) {

                                //eel.checked = !eel.checked;
                                eel.click();
                            }
                        }
                    }

                }
            } catch { }
        };
    });

}
//زر فتح شاشة القوالب
function cmdAdd_Tmp(oe) {
    showAdd_Tmp();
}

// زر اختيار كل القوالب أو الإلغاء
function check_tmp_All_Task(oe) {
    document.querySelectorAll('.tmp_task').forEach(el => {
        el.checked = oe.checked;
        //  checkChange(el);
    }
    );
}
// زر نوع التفتيت
function checkAll_tmp_part_type(oe) {
    document.querySelectorAll('.dt_tmp_part_type').forEach(el => {
        el.checked = oe.checked;
        //  checkChange(el);
    });
}
// زر إختيار كل البنود أو الإلغاء
function checkAll_tmp_Proj_d(oe) {
    document.querySelectorAll('.tmp_proj_d').forEach(el => {
        el.checked = oe.checked;
        //  checkChange(el);
    }
    );
}
function checkAll_tmp_User(oe) {
    document.querySelectorAll('.tmp_user').forEach(el => {
        el.checked = oe.checked;
        //  checkChange(el);
    }
    );
}
// زر إختيار المواقع أو الإلغاء
function checkAll_tmp_Location(oe) {
    document.querySelectorAll('.tmp_site').forEach(el => {
        el.checked = oe.checked;
        //  checkChange(el);
    }
    );
}





var tmpTable;
var tmpAllSelection;

var tmpUser;
var tmpProj_d;
var tmpSite;
var tmpPart_type;
var cmdSavetmp;


// شاشة القوالب



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
        var chk1 = "unchecked";
        tr2 += ` <tr>
                    <td><input class="groupD" type="checkbox" ${chk1}  data-id="${w.id}"   onclick=""> </td>
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
        var chk2 = "unchecked";
        tr3 += ` <tr>
                    <td><input class="groupE" type="checkbox" ${chk2}  data-id="${w.id}"   onclick=""> </td>
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
    if (oper_type == oper_all) {

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
function setCheckAll_out(e) {
    try {
        var classname = e.className;
        var allz = "";

        if (classname == "tmp_user") { allz = "checkAll_tmp_User"; }
        if (classname == "tmp_site") { allz = "checkAll_tmp_Location"; }
        if (classname == "tmp_proj_d") { allz = "checkAll_tmp_Proj_d"; }
        if (classname == "tmp_task") { allz = "check_tmp_All_Task"; }
        if (classname == "tmp_part_type") { allz = "checkAll_tmp_part_type"; }

        document.querySelector(`input.${allz}`).checked =
            document.querySelectorAll(`.${classname}`).length ==
            document.querySelectorAll(`.${classname}:checked`).length;
    } catch { }
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

function msgbox_tmp(msg, title) {




    if (!title) { title = "-------"; }
    if (!msg) { msg = "----------"; }


    var liveToast = document.querySelector("#liveToast");
    var msg_Caption = document.querySelector(".me-auto");
    var msg_element = document.querySelector(".toast-body");

    msg_Caption.innerHTML = title;
    msg_element.innerHTML = msg;



    var toast = new bootstrap.Toast(liveToast);

    toast.show();



}


//#region  حفظ البيانات-----------------------------------------------------------
function insert_Tmp_To_Select(e) {
    var modal_MyErr_elem_Name = "modal_MyErr";
    var modal_MyErr = new bootstrap.Modal(document.querySelector("#" + modal_MyErr_elem_Name));
    var modal_Err_title = document.querySelector(".modal_Err_title");
    var modal_Err_desc = document.querySelector(".modal_Err_desc");

    var mytmp_Select = document.querySelectorAll('.tmp_task:checked');
    var mySite_Select = document.querySelectorAll('.tmp_site:checked');
    var myUser_Select = document.querySelectorAll('.tmp_user:checked');
    var myProj_d_Select = document.querySelectorAll('.tmp_proj_d:checked');

    if (mytmp_Select.length == 0) {



        msgbox_tmp("لم تقم بإختيار احد قوالب الإجراءات يمين الشاشة ، نرجو الإختيار المواصلة", "خطأ لا يمكن اتمام العملية");
        return;
    }
    try {
        mytmp_Select.forEach(w => {
            var id = w.dataset.row_id;
            var tmp = All_Temp.find(x => x.id == id);
            Mydb_AllSelection_tmp.push(new Task_AllSelection(tmp.name, tmp.children));


        });
    } catch { }

    ReLoad_tmpAllSelection();
}
// شاشة العرض
var screen;
var MyModal;


function cmdSavetmp_Click(e) {
    var modal_MyErr_elem_Name = "modal_MyErr";
    var modal_MyErr = new bootstrap.Modal(document.querySelector("#" + modal_MyErr_elem_Name));
    var modal_Err_title = document.querySelector(".modal_Err_title");
    var modal_Err_desc = document.querySelector(".modal_Err_desc");

    var mytmp_Select = document.querySelectorAll('.tmp_task:checked');
    var mySite_Select = document.querySelectorAll('.tmp_site:checked');
    var myUser_Select = document.querySelectorAll('.tmp_user:checked');
    var myProj_d_Select = document.querySelectorAll('.tmp_proj_d:checked');

    if (Mydb_AllSelection_tmp.length == 0) {

        msgbox_tmp("لم تقم بإختيار احد قوالب الإجراءات يمين الشاشة ، نرجو الإختيار المواصلة", "خطأ لا يمكن اتمام العملية");
        return;
    }

    try {
        Mydb_AllSelection_tmp.forEach(w => {

            // console.log("w=>", w);
            w.id;



            var id = w.id;
            // console.log("id=", id);
            var name = w.name;
            // console.log("name=", name);
            var childs = w.children;
            // console.log("childs=", childs);
            //ToDO: تعديل البيانات الموجودة عن طريق الأمر الحالي
            var item = Mydb_Table.find(x => x.id == w.id);
            if (item) {
                item.name = name;
                item.emps_mang = Copy_Object(w.emps_mang);
                item.site_emps = Copy_Object(w.site_emps);
                item.site_mang = Copy_Object(w.site_mang);
                item.mang_name = Copy_Object(w.mang_name);
                item.part_type = Copy_Object(w.part_type);
                item.children = childs;
            } else {


                var www = new Task(id, name, 0, 0, 0, 0, 0, 0, "", Copy_Object(childs));
                // console.log("www=", www);
                // console.log("Mydb_AllSelection_tmp--1=", Mydb_Table);
                www.emps_mang = Copy_Object(w.emps_mang);
                www.site_emps = Copy_Object(w.site_emps);
                www.site_mang = Copy_Object(w.site_mang);
                www.mang_name = Copy_Object(w.mang_name);
                www.part_type = Copy_Object(w.part_type);
            }
            Mydb_Table.push(www);

            // console.log("Mydb_AllSelection_tmp--2=", Mydb_Table);

        });
    } catch { }

    change_Serial_No(Mydb_Table);
    RemoveAll_Tmp_Select();
    Reload_dataTable();





    // شاشة العرض
    // if (!screen) { screen = document.getElementById("MyTmpAction"); }
    // if (!MyModal) { MyModal = new bootstrap.Modal(screen); }

    tr_Event_Click();


    MyModal.hide();
}

function RemoveAll_Tmp_Select() {
    Mydb_AllSelection_tmp = [];
}
function Reload_Tree() {
    if (dataTable) {
        if (!tree) {
            tree = new $.fn.dataTable.TreeGrid(dataTable, {
                left: 15,
                expandAll: true,
                expandIcon: '<img class="tree_button" src="/img/plus.png">',
                collapseIcon: '<img class="tree_button" src="/img/minus.png">',
            });
        }

        else {
            //  tree.
        }
    }
    tr_Event_Click();
}
function Reload_dataTable() {
    if (!dataTable) {
        dataTable = Open_Datatable("MyTable", Mydb_Table, true, "65vh", [
            {
                // ازرار الإختيار
                className: "forChild",
                data: function (data, type, row) { return GetChkBox(data); },
            },
            {
                // زر الشجرة
                className: "treegrid-control forChild ",
                data: function (item) {
                    if (item.children != null && item.children.length > 0) {
                        return '<img class="tree_button" src="/img/plus.png">';
                    }
                    return "";
                },
            },
            // { "data": "ab" },
            {
                // الرقم التسلسلي
                data: "id",
                className: "myId forChild subChild",
            },
            {
                // الإجراءات
                data: "name",
                // render: function (data, type, row) {
                //     return GetName(data);
                // },
            },
            {
                // نوع التفتيت
                data: "part_type",
                render: function (data, type, row) {
                    return Getpart_type(data);
                },
            },
            {
                // الإدارة
                data: "mang",
                render: function (data, type, row) {
                    return GetMang(data);
                },
            },
            {
                // مدير الإجراء
                data: "mang_name",
                render: function (data, type, row) {
                    return GetUser_Name(data);
                },
            },
            {
                // الموظفيين الإداريين
                data: "emps_mang",
                render: function (data, type, row) {
                    return GetUsers_Name_From_OneTask(data);
                },
            },
            {
                // البنود
                data: "proj_ds",
                render: function (data, type, row) {
                    return GetProj_ds_Name(data);
                },
            },
            {
                // المواقع
                data: "sites",
                render: function (data, type, row) {
                    return GetSites_Name(data);
                },
            },
            {
                // مدير الموقع
                data: "site_mang",
                render: function (data, type, row) {
                    return GetUser_Name(data);
                },
            },
            {
                // المسؤولون بالتنفيذ
                data: "site_emps",
                render: function (data, type, row) {
                    return GetUsers_Name_From_OneTask(data);
                },
            },

            {
                // المهام الفنية
                data: "tech",
                render: function (data, type, row) {
                    return GetTech(data);
                },
            },
            {
                // المدة
                data: "duration",
                render: function (data, type, row) {
                    return GetDuration(data);
                },
            },
            {
                //البداية والنهاية
                data: "start_end_date",
                render: function (data, type, row) {
                    return Get_start_end_date(row);
                },
            },
            {
                data: "descrp",
            },
            {
                data: "natur",
                render: function (data, type, row) {
                    return GetNatur(data);
                },
            },
            {
                data: "proc_type",
                render: function (data, type, row) {
                    return GetProc_Type(data);
                },
            },
            {
                data: "percent_one",
                render: function (data, type, row) {
                    return GetPercent_text(data);
                },
            },
            {
                data: "percent_all",
                render: function (data, type, row) {
                    return GetPercent_All_Text(data);
                },
            },
            {
                data: "sn",
                render: function (data, type, row) {
                    return `
                        <div class="btn-group-vertical">  <button class="btn btn-warning cmdProj_d" onclick="cmdProj_d(this)">تعديلات </button>
                        <button class="btn btn-dark cmdTable" onclick="cmdTable(this)">ربط بجداول</button></div>`;
                },
            },
        ]);
    }
    else {


        dataTable.clear();
        dataTable.rows.add(Mydb_Table);
        dataTable.draw();
    }
    if (dataTable) {
        if (!tree) {
            tree = new $.fn.dataTable.TreeGrid(dataTable, {
                left: 15,
                expandAll: true,
                expandIcon: '<img class="tree_button" src="/img/plus.png">',
                collapseIcon: '<img class="tree_button" src="/img/minus.png">',
            });
        }

        else {
            //  tree.
        }
    }
    tr_Event_Click();
}

// تحميل البيانات المؤقته
function ReLoad_tmpAllSelection() {
    if (!tmpAllSelection) {
        tmpAllSelection = Open_Datatable("tmp_allSelection_Element", Mydb_AllSelection_tmp, false, "39vh",
            [
                {
                    // ازرار الإختيار
                    className: "forChild",
                    // width: "20%",

                    data: function (data, type, row) { return GetChkBox(data, "tmp_AllSelection"); },
                },
                {
                    // زر الشجرة
                    className: "treegrid-control forChild ",
                    // width: "20%",

                    data: function (item) {
                        if (item.children != null && item.children.length > 0) {
                            return '<img class="tree_button" src="/img/plus.png">';
                        }
                        return "";
                    },
                },
                // { "data": "ab" },

                {
                    // width: "60vw",
                    // الإجراءات
                    data: "name",

                },
                {
                    // نوع التفتيت
                    data: "part_type",
                    render: function (data, type, row) {
                        return `<button onclick="change_part_type(this)">***</button> ` + Getpart_type(data);
                    },
                },
                {
                    // مدير الإجراء
                    data: "mang_name",
                    render: function (data, type, row) {
                        return `<button onclick="changeManger(this)">***</button> ` + GetUser_Name(data);
                    },
                },
                {

                    // الموظفيين الإداريين
                    data: "emps_mang",
                    render: function (data, type, row) {
                        return `<button onclick="change_emps_mang(this)">***</button> ` + GetUsers_Name_From_OneTask(data);
                    },
                },

                {
                    // مدير الموقع
                    data: "site_mang",
                    render: function (data, type, row) {
                        return `<button onclick="change_site_mang(this)">***</button> ` + GetUser_Name(data);
                    },
                },
                {
                    // المسؤولون بالتنفيذ
                    data: "site_emps",
                    render: function (data, type, row) {
                        return `<button onclick="change_site_emps(this)">***</button> ` + GetUsers_Name_From_OneTask(data);
                    },
                },

            ]);
    }
    else {
        tmpAllSelection.clear();
        tmpAllSelection.rows.add(Mydb_AllSelection_tmp);
        tmpAllSelection.draw();
    }
    // if (tmpAllSelection) {
    //     if (!tmpTree) {
    //         console.log("tmptree");
    //         tmpTree = new $.fn.dataTable.TreeGrid(tmpAllSelection, {
    //             left: 15,
    //             expandAll: true,
    //             expandIcon: '<img class="tree_button" src="/img/plus.png">',
    //             collapseIcon: '<img class="tree_button" src="/img/minus.png">',
    //         });
    //     }
    // }
    tr_Event_Click();
    return tmpAllSelection;
}

//تحميل بيانات القوالب
function ReLoad_tmp_Task_Element() {
    if (!tmpTable) {
        tmpTable = Open_Datatable("tmp_Task_Element", All_Temp, false, "39vh",
            [
                {
                    // ازرار الإختيار
                    className: "forChild",
                    // width: "20%",

                    data: function (data, type, row) { return GetChkBox(data, "tmp_task"); },
                },
                {
                    // زر الشجرة
                    className: "treegrid-control forChild ",
                    // width: "20%",

                    data: function (item) {
                        if (item.children != null && item.children.length > 0) {
                            return '<img class="tree_button" src="/img/plus.png">';
                        }
                        return "";
                    },
                },
                // { "data": "ab" },

                {
                    // width: "60vw",
                    // الإجراءات
                    data: "name",

                }
            ]);
    }
    else {
        tmpTable.clear();
        tmpTable.rows.add(All_Temp);
        tmpTable.draw();
    }
    // if (tmpAllSelection) {
    //     if (!tmpTree) {
    //         console.log("tmptree");
    //         tmpTree = new $.fn.dataTable.TreeGrid(tmpAllSelection, {
    //             left: 15,
    //             expandAll: true,
    //             expandIcon: '<img class="tree_button" src="/img/plus.png">',
    //             collapseIcon: '<img class="tree_button" src="/img/minus.png">',
    //         });
    //     }
    // }
    tr_Event_Click();
    return tmpTable;
}

// تحميل بينات المواقع
function Reload_tmp_Site_Element() {

    if (!tmpSite) {
        tmpSite = Open_Datatable("tmp_Site_Element", sites, false, "39vh",
            [
                {
                    // ازرار الإختيار
                    className: "forChild",
                    // width: "20%",

                    data: function (data, type, row) { return GetChkBox(data, "tmp_site"); },
                },
                // {
                //     // زر الشجرة
                //     className: "treegrid-control forChild ",
                //     // width: "20%",

                //     data: function (item) {
                //         if (item.children != null && item.children.length > 0) {
                //             return '<img class="tree_button" src="/img/plus.png">';
                //         }
                //         return "";
                //     },
                // },
                // { "data": "ab" },

                {
                    // width: "60vw",
                    // الإجراءات
                    data: "name",

                }
            ]);
    }
    else {
        tmpSite.clear();
        tmpSite.rows.add(sites);
        tmpSite.draw();
    }
    // if (tmpAllSelection) {
    //     if (!tmpTree) {
    //         console.log("tmptree");
    //         tmpTree = new $.fn.dataTable.TreeGrid(tmpAllSelection, {
    //             left: 15,
    //             expandAll: true,
    //             expandIcon: '<img class="tree_button" src="/img/plus.png">',
    //             collapseIcon: '<img class="tree_button" src="/img/minus.png">',
    //         });
    //     }
    // }
    tr_Event_Click();
    return tmpSite;
}

function ReLoad_tmp_User_Element() {
    if (!tmpUser) {
        tmpUser = Open_Datatable("tmp_User_Element", myuser, false, "39vh",
            [
                {
                    // ازرار الإختيار
                    className: "forChild",
                    // width: "20%",

                    data: function (data, type, row) { return GetChkBox(data, "tmp_user"); },
                },
                // {
                //     // زر الشجرة
                //     className: "treegrid-control forChild ",
                //     // width: "20%",

                //     data: function (item) {
                //         if (item.children != null && item.children.length > 0) {
                //             return '<img class="tree_button" src="/img/plus.png">';
                //         }
                //         return "";
                //     },
                // },
                // { "data": "ab" },

                {
                    // width: "60vw",
                    // الإجراءات
                    data: "name",

                }
            ]);
    }
    else {
        tmpUser.clear();
        tmpUser.rows.add(myuser);
        tmpUser.draw();
    }
    // if (tmpAllSelection) {
    //     if (!tmpTree) {
    //         console.log("tmptree");
    //         tmpTree = new $.fn.dataTable.TreeGrid(tmpAllSelection, {
    //             left: 15,
    //             expandAll: true,
    //             expandIcon: '<img class="tree_button" src="/img/plus.png">',
    //             collapseIcon: '<img class="tree_button" src="/img/minus.png">',
    //         });
    //     }
    // }
    tr_Event_Click();
    return tmpUser;

}


function ReLoad_tmp_Proj_d_Element() {

    if (!tmpProj_d) {
        tmpProj_d = Open_Datatable("tmp_Proj_d_Element", proj_d, false, "39vh",
            [
                {
                    // ازرار الإختيار
                    className: "forChild",
                    // width: "20%",

                    data: function (data, type, row) { return GetChkBox(data, "tmp_proj_d"); },
                },
                // {
                //     // زر الشجرة
                //     className: "treegrid-control forChild ",
                //     // width: "20%",

                //     data: function (item) {
                //         if (item.children != null && item.children.length > 0) {
                //             return '<img class="tree_button" src="/img/plus.png">';
                //         }
                //         return "";
                //     },
                // },
                // { "data": "ab" },

                {
                    // width: "60vw",
                    // الإجراءات
                    data: "name",

                }
            ]);
    }
    else {
        tmpProj_d.clear();
        tmpProj_d.rows.add(proj_d);
        tmpProj_d.draw();
    }
    // if (tmpAllSelection) {
    //     if (!tmpTree) {
    //         console.log("tmptree");
    //         tmpTree = new $.fn.dataTable.TreeGrid(tmpAllSelection, {
    //             left: 15,
    //             expandAll: true,
    //             expandIcon: '<img class="tree_button" src="/img/plus.png">',
    //             collapseIcon: '<img class="tree_button" src="/img/minus.png">',
    //         });
    //     }
    // }
    tr_Event_Click();
    return tmpProj_d;
}



function ReLoad_tmp_part_type_Element() {

    if (!tmpPart_type) {
        tmpPart_type = Open_Datatable("tmp_part_type_Element", Par_types, false, "39vh",
            [
                {
                    // ازرار الإختيار
                    className: "forChild",
                    // width: "20%",

                    data: function (data, type, row) { return GetChkBox(data, "tmp_par_type"); },
                },
                // {
                //     // زر الشجرة
                //     className: "treegrid-control forChild ",
                //     // width: "20%",

                //     data: function (item) {
                //         if (item.children != null && item.children.length > 0) {
                //             return '<img class="tree_button" src="/img/plus.png">';
                //         }
                //         return "";
                //     },
                // },
                // { "data": "ab" },

                {
                    // width: "60vw",
                    // الإجراءات
                    data: "name",

                }
            ]);
    }
    else {
        tmpPart_type.clear();
        tmpPart_type.rows.add(Par_types);
        tmpPart_type.draw();
    }
    // if (tmpAllSelection) {
    //     if (!tmpTree) {
    //         console.log("tmptree");
    //         tmpTree = new $.fn.dataTable.TreeGrid(tmpAllSelection, {
    //             left: 15,
    //             expandAll: true,
    //             expandIcon: '<img class="tree_button" src="/img/plus.png">',
    //             collapseIcon: '<img class="tree_button" src="/img/minus.png">',
    //         });
    //     }
    // }
    tr_Event_Click();
    return tmpPart_type;
}


var tmpTree;
//لعرض شاشة الإضافة
function showAdd_Tmp() {
    // زر الحفظ
    cmdSavetmp = document.getElementById("cmdSavetmp");

    ReLoad_tmp_Task_Element();
    ReLoad_tmpAllSelection();
    Reload_tmp_Site_Element();
    ReLoad_tmp_User_Element();
    ReLoad_tmp_Proj_d_Element();

    // شاشة العرض
    screen = document.getElementById("MyTmpAction");
    MyModal = new bootstrap.Modal(screen);

    MyModal.show();
    var oldId = localStorage.getItem("projId");
    if (oldId) {
        proj_name.value = oldId;
    }
}

//#endregion  حفظ البيانات-----------------------------------------------------------