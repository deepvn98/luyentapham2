function getNumber(){
    let mang=new Array;
    let so1=prompt("số thứ nhất");
    let so2=prompt("số thứ hai");
    mang.push(so1);
    mang.push(so2);
    for (i=0;i<mang.length;i++){
        let so3=mang[i];
        mang[i]=mang[mang.length-1-i];
        mang[mang.length-1-i]=so3;
        return mang;
    }
}alert(getNumber())
