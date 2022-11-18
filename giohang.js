var keyLocalStorageItemGioHang = `danhSachItemGioHang`;

// yeu cau: tao ra doi tuong ITEM gio hang
// input: idSanPham, soLuong
// output: doi tuong ITEM gio hang
function TaoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

// Yeu cau: lay ra toan bo cac item gio hang duoc luu tru trong Local Storage
// input:
// output: danh sach toan bo item gio hang duoc luu tru trong Local Storage
function LayDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    // Buoc 1: Lay chuoi json luu tru trong Local Storage
    var jsonDanhSachGioHang = localStorage.getItem(keyLocalStorageItemGioHang);
    // Buoc 2: Chuyen tu json qua danh sach item gio hang
    if (jsonDanhSachGioHang != null) {
        danhSachItemGioHang = JSON.parse(jsonDanhSachGioHang);
    }
    return danhSachItemGioHang;
}

// De luu tru danh sach Item gio hang
// input: danh sach item gio hang
function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang) {
    // Buoc 1: chuyen thanh chuoi Json
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

    // Buoc 2: luu vao Local Storage
    localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);
}