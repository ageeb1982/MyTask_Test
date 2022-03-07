var editor; // use a global for the submit and return data rendering in the examples

editor = new $.fn.dataTable.Editor({
    //ajax: '../php/sequence.php',
    data: other,
    table: '#MyTable',
    fields: [
        {
            fieldInfo: 'معلومة',
            label: "التسلسلي",
            name: "id",
        },
        {
            fieldInfo: 'معلومة',
            label: "الإجراءات",
            name: "id_name",

        },
        {
            fieldInfo: 'معلومة',
            label: "الإدارة",
            name: "mang",

        },
        {
            fieldInfo: 'معلومة',
            label: "مدير الإجراء",
            name: "mang_name",

        },
        {
            fieldInfo: 'معلومة',
            label: "الموظفيين الإداريين",
            name: "emps_mang",

        },
        {
            fieldInfo: 'معلومة',
            label: "البنود",
            name: "proj_ds",

        },
        {
            fieldInfo: 'معلومة',
            label: "المواقع",
            name: "sites",

        },
        {
            fieldInfo: 'معلومة',
            label: "مدير الموقع",
            name: "site_mang",

        },
        {
            fieldInfo: 'معلومة',
            label: "المسؤولون بالتنفيذ",
            name: "site_emps",

        },

        {
            fieldInfo: 'معلومة',
            label: "المهام الفنية",
            name: "tech",

        },
        {
            fieldInfo: 'معلومة',
            label: "المدة",
            name: "duration",

        },
        {
            //البداية والنهاية
            name: "start_end_date",
            fieldInfo: 'معلومة',
            label: "البداية والنهاية",
        },
        {
            name: "descrp",
            fieldInfo: 'معلومة',
            label: "الوصف",
        },
        {
            name: "natur",
            fieldInfo: 'معلومة',
            label: "طبيعة العمل",
        },
        {
            name: "proc_type",
            fieldInfo: 'معلومة',
            label: "نوع الإجراء",
        },
        {
            name: "percent",
            fieldInfo: 'معلومة',
            label: "النسبة"

        },
        {
            name: "percent_all",
            fieldInfo: 'معلومة',
            label: "نسبة الكل"
        },




    ]
});
