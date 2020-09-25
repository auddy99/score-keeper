var p1=document.querySelector(".p1")
var p2=document.querySelector(".p2")
var q1=document.querySelector(".q1")
var q2=document.querySelector(".q2")
var n=document.querySelector(".n")
var reset=document.querySelector(".reset")
var num=document.querySelector("input")
var playOn=true


q1.addEventListener("click",function(){
	if(!playOn)
		return
	p1.textContent++
	if(n.textContent===p1.textContent){
		playOn=false
		p1.style.color="green"
	}
})

q2.addEventListener("click",function(){
	if(!playOn)
		return
	p2.textContent++
	if(n.textContent===p2.textContent){
		playOn=false
		p2.style.color="green"
	}
})


function re() {
	p1.textContent=0
	p2.textContent=0
	playOn=true
	p1.style.color="black"
	p2.style.color="black"
}

reset.addEventListener("click",function(){
	re()
})

num.addEventListener("change",function(){
	n.textContent=num.value
	re()
})

