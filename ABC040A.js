function Main(input) {
	input = input.split(" "); // 1行目がinput[0], 2行目がinput[1], …に入る
	// ここに処理を書く
	var n = input[0];
	var x = input[1];
	var result = x-1;
	if(x>n/2) result = n-x;

	// console.logは標準出力に1行出力します (自動的に最後に改行が入ります)
	console.log(result);
}
 
// ※この行以降は編集しない (標準入力から一度に読み込みMainを呼び出します)
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
