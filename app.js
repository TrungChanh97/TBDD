var num = 10
function test(){
	var num = 100
	console.log("Value of num in test() " + num +"\n")
}

var main = function(){
	for (var x = 0; x < 5; x++) {
		console.log("Gia tri thu " + (x+1) + " la: " + x + "\n") 
	}
	console.log("Tong ket qua cua x la: " + x +"\n")
}

var sinhVien = {
	maSo: 0015412124,
	hoTen: 'Tran Trung Chanh',
	bangCap: function(x){
		return (x)
	},
	banGai: ['Nghia', 'Trang', 'Ngoc', 'Lan'],
	lop: {
		tenLop: 'DHCNTT15',
		maLop: 'cntt'
	}
}

var sv = new Object();
sv.hoTen = "Chánh",
sv.lop = {
	tenLop: '2015',
	maLop: '123'
},

console.log("\nValue of num outside test() " + num +"\n")
test()
main()
console.log("Ma so SV: " + sinhVien.maSo);
console.log("Ten sinh vien: " + sinhVien.hoTen);
console.log("Bang cap: " + sinhVien.bangCap("Tieng anh B1"));
console.log("Ngay cap: " + sinhVien.bangCap("20/10/2010"))
console.log("Ban gai cua sinh vien: " + sinhVien.banGai);
console.log("Ban gai đau tien: " + sinhVien.banGai[0]);
console.log("Ten lop: " + sinhVien.lop.tenLop);
console.log("Ma lop: " + sinhVien.lop.maLop);
console.log("----------------------------------");
console.log("Ho ten moi: " + sv.hoTen);
console.log("Lop: " + sv.lop.tenLop);
console.log("Ma lop: " + sv.lop.maLop);