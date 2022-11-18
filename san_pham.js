// Mo ta: de tao ra doi tuong, dua vao cac thuoc tinh duoc truyen vao
// input: cac thuoc tinh
// output: mot doi tuong
function TaoDoiTuongSanPhan(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
 
    // Buoc 1: gan cac thuoc tinh cho doi tuong
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;

    if(id != null) {
        sanPham.id = id;
    } else {
        sanPham.id = taoID();
    }
    // Buoc 2: viet phuong thuc cho doi tuong
    sanPham.tinhGiaBan = function () {
        // logic xu ly cua phuong thuc
        var giaBan = Number(this.giaGoc) *(1 - Number(this.phanTramGiamGia));
        return giaBan;
    }
    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }
    // Tu JSON chuyen thanh 1 doi tuong day du cac phuong thuc
    // input: json
    // output: doiTuongDayDu
    sanPham.fromJSON = function (json) {
        var doiTuongDayDu = new Object();
        // Buoc 1: Chuyen JSON thanh doi tuong
        var doiTuong = JSON.parse(json);
        // BUoc 2: Chuyen doi tuong thanh doi tuong day du phuong thuc
        var doiTuongDayDU = TaoDoiTuongSanPhan(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc);
        return doiTuongDayDu;
    }

    // Tu JSON cua Danh Sach San Pham tra ve 1 Danh Sach San Pham co Day Du cac Phuong Thuc
    // input: JSON cua Danh Sach San Pham
    // output: Danh Sach San Pham Day Du
    sanPham.fromJSONs = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        // Buoc 1 : chuyen thanh danh sach Doi Tuong
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

        for (var i =0;i<danhSachSanPham.length;i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = TaoDoiTuongSanPhan(sanPham.hinhAnh,sanPham.ten,sanPham.giaGoc,sanPham.phanTramGiamGia,sanPham.khuVuc);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }
    return sanPham;
}

// Mo ta: Chuyen 1 danh sach doi tuong, thanh 1 doan HTML de hien thi duoc Danh Sach San Pham ra ma hinh
// input: danh sach san pham
// output: HTML hien thi danh sach san pham
function chuyenDanhSachDoiTuongSanPhamThanhHTML(danhSachSanPham) {
    let HTMLDanhSachSanPham = '<div class="items">';
    for (let i = 0; i < danhSachSanPham.length; i++) {
        let sanPham = danhSachSanPham[i];
        let htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDanhSachSanPham += htmlSanPham;
    }
    HTMLDanhSachSanPham += '</div>';
    return HTMLDanhSachSanPham;
}



// Mo ta: Chuyen mot doi tuong thanh mot HTML
// Dau vao: doi tuong
// Dau ra: Doan HTML cua doi tuong do
function chuyenDoiTuongSanPhamThanhHTML(sanPham) {
    // Tao lai doi tuong co day du cac funtion
    sanPham = TaoDoiTuongSanPhan(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    console.log(sanPham);
    var html = ``;
    html += `<div class="item">`;
    html += `<div class="item_thumb">`;
    html += `<img src="` + sanPham.hinhAnh +`" alt=""></div>`;
    html += `<h2 class="item_title">`+ sanPham.ten + `</h2>`;
    html += `<div class="item_price">`;
    html += `<span class="item_price_origin">`+ sanPham.giaGoc +`</span>`;
    html += `<span class="item_price_sale">`+ sanPham.tinhGiaBan() + `</span>`;
    html += `</div>`;
    html += `<button onclick="onClickDuaVaoGioHang(\``+ sanPham.id +`\`)" class="btn btn-primary">Add to cart</button>`;
    html += `</div>`;
    return html;
}


// Input: ID
// Output: Doi tuong co ID = ID
function truyXuatSanPhamTheoID(id){
    // Buoc 1: lay len danh sach toan bo doi tuong
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    // Buoc 2: duyet toan bo doi tuong kiem tra ID cua doi tuong co bang voi ID truyen vao k
    for(var i = 0;i<danhSachSanPham.length;i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id === id) {
            return sanPhamHienTai;
        }
    }
    // Buoc 3: neu co ton tai doi tuong giong ID thi lay ra doi tuong

}