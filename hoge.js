//ローカルスコープとグローバルスコープ
var name = "ひつじ仙人";
console.log(name);
function introduce() {
  var name = "にんじゃわんこ";
  console.log(name);
}
introduce();
console.log(name);
