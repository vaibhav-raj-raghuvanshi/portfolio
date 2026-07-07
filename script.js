const words=["Software Engineer","Competitive Programmer","AI Builder","Full Stack Developer"];
let wi=0,ci=0,del=false;
const el=document.getElementById("type");
setInterval(()=>{
const w=words[wi];
if(!del){
el.textContent=w.slice(0,++ci);
if(ci===w.length){del=true;setTimeout(()=>{},800);}
}else{
el.textContent=w.slice(0,--ci);
if(ci===0){del=false;wi=(wi+1)%words.length;}
}
},110);
 