function splice_slice_substr(tab,nbre){
  var str = "123456789";
  var sp = tab.splice(0,nbre);// soustrait du tableau le nombre de d'elements definit dans le deuxieme parametre splice(start, nbre)
   alert(tab);
  var sl = tab.slice(0,nbre);
  var sub = str.substr(0,nbre);
  console.log("splice result" + " " + sp);
  console.log("slice result" + " " + sl);
  console.log("substr result" + " " + sub);
  console.log(str);
  console.log(tab);
}
 var exple = ['0','1','2','3','4','5','6','7','8','9'];
 splice_slice_substr(exple,5);
