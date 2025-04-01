{\rtf1\ansi\ansicpg949\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // pages/index.tsx: \uc0\u49884 \u51089  \u50504 \u45236  & \u44208 \u51228  \u50976 \u46020  \u54168 \u51060 \u51648 \
\
import React from "react";\
import \{ Button \} from "@/components/ui/button";\
import \{ useRouter \} from "next/router";\
import Footer from "@/components/Footer";\
\
export default function Home() \{\
  const router = useRouter();\
\
  const handleStart = () => \{\
    router.push("/questions");\
  \};\
\
  return (\
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style=\{\{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1920&q=80')" \}\}>\
      <div className="backdrop-blur-sm bg-white/70 min-h-screen flex flex-col justify-between">\
        <div className="max-w-2xl mx-auto p-6 text-center space-y-8 pt-20">\
          <img src="/mindbot.png" alt="\uc0\u47560 \u51064 \u46300 \u48391  \u52880 \u47533 \u53552 " className="mx-auto w-28 h-28" />\
          <h1 className="text-4xl font-extrabold text-purple-900">\uc0\u45208 \u47484  \u54620  \u47928 \u51109 \u51004 \u47196 , \u45800  990\u50896 </h1>\
          <p className="text-gray-800 leading-relaxed text-base">\
            \uc0\u50864 \u47532 \u45716  \u45572 \u44396 \u45208  <span className="font-semibold text-purple-700">\'93\u45236 \u44032  \u45572 \u44396 \u51064 \u51648 , \u50612 \u46500  \u49324 \u46988 \u51064 \u51648 \'94</span> \u49444 \u47749 \u54616 \u44592  \u50612 \u47140 \u50872  \u46412 \u44032  \u51080 \u50612 \u50836 .<br /><br />\
            \uc0\u47560 \u51064 \u46300 \u48391 \u51008  <span className="font-bold text-purple-800">28\u44060 \u51032  \u44618 \u51060  \u51080 \u45716  \u51656 \u47928 </span>\u51012  \u53685 \u54644 <br />\
            \uc0\u45817 \u49888 \u51032  \u44048 \u51221 , \u44032 \u52824 \u44288 , \u44221 \u54744 \u51012  \u48516 \u49437 \u54616 \u44256 ,<br />\
            <span className="underline decoration-purple-400">\uc0\u45817 \u49888 \u51012  \u54632 \u52629 \u51201 \u51004 \u47196  \u54364 \u54788 \u54644 \u51452 \u45716  \u45800  \u54616 \u45208 \u51032  \u47928 \u51109 </span>\u51012  \u52286 \u50500 \u51469 \u45768 \u45796 .<br /><br />\
            \uc0\u55356 \u57263  \u48516 \u49437  \u44592 \u48152 : \u44048 \u49457  \u50616 \u50612  + \u51088 \u44592 \u49900 \u47532 \u54617  + AI \u48516 \u49437  \u50508 \u44256 \u47532 \u51608 <br />\
            \uc0\u55357 \u56460  \u54876 \u50857  \u50696 \u49884 : \u51088 \u44592 \u49548 \u44060 , \u50672 \u50528  \u54532 \u47196 \u54596 , MBTI \u45824 \u52404  \u47928 \u51109 , \u54252 \u53944 \u54260 \u47532 \u50724  \u49548 \u44060 \u44544  \u46321 <br /><br />\
            \uc0\u51648 \u44552  <span className="font-bold text-purple-700">\u45208 \u47564 \u51032  \u50616 \u50612 </span>\u47196  <span className="text-2xl font-extrabold text-purple-800">\u45817 \u49888  \u51088 \u49888 \u51012  \u51116 \u48156 \u44204 </span>\u54644 \u48372 \u49464 \u50836 .\
          </p>\
          <div>\
            <Button className="text-lg py-6 px-10 bg-purple-700 hover:bg-purple-800 text-white" onClick=\{handleStart\}>\
              \uc0\u55358 \u56598  \u47560 \u51064 \u46300 \u48391 \u44284  \u45208 \u47564 \u51032  \u47928 \u51109  \u47564 \u46308 \u44592 \
            </Button>\
            <p className="text-xs text-gray-500 mt-2">* \uc0\u44208 \u51228  \u54980  \u51656 \u47928  \u54168 \u51060 \u51648 \u47196  \u51060 \u46041 \u54633 \u45768 \u45796 </p>\
          </div>\
        </div>\
        <Footer />\
      </div>\
    </div>\
  );\
\}\
}