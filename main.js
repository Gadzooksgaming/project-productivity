 var total_hours= 0;
 var sleep=0;
var eating=0;
var traveling=0;
var work=0;
var leisure=0;
var sports=0;
var freetime=0;
var p1="";
var p2="";
var p3="";
var p4="";
var p5="";
var p6="";



function calc(){
 sleep= Number(document.getElementById("sleep").value);
 eating= Number(document.getElementById("eating").value);
 traveling= Number(document.getElementById("traveling").value);
 work= Number(document.getElementById("work").value);
 leisure= Number(document.getElementById("leisure ").value);
 sports= Number(document.getElementById("sports").value);
 freetime=Number(document.getElementById("Freetime").value);
    total_hours = sleep+eating+traveling+work+leisure+sports+freetime;
    if(total_hours>24)(total_hours<24);{
        document.getElementById("Feedback").innerHTML="Please enter a valid number of hours";
    }
    if(total_hours==24){
        if(sleep<7){
           p1="Try sleep abit more, preferably 7-8 hours ever night. Too little sleep can lead to anxiety";
        }
        if(sleep>9){
           p1="Try sleep abit less, preferably 7-8 hours. Sleeping too much can lead to fatigue";
        }

        if(eating<1){
            p2="You might be eating too fast or not eating enough. Eat at a steady pace and have atleast 2-3 full meals a day";
        }
        if(eating>2.5){
           p2="You might be eating too slow or eating alot of meals. Eat at a steady pace and have atleast 2-3 full meals a day";
        }
        if(work>9){
            p3="You might be working too much";
         }
         if(leisure<5){
            p4="you need to take more and longer brakes to do what you love";
         }
         if(leisure>6.5){
            p2="You are taking too much liesure time, unless your on holidays";
         }
         if(sports<1){
            p2="You need to do more sporting activities";
         }
         if(freetime>4){
            p6="you need to fill your day with more activities";
         }
        document.getElementById("Feedback").innerHTML=p1+"."+p2+"."+p3+"."+p4+"."+p5;
    }
   
    console.log(total_hours);
}




