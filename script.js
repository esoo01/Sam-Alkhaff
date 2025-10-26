/* ملف الجافا سكريبت المركزي
    (script.js)
*/

// دالة كشف العناصر عند السكرول
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    for(const el of reveals) {
        const rect = el.getBoundingClientRect();
        // لو العنصر ظهر على الشاشة
        if(rect.top < window.innerHeight - 50) { 
            el.classList.add('visible'); 
        }
    }
}

// دالة كتابة السنة الحالية
function setCurrentYear() {
    // هنتأكد إن العنصر موجود الأول قبل ما نكتب فيه
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// تشغيل الدوال لما الصفحة تفتح
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    revealOnScroll();
});

// تشغيل دالة كشف العناصر مع كل سكرول
window.addEventListener('scroll', revealOnScroll);