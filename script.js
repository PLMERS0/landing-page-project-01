function runCounter(id, target) {
            let count = 0;
            // ปรับความเร็ว: ยิ่งตัวเลขเป้าหมายเยอะ ยิ่งต้องหารเยอะเพื่อให้วิ่งสมูท
            let speed = target / 100; 
            
            let updateCount = setInterval(() => {
                count += speed;
                
                if (count >= target) {
                    // เมื่อถึงเป้าหมาย: ใส่คอมม่าแล้วหยุด
                    document.getElementById(id).innerText = target.toLocaleString();
                    clearInterval(updateCount);
                } else {
                    // ระหว่างวิ่ง: ปัดเศษลงแล้วใส่คอมม่า
                    document.getElementById(id).innerText = Math.floor(count).toLocaleString();
                }
            }, 40);
        }
        // วิธีเรียกใช้: ระบุ (ID ของตัวเลข, ตัวเลขเป้าหมาย)
        runCounter("count-1", 2245341); 
        runCounter("count-2", 46328); 
        runCounter("count-3", 828867); 
        runCounter("count-4", 1926436); 