// Xay dung ham sinh ID tu dong, output la chuoi ID duy nhat

function taoID() {
    let id='';

    // sinh ID
    // lay milisecond o thoi diem hien tai
    id = Math.random().toString() + "_" + String(new Date().getTime());
    return id;
}