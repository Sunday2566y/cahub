function login(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อกด submit

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (username === "CAHUB" && password === "12345678i") {
        window.location.href = "content.html"; // เปลี่ยนหน้าไปยังหน้าหลัก
    } else {
        errorMessage.style.display = "block"; // แสดงข้อความผิดพลาด
    }
}
