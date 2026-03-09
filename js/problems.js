// js/problems.js
// 必ず UTF-8 (BOM無し) で保存してください。
// このファイルはグローバル変数 `PROBLEMS.questions` を提供します。

window.PROBLEMS = {
  "questions": [
        {
            "id": "Q001",
            "rows": 1,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"2S.png"},
                {"r":1,"c":4,"file":"1S.png"}
            ],
            "solution": [
                0,0,1,0
            ]
        },
        {
            "id":"Q002",
            "rows": 3,
            "cols": 3,
            "hints": [
                {"r":1,"c":1,"file":"1S.png"},
                {"r":1,"c":3,"file":"4S.png"}
            ],
            "solution": [
                0,1,0,
                1,1,0,
                1,0,0
            ]
        },
        {
            "id":"Q003",
            "rows": 3,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"1S.png"},
                {"r":2,"c":2,"file":"3S.png"},
                {"r":2,"c":4,"file":"3S.png"}
            ],
            "solution": [
                0,1,1,1,1,
                1,0,0,0,1,
                1,1,1,1,1
            ]
        },
        {
            "id":"Q004",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"1S.png"},
                {"r":1,"c":3,"file":"4S.png"},
                {"r":2,"c":4,"file":"4S.png"},
                {"r":4,"c":4,"file":"4S.png"}
            ],
            "solution": [
                0,1,0,0,
                1,1,0,0,
                1,1,1,1,
                0,0,0,0
            ]
        },
        {
            "id":"Q005",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":2,"file":"2S.png"},
                {"r":1,"c":4,"file":"3S.png"},
                {"r":3,"c":1,"file":"3S.png"},
                {"r":3,"c":2,"file":"3S.png"},
                {"r":3,"c":4,"file":"3X.png"}
            ],
            "solution": [
                0,0,1,0,
                1,1,1,0,
                0,0,1,0,
                0,1,1,1
            ]
        },
        {
            "id":"Q006",
            "rows": 1,
            "cols": 5,
            "hints": [
                {"r":1,"c":2,"file":"0N.png"},
                {"r":1,"c":3,"file":"1N.png"},
                {"r":1,"c":5,"file":"1N.png"}
            ],
            "solution": [
                0,0,0,1,0
            ]
        },
        {
            "id":"Q007",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"4S.png"},
                {"r":1,"c":4,"file":"3S.png"},
                {"r":2,"c":4,"file":"3N.png"},
                {"r":3,"c":2,"file":"3N.png"},
                {"r":3,"c":4,"file":"2N.png"}
            ],
            "solution": [
                0,1,1,0,
                0,1,1,0,
                0,0,1,0
            ]
        },
        {
            "id":"Q008",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":2,"file":"5N.png"},
                {"r":1,"c":4,"file":"3N.png"},
                {"r":3,"c":2,"file":"4N.png"},
                {"r":3,"c":4,"file":"2N.png"}
            ],
            "solution": [
                1,0,1,0,
                1,1,1,1,
                1,0,0,0
            ]
        },
        {
            "id":"Q009",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"2S.png"},
                {"r":1,"c":2,"file":"3N.png"},
                {"r":3,"c":1,"file":"1S.png"}
            ],
            "solution": [
                0,0,1,1,
                1,1,0,1,
                0,1,1,1
            ]
        },
        {
            "id":"Q010",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"1N.png"},
                {"r":1,"c":3,"file":"4S.png"},
                {"r":2,"c":1,"file":"3N.png"},
                {"r":3,"c":3,"file":"5N.png"},
                {"r":4,"c":1,"file":"5S.png"},
                {"r":4,"c":3,"file":"2X.png"}
            ],
            "solution": [
                0,0,0,1,
                0,1,1,1,
                1,1,0,1,
                0,0,0,0
            ]
        },
        {
            "id":"Q011",
            "rows": 2,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"3N.png"},
                {"r":1,"c":4,"file":"2S.png"},
                {"r":2,"c":2,"file":"F3.png"},
                {"r":2,"c":3,"file":"F23.png"},
                {"r":2,"c":4,"file":"F2.png"}
            ],
            "solution": [
                0,1,0,0,
                1,1,1,1
            ]
        },
        {
            "id":"Q012",
            "rows": 3,
            "cols": 3,
            "hints": [
                {"r":2,"c":1,"file":"F3.png"},
                {"r":2,"c":2,"file":"3SF2.png"},
                {"r":3,"c":1,"file":"F3.png"},
                {"r":3,"c":2,"file":"F2.png"}
            ],
            "solution": [
                0,1,1,
                0,0,1,
                1,1,1
            ]
        },
        {
            "id":"Q013",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":2,"file":"F3.png"},
                {"r":1,"c":3,"file":"F24.png"},
                {"r":2,"c":1,"file":"5S.png"},
                {"r":2,"c":3,"file":"F1.png"},
                {"r":3,"c":2,"file":"F4.png"},
                {"r":3,"c":4,"file":"4S.png"},
                {"r":4,"c":2,"file":"F13.png"},
                {"r":4,"c":3,"file":"F2.png"}
            ],
            "solution": [
                0,1,1,0,
                0,0,1,0,
                0,1,1,0,
                0,1,1,0
            ]
        },
        {
            "id":"Q014",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":2,"file":"3N.png"},
                {"r":2,"c":2,"file":"F34.png"},
                {"r":2,"c":3,"file":"F2.png"},
                {"r":2,"c":4,"file":"F4.png"},
                {"r":3,"c":2,"file":"F1.png"},
                {"r":3,"c":3,"file":"3N.png"},
                {"r":3,"c":4,"file":"8SF1.png"},
                {"r":4,"c":2,"file":"F3.png"},
                {"r":4,"c":3,"file":"F2.png"}
            ],
            "solution": [
                0,0,1,0,
                0,1,1,0,
                1,1,0,0,
                0,0,0,0
            ]
        },
        {
            "id":"Q015",
            "rows": 1,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"3S.png"},
                {"r":1,"c":2,"file":"2L.png"}
            ],
            "solution": [
                0,0,0,1,1,0
            ]
        },
        {
            "id":"Q016",
            "rows": 2,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"1N.png"},
                {"r":1,"c":4,"file":"2L.png"},
                {"r":2,"c":4,"file":"1L.png"}
            ],
            "solution": [
                0,1,1,0,
                0,0,1,0
            ]
        },
        {
            "id":"Q017",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":2,"file":"3N.png"},
                {"r":1,"c":3,"file":"F4.png"},
                {"r":1,"c":4,"file":"1L.png"},
                {"r":2,"c":1,"file":"F3.png"},
                {"r":2,"c":2,"file":"F2.png"},
                {"r":2,"c":3,"file":"F1.png"},
                {"r":3,"c":1,"file":"4L.png"}
            ],
            "solution": [
                1,0,0,0,
                1,1,0,0,
                0,1,1,0
            ]
        },
        {
            "id":"Q018",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"1L.png"},
                {"r":2,"c":3,"file":"1L.png"},
                {"r":3,"c":1,"file":"2L.png"},
                {"r":4,"c":4,"file":"2L.png"}
            ],
            "solution": [
                0,0,0,0,
                0,1,0,0,
                0,1,0,0,
                1,1,0,0
            ]
        },
        {
            "id":"Q019",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"2L.png"},
                {"r":1,"c":2,"file":"2N.png"},
                {"r":1,"c":3,"file":"F34.png"},
                {"r":1,"c":4,"file":"F2.png"},
                {"r":2,"c":3,"file":"F1.png"},
                {"r":3,"c":1,"file":"F4.png"},
                {"r":4,"c":1,"file":"F1.png"},
                {"r":4,"c":3,"file":"2S.png"},
                {"r":4,"c":4,"file":"3L.png"}
            ],
            "solution": [
                0,0,1,1,
                0,0,1,0,
                0,1,1,1,
                0,1,0,0
            ]
        },
        {
            "id":"Q020",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":3,"file":"5S.png"},
                {"r":2,"c":1,"file":"2L.png"},
                {"r":4,"c":2,"file":"3N.png"},
                {"r":4,"c":4,"file":"1X.png"}
            ],
            "solution": [
                0,1,0,0,
                0,1,1,0,
                0,1,1,0,
                0,0,1,0
            ]
        },
        {
            "id":"Q021",
            "rows": 1,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"1L.png"},
                {"r":1,"c":2,"file":"D1.png"},
                {"r":1,"c":6,"file":"D1.png"},
                {"r":1,"c":7,"file":"3P.png"}
            ],
            "solution": [
                0,0,0,1,0,0,0
            ]
        },
        {
            "id":"Q022",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"2S.png"},
                {"r":1,"c":2,"file":"D2.png"},
                {"r":2,"c":4,"file":"1P.png"},
                {"r":3,"c":1,"file":"D2.png"},
                {"r":3,"c":2,"file":"2P.png"}
            ],
            "solution": [
                0,0,1,1,
                1,1,1,0,
                0,0,1,1
            ]
        },
        {
            "id":"Q023",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"D3.png"},
                {"r":1,"c":2,"file":"4L.png"},
                {"r":1,"c":4,"file":"D1.png"},
                {"r":2,"c":1,"file":"D2.png"},
                {"r":3,"c":4,"file":"D3.png"},
                {"r":4,"c":1,"file":"D1.png"},
                {"r":4,"c":4,"file":"D2.png"}
            ],
            "solution": [
                0,0,1,0,
                0,1,1,1,
                1,1,0,0,
                0,1,1,0
            ]
        },
        {
            "id":"Q024",
            "rows": 3,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"4P.png"},
                {"r":1,"c":4,"file":"4P.png"},
                {"r":3,"c":2,"file":"3P.png"},
                {"r":3,"c":5,"file":"1P.png"}
            ],
            "solution": [
                0,0,0,0,1,
                1,1,1,1,1,
                0,0,0,1,0
            ]
        },
        {
            "id":"Q025",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":3,"file":"D1.png"},
                {"r":1,"c":5,"file":"2N.png"},
                {"r":2,"c":3,"file":"3P.png"},
                {"r":3,"c":1,"file":"D1.png"},
                {"r":5,"c":2,"file":"D1.png"},
                {"r":5,"c":4,"file":"3S.png"}
            ],
            "solution": [
                0,1,0,1,0,
                0,1,0,1,0,
                0,1,0,1,1,
                1,1,1,1,1,
                1,0,0,0,1
            ]
        },
        {
            "id":"Q026",
            "rows": 2,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"4P.png"},
                {"r":1,"c":4,"file":"F4.png"},
                {"r":2,"c":2,"file":"6S.png"},
                {"r":2,"c":4,"file":"F1.png"}
            ],
            "solution": [
                0,1,1,0,
                0,0,0,0
            ]
        },
        {
            "id":"Q027",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"2L.png"},
                {"r":1,"c":2,"file":"3P.png"},
                {"r":2,"c":1,"file":"D1.png"},
                {"r":3,"c":3,"file":"4L.png"},
                {"r":4,"c":2,"file":"2N.png"}
            ],
            "solution": [
                0,0,0,1,
                0,1,1,1,
                1,1,0,1,
                0,0,0,0
            ]
        },
        {
            "id":"Q028",
            "rows": 3,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"1N.png"},
                {"r":1,"c":2,"file":"1N.png"},
                {"r":1,"c":6,"file":"2N.png"},
                {"r":2,"c":4,"file":"3P.png"},
                {"r":3,"c":6,"file":"4L.png"}
            ],
            "solution": [
                0,0,0,1,1,0,
                0,1,0,0,1,0,
                0,1,1,1,1,0
            ]
        },
        {
            "id":"Q029",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"6S.png"},
                {"r":1,"c":2,"file":"2P.png"},
                {"r":4,"c":1,"file":"3P.png"},
                {"r":5,"c":5,"file":"5L.png"}
            ],
            "solution": [
                0,0,1,1,1,
                1,0,0,1,1,
                1,1,0,0,1,
                0,1,1,1,1,
                0,0,0,1,0
            ]
        },
        {
            "id":"Q030",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":4,"file":"4L.png"},
                {"r":2,"c":2,"file":"2P.png"},
                {"r":3,"c":2,"file":"D3.png"},
                {"r":4,"c":5,"file":"D3.png"},
                {"r":5,"c":1,"file":"4L.png"},
                {"r":5,"c":4,"file":"2X.png"}
            ],
            "solution": [
                1,1,1,0,0,
                0,0,1,0,1,
                0,0,1,1,1,
                1,1,1,0,0,
                0,1,1,0,0
            ]
        },
        {
            "id":"Q031",
            "rows": 1,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"B5.png"},
                {"r":1,"c":3,"file":"1N.png"},
                {"r":1,"c":5,"file":"2M.png"}
            ],
            "solution": [
                0,1,0,0,0
            ]
        },
        {
            "id":"Q032",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":2,"file":"1K.png"},
                {"r":1,"c":3,"file":"1K.png"},
                {"r":1,"c":4,"file":"0K.png"},
                {"r":2,"c":2,"file":"0K.png"},
                {"r":2,"c":3,"file":"2K.png"}
            ],
            "solution": [
                1,0,0,0,
                1,0,0,0,
                1,0,0,0
            ]
        },
        {
            "id":"Q033",
            "rows": 4,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"0M.png"},
                {"r":1,"c":5,"file":"0K.png"},
                {"r":3,"c":2,"file":"B24568.png"},
                {"r":3,"c":3,"file":"4M.png"},
                {"r":3,"c":4,"file":"4M.png"}
            ],
            "solution": [
                0,1,1,1,0,
                1,1,0,1,1,
                1,0,0,0,1,
                1,1,0,1,1
            ]
        },
        {
            "id":"Q034",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":2,"c":2,"file":"B2589.png"},
                {"r":2,"c":4,"file":"4S.png"},
                {"r":4,"c":1,"file":"3P.png"},
                {"r":4,"c":3,"file":"1K.png"}
            ],
            "solution": [
                1,1,1,0,
                1,0,0,0,
                1,1,1,1,
                0,0,0,1
            ]
        },
        {
            "id":"Q035",
            "rows": 4,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"2M.png"},
                {"r":1,"c":2,"file":"4N.png"},
                {"r":1,"c":4,"file":"0M.png"},
                {"r":4,"c":1,"file":"1L.png"},
                {"r":4,"c":3,"file":"2K.png"},
                {"r":4,"c":4,"file":"3M.png"}
            ],
            "solution": [
                0,0,1,0,
                1,1,1,1,
                0,1,0,1,
                0,0,0,0
            ]
        },
        {
            "id":"Q036",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"B456.png"},
                {"r":1,"c":4,"file":"4P.png"},
                {"r":1,"c":5,"file":"B12578.png"},
                {"r":2,"c":5,"file":"3N.png"},
                {"r":3,"c":3,"file":"3K.png"},
                {"r":5,"c":1,"file":"2P.png"},
                {"r":5,"c":2,"file":"F3.png"},
                {"r":5,"c":3,"file":"F2.png"},
                {"r":5,"c":5,"file":"B258.png"}
            ],
            "solution": [
                0,1,0,0,0,
                0,1,0,1,0,
                1,1,0,1,1,
                0,1,0,1,0,
                0,1,1,1,0
            ]
        },
        {
            "id":"Q037",
            "rows": 4,
            "cols": 6,
            "hints": [
                {"r":1,"c":2,"file":"B2456.png"},
                {"r":1,"c":3,"file":"3M.png"},
                {"r":1,"c":6,"file":"4L.png"},
                {"r":2,"c":3,"file":"F4.png"},
                {"r":3,"c":2,"file":"F34.png"},
                {"r":3,"c":3,"file":"F12.png"},
                {"r":3,"c":4,"file":"F34.png"},
                {"r":3,"c":5,"file":"F2.png"},
                {"r":4,"c":1,"file":"1K.png"},
                {"r":4,"c":2,"file":"F1.png"},
                {"r":4,"c":3,"file":"2M.png"},
                {"r":4,"c":4,"file":"F1.png"},
                {"r":4,"c":5,"file":"B2456.png"}
            ],
            "solution": [
                0,0,0,1,1,0,
                1,0,1,1,1,1,
                1,1,1,0,0,1,
                0,1,0,0,0,0
            ]
        },
        {
            "id":"Q038",
            "rows": 4,
            "cols": 5,
            "hints": [
                {"r":1,"c":4,"file":"1K.png"},
                {"r":2,"c":1,"file":"B4589.png"},
                {"r":2,"c":2,"file":"4S.png"},
                {"r":4,"c":5,"file":"5S.png"}
            ],
            "solution": [
                0,1,1,0,0,
                0,0,1,1,0,
                1,0,1,1,0,
                1,1,1,1,0
            ]
        },
        {
            "id":"Q039",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":3,"file":"4M.png"},
                {"r":2,"c":2,"file":"5P.png"},
                {"r":4,"c":2,"file":"B2456.png"},
                {"r":4,"c":5,"file":"2M.png"},
                {"r":5,"c":3,"file":"3M.png"}
            ],
            "solution": [
                0,0,0,0,0,
                1,0,1,0,1,
                1,1,1,1,1,
                1,0,1,1,0,
                0,0,0,1,0
            ]
        },
        {
            "id":"Q040",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"1K.png"},
                {"r":1,"c":5,"file":"0M.png"},
                {"r":4,"c":5,"file":"2X.png"},
                {"r":5,"c":1,"file":"B123457.png"},
                {"r":5,"c":3,"file":"B2456.png"}
            ],
            "solution": [
                0,0,0,1,0,
                0,0,1,1,1,
                0,0,1,0,1,
                0,1,1,0,0,
                0,1,0,0,0
            ]
        },
        {
            "id":"Q041",
            "rows": 2,
            "cols": 6,
            "hints": [
                {"r":1,"c":3,"file":"3R.png"},
                {"r":2,"c":1,"file":"Y3.png"},
                {"r":2,"c":5,"file":"Y1.png"}
            ],
            "solution": [
                1,1,0,1,1,0,
                0,1,1,1,0,0
            ]
        },
        {
            "id":"Q042",
            "rows": 3,
            "cols": 5,
            "hints": [
                {"r":1,"c":5,"file":"Y3.png"},
                {"r":2,"c":3,"file":"Y2.png"},
                {"r":3,"c":1,"file":"Y2.png"},
                {"r":3,"c":2,"file":"4R.png"}
            ],
            "solution": [
                1,1,1,1,0,
                1,0,0,1,0,
                0,0,1,1,1
            ]
        },
        {
            "id":"Q043",
            "rows": 5,
            "cols": 6,
            "hints": [
                {"r":1,"c":2,"file":"D3.png"},
                {"r":1,"c":5,"file":"F4.png"},
                {"r":2,"c":1,"file":"Y1.png"},
                {"r":2,"c":5,"file":"F1.png"},
                {"r":3,"c":3,"file":"Y1.png"},
                {"r":4,"c":3,"file":"D3.png"},
                {"r":4,"c":5,"file":"Y1.png"},
                {"r":4,"c":6,"file":"B13456.png"},
                {"r":5,"c":1,"file":"5S.png"}
            ],
            "solution": [
                0,0,0,1,0,0,
                0,1,1,1,0,0,
                0,1,0,1,1,0,
                1,1,0,1,0,0,
                0,0,0,1,0,0
            ]
        },
        {
            "id":"Q044",
            "rows": 6,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"Y3.png"},
                {"r":1,"c":4,"file":"F3.png"},
                {"r":1,"c":5,"file":"F24.png"},
                {"r":1,"c":6,"file":"Y2.png"},
                {"r":2,"c":2,"file":"2N.png"},
                {"r":2,"c":3,"file":"F4.png"},
                {"r":2,"c":5,"file":"F1.png"},
                {"r":2,"c":6,"file":"6S.png"},
                {"r":3,"c":2,"file":"F3.png"},
                {"r":3,"c":3,"file":"F12.png"},
                {"r":5,"c":2,"file":"3M.png"},
                {"r":5,"c":5,"file":"6S.png"},
                {"r":5,"c":6,"file":"F4.png"},
                {"r":6,"c":1,"file":"Y1.png"},
                {"r":6,"c":3,"file":"3P.png"},
                {"r":6,"c":5,"file":"F3.png"},
                {"r":6,"c":6,"file":"F12.png"}
            ],
            "solution": [
                0,0,1,1,1,0,
                0,0,0,1,1,0,
                1,0,0,1,0,0,
                1,1,1,1,0,1,
                1,0,1,1,0,1,
                0,0,0,1,1,1
            ]
        },
        {
            "id":"Q045",
            "rows": 6,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"Y1.png"},
                {"r":1,"c":4,"file":"F4.png"},
                {"r":2,"c":2,"file":"D1.png"},
                {"r":2,"c":4,"file":"F1.png"},
                {"r":2,"c":6,"file":"Y1.png"},
                {"r":3,"c":1,"file":"4S.png"},
                {"r":4,"c":3,"file":"Y2.png"},
                {"r":5,"c":2,"file":"D1.png"},
                {"r":6,"c":7,"file":"7L.png"}
            ],
            "solution": [
                0,1,1,1,1,0,0,
                0,0,1,1,1,0,1,
                0,1,1,0,1,1,1,
                1,1,0,0,0,0,1,
                1,0,1,1,0,1,1,
                0,0,0,1,1,1,0
            ]
        },
        {
            "id":"Q046",
            "rows": 4,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"6R.png"},
                {"r":1,"c":2,"file":"5R.png"},
                {"r":1,"c":3,"file":"4R.png"},
                {"r":1,"c":4,"file":"3R.png"},
                {"r":1,"c":5,"file":"2R.png"},
                {"r":1,"c":8,"file":"D1.png"},
                {"r":2,"c":2,"file":"3K.png"},
                {"r":2,"c":8,"file":"Y1.png"},
                {"r":3,"c":1,"file":"5R.png"},
                {"r":3,"c":3,"file":"4N.png"},
                {"r":4,"c":6,"file":"D1.png"},
                {"r":4,"c":7,"file":"2P.png"}
            ],
            "solution": [
                0,0,0,0,0,1,0,0,
                0,0,0,0,1,1,1,0,
                0,0,0,1,1,0,1,1,
                1,1,1,1,1,0,0,1
            ]
        },
        {
            "id":"Q047",
            "rows": 4,
            "cols": 6,
            "hints": [
                {"r":1,"c":2,"file":"5S.png"},
                {"r":1,"c":3,"file":"Y2.png"},
                {"r":1,"c":5,"file":"2R.png"},
                {"r":3,"c":3,"file":"3R.png"},
                {"r":4,"c":6,"file":"2R.png"}
            ],
            "solution": [
                1,0,0,1,0,0,
                1,1,0,1,1,0,
                1,1,0,0,1,1,
                0,1,1,1,1,0
            ]
        },
        {
            "id":"Q048",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"inftyR.png"},
                {"r":2,"c":1,"file":"2K.png"},
                {"r":2,"c":4,"file":"3K.png"},
                {"r":3,"c":3,"file":"7K.png"},
                {"r":4,"c":4,"file":"1M.png"}
            ],
            "solution": [
                0,1,1,1,1,
                0,0,0,0,1,
                1,1,0,0,1,
                1,1,0,0,1,
                1,1,1,1,1
            ]
        },
        {
            "id":"Q049",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"8R.png"},
                {"r":4,"c":3,"file":"2P.png"}
            ],
            "solution": [
                0,1,1,1,1,
                0,0,1,1,1,
                1,0,0,1,1,
                1,1,0,1,1,
                1,1,1,1,0
            ]
        },
        {
            "id":"Q050",
            "rows": 5,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"B13456.png"},
                {"r":1,"c":3,"file":"Y1.png"},
                {"r":1,"c":6,"file":"5R.png"},
                {"r":3,"c":1,"file":"F4.png"},
                {"r":4,"c":1,"file":"F1.png"},
                {"r":4,"c":2,"file":"4P.png"},
                {"r":4,"c":5,"file":"F4.png"},
                {"r":5,"c":2,"file":"1K.png"},
                {"r":5,"c":3,"file":"4X.png"},
                {"r":5,"c":5,"file":"F1.png"}
            ],
            "solution": [
                0,0,0,0,0,0,
                0,1,1,1,1,0,
                1,1,0,1,1,1,
                1,0,0,0,1,1,
                0,0,0,0,1,1
            ]
        },
        {
            "id":"Q051",
            "rows": 2,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"D2.png"},
                {"r":1,"c":7,"file":"2M.png"},
                {"r":2,"c":1,"file":"I.png"},
                {"r":2,"c":3,"file":"I.png"},
                {"r":2,"c":5,"file":"A24.png"},
                {"r":2,"c":7,"file":"I.png"}
            ],
            "solution": [
                0,1,1,1,1,1,0,
                0,1,0,1,0,0,0
            ]
        },
        {
            "id":"Q052",
            "rows": 3,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"I.png"},
                {"r":1,"c":2,"file":"T4.png"},
                {"r":2,"c":3,"file":"A457.png"},
                {"r":2,"c":5,"file":"T1.png"},
                {"r":3,"c":1,"file":"I.png"},
                {"r":3,"c":5,"file":"A4.png"}
            ],
            "solution": [
                0,0,0,1,1,
                1,1,0,1,0,
                0,1,1,1,0
            ]
        },
        {
            "id":"Q053",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"1P.png"},
                {"r":1,"c":4,"file":"3K.png"},
                {"r":1,"c":5,"file":"5S.png"},
                {"r":2,"c":3,"file":"I.png"},
                {"r":2,"c":5,"file":"I.png"},
                {"r":3,"c":1,"file":"I.png"},
                {"r":5,"c":1,"file":"I.png"},
                {"r":5,"c":2,"file":"2K.png"},
                {"r":5,"c":4,"file":"B256.png"},
                {"r":5,"c":5,"file":"I.png"}
            ],
            "solution": [
                0,1,0,0,0,
                1,1,0,1,0,
                0,1,1,1,1,
                1,1,1,1,0,
                0,0,1,0,0
            ]
        },
        {
            "id":"Q054",
            "rows": 5,
            "cols": 6,
            "hints": [
                {"r":1,"c":2,"file":"A47.png"},
                {"r":1,"c":5,"file":"A457.png"},
                {"r":3,"c":2,"file":"I.png"},
                {"r":3,"c":4,"file":"I.png"},
                {"r":4,"c":1,"file":"5L.png"},
                {"r":4,"c":5,"file":"3R.png"},
                {"r":5,"c":2,"file":"I.png"},
                {"r":5,"c":4,"file":"I.png"},
                {"r":5,"c":6,"file":"A2.png"}
            ],
            "solution": [
                1,0,0,1,0,1,
                1,1,1,1,1,1,
                0,0,1,0,0,1,
                0,1,1,1,0,0,
                0,0,1,0,0,0
            ]
        },
        {
            "id":"Q055",
            "rows": 6,
            "cols": 8,
            "hints": [
                {"r":1,"c":2,"file":"T4.png"},
                {"r":1,"c":5,"file":"F3.png"},
                {"r":1,"c":6,"file":"F23.png"},
                {"r":1,"c":7,"file":"F2.png"},
                {"r":1,"c":8,"file":"F4.png"},
                {"r":2,"c":1,"file":"I.png"},
                {"r":2,"c":3,"file":"I.png"},
                {"r":2,"c":5,"file":"F3.png"},
                {"r":2,"c":6,"file":"F2.png"},
                {"r":2,"c":7,"file":"F3.png"},
                {"r":2,"c":8,"file":"F12.png"},
                {"r":3,"c":1,"file":"5R.png"},
                {"r":3,"c":4,"file":"3P.png"},
                {"r":3,"c":5,"file":"F4.png"},
                {"r":3,"c":7,"file":"6S.png"},
                {"r":3,"c":8,"file":"F4.png"},
                {"r":4,"c":3,"file":"I.png"},
                {"r":4,"c":5,"file":"F1.png"},
                {"r":4,"c":7,"file":"T4.png"},
                {"r":4,"c":8,"file":"F1.png"},
                {"r":5,"c":2,"file":"5R.png"},
                {"r":5,"c":5,"file":"F34.png"},
                {"r":5,"c":6,"file":"F2.png"},
                {"r":5,"c":7,"file":"F3.png"},
                {"r":5,"c":8,"file":"F2.png"},
                {"r":6,"c":5,"file":"F1.png"},
                {"r":6,"c":6,"file":"F3.png"},
                {"r":6,"c":7,"file":"F23.png"},
                {"r":6,"c":8,"file":"F2.png"}
            ],
            "solution": [
                0,0,0,1,1,1,1,0,
                0,1,0,0,1,1,0,0,
                0,1,1,0,1,0,0,1,
                1,1,0,0,1,1,0,1,
                1,0,0,1,1,1,1,1,
                1,1,1,1,1,0,0,0
            ]
        },
        {
            "id":"Q056",
            "rows": 4,
            "cols": 7,
            "hints": [
                {"r":1,"c":2,"file":"3M.png"},
                {"r":2,"c":1,"file":"T3.png"},
                {"r":2,"c":5,"file":"T2.png"},
                {"r":2,"c":6,"file":"8S.png"},
                {"r":3,"c":2,"file":"7S.png"},
                {"r":4,"c":4,"file":"D1.png"}
            ],
            "solution": [
                0,0,0,1,1,1,0,
                0,1,1,1,0,0,0,
                0,0,1,1,1,0,0,
                0,1,1,0,1,0,0
            ]
        },
        {
            "id":"Q057",
            "rows": 7,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"T2.png"},
                {"r":1,"c":7,"file":"B245.png"},
                {"r":1,"c":8,"file":"T4.png"},
                {"r":2,"c":1,"file":"Y2.png"},
                {"r":2,"c":3,"file":"D2.png"},
                {"r":4,"c":2,"file":"D1.png"},
                {"r":4,"c":4,"file":"D3.png"},
                {"r":5,"c":7,"file":"T2.png"},
                {"r":6,"c":5,"file":"D1.png"},
                {"r":6,"c":6,"file":"3P.png"},
                {"r":7,"c":8,"file":"D2.png"}
            ],
            "solution": [
                0,1,1,1,0,0,0,0,
                0,1,0,1,0,1,1,1,
                0,0,1,1,1,1,0,1,
                1,0,1,0,0,1,0,1,
                1,0,1,1,1,1,0,1,
                1,1,1,0,0,0,1,1,
                1,0,0,0,1,1,1,0
            ]
        },
        {
            "id":"Q058",
            "rows": 6,
            "cols": 9,
            "hints": [
                {"r":1,"c":2,"file":"A57.png"},
                {"r":2,"c":1,"file":"B5.png"},
                {"r":2,"c":5,"file":"I.png"},
                {"r":2,"c":8,"file":"T2.png"},
                {"r":4,"c":4,"file":"A7.png"},
                {"r":4,"c":7,"file":"T3.png"},
                {"r":4,"c":9,"file":"D3.png"},
                {"r":5,"c":1,"file":"T2.png"},
                {"r":5,"c":3,"file":"D3.png"},
                {"r":5,"c":5,"file":"I.png"},
                {"r":6,"c":1,"file":"D2.png"},
                {"r":6,"c":8,"file":"T4.png"}
            ],
            "solution": [
                0,0,0,1,1,1,1,1,1,
                0,0,0,1,0,1,1,0,1,
                1,1,1,0,1,1,0,0,0,
                1,1,0,0,0,1,0,1,0,
                0,1,0,1,0,1,1,1,1,
                0,1,1,1,1,1,1,0,1
            ]
        },
        {
            "id":"Q059",
            "rows": 6,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"0M.png"},
                {"r":1,"c":2,"file":"A57.png"},
                {"r":2,"c":7,"file":"T1.png"},
                {"r":3,"c":2,"file":"I.png"},
                {"r":3,"c":4,"file":"D1.png"},
                {"r":3,"c":8,"file":"B5.png"},
                {"r":4,"c":2,"file":"3R.png"},
                {"r":4,"c":3,"file":"T4.png"},
                {"r":6,"c":2,"file":"I.png"}
            ],
            "solution": [
                0,0,0,0,0,1,1,1,
                0,0,0,0,0,1,0,1,
                0,0,0,0,1,1,1,0,
                0,0,0,1,0,1,1,1,
                0,1,1,1,1,1,0,0,
                0,0,0,0,0,0,0,0
            ]
        },
        {
            "id":"Q060",
            "rows": 6,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"T1.png"},
                {"r":1,"c":5,"file":"1X.png"},
                {"r":2,"c":2,"file":"T1.png"},
                {"r":2,"c":4,"file":"T1.png"},
                {"r":3,"c":1,"file":"T3.png"},
                {"r":3,"c":4,"file":"T4.png"},
                {"r":4,"c":6,"file":"T2.png"},
                {"r":5,"c":4,"file":"T1.png"},
                {"r":5,"c":6,"file":"3L.png"},
                {"r":6,"c":2,"file":"T3.png"},
                {"r":6,"c":5,"file":"3P.png"}
            ],
            "solution": [
                0,1,1,1,0,0,
                0,0,1,0,1,0,
                0,1,1,0,1,1,
                1,1,1,1,1,0,
                0,0,1,0,1,0,
                0,0,1,1,0,0
            ]
        },
        {
            "id":"Q061",
            "rows": 2,
            "cols": 8,
            "hints": [
                {"r":1,"c":2,"file":"3L.png"},
                {"r":1,"c":4,"file":"2E.png"},
                {"r":1,"c":6,"file":"2E.png"},
                {"r":1,"c":8,"file":"1E.png"},
                {"r":2,"c":1,"file":"U.png"}
            ],
            "solution": [
                0,0,1,0,0,0,1,0,
                0,1,1,1,1,1,1,0
            ]
        },
        {
            "id":"Q062",
            "rows": 6,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"5S.png"},
                {"r":1,"c":3,"file":"4S.png"},
                {"r":1,"c":6,"file":"3S.png"},
                {"r":2,"c":1,"file":"4E.png"},
                {"r":2,"c":3,"file":"3E.png"},
                {"r":2,"c":6,"file":"2E.png"},
                {"r":3,"c":4,"file":"U.png"},
                {"r":3,"c":6,"file":"U.png"},
                {"r":4,"c":2,"file":"U.png"},
                {"r":5,"c":6,"file":"U.png"},
                {"r":6,"c":1,"file":"U.png"},
                {"r":6,"c":3,"file":"7S.png"},
                {"r":6,"c":4,"file":"6E.png"}
            ],
            "solution": [
                0,1,0,1,1,0,
                0,1,0,0,1,0,
                0,1,1,0,1,0,
                0,0,1,1,1,1,
                1,1,1,1,1,0,
                0,0,0,0,0,0
            ]
        },
        {
            "id":"Q063",
            "rows": 6,
            "cols": 7,
            "hints": [
                {"r":1,"c":2,"file":"2E.png"},
                {"r":1,"c":6,"file":"2P.png"},
                {"r":2,"c":1,"file":"T3.png"},
                {"r":2,"c":7,"file":"4E.png"},
                {"r":3,"c":4,"file":"A457.png"},
                {"r":4,"c":3,"file":"6E.png"},
                {"r":5,"c":1,"file":"Y1.png"},
                {"r":5,"c":5,"file":"B2456.png"},
                {"r":5,"c":7,"file":"3E.png"},
                {"r":6,"c":3,"file":"T1.png"}
            ],
            "solution": [
                0,0,1,1,1,0,0,
                0,1,1,0,1,0,0,
                1,1,1,0,1,1,1,
                0,0,0,1,1,0,1,
                0,1,1,1,0,0,0,
                0,0,0,1,1,1,1
            ]
        },
        {
            "id":"Q064",
            "rows": 6,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"4S.png"},
                {"r":1,"c":2,"file":"4E.png"},
                {"r":1,"c":4,"file":"B245.png"},
                {"r":1,"c":6,"file":"D1.png"},
                {"r":2,"c":5,"file":"5E.png"},
                {"r":3,"c":4,"file":"0E.png"},
                {"r":4,"c":6,"file":"5S.png"},
                {"r":5,"c":4,"file":"6E.png"},
                {"r":6,"c":1,"file":"3R.png"},
                {"r":6,"c":3,"file":"3K.png"},
                {"r":6,"c":6,"file":"D1.png"}
            ],
            "solution": [
                0,0,1,0,0,0,1,
                0,0,1,1,0,0,1,
                1,1,1,0,1,1,1,
                1,0,1,1,1,0,1,
                1,1,0,0,1,0,0,
                0,0,0,0,1,0,0
            ]
        },
        {
            "id":"Q065",
            "rows": 7,
            "cols": 7,
            "hints": [
                {"r":1,"c":2,"file":"6S.png"},
                {"r":1,"c":6,"file":"6S.png"},
                {"r":2,"c":1,"file":"6E.png"},
                {"r":2,"c":6,"file":"U.png"},
                {"r":2,"c":7,"file":"7E.png"},
                {"r":3,"c":3,"file":"1E.png"},
                {"r":4,"c":1,"file":"U.png"},
                {"r":4,"c":5,"file":"6E.png"},
                {"r":5,"c":1,"file":"B245.png"},
                {"r":6,"c":4,"file":"U.png"},
                {"r":7,"c":1,"file":"U.png"}
            ],
            "solution": [
                0,0,0,0,1,0,0,
                0,0,1,1,1,0,0,
                1,1,0,1,1,0,0,
                0,1,0,1,0,1,1,
                0,1,1,1,0,0,1,
                0,0,1,0,0,0,1,
                0,0,1,1,1,1,1
            ]
        },
        {
            "id":"Q066",
            "rows": 6,
            "cols": 6,
            "hints": [
                {"r":1,"c":1,"file":"B5.png"},
                {"r":1,"c":2,"file":"12E.png"},
                {"r":1,"c":5,"file":"5S.png"},
                {"r":2,"c":6,"file":"U.png"},
                {"r":6,"c":1,"file":"U.png"},
                {"r":6,"c":2,"file":"B13456.png"},
                {"r":6,"c":6,"file":"3N.png"}
            ],
            "solution": [
                0,0,0,1,0,0,
                0,0,0,1,0,0,
                0,0,0,1,0,1,
                1,1,1,1,1,1,
                0,0,1,0,1,1,
                0,0,0,0,1,0
            ]
        },
        {
            "id":"Q067",
            "rows": 4,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"2E.png"},
                {"r":1,"c":2,"file":"U.png"},
                {"r":1,"c":5,"file":"U.png"},
                {"r":2,"c":8,"file":"5P.png"},
                {"r":2,"c":9,"file":"8E.png"},
                {"r":3,"c":3,"file":"U.png"},
                {"r":4,"c":2,"file":"U.png"},
                {"r":4,"c":4,"file":"A25.png"}
            ],
            "solution": [
                0,0,1,1,0,0,0,0,0,
                0,1,1,1,1,1,1,0,0,
                1,1,0,0,0,1,1,0,1,
                1,0,0,0,0,1,1,1,1
            ]
        },
        {
            "id":"Q068",
            "rows": 5,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"4E.png"},
                {"r":1,"c":9,"file":"5L.png"},
                {"r":2,"c":2,"file":"U.png"},
                {"r":2,"c":5,"file":"U.png"},
                {"r":2,"c":7,"file":"I.png"},
                {"r":2,"c":8,"file":"U.png"},
                {"r":3,"c":3,"file":"U.png"},
                {"r":3,"c":4,"file":"B2456.png"},
                {"r":4,"c":7,"file":"B256.png"},
                {"r":4,"c":8,"file":"I.png"},
                {"r":5,"c":1,"file":"A3.png"},
                {"r":5,"c":9,"file":"I.png"}
            ],
            "solution": [
                0,0,1,1,1,1,0,0,0,
                0,0,1,1,0,1,0,0,0,
                1,1,0,0,0,1,1,1,1,
                0,1,1,0,0,1,0,0,0,
                0,0,1,1,1,1,1,1,0
            ]
        },
        {
            "id":"Q069",
            "rows": 8,
            "cols": 8,
            "hints": [
                {"r":1,"c":5,"file":"I.png"},
                {"r":2,"c":2,"file":"A368.png"},
                {"r":2,"c":7,"file":"I.png"},
                {"r":3,"c":8,"file":"I.png"},
                {"r":4,"c":6,"file":"A25.png"},
                {"r":5,"c":5,"file":"A18.png"},
                {"r":5,"c":6,"file":"I.png"},
                {"r":6,"c":2,"file":"A4.png"},
                {"r":6,"c":6,"file":"A5.png"},
                {"r":7,"c":3,"file":"I.png"},
                {"r":7,"c":8,"file":"A247.png"}
            ],
            "solution": [
                0,0,1,1,0,1,1,1,
                0,0,0,1,1,1,0,1,
                1,0,1,1,0,1,0,0,
                1,1,1,0,0,0,1,1,
                1,0,0,0,0,0,0,1,
                1,0,0,0,0,0,1,1,
                1,0,0,1,0,0,1,0,
                1,1,1,1,1,1,1,1
            ]
        },
        {
            "id":"Q070",
            "rows": 7,
            "cols": 7,
            "hints": [
                {"r":1,"c":2,"file":"U.png"},
                {"r":1,"c":3,"file":"A68.png"},
                {"r":1,"c":6,"file":"1M.png"},
                {"r":2,"c":3,"file":"I.png"},
                {"r":2,"c":6,"file":"U.png"},
                {"r":4,"c":7,"file":"7L.png"},
                {"r":5,"c":2,"file":"I.png"},
                {"r":5,"c":6,"file":"U.png"},
                {"r":6,"c":2,"file":"U.png"},
                {"r":6,"c":4,"file":"1X.png"},
                {"r":6,"c":7,"file":"2R.png"}
            ],
            "solution": [
                0,0,0,0,0,0,1,
                0,0,0,0,1,0,1,
                1,0,0,0,1,1,1,
                1,1,0,0,1,0,0,
                1,0,1,1,1,0,0,
                1,0,1,0,0,1,0,
                1,1,1,1,1,1,1
            ]
        },
        {
            "id":"Q071",
            "rows": 2,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"6S.png"},
                {"r":1,"c":2,"file":"4R.png"},
                {"r":1,"c":3,"file":"D.png"},
                {"r":1,"c":5,"file":"Q.png"},
                {"r":1,"c":6,"file":"Y2.png"},
                {"r":1,"c":9,"file":"1C.png"},
                {"r":2,"c":1,"file":"4P.png"},
                {"r":2,"c":2,"file":"5L.png"},
                {"r":2,"c":8,"file":"3S.png"},
                {"r":2,"c":9,"file":"2H.png"}
            ],
            "solution": [
                0,0,0,1,0,0,1,1,0,
                0,0,1,1,1,1,1,0,0
            ]
        },
        {
            "id":"Q072",
            "rows": 6,
            "cols": 9,
            "hints": [
                {"r":1,"c":2,"file":"T3.png"},
                {"r":1,"c":4,"file":"T4.png"},
                {"r":1,"c":5,"file":"3M.png"},
                {"r":1,"c":7,"file":"I.png"},
                {"r":1,"c":9,"file":"I.png"},
                {"r":2,"c":1,"file":"8E.png"},
                {"r":2,"c":7,"file":"2C.png"},
                {"r":2,"c":9,"file":"0C.png"},
                {"r":3,"c":1,"file":"2H.png"},
                {"r":3,"c":2,"file":"3C.png"},
                {"r":4,"c":4,"file":"I.png"},
                {"r":4,"c":7,"file":"I.png"},
                {"r":5,"c":5,"file":"A5.png"},
                {"r":6,"c":2,"file":"0H.png"},
                {"r":6,"c":5,"file":"0C.png"},
                {"r":6,"c":8,"file":"3C.png"},
                {"r":6,"c":9,"file":"B145679.png"}
            ],
            "solution": [
                0,0,1,0,0,0,0,1,0,
                0,1,1,1,0,1,0,1,0,
                0,0,1,1,1,1,1,1,1,
                0,1,1,0,0,1,0,0,1,
                0,1,1,0,0,1,1,0,1,
                0,0,1,0,0,1,0,0,0
            ]
        },
        {
            "id":"Q073",
            "rows": 7,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"3H.png"},
                {"r":1,"c":2,"file":"Y1.png"},
                {"r":1,"c":5,"file":"1H.png"},
                {"r":2,"c":3,"file":"D1.png"},
                {"r":2,"c":7,"file":"D1.png"},
                {"r":3,"c":1,"file":"1C.png"},
                {"r":5,"c":5,"file":"1H.png"},
                {"r":5,"c":6,"file":"I.png"},
                {"r":6,"c":1,"file":"D1.png"},
                {"r":7,"c":1,"file":"2H.png"},
                {"r":7,"c":3,"file":"2N.png"},
                {"r":7,"c":5,"file":"I.png"},
                {"r":7,"c":6,"file":"D1.png"}
            ],
            "solution": [
                0,0,0,1,0,0,0,
                0,0,0,1,0,0,0,
                0,1,0,1,0,1,0,
                1,1,1,1,1,1,1,
                0,1,0,1,0,0,0,
                0,0,0,1,1,0,0,
                0,0,0,1,0,0,0
            ]
        },
        {
            "id":"Q074",
            "rows": 4,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"2N.png"},
                {"r":1,"c":2,"file":"F3.png"},
                {"r":1,"c":3,"file":"DF2.png"},
                {"r":1,"c":5,"file":"B2456.png"},
                {"r":1,"c":7,"file":"D.png"},
                {"r":1,"c":9,"file":"5R.png"},
                {"r":2,"c":1,"file":"F3.png"},
                {"r":2,"c":2,"file":"F23.png"},
                {"r":2,"c":3,"file":"DF2.png"},
                {"r":2,"c":7,"file":"D.png"},
                {"r":2,"c":8,"file":"D.png"},
                {"r":3,"c":1,"file":"2P.png"},
                {"r":3,"c":2,"file":"6N.png"},
                {"r":3,"c":5,"file":"0H.png"},
                {"r":4,"c":2,"file":"4K.png"},
                {"r":4,"c":7,"file":"9L.png"},
                {"r":4,"c":8,"file":"3M.png"},
                {"r":4,"c":9,"file":"4L.png"}
            ],
            "solution": [
                0,0,0,0,0,1,1,1,0,
                1,1,1,0,1,1,1,0,0,
                0,0,1,1,0,1,1,1,0,
                0,0,1,1,1,1,0,0,0
            ]
        },
        {
            "id":"Q075",
            "rows": 6,
            "cols": 8,
            "hints": [
                {"r":1,"c":2,"file":"Q.png"},
                {"r":1,"c":4,"file":"7S.png"},
                {"r":1,"c":6,"file":"Y1.png"},
                {"r":2,"c":1,"file":"1H.png"},
                {"r":2,"c":3,"file":"6E.png"},
                {"r":2,"c":7,"file":"Q.png"},
                {"r":3,"c":6,"file":"0M.png"},
                {"r":3,"c":8,"file":"Y2.png"},
                {"r":4,"c":3,"file":"6C.png"},
                {"r":5,"c":2,"file":"Q.png"},
                {"r":5,"c":4,"file":"B24568.png"},
                {"r":5,"c":7,"file":"2P.png"},
                {"r":5,"c":8,"file":"1M.png"},
                {"r":6,"c":3,"file":"A2.png"},
                {"r":6,"c":7,"file":"Q.png"},
                {"r":6,"c":8,"file":"B5.png"}
            ],
            "solution": [
                0,0,0,0,1,0,0,0,
                0,1,0,1,1,1,0,0,
                0,1,1,1,1,0,1,0,
                1,1,0,1,1,1,1,1,
                1,0,0,0,0,1,0,0,
                1,1,0,1,1,1,0,0
            ]
        },
        {
            "id":"Q076",
            "rows": 8,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"5H.png"},
                {"r":1,"c":2,"file":"Y1.png"},
                {"r":1,"c":4,"file":"D1.png"},
                {"r":1,"c":7,"file":"D2.png"},
                {"r":2,"c":1,"file":"B13456.png"},
                {"r":3,"c":5,"file":"D1.png"},
                {"r":3,"c":7,"file":"4K.png"},
                {"r":4,"c":1,"file":"2M.png"},
                {"r":4,"c":3,"file":"T1.png"},
                {"r":6,"c":1,"file":"T4.png"},
                {"r":6,"c":3,"file":"16C.png"},
                {"r":6,"c":8,"file":"16C.png"},
                {"r":8,"c":1,"file":"0C.png"},
                {"r":8,"c":4,"file":"1H.png"},
                {"r":8,"c":8,"file":"2H.png"}
            ],
            "solution": [
                0,0,0,0,0,1,0,0,
                0,1,1,1,1,1,1,1,
                0,1,1,0,0,0,0,0,
                0,1,0,1,1,1,1,0,
                0,1,1,1,1,1,1,0,
                0,0,0,0,0,1,1,0,
                1,1,1,1,1,1,1,0,
                0,1,1,0,0,0,0,0
            ]
        },
        {
            "id":"Q077",
            "rows": 7,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"U.png"},
                {"r":1,"c":2,"file":"I.png"},
                {"r":1,"c":3,"file":"T4.png"},
                {"r":1,"c":4,"file":"3R.png"},
                {"r":2,"c":1,"file":"I.png"},
                {"r":3,"c":6,"file":"T2.png"},
                {"r":4,"c":7,"file":"0H.png"},
                {"r":6,"c":2,"file":"A25.png"},
                {"r":7,"c":7,"file":"1H.png"}
            ],
            "solution": [
                0,0,0,0,0,0,0,0,
                0,1,1,1,1,1,1,0,
                0,0,1,1,1,0,1,0,
                0,0,1,0,1,1,0,0,
                0,0,0,1,1,1,0,0,
                0,0,0,0,0,1,1,0,
                0,0,0,0,0,0,0,0
            ]
        },
        {
            "id":"Q078",
            "rows": 7,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"I.png"},
                {"r":1,"c":4,"file":"1H.png"},
                {"r":3,"c":1,"file":"I.png"},
                {"r":3,"c":3,"file":"Q.png"},
                {"r":3,"c":4,"file":"I.png"},
                {"r":4,"c":2,"file":"I.png"},
                {"r":5,"c":1,"file":"I.png"},
                {"r":6,"c":1,"file":"Y2.png"},
                {"r":7,"c":4,"file":"3K.png"},
                {"r":7,"c":6,"file":"0C.png"},
                {"r":7,"c":7,"file":"B5.png"},
                {"r":7,"c":8,"file":"Q.png"}
            ],
            "solution": [
                0,0,0,0,1,1,1,1,
                1,1,1,1,1,0,0,1,
                0,0,0,0,1,1,0,1,
                0,0,1,0,1,0,0,1,
                0,1,1,0,0,0,0,1,
                0,0,1,1,1,1,1,1,
                1,1,1,0,0,0,0,0
            ]
        },
        {
            "id":"Q079",
            "rows": 7,
            "cols": 10,
            "hints": [
                {"r":1,"c":1,"file":"5E.png"},
                {"r":1,"c":2,"file":"Y1.png"},
                {"r":1,"c":10,"file":"1E.png"},
                {"r":2,"c":3,"file":"7S.png"},
                {"r":2,"c":5,"file":"1C.png"},
                {"r":3,"c":10,"file":"2N.png"},
                {"r":5,"c":5,"file":"6C.png"},
                {"r":5,"c":10,"file":"A4.png"},
                {"r":6,"c":1,"file":"1H.png"},
                {"r":7,"c":6,"file":"2H.png"},
                {"r":7,"c":8,"file":"3C.png"},
                {"r":7,"c":10,"file":"3H.png"}
            ],
            "solution": [
                0,0,1,1,1,1,1,1,0,0,
                0,1,0,0,0,0,1,1,1,1,
                0,1,1,0,0,0,1,0,0,0,
                0,0,1,1,1,1,1,1,0,0,
                1,1,1,1,0,0,0,1,0,0,
                0,0,0,0,0,0,1,1,0,0,
                0,0,0,0,0,0,1,0,0,0
            ]
        },
        {
            "id":"Q080",
            "rows": 8,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"4C.png"},
                {"r":1,"c":3,"file":"3C.png"},
                {"r":2,"c":7,"file":"B134568.png"},
                {"r":3,"c":2,"file":"B245.png"},
                {"r":4,"c":4,"file":"2H.png"},
                {"r":4,"c":9,"file":"3S.png"},
                {"r":7,"c":2,"file":"2X.png"},
                {"r":7,"c":3,"file":"4K.png"},
                {"r":7,"c":4,"file":"3X.png"},
                {"r":7,"c":6,"file":"7C.png"}
            ],
            "solution": [
                0,1,0,0,0,0,1,1,1,
                0,1,1,1,0,1,0,1,0,
                0,0,0,1,1,1,0,1,0,
                1,1,1,0,1,0,0,1,0,
                1,0,0,0,1,0,0,1,1,
                1,1,0,0,1,0,0,0,1,
                1,0,0,0,1,0,1,0,1,
                1,1,1,1,1,1,1,1,1
            ]
        },
        {
            "id":"Q081",
            "rows": 7,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"Q.png"},
                {"r":1,"c":2,"file":"F3.png"},
                {"r":1,"c":3,"file":"F24.png"},
                {"r":1,"c":4,"file":"4N.png"},
                {"r":1,"c":6,"file":"D.png"},
                {"r":1,"c":7,"file":"D.png"},
                {"r":1,"c":8,"file":"4S.png"},
                {"r":2,"c":3,"file":"F1.png"},
                {"r":3,"c":2,"file":"A24.png"},
                {"r":3,"c":4,"file":"A13.png"},
                {"r":3,"c":7,"file":"I.png"},
                {"r":4,"c":2,"file":"I.png"},
                {"r":4,"c":7,"file":"1H.png"},
                {"r":5,"c":4,"file":"U.png"},
                {"r":5,"c":7,"file":"D.png"},
                {"r":6,"c":7,"file":"2R.png"},
                {"r":7,"c":2,"file":"0M.png"},
                {"r":7,"c":5,"file":"D1.png"}
            ],
            "solution": [
                0,0,1,0,1,1,0,0,
                1,1,1,0,1,1,1,0,
                1,0,0,0,0,1,0,1,
                1,0,0,0,0,1,0,1,
                1,0,0,0,1,1,1,1,
                1,1,1,1,1,1,0,1,
                1,0,1,0,0,0,1,1
            ]
        },
        {
            "id":"Q082",
            "rows": 8,
            "cols": 8,
            "hints": [
                {"r":1,"c":1,"file":"A57.png"},
                {"r":1,"c":2,"file":"0C.png"},
                {"r":1,"c":4,"file":"D.png"},
                {"r":2,"c":1,"file":"D.png"},
                {"r":2,"c":3,"file":"7E.png"},
                {"r":2,"c":5,"file":"6L.png"},
                {"r":4,"c":2,"file":"4E.png"},
                {"r":4,"c":5,"file":"A2.png"},
                {"r":4,"c":6,"file":"Q.png"},
                {"r":5,"c":1,"file":"D.png"},
                {"r":5,"c":5,"file":"A247.png"},
                {"r":5,"c":6,"file":"A136.png"},
                {"r":6,"c":5,"file":"D.png"},
                {"r":7,"c":1,"file":"U.png"},
                {"r":7,"c":8,"file":"A4.png"},
                {"r":8,"c":7,"file":"A1.png"}
            ],
            "solution": [
                0,0,0,1,1,1,1,1,
                0,0,0,1,0,1,0,1,
                1,1,1,1,1,0,0,1,
                0,0,1,0,0,0,0,0,
                0,0,1,0,0,0,0,0,
                1,1,1,0,0,0,0,0,
                0,1,1,1,1,0,0,0,
                0,0,0,0,0,0,0,0
            ]
        },
        {
            "id":"Q083",
            "rows": 7,
            "cols": 10,
            "hints": [
                {"r":1,"c":6,"file":"4S.png"},
                {"r":1,"c":10,"file":"3L.png"},
                {"r":2,"c":1,"file":"1H.png"},
                {"r":2,"c":3,"file":"2P.png"},
                {"r":3,"c":8,"file":"F4.png"},
                {"r":4,"c":8,"file":"F13.png"},
                {"r":4,"c":9,"file":"F2.png"},
                {"r":5,"c":2,"file":"T2.png"},
                {"r":5,"c":4,"file":"Y2.png"},
                {"r":5,"c":6,"file":"2H.png"},
                {"r":6,"c":2,"file":"T4.png"},
                {"r":6,"c":10,"file":"A4.png"},
                {"r":7,"c":4,"file":"2H.png"},
                {"r":7,"c":6,"file":"Y1.png"}
            ],
            "solution": [
                0,1,0,1,0,0,0,0,1,0,
                0,1,0,1,1,1,1,1,1,0,
                0,1,1,1,0,1,1,0,1,0,
                0,0,1,0,0,1,0,0,0,0,
                1,0,1,0,1,0,0,0,0,0,
                1,0,1,1,1,1,0,0,0,0,
                1,1,1,0,0,0,0,0,0,0
            ]
        },
        {
            "id":"Q084",
            "rows": 8,
            "cols": 8,
            "hints": [
                {"r":1,"c":2,"file":"U.png"},
                {"r":1,"c":4,"file":"B245.png"},
                {"r":1,"c":5,"file":"5L.png"},
                {"r":1,"c":6,"file":"2N.png"},
                {"r":1,"c":8,"file":"B1256.png"},
                {"r":2,"c":1,"file":"3M.png"},
                {"r":2,"c":5,"file":"U.png"},
                {"r":3,"c":1,"file":"D.png"},
                {"r":3,"c":5,"file":"U.png"},
                {"r":4,"c":1,"file":"3N.png"},
                {"r":4,"c":7,"file":"U.png"},
                {"r":6,"c":4,"file":"D.png"},
                {"r":6,"c":7,"file":"D.png"},
                {"r":7,"c":2,"file":"3K.png"},
                {"r":7,"c":4,"file":"B24568.png"},
                {"r":8,"c":3,"file":"U.png"}
            ],
            "solution": [
                0,0,1,0,0,0,1,0,
                0,1,1,0,0,0,1,0,
                0,0,1,0,0,1,1,0,
                0,1,1,1,1,1,0,0,
                1,1,1,0,1,1,0,0,
                1,0,0,0,0,1,0,0,
                1,0,0,0,0,1,0,1,
                1,1,0,1,1,1,1,1
            ]
        },
        {
            "id":"Q085",
            "rows": 8,
            "cols": 10,
            "hints": [
                {"r":1,"c":10,"file":"4C.png"},
                {"r":2,"c":5,"file":"D.png"},
                {"r":3,"c":2,"file":"B5.png"},
                {"r":3,"c":4,"file":"A245.png"},
                {"r":3,"c":6,"file":"0H.png"},
                {"r":3,"c":8,"file":"8S.png"},
                {"r":4,"c":3,"file":"U.png"},
                {"r":4,"c":7,"file":"Q.png"},
                {"r":5,"c":4,"file":"Q.png"},
                {"r":5,"c":8,"file":"4R.png"},
                {"r":6,"c":3,"file":"2E.png"},
                {"r":6,"c":5,"file":"4M.png"},
                {"r":6,"c":7,"file":"3P.png"},
                {"r":6,"c":9,"file":"Y2.png"},
                {"r":7,"c":6,"file":"Y1.png"},
                {"r":8,"c":1,"file":"D1.png"}
            ],
            "solution": [
                1,1,1,1,1,1,1,0,0,0,
                1,0,1,1,1,0,1,1,1,0,
                1,0,1,0,1,0,1,0,1,0,
                1,1,0,0,1,1,0,0,1,1,
                1,1,1,0,0,1,1,0,0,1,
                1,0,0,1,0,0,0,1,0,0,
                1,1,0,1,1,0,1,1,0,1,
                0,1,1,1,1,1,1,1,1,1
            ]
        },
        {
            "id":"Q086",
            "rows": 9,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"F34.png"},
                {"r":1,"c":2,"file":"F2.png"},
                {"r":1,"c":6,"file":"9L.png"},
                {"r":1,"c":8,"file":"F3.png"},
                {"r":1,"c":9,"file":"F24.png"},
                {"r":2,"c":1,"file":"F1.png"},
                {"r":2,"c":9,"file":"F1.png"},
                {"r":3,"c":3,"file":"10L.png"},
                {"r":3,"c":7,"file":"1S.png"},
                {"r":4,"c":4,"file":"9L.png"},
                {"r":4,"c":6,"file":"4S.png"},
                {"r":4,"c":9,"file":"7L.png"},
                {"r":5,"c":5,"file":"10L.png"},
                {"r":6,"c":1,"file":"3N.png"},
                {"r":6,"c":4,"file":"7S.png"},
                {"r":6,"c":6,"file":"4N.png"},
                {"r":7,"c":3,"file":"5N.png"},
                {"r":7,"c":7,"file":"9L.png"},
                {"r":8,"c":1,"file":"F4.png"},
                {"r":8,"c":9,"file":"F4.png"},
                {"r":9,"c":1,"file":"F13.png"},
                {"r":9,"c":2,"file":"F2.png"},
                {"r":9,"c":4,"file":"6S.png"},
                {"r":9,"c":8,"file":"F3.png"},
                {"r":9,"c":9,"file":"F12.png"}
            ],
            "solution": [
                1,1,0,0,0,0,0,1,1,
                1,1,1,1,0,1,1,1,1,
                1,1,0,1,1,1,0,1,0,
                0,1,1,0,0,0,1,1,0,
                0,1,1,1,0,1,1,1,0,
                0,0,0,0,1,0,0,1,1,
                1,1,0,1,1,0,0,1,0,
                0,1,1,1,1,1,1,1,0,
                0,0,0,0,0,1,0,0,0
            ]
        },
        {
            "id":"Q087",
            "rows": 9,
            "cols": 9,
            "hints": [
                {"r":1,"c":6,"file":"B13456.png"},
                {"r":1,"c":9,"file":"2P.png"},
                {"r":3,"c":3,"file":"0M.png"},
                {"r":3,"c":7,"file":"2P.png"},
                {"r":4,"c":4,"file":"2P.png"},
                {"r":4,"c":6,"file":"0M.png"},
                {"r":4,"c":9,"file":"B2345.png"},
                {"r":5,"c":5,"file":"4K.png"},
                {"r":6,"c":4,"file":"3P.png"},
                {"r":6,"c":6,"file":"2P.png"},
                {"r":6,"c":9,"file":"B5.png"},
                {"r":7,"c":3,"file":"4K.png"},
                {"r":7,"c":7,"file":"4K.png"},
                {"r":9,"c":9,"file":"D3.png"}
            ],
            "solution": [
                0,0,0,0,0,0,1,0,0,
                0,1,1,1,1,1,1,1,1,
                0,1,0,0,1,1,0,0,1,
                0,1,0,0,1,0,1,0,0,
                0,1,1,1,0,1,1,1,1,
                0,1,1,0,1,0,0,1,0,
                0,1,0,0,1,1,0,1,1,
                0,1,1,0,0,1,1,1,0,
                0,0,1,1,1,1,0,0,0
            ]
        },
        {
            "id":"Q088",
            "rows": 9,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"I.png"},
                {"r":1,"c":3,"file":"Y1.png"},
                {"r":1,"c":9,"file":"I.png"},
                {"r":2,"c":5,"file":"2R.png"},
                {"r":3,"c":3,"file":"Y2.png"},
                {"r":3,"c":7,"file":"A245.png"},
                {"r":3,"c":9,"file":"A4.png"},
                {"r":4,"c":4,"file":"2R.png"},
                {"r":4,"c":6,"file":"I.png"},
                {"r":5,"c":1,"file":"T1.png"},
                {"r":5,"c":5,"file":"3R.png"},
                {"r":5,"c":9,"file":"2R.png"},
                {"r":6,"c":4,"file":"I.png"},
                {"r":6,"c":6,"file":"4R.png"},
                {"r":7,"c":3,"file":"Y2.png"},
                {"r":7,"c":7,"file":"Y1.png"},
                {"r":9,"c":1,"file":"I.png"},
                {"r":9,"c":8,"file":"T2.png"},
                {"r":9,"c":9,"file":"Y1.png"}
            ],
            "solution": [
                0,1,0,0,0,0,0,1,0,
                1,1,1,1,0,1,1,1,0,
                1,0,0,1,1,1,0,1,0,
                1,0,1,0,0,0,0,1,0,
                0,0,1,1,0,0,0,1,0,
                1,1,1,0,0,0,0,1,1,
                1,0,0,1,1,1,0,1,1,
                1,1,0,0,1,1,1,1,0,
                0,1,1,1,1,1,1,0,0
            ]
        },
        {
            "id":"Q089",
            "rows": 9,
            "cols": 9,
            "hints": [
                {"r":1,"c":1,"file":"1H.png"},
                {"r":1,"c":9,"file":"U.png"},
                {"r":3,"c":3,"file":"2C.png"},
                {"r":3,"c":7,"file":"2C.png"},
                {"r":4,"c":4,"file":"4E.png"},
                {"r":4,"c":6,"file":"3E.png"},
                {"r":5,"c":1,"file":"Q.png"},
                {"r":5,"c":5,"file":"0C.png"},
                {"r":5,"c":9,"file":"7C.png"},
                {"r":6,"c":4,"file":"5E.png"},
                {"r":6,"c":6,"file":"2E.png"},
                {"r":7,"c":3,"file":"1C.png"},
                {"r":7,"c":7,"file":"1C.png"},
                {"r":9,"c":1,"file":"2E.png"},
                {"r":9,"c":9,"file":"D.png"}
            ],
            "solution": [
                0,0,0,0,0,0,0,0,0,
                1,1,1,1,1,1,1,1,1,
                0,0,0,0,1,0,0,0,1,
                0,0,0,0,1,0,1,1,1,
                0,0,1,1,0,1,1,0,0,
                1,1,1,0,1,0,1,1,0,
                0,1,0,0,1,0,0,1,0,
                0,1,0,0,1,1,1,1,0,
                0,1,1,1,1,1,0,0,0
            ]
        },
        {
            "id":"Q090",
            "rows": 9,
            "cols": 9,
            "hints": [
                {"r":1,"c":2,"file":"5M.png"},
                {"r":1,"c":6,"file":"0H.png"},
                {"r":2,"c":2,"file":"9S.png"},
                {"r":2,"c":8,"file":"8N.png"},
                {"r":4,"c":6,"file":"1C.png"},
                {"r":5,"c":5,"file":"2X.png"},
                {"r":6,"c":2,"file":"6P.png"},
                {"r":6,"c":8,"file":"4K.png"},
                {"r":7,"c":7,"file":"3R.png"},
                {"r":9,"c":4,"file":"7L.png"},
                {"r":9,"c":6,"file":"2E.png"}
            ],
            "solution": [
                1,0,1,1,1,0,1,1,1,
                1,0,0,0,1,1,1,0,1,
                1,1,0,1,1,0,1,1,1,
                1,0,0,0,1,0,0,1,1,
                1,1,0,1,0,1,1,1,1,
                1,0,1,1,1,1,0,0,1,
                1,0,0,0,0,0,0,1,1,
                1,1,1,1,1,1,1,1,1,
                0,0,1,0,0,0,1,0,0
            ]
        },
        {
            "id":"Q091",
            "rows": 1,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"2X.png"},
                {"r":1,"c":7,"file":"1X.png"}
            ],
            "solution": [
                0,0,0,1,0,0,0
            ]
        },
        {
            "id":"Q092",
            "rows": 8,
            "cols": 8,
            "hints": [
                {"r":1,"c":2,"file":"Y2.png"},
                {"r":1,"c":8,"file":"T1.png"},
                {"r":2,"c":3,"file":"Y1.png"},
                {"r":2,"c":7,"file":"T2.png"},
                {"r":2,"c":8,"file":"3X.png"},
                {"r":3,"c":1,"file":"1X.png"},
                {"r":4,"c":5,"file":"T1.png"},
                {"r":4,"c":8,"file":"2X.png"},
                {"r":6,"c":3,"file":"2X.png"},
                {"r":6,"c":6,"file":"Y3.png"},
                {"r":7,"c":6,"file":"0X.png"},
                {"r":8,"c":5,"file":"3X.png"},
                {"r":8,"c":7,"file":"2X.png"}
            ],
            "solution": [
                0,0,1,1,1,1,1,0,
                0,1,0,0,0,1,0,0,
                0,1,1,1,0,1,1,1,
                0,0,0,1,0,1,1,0,
                1,1,0,1,1,1,1,1,
                1,1,0,1,0,0,0,1,
                1,0,0,1,1,0,1,1,
                1,1,1,1,0,0,0,1
            ]
        },
        {
            "id":"Q093",
            "rows": 7,
            "cols": 7,
            "hints": [
                {"r":1,"c":1,"file":"5X.png"},
                {"r":1,"c":2,"file":"A8.png"},
                {"r":1,"c":5,"file":"3X.png"},
                {"r":1,"c":7,"file":"A4.png"},
                {"r":2,"c":2,"file":"D.png"},
                {"r":2,"c":3,"file":"3X.png"},
                {"r":2,"c":5,"file":"2X.png"},
                {"r":2,"c":7,"file":"U.png"},
                {"r":3,"c":2,"file":"U.png"},
                {"r":5,"c":2,"file":"2X.png"},
                {"r":5,"c":3,"file":"5X.png"},
                {"r":5,"c":5,"file":"A1368.png"},
                {"r":6,"c":7,"file":"A24.png"}
            ],
            "solution": [
                0,0,0,0,0,1,0,
                0,0,0,1,0,1,0,
                1,0,1,1,1,1,1,
                1,1,1,1,0,1,1,
                1,0,0,0,0,0,1,
                1,1,0,1,0,1,0,
                0,1,1,1,1,1,0
            ]
        },
        {
            "id":"Q094",
            "rows": 6,
            "cols": 6,
            "hints": [
                {"r":1,"c":4,"file":"1X.png"},
                {"r":1,"c":5,"file":"3X.png"},
                {"r":3,"c":3,"file":"B12346789.png"},
                {"r":4,"c":4,"file":"3X.png"},
                {"r":5,"c":2,"file":"1X.png"}
            ],
            "solution": [
                0,0,0,0,0,0,
                0,0,0,0,0,0,
                0,0,0,0,1,0,
                0,0,0,0,1,0,
                0,0,0,0,1,0,
                0,0,0,0,0,0
            ]
        },
        {
            "id":"Q095",
            "rows": 5,
            "cols": 5,
            "hints": [
                {"r":1,"c":2,"file":"D1.png"},
                {"r":2,"c":1,"file":"3X.png"},
                {"r":2,"c":5,"file":"2X.png"},
                {"r":4,"c":3,"file":"2X.png"},
                {"r":5,"c":5,"file":"D1.png"}
            ],
            "solution": [
                0,0,1,1,1,
                0,1,1,1,0,
                0,1,1,1,1,
                1,1,0,0,0,
                1,1,1,1,0
            ]
        },
        {
            "id":"Q096",
            "rows": 4,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"F3.png"},
                {"r":1,"c":2,"file":"F24.png"},
                {"r":1,"c":4,"file":"F4.png"},
                {"r":2,"c":1,"file":"2X.png"},
                {"r":2,"c":2,"file":"F1.png"},
                {"r":2,"c":3,"file":"F3.png"},
                {"r":2,"c":4,"file":"F12.png"},
                {"r":3,"c":2,"file":"F3.png"},
                {"r":3,"c":3,"file":"F24.png"},
                {"r":3,"c":4,"file":"1X.png"},
                {"r":4,"c":2,"file":"2X.png"},
                {"r":4,"c":3,"file":"F13.png"},
                {"r":4,"c":4,"file":"F2.png"},
                {"r":4,"c":5,"file":"3X.png"}
            ],
            "solution": [
                1,1,0,1,0,
                0,1,1,1,0,
                0,1,1,0,0,
                0,0,1,1,0
            ]
        },
        {
            "id":"Q097",
            "rows": 4,
            "cols": 5,
            "hints": [
                {"r":1,"c":1,"file":"F3.png"},
                {"r":1,"c":2,"file":"F24.png"},
                {"r":1,"c":4,"file":"F4.png"},
                {"r":2,"c":1,"file":"3X.png"},
                {"r":2,"c":2,"file":"F1.png"},
                {"r":2,"c":3,"file":"F3.png"},
                {"r":2,"c":4,"file":"F12.png"},
                {"r":3,"c":2,"file":"F3.png"},
                {"r":3,"c":3,"file":"F24.png"},
                {"r":3,"c":4,"file":"3X.png"},
                {"r":4,"c":2,"file":"1X.png"},
                {"r":4,"c":3,"file":"F13.png"},
                {"r":4,"c":4,"file":"F2.png"},
                {"r":4,"c":5,"file":"1X.png"}
            ],
            "solution": [
                1,1,0,1,0,
                0,1,1,1,0,
                0,1,1,0,0,
                0,0,1,1,0
            ]
        },
        {
            "id":"Q098",
            "rows": 3,
            "cols": 4,
            "hints": [
                {"r":1,"c":1,"file":"3X.png"},
                {"r":1,"c":4,"file":"3X.png"},
                {"r":2,"c":4,"file":"1X.png"},
                {"r":3,"c":1,"file":"1X.png"},
                {"r":3,"c":2,"file":"Q.png"},
                {"r":3,"c":4,"file":"1X.png"}
            ],
            "solution": [
                0,1,1,0,
                0,1,1,0,
                0,0,1,0
            ]
        },
        {
            "id":"Q099",
            "rows": 5,
            "cols": 10,
            "hints": [
                {"r":2,"c":7,"file":"F0.png"},
                {"r":2,"c":8,"file":"F0.png"},
                {"r":2,"c":9,"file":"F0.png"},
                {"r":3,"c":3,"file":"7X.png"},
                {"r":3,"c":6,"file":"F0.png"},
                {"r":3,"c":7,"file":"F0.png"},
                {"r":3,"c":8,"file":"F0.png"},
                {"r":3,"c":9,"file":"F4.png"},
                {"r":4,"c":9,"file":"F1.png"}
            ],
            "solution": [
                1,1,1,1,1,1,1,1,1,1,
                1,1,1,1,0,0,0,0,0,1,
                1,1,0,0,0,0,0,0,0,1,
                1,1,1,1,1,0,1,1,0,1,
                1,1,1,1,1,1,1,0,1,1
            ]
        },
        {
            "id":"Q100",
            "rows": 10,
            "cols": 10,
            "hints": [
                {"r":1,"c":10,"file":"0X.png"},
                {"r":2,"c":6,"file":"3X.png"},
                {"r":2,"c":7,"file":"0X.png"},
                {"r":3,"c":2,"file":"0X.png"},
                {"r":3,"c":3,"file":"6X.png"},
                {"r":3,"c":4,"file":"5X.png"},
                {"r":3,"c":5,"file":"4X.png"},
                {"r":9,"c":1,"file":"1X.png"},
                {"r":9,"c":2,"file":"0X.png"},
                {"r":10,"c":8,"file":"0X.png"}
            ],
            "solution": [
                1,1,1,1,1,1,1,1,1,0,
                1,1,1,1,0,0,0,1,0,0,
                1,0,0,0,0,0,0,1,0,0,
                1,1,1,1,1,1,0,1,0,0,
                1,1,0,0,0,0,0,1,0,0,
                1,1,1,0,0,1,0,1,0,0,
                1,0,0,0,0,1,1,1,0,0,
                1,1,0,0,0,0,1,0,0,0,
                0,0,0,0,0,1,1,0,0,0,
                0,0,0,0,0,0,1,0,0,0
            ]
        }
    ]
};