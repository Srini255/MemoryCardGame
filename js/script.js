let a=["img1.png","img2.jpg","img3.jpg","img4.png","img1.png","img2.jpg","img3.jpg","img4.png"]

document.addEventListener('DOMContentLoaded',()=>
{
    shuffle();
    const cards=document.querySelectorAll('.img');
    let i=0;
    cards.forEach(card=>{
        card.id=`${a[i]}`;
        card.style.content=`url("../img/${a[i]}")`;
        i++;
    });
});

function shuffle(){
    for(let i=a.length-1;i>0;i--)
    {
        const j=Math.floor(Math.random()*(i+1));
        [a[i],a[j]]=[a[j],a[i]];
    }
}

document.querySelectorAll('.back').forEach(image=>{
    image.addEventListener('click',()=>{
        const img=image.firstChild;
        img.className="flipped";
        img.style.display="block";
    })
})

setInterval(()=>{
    document.querySelectorAll('.img').forEach(image=>{
            if(image.style.display==="block"){
            image.style.display="none";
            }
        });
},"10000")


document.getElementById('start').addEventListener('click',()=>{
    const Count=document.getElementById('time');
    Count.value=60;
    Count.textContent=Count.value;
    document.getElementById('start').style.display="none";
    CountDown=setInterval(()=>{
        
        if(Count.value===1)
        {
            document.getElementById('start').style.display="block";
            clearInterval(CountDown);
        }
        Count.value=Count.value-1;
        Count.textContent=Count.value;
    },"1000")
})