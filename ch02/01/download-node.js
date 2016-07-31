// urlにあるファイルをsavepathにDLする

var url = "http://kujirahand.com/";

var savepath = "test.html";

var http = require('http');	// HTTPモジュール
var fs = require('fs');		// ファイル関連モジュール

var outfile = fs.createWriteStream(savepath);

http.get(
	url,
	function(res) {
		res.pipe(outfile);	// HTTPレスポンスを出力ファイルにつなぐ
		res.on('end', function() {	// 処理終了をフック
			outfile.close();
			console.log("ok");
		});
	}
);
