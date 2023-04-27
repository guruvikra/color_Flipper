const color=document.getElementById('color')
const btn=document.getElementById('btn')
const wrap=document.getElementById('wrap')
const hex=[0 , 1, 2, 3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click', ()=>{
    let h='#'
    for(let i=1;i<=6;i++){
        h+=rand()
    }
    wrap.style.backgroundColor=h
    color.innerHTML=h
    
})
function rand(){
    
     let ind=Math.floor(Math.random()*15)
     return  hex[ind]
    
}
