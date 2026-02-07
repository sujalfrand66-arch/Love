function openPage(id){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');
}

/* QUESTIONS */
const questions=[
"Do you love me? 🥺",
"Pakka na karte ho na? 😭",
"Kissii kro fir abii 😚",
"Mere sath khush toh ho na? ❤️",
"Mujhe kabhi chhod kar toh nahi jaogi na? 🥺",
"Mujhse shaadi karogi? 💍"
];

const gifs=[
"https://media.tenor.com/4f6W9i9gYH0AAAAC/cute-bear-love.gif",
"https://media.tenor.com/o_5RQarGvJ0AAAAC/kiss-bear.gif",
"https://media.tenor.com/2roX3uxz_68AAAAC/peach-cat.gif",
"https://media.tenor.com/1v1xW0g7gqkAAAAC/cute.gif",
"https://media.tenor.com/Q9nJ7Qx7xX8AAAAC/teddy-bear-love.gif",
"https://media.tenor.com/jU9n9C6S2Y0AAAAC/bear-hug.gif"
];

let i=0;
const q=document.getElementById("question");
const gif=document.getElementById("gif");
const yes=document.getElementById("yes");
const no=document.getElementById("no");

gif.src=gifs[0];

yes.onclick=()=>{
i++;
if(i<questions.length){
q.innerText=questions[i];
gif.src=gifs[i];
yes.style.transform=`scale(${1+i*0.2})`;
}else{
openPage('giftpage');
}
};

no.onclick=()=>{
gif.src="https://media.tenor.com/3kK4X2GJ5n0AAAAC/sad-bear.gif";
no.style.left=Math.random()*300+"px";
no.style.top=Math.random()*300+"px";
};

document.querySelectorAll('.wrong').forEach(b=>{
b.onclick=()=>alert("Wrong answer 😜");
});
