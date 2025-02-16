const starsEl=document.querySelectorAll('.fas');
//console.log(starsEl);

starsEl.forEach(function(starEl,index){
    starEl.addEventListener('click',()=>{
        update_rating(index);
        update_emoji(index);
        rating(index);
    })
})

function update_rating(index){
    starsEl.forEach((starEl,idx)=>{
        if (idx<=index){
            starEl.classList.add('active');
        }else{
            starEl.classList.remove('active');
        }
    })
    
}

function update_emoji(index){
    //console.log(index);
    const emojiEl=document.querySelector('.emoji');
    if (index===0){
        emojiEl.textContent='😡';
       // console.log('hii');
    }else if (index===1){
        emojiEl.textContent='😠';
    }else if (index===2){
        emojiEl.textContent='😐';
    }else if (index===3){
        emojiEl.textContent='😊';
    }else if (index===4){
        emojiEl.textContent='😍';
    }
}

function rating(index){
    let ratinge=document.getElementById('rating');
    ratinge.textContent="Rating : "+(index+1);
    console.log('hii');
}