{\rtf1\ansi\ansicpg949\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset129 AppleSDGothicNeo-Regular;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww29740\viewh17460\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // pages/questions.tsx: \uc0\u50836 \u52397  \u51228 \u54620  \u49884  \u51060 \u47700 \u51068  \u50508 \u47548  \u49888 \u52397  UI \u54252 \u54632 \
\
import React, \{ useState \} from "react";\
import \{ Button \} from "@/components/ui/button";\
import \{ Card, CardContent \} from "@/components/ui/card";\
import \{ useRouter \} from "next/router";\
import Footer from "@/components/Footer";\
\
const questions = [\
  \{ id: 1, type: "emotion", text: "1. 
\f1 \'bf\'e4\'c1\'f2
\f0  
\f1 \'c0\'da\'c1\'d6
\f0  
\f1 \'b4\'c0\'b3\'a2\'b4\'c2
\f0  
\f1 \'b0\'a8\'c1\'a4\'c0\'ba
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 2, type: "emotion", text: "2. 
\f1 \'b1\'d7
\f0  
\f1 \'b0\'a8\'c1\'a4\'c0\'bb
\f0  
\f1 \'c0\'da\'c1\'d6
\f0  
\f1 \'b4\'c0\'b3\'a2\'b0\'d4
\f0  
\f1 \'b5\'c7\'b4\'c2
\f0  
\f1 \'bb\'f3\'c8\'b2\'c0\'ba
\f0  
\f1 \'be\'ee\'b6\'b2\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 3, type: "emotion", text: "3. 
\f1 \'b0\'a8\'c1\'a4\'c0\'cc
\f0  
\f1 \'b9\'ab\'b3\'ca\'c1\'fa
\f0  
\f1 \'b6\'a7
\f0 , 
\f1 \'b3\'aa\'b8\'a6
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'c0\'a7\'b7\'ce\'c7\'d8\'c1\'d6\'b4\'c2
\f0  
\f1 \'b0\'c7
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 4, type: "emotion", text: "4. 
\f1 \'b3\'aa\'c0\'c7
\f0  
\f1 \'b0\'a8\'c1\'a4
\f0  
\f1 \'c7\'a5\'c7\'f6
\f0  
\f1 \'b9\'e6\'bd\'c4\'c0\'ba
\f0  
\f1 \'be\'ee\'b6\'b2\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 5, type: "values", text: "5. 
\f1 \'bb\'ee\'bf\'a1\'bc\'ad
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'c1\'df\'bf\'e4\'c7\'cf\'b0\'d4
\f0  
\f1 \'bf\'a9\'b1\'e2\'b4\'c2
\f0  
\f1 \'b0\'a1\'c4\'a1\'b4\'c2
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 6, type: "values", text: "6. 
\f1 \'b0\'e1\'c1\'a4\'c0\'bb
\f0  
\f1 \'b3\'bb\'b8\'b1
\f0  
\f1 \'b6\'a7
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'c1\'df\'bf\'e4\'c7\'cf\'b0\'d4
\f0  
\f1 \'bb\'fd\'b0\'a2\'c7\'cf\'b4\'c2
\f0  
\f1 \'b1\'e2\'c1\'d8\'c0\'ba
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 7, type: "values", text: "7. 
\f1 \'c0\'fd\'b4\'eb
\f0  
\f1 \'c5\'b8\'c7\'f9\'c7\'cf\'b0\'ed
\f0  
\f1 \'bd\'cd\'c1\'f6
\f0  
\f1 \'be\'ca\'c0\'ba
\f0  
\f1 \'bd\'c5\'b3\'e4\'c0\'cc
\f0  
\f1 \'c0\'d6\'b4\'d9\'b8\'e9
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 8, type: "identity", text: "8. 
\f1 \'b3\'aa\'b4\'c2
\f0  
\f1 \'be\'ee\'b6\'b2
\f0  
\f1 \'bb\'e7\'b6\'f7\'c0\'cc\'b6\'f3\'b0\'ed
\f0  
\f1 \'bb\'fd\'b0\'a2\'c7\'cf\'b3\'aa\'bf\'e4
\f0 ?" \},\
  \{ id: 9, type: "identity", text: "9. 
\f1 \'b3\'aa\'b8\'a6
\f0  
\f1 \'c7\'cf\'b3\'aa\'c0\'c7
\f0  
\f1 \'b4\'dc\'be\'ee\'b3\'aa
\f0  
\f1 \'c0\'cc\'b9\'cc\'c1\'f6\'b7\'ce
\f0  
\f1 \'c7\'a5\'c7\'f6\'c7\'d1\'b4\'d9\'b8\'e9
\f0 ? (
\f1 \'bf\'b9
\f0 : 
\f1 \'c6\'c4\'b5\'b5
\f0 , 
\f1 \'b5\'ee\'b4\'eb
\f0 , 
\f1 \'b5\'e9\'b2\'c9
\f0  
\f1 \'b5\'ee
\f0 )" \},\
  \{ id: 10, type: "identity", text: "10. 
\f1 \'bb\'e7\'b6\'f7\'b5\'e9\'c0\'cc
\f0  
\f1 \'b3\'aa\'bf\'a1
\f0  
\f1 \'b4\'eb\'c7\'d8
\f0  
\f1 \'c0\'da\'c1\'d6
\f0  
\f1 \'c7\'cf\'b4\'c2
\f0  
\f1 \'b8\'bb\'c0\'ba
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 11, type: "identity", text: "11. 
\f1 \'b3\'aa\'b8\'a6
\f0  
\f1 \'bb\'f3\'c2\'a1\'c7\'cf\'b4\'c2
\f0  
\f1 \'bb\'f6\'b1\'f2\'c0\'cc\'b3\'aa
\f0  
\f1 \'b5\'bf\'b9\'b0\'c0\'cc
\f0  
\f1 \'c0\'d6\'b4\'d9\'b8\'e9
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'cf\'b1\'ee\'bf\'e4
\f0 ?" \},\
  \{ id: 12, type: "growth", text: "12. 
\f1 \'c3\'d6\'b1\'d9
\f0  
\f1 \'b3\'bb\'b0\'a1
\f0  
\f1 \'b1\'d8\'ba\'b9\'c7\'d1
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'c5\'ab
\f0  
\f1 \'b5\'b5\'c0\'fc\'c0\'ba
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'cc\'be\'fa\'b3\'aa\'bf\'e4
\f0 ?" \},\
  \{ id: 13, type: "growth", text: "13. 
\f1 \'b5\'b5\'c0\'fc
\f0  
\f1 \'c0\'cc\'c8\'c4
\f0  
\f1 \'b4\'de\'b6\'f3\'c1\'f8
\f0  
\f1 \'b3\'aa\'c0\'c7
\f0  
\f1 \'b8\'f0\'bd\'c0\'c0\'ba
\f0  
\f1 \'be\'ee\'b6\'b2\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 14, type: "growth", text: "14. 
\f1 \'b3\'bb\'b0\'a1
\f0  
\f1 \'c8\'e7\'b5\'e9\'b8\'b1
\f0  
\f1 \'b6\'a7\'b8\'b6\'b4\'d9
\f0  
\f1 \'ba\'d9\'c0\'e2\'b4\'c2
\f0  
\f1 \'b3\'aa\'b8\'b8\'c0\'c7
\f0  
\f1 \'c1\'df\'bd\'c9\'c0\'ba
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 15, type: "growth", text: "15. 
\f1 \'b3\'aa\'b8\'b8\'c0\'c7
\f0  
\f1 \'b7\'e7\'c6\'be\'c0\'cc\'b3\'aa
\f0  
\f1 \'bd\'c0\'b0\'fc
\f0  
\f1 \'c1\'df
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'bc\'d2\'c1\'df\'c7\'d1
\f0  
\f1 \'b0\'cd\'c0\'ba
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 16, type: "growth", text: "16. 
\f1 \'b3\'aa\'b4\'c2
\f0  
\f1 \'be\'d5\'c0\'b8\'b7\'ce
\f0  
\f1 \'be\'ee\'b6\'b2
\f0  
\f1 \'b9\'e6\'c7\'e2\'c0\'b8\'b7\'ce
\f0  
\f1 \'bc\'ba\'c0\'e5\'c7\'cf\'b0\'ed
\f0  
\f1 \'bd\'cd\'b3\'aa\'bf\'e4
\f0 ?" \},\
  \{ id: 17, type: "relationship", text: "17. 
\f1 \'b3\'bb
\f0  
\f1 \'bb\'ee\'bf\'a1
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'c5\'ab
\f0  
\f1 \'bf\'b5\'c7\'e2\'c0\'bb
\f0  
\f1 \'c1\'d8
\f0  
\f1 \'bb\'e7\'b6\'f7\'c0\'ba
\f0  
\f1 \'b4\'a9\'b1\'b8\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 18, type: "relationship", text: "18. 
\f1 \'b3\'bb\'b0\'a1
\f0  
\f1 \'c1\'df\'bf\'e4\'c7\'cf\'b0\'d4
\f0  
\f1 \'bf\'a9\'b1\'e2\'b4\'c2
\f0  
\f1 \'c0\'ce\'b0\'a3\'b0\'fc\'b0\'e8\'c0\'c7
\f0  
\f1 \'b8\'f0\'bd\'c0\'c0\'ba
\f0  
\f1 \'be\'ee\'b6\'b2\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 19, type: "relationship", text: "19. 
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'b1\'e2\'be\'ef\'bf\'a1
\f0  
\f1 \'b3\'b2\'b4\'c2
\f0  
\f1 \'b5\'fb\'b6\'e6\'c7\'d1
\f0  
\f1 \'b0\'fc\'b0\'e8\'b3\'aa
\f0  
\f1 \'bc\'f8\'b0\'a3\'c0\'cc
\f0  
\f1 \'c0\'d6\'b4\'d9\'b8\'e9
\f0 ?" \},\
  \{ id: 20, type: "vision", text: "20. 
\f1 \'c1\'f8\'bd\'c9\'c0\'b8\'b7\'ce
\f0  
\f1 \'b2\'de\'b2\'d9\'b4\'c2
\f0  
\f1 \'bb\'ee\'c0\'ba
\f0  
\f1 \'be\'ee\'b6\'b2
\f0  
\f1 \'b8\'f0\'bd\'c0\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 21, type: "vision", text: "21. 
\f1 \'b3\'bb
\f0  
\f1 \'bb\'ee\'c0\'c7
\f0  
\f1 \'b9\'e6\'c7\'e2\'c0\'cc\'b3\'aa
\f0  
\f1 \'c3\'b6\'c7\'d0\'c0\'bb
\f0  
\f1 \'b4\'e3\'c0\'ba
\f0  
\f1 \'b9\'ae\'c0\'e5\'c0\'cc
\f0  
\f1 \'c0\'d6\'b4\'d9\'b8\'e9
\f0 ?" \},\
  \{ id: 22, type: "vision", text: "22. 
\f1 \'b3\'aa\'bf\'a1\'b0\'d4
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'bf\'b5\'b0\'a8\'c0\'bb
\f0  
\f1 \'c1\'d6\'b4\'c2
\f0  
\f1 \'b8\'bb\'c0\'cc\'b3\'aa
\f0  
\f1 \'b9\'ae\'b1\'b8\'b0\'a1
\f0  
\f1 \'c0\'d6\'b4\'d9\'b8\'e9
\f0 ?" \},\
  \{ id: 23, type: "narrative", text: "23. 
\f1 \'b3\'bb
\f0  
\f1 \'bb\'ee\'bf\'a1\'bc\'ad
\f0  
\f1 \'b0\'a1\'c0\'e5
\f0  
\f1 \'b0\'ad\'b7\'c4\'c7\'d1
\f0  
\f1 \'c0\'fc\'c8\'af\'c1\'a1\'c0\'ba
\f0  
\f1 \'be\'f0\'c1\'a6\'bf\'b4\'b3\'aa\'bf\'e4
\f0 ?" \},\
  \{ id: 24, type: "narrative", text: "24. 
\f1 \'b3\'aa\'c0\'c7
\f0  
\f1 \'b3\'bb\'b8\'e9\'bf\'a1\'bc\'ad
\f0  
\f1 \'b9\'dd\'ba\'b9\'b5\'c7\'b4\'c2
\f0  
\f1 \'b0\'a5\'b5\'ee\'c0\'cc\'b3\'aa
\f0  
\f1 \'c1\'fa\'b9\'ae\'c0\'cc
\f0  
\f1 \'c0\'d6\'b4\'d9\'b8\'e9
\f0 ?" \},\
  \{ id: 25, type: "narrative", text: "25. 
\f1 \'c1\'f6\'b1\'dd
\f0  
\f1 \'b3\'bb
\f0  
\f1 \'bb\'ee\'c0\'c7
\f0  
\f1 \'c8\'e5\'b8\'a7\'c0\'bb
\f0  
\f1 \'c7\'d1
\f0  
\f1 \'b4\'dc\'be\'ee\'b7\'ce
\f0  
\f1 \'bf\'e4\'be\'e0\'c7\'d1\'b4\'d9\'b8\'e9
\f0 ?" \},\
  \{ id: 26, type: "narrative", text: "26. 
\f1 \'c1\'f6\'b1\'dd\'b1\'ee\'c1\'f6\'c0\'c7
\f0  
\f1 \'bb\'ee\'bf\'a1
\f0  
\f1 \'c1\'a6\'b8\'f1\'c0\'bb
\f0  
\f1 \'ba\'d9\'c0\'ce\'b4\'d9\'b8\'e9
\f0  
\f1 \'be\'ee\'b6\'b2
\f0  
\f1 \'c1\'a6\'b8\'f1\'c0\'cf\'b1\'ee\'bf\'e4
\f0 ?" \},\
  \{ id: 27, type: "narrative", text: "27. 
\f1 \'b1\'d7
\f0  
\f1 \'c1\'a6\'b8\'f1\'c0\'c7
\f0  
\f1 \'c0\'cc\'c0\'af\'b4\'c2
\f0  
\f1 \'b9\'ab\'be\'f9\'c0\'ce\'b0\'a1\'bf\'e4
\f0 ?" \},\
  \{ id: 28, type: "narrative", text: "28. 
\f1 \'b3\'aa
\f0  
\f1 \'c0\'da\'bd\'c5\'c0\'bb
\f0  
\f1 \'bf\'b5\'c8\'ad\'b3\'aa
\f0  
\f1 \'c0\'cc\'be\'df\'b1\'e2
\f0  
\f1 \'bc\'d3
\f0  
\f1 \'c4\'b3\'b8\'af\'c5\'cd\'bf\'a1
\f0  
\f1 \'ba\'f1\'c0\'af\'c7\'d1\'b4\'d9\'b8\'e9
\f0 ?" \}\
];\
\
export default function QuestionsPage() \{\
  const router = useRouter();\
  const [answers, setAnswers] = useState(\{\});\
  const [loading, setLoading] = useState(false);\
  const [error, setError] = useState("");\
  const [blocked, setBlocked] = useState(false);\
  const [email, setEmail] = useState("");\
  const [emailSent, setEmailSent] = useState(false);\
\
  const handleChange = (type: string, value: string) => \{\
    setAnswers((prev) => (\{ ...prev, [type]: value \}));\
  \};\
\
  const handleAnalyze = async () => \{\
    setLoading(true);\
    setError("");\
    const delay = Math.random() * 1500;\
    setTimeout(async () => \{\
      try \{\
        const res = await fetch("/api/analyze-gpt", \{\
          method: "POST",\
          headers: \{ "Content-Type": "application/json" \},\
          body: JSON.stringify(\{ answers \})\
        \});\
        if (res.status === 429) \{\
          setBlocked(true);\
          setLoading(false);\
          return;\
        \}\
        if (!res.ok) throw new Error("\uc0\u48516 \u49437  \u50836 \u52397  \u49892 \u54056 ");\
        const data = await res.json();\
        if (!data.summary) throw new Error("\uc0\u48516 \u49437  \u51025 \u45813  \u50724 \u47448 ");\
        localStorage.setItem("summary", data.summary);\
        localStorage.setItem("tags", JSON.stringify(data.tags));\
        localStorage.setItem("analysis", JSON.stringify(data.analysis));\
        localStorage.setItem("narrative", JSON.stringify(data.narrative));\
        router.push("/result");\
      \} catch (err) \{\
        setError("\uc0\u9888 \u65039  \u48516 \u49437 \u50640  \u49892 \u54056 \u54664 \u50612 \u50836 . \u51104 \u49884  \u54980  \u45796 \u49884  \u49884 \u46020 \u54644 \u51452 \u49464 \u50836 .");\
      \} finally \{\
        setLoading(false);\
      \}\
    \}, delay);\
  \};\
\
  const handleEmailSubmit = async () => \{\
    const res = await fetch("/api/analyze-gpt", \{\
      method: "POST",\
      headers: \{ "Content-Type": "application/json" \},\
      body: JSON.stringify(\{ answers: \{\}, email \})\
    \});\
    if (res.ok) setEmailSent(true);\
  \};\
\
  return (\
    <div className="min-h-screen bg-[#fdfaff] py-12">\
      <div className="max-w-2xl mx-auto px-4">\
        <h1 className="text-center text-3xl font-bold text-purple-800 mb-10">\uc0\u55357 \u56541  \u45208 \u47484  \u47560 \u51452 \u54616 \u45716  28\u44032 \u51648  \u51656 \u47928 </h1>\
        <p className="text-center text-gray-600 mb-8">\uc0\u54620  \u51656 \u47928 \u50473 , \u52380 \u52380 \u55176  \u51201 \u50612 \u48372 \u49464 \u50836 . \u45817 \u49888  \u50504 \u51032  \u51060 \u50556 \u44592 \u47484  \u47560 \u51064 \u46300 \u48391 \u51060  \u44592 \u45796 \u47532 \u44256  \u51080 \u50612 \u50836 .</p>\
\
        \{blocked ? (\
          <div className="text-center space-y-4">\
            <p className="text-lg text-red-600 font-semibold">\uc0\u55357 \u57003  \u50724 \u45720 \u51032  \u48516 \u49437  \u50836 \u52397 \u51060  \u47784 \u46160  \u47560 \u44048 \u46104 \u50632 \u49845 \u45768 \u45796 .</p>\
            <p className="text-sm text-gray-600">\uc0\u45236 \u51068  \u50724 \u51204  00:00 \u51060 \u54980  \u45796 \u49884  \u49884 \u46020 \u54644 \u51452 \u49464 \u50836 .</p>\
            \{!emailSent ? (\
              <div className="space-y-2">\
                <p className="text-sm">\uc0\u50896 \u54616 \u49888 \u45796 \u47732  \u48516 \u49437  \u51116 \u44060  \u49884  \u51060 \u47700 \u51068 \u47196  \u50508 \u47140 \u46300 \u47540 \u44172 \u50836  \u9993 \u65039 </p>\
                <input\
                  type="email"\
                  value=\{email\}\
                  onChange=\{(e) => setEmail(e.target.value)\}\
                  placeholder="\uc0\u51060 \u47700 \u51068  \u51452 \u49548 \u47484  \u51077 \u47141 \u54644 \u51452 \u49464 \u50836 "\
                  className="w-full border rounded-lg px-4 py-2 text-sm"\
                />\
                <Button onClick=\{handleEmailSubmit\} className="bg-purple-600 text-white">\uc0\u50508 \u47548  \u49888 \u52397 </Button>\
              </div>\
            ) : (\
              <p className="text-green-600 font-medium">\uc0\u9989  \u51060 \u47700 \u51068 \u51060  \u46321 \u47197 \u46104 \u50632 \u50612 \u50836 ! \u44048 \u49324 \u54633 \u45768 \u45796 .</p>\
            )\}\
          </div>\
        ) : (\
          <>\
            <div className="space-y-6">\
              \{questions.map((q) => (\
                <Card key=\{q.id\} className="bg-[#f9f5ff] border-none shadow-md rounded-xl">\
                  <CardContent className="p-5">\
                    <p className="text-lg font-semibold text-gray-800 mb-3">\{q.text\}</p>\
                    <input\
                      type="text"\
                      className="w-full rounded-xl px-4 py-3 shadow-sm border border-gray-300 focus:outline-purple-400"\
                      placeholder="\uc0\u45817 \u49888 \u51032  \u49373 \u44033 \u51012  \u51088 \u50976 \u47213 \u44172  \u51201 \u50612 \u48372 \u49464 \u50836 ..."\
                      onBlur=\{(e) => handleChange(q.type + q.id, e.target.value)\}\
                    />\
                  </CardContent>\
                </Card>\
              ))\}\
            </div>\
\
            <div className="text-center mt-12 space-y-4">\
              <Button\
                onClick=\{handleAnalyze\}\
                disabled=\{loading\}\
                className="bg-purple-700 hover:bg-purple-800 px-10 py-8 text-lg text-white rounded-full flex flex-col items-center justify-center leading-snug mx-auto"\
              >\
                <span>\uc0\u47560 \u51064 \u46300 \u48391 !</span>\
                <span>\uc0\u51060 \u51228  \u45208 \u47484  \u54620  \u47928 \u51109 \u51004 \u47196  \u54364 \u54788 \u54644 \u51460 \u47000 ?</span>\
              </Button>\
              \{loading && <p className="text-sm text-gray-500">\uc0\u48516 \u49437  \u51473 \u51077 \u45768 \u45796 ... \u47560 \u51064 \u46300 \u48391 \u51060  \u49373 \u44033 \u54616 \u44256  \u51080 \u50612 \u50836  \u55358 \u56596 </p>\}\
              \{error && (\
                <div className="text-red-600 text-sm space-y-2">\
                  <p>\{error\}</p>\
                  <Button onClick=\{handleAnalyze\} className="bg-red-500 text-white hover:bg-red-600">\uc0\u45796 \u49884  \u49884 \u46020 \u54616 \u44592 </Button>\
                </div>\
              )\}\
            </div>\
          </>\
        )\}\
\
        <Footer />\
      </div>\
    </div>\
  );\
\}}