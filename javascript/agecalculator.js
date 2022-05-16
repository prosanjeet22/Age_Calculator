function age()
{
    var dob=document.getElementById('date1').value;
    var getdob=new Date(dob);
    var day=getdob.getDate();
    var month=getdob.getMonth();
    var year=getdob.getFullYear();
    var currdate=new Date();
    var cday=currdate.getDate();
    var cmonth=1+currdate.getMonth();
    var cyear=currdate.getFullYear();
    var dd=document.querySelector('.dd');
    var mm=document.querySelector(".mm");
    var yy=document.querySelector('.yy');
    var tmonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(day>cday)
    {
       cday=cday+tmonth[cmonth-1];
       cmonth=cmonth-1;
    }
    if(month>cmonth)
    {
        cmonth=cmonth+12;
        cyear=cyear-1;
    }

    // dd1.innerHTML="p"
    dd.textContent=cday-day;
    mm.textContent=cmonth-month;
    yy.textContent=cyear-year;
    

}