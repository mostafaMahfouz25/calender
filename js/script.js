// let toDay = new Date();
// let currentMonth = toDay.getMonth();
// let currentYear = toDay.getFullYear();

// let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// let monthAndYear = document.getElementById("monthAndYear");


// const showCalender = (month,year)=>
// {
//     let firstDay = new Date(year,month).getDay();
//     let daysInMonth = 32 - new Date(year,month,32).getDate();

//     let tbl = document.getElementById("calender-body");
//     tbl.innerHTML ='';

//     monthAndYear.innerHTML = months[month] + " " + year;
//     let date = 1;

//     for(let i=0; i<6; i++)
//     {
//         let row = document.createElement("tr");

//         for(let j =0; j<7; j++)
//         {
//             if(i === 0 && j<firstDay)
//             {
//                 let cell = document.createElement("td");
//                 let cellText = document.createTextNode('');
//                 cell.appendChild(cellText);
//                 row.appendChild(cell)
//             }
//             else if(date > daysInMonth)
//             {
//                 break;
//             }
//             else
//             {
//                 let cell = document.createElement("td");
//                 let cellText = document.createTextNode(date);
//                 cell.appendChild(cellText);
//                 row.appendChild(cell)

//             }
            
//             date++;
//         }

//         tbl.appendChild(row);
//     }
    
// }


// showCalender(currentMonth,currentYear);

// document.querySelector(".prev").addEventListener("click",()=>{
//     prev()
// })

// document.querySelector(".next").addEventListener("click",()=>{
//     next()
// })


// function prev()
// {
//     console.log("dfgdfgdfg")
//     currentYear = ( currentMonth === 0 )? currentYear-1 : currentYear;
//     currentMonth = (currentMonth === 0) ? 11 : currentMonth -1;
//     showCalender(currentMonth,currentYear);
// }

// function next()
// {
//     currentYear = ( currentMonth === 11 )? currentYear + 1 : currentYear;
//     currentMonth = (currentMonth +1 ) % 12;
//     showCalender(currentMonth,currentYear);
// }



let toDay = new Date();
let currentMonth = toDay.getMonth();
let currentYear = toDay.getFullYear();
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let daysWeek = ["SUN","Mon","Tue","Wed","Thu","Fri","Sat"];
let monthAndYear = document.getElementById("monthAndYear");
let showFullDate = document.getElementById("show-date");
let tbl = document.getElementById("calender-body");
monthAndYear.innerText = months[currentMonth] + ' ' + currentYear;


// get next month  
document.querySelector(".next").addEventListener("click",()=>{
    next();
})
document.querySelector(".prev").addEventListener("click",()=>{
    prev();
})
// console.log(currentMonth);
function next()
{
    currentYear = (currentMonth >= 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth >= 11) ? 0 : currentMonth + 1;
    monthAndYear.innerText = months[currentMonth] + ' ' + currentYear;
    showDate(currentYear,currentMonth)
}

function prev()
{
    currentYear = (currentMonth <= 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth <= 0) ? 11 : currentMonth - 1;
    monthAndYear.innerText = months[currentMonth] + ' ' + currentYear;

    showDate(currentYear,currentMonth)
}


function showDate(year,month)
{
    tbl.innerHTML = '';
    let days = new Date(year, month+1, 0).getDate();
    let date = 1;
    for(let i=0; i<6; i++)
    {
        let row = document.createElement("tr");
        
        
        for(j=0; j<7; j++)
        {
            let numDay = new Date(year,month,date);
            if(numDay.getDay() === j)
            {     // console.log(numDay);
                row.innerHTML += `<td class="change-color" data-date="${date}/${month}/${year}">${date}  </td>`
                if(date == days)
                {
                    break;
                }
                date++

            }
            else
            {
                row.innerHTML += `<td>  </td>`
            }
        }
        
        tbl.appendChild(row)

        if(date == days)
        {
            break;
        }
    }
}

showDate(currentYear,currentMonth)

// ${daysWeek[numDay.getDay()]}
// let firstDay = new Date(year,month);
// let lastDay = new Date(year,month +1,0);
document.getElementById("calender").addEventListener("click",(e)=>{
    let calenderTd = document.querySelectorAll("#calender tbody td");
    calenderTd.forEach((item)=>{
        item.style.color ="black";
        item.style.backgroundColor ="#fff";
    })
    let el = e.target;
    if(el.classList.contains("change-color"))
    {
        el.style.color ="red";
        el.style.backgroundColor ="green";
        showFullDate.innerText = el.getAttribute("data-date")
    }

})