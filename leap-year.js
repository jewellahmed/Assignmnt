function leapYear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
 const year2000 = leapYear(2000);

 const year1700 = leapYear(1700);
 const year1800 = leapYear(1800);
 const year1900=leapYear(1900);
 console.log(year2000);

    

