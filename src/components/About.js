import React from "react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0,0)
}, [])
  return (
    <div className="container text-center my-5">
      <div className="row mx-0">
        <div className="col-12 col-md-10 mx-auto py-5">
          <h3 className="text-center font-main">نبذة عن التطبيق </h3>
          <span className="line"></span>
          <p className="font-main text-center" style={{ fontSize: "20px" }}>
            تطبيق دم هو تطبيق الكتروني مجاني يستطيع من خلاله المستخدم البحث عن
            متبرعين من نفس الفصيلة والمتواجدين بالقرب للباحث عن الدم جغرافيا
            ويسعى إلى تقليص الفجوة بين المتبرع والباحث عبر التواصل مع المتبرعين
            بسهولة <mark>( عن طريق رسائل SMS واتصال او النت)</mark>. ويمكن من خلال التطبيق
            إضافة بيانات متبرع بسهولة تامه من فصيلة دم ومن أي منطقة. يتميز
            التطبيق بذو أيقونة مميزة في سهولة الفتح و الاستخدام وواجهة بسيطه غير
            معقدة مكونة من قسمين: قسم بالباحث عن فصيلة الدم وقسم المستعدين
            للتبرع.
          </p>
        </div>
      </div>
    </div>
  );
}
