function doiCho(a){
    for(i=0;i<a.length/2;i++){
        c=a[i];
        a[i]=a[a.length-1-i];
        a[a.length-1-i]=c;
    }return a
}
let mang=new Array;
let x=0;
function getso(){
        mang[x]=document.getElementById("id").value;
        x++;
document.getElementById("mang1").innerHTML=mang;
    let d=mang;
    doiCho(d);
    document.getElementById("mang2").innerHTML=d;
}
// function click1(){
//        let d=mang;
//        doiCho(d);
//    document.getElementById("mang2").innerHTML=d;
// }

