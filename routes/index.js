var express = require('express');
var router = express.Router();

// MODELS
const Product = require('../models/product')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ code: 1, message: '/' })
});

router.get('/c1', (req, res, next) => {
  let p = new Product({
    pid: '1',
    price: 172990000,
    url: 'storage/images/products/xalach.jpg',
    country: 'VietNam',
    brand: 'COOP Food',
    category_sn: 'veg',
    details: 'Rau Xà lách Romaine hữu cơ - 350gXà lách Romaine cây có màu xanh tươi, ăn rất giòn, có vị ngọt và thơm, hiện đang được trồng tại một số trang trại rau cao cấp ở Đà Lạt.Xà lách Romaine giàu Vitamin A, Vitamin K, Vitamin C, Magiê, chất xơ và ít protein...',
    on_sale: false
  })
  p.save().then((result) => {
    return res.json({code:1, message: result})
  })
  .catch((err) => {
    return res.json({code:0, error: err})
  })
})

router.get('/f',(req, res, next)=>{
  Product.findOne({id: '1'})
    .then(result=>{
      if(!result){
        return res.json({code:2, error: 'Khong ton tai'})
      }
      return res.json({code:1, data: result})
    })
    .catch(err=>{
      return res.json({code:0, error: err})
    })
})


module.exports = router;
