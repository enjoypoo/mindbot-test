{\rtf1\ansi\ansicpg949\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // components/Footer.tsx\
\
import Link from "next/link";\
\
export default function Footer() \{\
  return (\
    <footer className="bg-white border-t border-gray-200 text-xs text-gray-500 py-6 px-4 mt-16">\
      <div className="max-w-4xl mx-auto text-center space-y-2">\
        <p>\
          \'a9 2025 \uc0\u47560 \u51064 \u46300 \u48391  | \u45824 \u54364 : \u44608 \u47560 \u51064 \u46300  | \u49324 \u50629 \u51088 \u46321 \u47197 \u48264 \u54840 : 123-45-67890\
        </p>\
        <p>\
          \uc0\u53685 \u49888 \u54032 \u47588 \u50629 \u49888 \u44256 \u48264 \u54840 : \u51228 2025-\u49436 \u50872 \u44053 \u45224 -00001\u54840  | \u51060 \u47700 \u51068 : contact@mindbot.kr\
        </p>\
        <p>\
          <Link href="/terms" className="underline mr-4">\uc0\u51060 \u50857 \u50557 \u44288 </Link>\
          <Link href="/privacy" className="underline">\uc0\u44060 \u51064 \u51221 \u48372 \u52376 \u47532 \u48169 \u52840 </Link>\
        </p>\
      </div>\
    </footer>\
  );\
\}}