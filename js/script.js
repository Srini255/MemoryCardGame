let a=["img1.png","img2.jpg","img3.jpg","img4.png","img1.png","img2.jpg","img3.jpg","img4.png"]

document.addEventListener('DOMContentLoaded',()=>
{
    const cards=document.querySelectorAll('.img');
    let i=0;
    cards.forEach(card=>{
        card.id=`${a[i]}`;
        card.style.content=`url("../img/${a[i]}")`;
        i++;
    })
})