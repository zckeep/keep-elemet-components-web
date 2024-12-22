import{d as s,r as i,a as v,o as p,e as m,f as u}from"./index-BW3nvoI6.js";const k=s({__name:"index",setup(_){const l=i([{title:"购物",start:"2024-09-01 08:00",end:"2024-09-01 12:00",editable:!0},{title:"写代码",start:"2024-09-03 10:00",end:"2024-09-03 18:00",editable:!0}]),a=e=>{console.log(e,"=="),l.value.push({title:"新建",start:e.dateStr+" 12:00",end:e.dateStr+" 18:00",editable:!0})},r=e=>{console.log(e,"eventClick")},c=e=>{let n=document.createElement("div"),t=e.timeText.split("-"),o=t[0].replace("上午","").replace("下午","").replace("时",""),d=t[1].replace("上午","").replace("下午","").replace("时","");return n.innerHTML=`
          <div>开始时间：${o}</div>
          <div>结束时间：${d}</div>
          <div>标题：${e.event._def.title}</div>
        `,{domNodes:[n]}};return(e,n)=>{const t=v("m-calendar");return p(),m("div",null,[u(t,{displayEventEnd:"",onDateClick:a,onEventClick:r,eventContent:c,events:l.value},null,8,["events"])])}}});export{k as default};
