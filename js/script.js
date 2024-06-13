
const section = document.querySelector("section");
const li = document.querySelectorAll(".li");

li.forEach(el => {
    el.addEventListener("mouseenter", () => {
        let bg = el.getAttribute("data-bg");
        section.style.background = `url(${bg}) no-repeat center / cover`;
    });

    el.addEventListener("mouseleave", () => {
        // عند مغادرة الماوس، يمكنك إعادة الخلفية إلى الحالة الأصلية هنا
        section.style.backgroundImage = 'url("../img/Home2.gif")';
    });
});


function sendMail() {
    var from_name = document.getElementById("fname").value;
    var email_id = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // التحقق من أن الحقول غير فارغة
    if (from_name && email_id && message) {
        var params = {
            from_name: from_name,
            email_id: email_id,
            message: message
        };

        const serviceID = "service_qmofqpl"; // قم بتعيين معرف الخدمة الخاصة بك هنا
        const templateID = "template_l0519yf"; // قم بتعيين معرف القالب الخاص بك هنا

        emailjs.send(serviceID, templateID, params)
        .then(res => {
            // تفريغ حقول الإدخال بعد الإرسال
            document.getElementById("fname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch(err => {
            console.log(err);
            alert("An error occurred while sending your message. Please try again later.");
        });
    } else {
        alert("Please fill in all the fields.");
    }
}
