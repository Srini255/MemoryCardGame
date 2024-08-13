let a=["img1.png","img2.jpg","img3.jpg","img4.png","img1.png","img2.jpg","img3.jpg","img4.png"]
let matches=[];
let check=[];
document.addEventListener('DOMContentLoaded',()=>
{
    startGame();
});


function startGame(){
    shuffle();
    const cards=document.querySelectorAll('#img');
    let i=0;
    cards.forEach(card=>{
        card.id=`${a[i]}`;
        card.className='a-img';
        card.src=`img/${a[i]}`;
        // card.style.width="200px";
        // card.style.height="200px";
        i++;
    });
}

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


document.querySelectorAll('.flip-card').forEach(card=>{
    card.addEventListener('click',()=>{
        const flip=card.querySelector('.flipcard-inner');   
        if(check.length===2){
            compare();
        }
        flip.classList.contains("inner")?flip.classList.remove("inner"):flip.classList.add("inner");
        check.push(flip);
        if(matches.length==6&&check.length===2){
            compare();}
    })
    
})

function compare(){
    const first=check[0].children[1].children[0].id;
    const second=check[1].children[1].children[0].id;
    if(first===second){
        check.forEach(ele=>{
            matches.push(ele)});
        check=[];
        if(matches.length===a.length)
        {
            alert("Congratulations!you won the game");
        }
    }else{ 
        check.forEach(ele=>{
            ele.classList.remove("inner");
        })
        check=[];
    }
}

function reset(){
    matches=[];
    document.querySelectorAll('.inner').forEach(ele=>{
        ele.classList.remove("inner");
    });
    const cards=document.querySelectorAll('.a-img');
    let i=0;
    cards.forEach(card=>{
    card.id="img";
    card.classList.remove('a-img');
    card.removeAttribute('src');
    });
    startGame();
}