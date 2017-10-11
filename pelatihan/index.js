let bodyParser = require('body-parser');
let mong = require('mongoose');
let ex = require('express');
let app = ex();
//route
app.use(bodyParser.json());
// app.use(function(req,res,next){
// 	res.header("Access-Contol-Allow-Origin","*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

app.use('/',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    next();
});

let penilaianTeknisRoute = require('./penilaianTeknis/penilaianTeknisRoute.js');
app.use('/api',penilaianTeknisRoute);

 let penilaianNonTeknisRoute = require('./penilaianNonTeknis/PenilaianNonTeknisRoute.js');
 app.use('/api',penilaianNonTeknisRoute);

let penilaianAkhirRoute = require('./penilaianAkhir/penilaianAkhirRoute.js');
app.use('/api',penilaianAkhirRoute);
let penggunaRoute=require('./pengguna/penggunaRoute.js');
app.use('/api',penggunaRoute);
let aksespenggunaRoute=require('./aksespengguna/AksespenggunaRoute.js');
app.use('/api',aksespenggunaRoute);
let pendaftaranRinciRoute=require('./pendaftaranrinci/pendaftaranRinciRoute.js');
app.use('/api',pendaftaranRinciRoute);
let pendaftaranAplikasiRoute=require('./pendaftaranaplikasi/pendaftaranAplikasiRoute.js');
app.use('/api',pendaftaranAplikasiRoute);

//rama

let surattugasRoute = require('./surattugas/surattugasRoute.js');
app.use('/api',surattugasRoute);

let tipepegawaiRoute = require('./tipepegawai/tipepegawaiRoute.js');
app.use('/api',tipepegawaiRoute);

let pegawaiRoute = require('./pegawai/pegawaiRoute.js');
app.use('/api',pegawaiRoute);

let surattugasrinciRoute = require('./surattugasrinci/surattugasrinciRoute.js');
app.use('/api',surattugasrinciRoute);

// let pembayaranRoute = require('./pembayaran/pembayaranRoute.js');
// app.use('/api',pembayaranRoute);

// let penjualanRoute = require('./penjualan/penjualanRoute.js');
// app.use('/api',penjualanRoute);

// let petugasRoute = require('./petugas/petugasRoute.js');
// app.use('/api',petugasRoute);

// let provinsiRoute = require('./provinsi/provinsiRoute.js');
// app.use('/api',provinsiRoute);

// let statusPembayaranRoute = require('./statusPembayaran/statusPembayaranRoute.js');
// app.use('/api',statusPembayaranRoute);

// let statusPenjualanRoute = require('./statusPenjualan/statusPenjualanRoute.js');
// app.use('/api',statusPenjualanRoute);

// let tipePembayaranRoute = require('./tipePembayaran/tipePembayaranRoute.js');
// app.use('/api',tipePembayaranRoute);

// let tokoRoute = require('./toko/tokoRoute.js');
// app.use('/api',tokoRoute);

mong.connect('mongodb://localhost:27017/DBPelatihan');
app.listen(8820);