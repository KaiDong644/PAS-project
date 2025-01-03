const express = require('express');
const path = require('path');
var app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Server đã được khởi chạy tại port: ${port}`);
});

// Phục vụ các tệp tĩnh từ thư mục 'src'
app.use(express.static(path.join(__dirname, "src")));

// Phục vụ tệp index.html khi truy cập vào route gốc
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/MyInfo.html"));
});
