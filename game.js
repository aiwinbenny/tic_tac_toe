var c1=document.querySelector("#c1")
var c2=document.querySelector("#c2")
var c3=document.querySelector("#c3")
var c4=document.querySelector("#c4")
var c5=document.querySelector("#c5")
var c6=document.querySelector("#c6")
var c7=document.querySelector("#c7")
var c8=document.querySelector("#c8")
var c9=document.querySelector("#c9")
var para = document.querySelector("#para")
var play=0

function winCheck() {
  if(c1.textContent === "X" && c2.textContent === "X" && c3.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c1.textContent === "O" && c2.textContent === "O" && c3.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c1.textContent === "X" && c4.textContent === "X" && c7.textContent ==="X")
  {
  para.textContent = "Congrats! You won"
  }
  if(c1.textContent === "O" && c4.textContent === "O" && c7.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c1.textContent === "X" && c5.textContent === "X" && c9.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c1.textContent === "O" && c5.textContent === "O" && c9.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c3.textContent === "X" && c6.textContent === "X" && c9.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c3.textContent === "O" && c6.textContent === "O" && c9.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c7.textContent === "X" && c8.textContent === "X" && c9.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c7.textContent === "O" && c8.textContent === "O" && c9.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c3.textContent === "X" && c5.textContent === "X" && c7.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c3.textContent === "O" && c5.textContent === "O" && c7.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c2.textContent === "X" && c5.textContent === "X" && c8.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c2.textContent === "O" && c5.textContent === "O"  && c8.textContent ==="O")
  {
    para.textContent = "Congrats! You won"
  }
  if(c4.textContent === "X" && c5.textContent === "X"  && c6.textContent ==="X")
  {
    para.textContent = "Congrats! You won"
  }
  if(c4.textContent === "O" && c5.textContent === "O" && c6.textContent ==="O")
  {
  para.textContent = "Congrats! You won"
  }
}

c1.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c1.textContent ="X"
  }
  else{
    c1.textContent = "O"
  }

  play++;
  winCheck()
})

c2.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c2.textContent ="X"
  }
  else{
    c2.textContent = "O"
  }
  play++;
  winCheck()
})
c3.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c3.textContent ="X"
  }
  else{
    c3.textContent = "O"
  }
  play++;
  winCheck()
})
c4.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c4.textContent ="X"
  }
  else{
    c4.textContent = "O"
  }
  play++;
  winCheck()
})
c5.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c5.textContent ="X"
  }
  else{
    c5.textContent = "O"
  }
  play++;
  winCheck()
})
c6.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c6.textContent ="X"
  }
  else{
    c6.textContent = "O"
  }
  play++;
  winCheck()
})
c7.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c7.textContent ="X"
  }
  else{
    c7.textContent = "O"
  }
  play++;
  winCheck()
})
c8.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c8.textContent ="X"
  }
  else{
    c8.textContent = "O"
  }
  play++;
  winCheck()
})
c9.addEventListener("click", function () {
  if(play%2 === 0)
  {
    c9.textContent ="X"
  }
  else{
    c9.textContent = "O"
  }
  play++;
  winCheck()
})
