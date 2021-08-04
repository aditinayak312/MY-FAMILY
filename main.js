var pictures=["https://i.postimg.cc/MKdhy06Z/family.jpg","papa.jpg","mummy.jpg","adi.jpg","bhai.jpg"];
var members=["MY FAMILY","MANOJ KR. NAYAK (PAPA)","BEENA NAYAK (MUMMY)","ADITI (ME)","SHASHWAT ANAND (BHAI)"];
var count=0;
function change(){
    if(count > 4){
        count=0;
    }
    document.getElementById("image").src=pictures[count];
    document.getElementById("names").innerHTML=members[count];
    count++;
}