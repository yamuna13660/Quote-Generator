let quote=document.querySelector(".quote");
let writer=document.querySelector(".writer");
let btn=document.querySelector("#btn");
const quotes = [
{
quote: `"To live is the rarest thing in the world. Most people exist, that is all"`,
writer: "~Oscar Wilde"
},
{
quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
writer: "~Winston Churchill"
},
{
quote: `"Even if we don't have the power to choose where we come from, we can still choose where we go from there"`,
writer: "~Theodore Roosevelt"
},
{
quote: `"There is nothing noble being superior to your fellow man; true nobility is being superior to former self"`,
writer: "~Albert Einstein"
},
{
quote: `"If you don't have time to read, you don't have the time to write. Simple as that"`,
writer: "~Stephen King"
}
];
btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
});
