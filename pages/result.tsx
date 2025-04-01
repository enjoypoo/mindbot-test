{\rtf1\ansi\ansicpg949\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // pages/result.tsx: GPT \uc0\u48516 \u49437  \u44208 \u44284  \u54168 \u51060 \u51648 \
\
import React, \{ useEffect, useState, useRef \} from "react";\
import \{ Button \} from "@/components/ui/button";\
import \{ motion \} from "framer-motion";\
import html2canvas from "html2canvas";\
import Footer from "@/components/Footer";\
\
export default function ResultPage() \{\
  const [summary, setSummary] = useState("");\
  const [tags, setTags] = useState<string[]>([]);\
  const [analysis, setAnalysis] = useState<string[]>([]);\
  const [narrative, setNarrative] = useState<string[]>([]);\
  const resultRef = useRef(null);\
\
  useEffect(() => \{\
    setSummary(localStorage.getItem("summary") || "\uc0\u45208 \u47484  \u49444 \u47749 \u54616 \u45716  \u47928 \u51109 \u51012  \u51456 \u48708  \u51473 \u51060 \u50640 \u50836 .");\
    setTags(JSON.parse(localStorage.getItem("tags") || "[]"));\
    setAnalysis(JSON.parse(localStorage.getItem("analysis") || "[]"));\
    setNarrative(JSON.parse(localStorage.getItem("narrative") || "[]"));\
  \}, []);\
\
  const handleDownloadImage = () => \{\
    if (!resultRef.current) return;\
    html2canvas(resultRef.current).then((canvas) => \{\
      const link = document.createElement("a");\
      link.download = "my_summary.png";\
      link.href = canvas.toDataURL();\
      link.click();\
    \});\
  \};\
\
  const handleShare = () => \{\
    const url = encodeURIComponent("https://mindbot.vercel.app");\
    const text = encodeURIComponent(`\uc0\u47560 \u51064 \u46300 \u48391 \u51060  \u48516 \u49437 \u54620  \u45208 \u51032  \u54620  \u47928 \u51109 : \\"$\{summary\}\\" #\u47560 \u51064 \u46300 \u48391 `);\
    window.open(`https://twitter.com/intent/tweet?url=$\{url\}&text=$\{text\}`, "_blank");\
  \};\
\
  return (\
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-yellow-50 py-20 px-4">\
      <div className="max-w-2xl mx-auto text-center space-y-10">\
        <motion.h1 initial=\{\{ opacity: 0 \}\} animate=\{\{ opacity: 1 \}\} className="text-4xl font-extrabold text-purple-800">\
          \uc0\u55356 \u57225  \u47560 \u51064 \u46300 \u48391 \u51060  \u50756 \u49457 \u54620  \u45817 \u49888 \u51032  \u54620  \u47928 \u51109 \
        </motion.h1>\
\
        <motion.div\
          ref=\{resultRef\}\
          initial=\{\{ opacity: 0, scale: 0.95 \}\}\
          animate=\{\{ opacity: 1, scale: 1 \}\}\
          transition=\{\{ duration: 0.6 \}\}\
          className="bg-white shadow-2xl rounded-2xl p-10 border-4 border-purple-200"\
        >\
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">\uc0\u10024  \u45817 \u49888 \u51012  \u54364 \u54788 \u54616 \u45716  \u47928 \u51109 </h2>\
          <p className="text-2xl font-bold text-purple-700 whitespace-pre-line">\'93\{summary\}\'94</p>\
        </motion.div>\
\
        \{tags.length > 0 && (\
          <div className="space-y-2">\
            <h3 className="text-xl font-semibold text-gray-700">\uc0\u55357 \u56524  \u47560 \u51064 \u46300 \u48391 \u51060  \u44861 \u51008  \u54645 \u49900  \u53468 \u44536 </h3>\
            <div className="flex flex-wrap justify-center gap-3">\
              \{tags.map((tag, idx) => (\
                <span key=\{idx\} className="bg-purple-200 text-purple-800 text-sm px-4 py-2 rounded-full shadow">\
                  #\{tag\}\
                </span>\
              ))\}\
            </div>\
          </div>\
        )\}\
\
        <div className="border border-purple-200 rounded-xl p-4 bg-white text-sm text-gray-700 max-w-2xl mx-auto space-y-2">\
          <h4 className="font-semibold text-gray-800 mb-1">\uc0\u55357 \u56589  \u47560 \u51064 \u46300 \u48391  \u48516 \u49437  \u50836 \u50557 </h4>\
          <ul className="list-decimal list-inside space-y-1 text-left">\
            \{analysis.map((item, idx) => (\
              <li key=\{idx\}>\{item\}</li>\
            ))\}\
          </ul>\
        </div>\
\
        \{narrative.length > 0 && (\
          <div className="bg-white/60 text-sm text-gray-700 p-4 rounded-xl border border-purple-100 max-w-2xl mx-auto">\
            <h4 className="font-semibold mb-1">\uc0\u55357 \u56534  \u49334 \u51032  \u51060 \u50556 \u44592  (\u44592 -\u49849 -\u51204 -\u44208 )</h4>\
            <ul className="list-disc list-inside space-y-1 text-left">\
              \{narrative.map((line, idx) => <li key=\{idx\}>\{line\}</li>)\}\
            </ul>\
          </div>\
        )\}\
\
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">\
          <Button onClick=\{handleDownloadImage\} className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700">\
            \uc0\u55357 \u56549  \u51060 \u48120 \u51648 \u47196  \u51200 \u51109 \u54616 \u44592 \
          </Button>\
          <Button onClick=\{handleShare\} className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600">\
            \uc0\u55357 \u56548  SNS \u44277 \u50976 \u54616 \u44592 \
          </Button>\
        </div>\
        <Footer />\
      </div>\
    </div>\
  );\
\}}