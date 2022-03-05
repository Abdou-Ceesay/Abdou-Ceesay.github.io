const color = document.querySelectorAll(".color")
const themeBtn = document.getElementsByClassName("theme-btn")
var themeIcon = document.getElementById("sun-icon") 
var setTheme = document.body;
//let i;
//for(i = 0;i<colors.length;i++) {
  //  colors[i].addEventListener('click', changecolor)  
//}

color.forEach((button, i) => {
    const colorPos = color[i]
    button.addEventListener("click", () => {
      color.forEach((button) => {
        button.classList.remove("active")
      })
      // clickSound.play()
      setThemeColor(i)
      window.localStorage.setItem("colorTheme", i)
  
      colorPos.classList.add("active")
    })
  })
  




function setThemeColor(i) {
    // main
    if (color[i] === color[0]) {


      document.documentElement.style.setProperty("--color", "#F04646")
    } else if (color[i] === color[1]) {
      document.documentElement.style.setProperty("--color", "#e28686")
    } else if (color[i] === color[2]) {
      document.documentElement.style.setProperty("--color", "#86E0AA")
    } else if (color[i] === color[3]) {
      document.documentElement.style.setProperty("--color", "#D085DD")
    } else if (color[i] === color[4]) {
      document.documentElement.style.setProperty("--color", "#E6C72E")
    } else if (color[i] === color[5]) {
      document.documentElement.style.setProperty("--color", "#EA68E2")
    } else if (color[i] === color[6]) {
      document.documentElement.style.setProperty(
        "--color","#4C46F0")
    } else if (color[i] === color[7]) {
      document.documentElement.style.setProperty("--color", "#849EE3")
    } 
  }


function defaultIcon() {
  if(setTheme.classList.contains("lightmode")){
    themeIcon.src = "img/moon.png"  
  }else{
    themeIcon.src = "img/sun.png" 
  }
}
defaultIcon()
  //lightmode darkmode//

  function lightmode(){
    setTheme.classList.toggle("lightmode");

    var theme;

    if(setTheme.classList.contains("lightmode")) {
      theme= "LIGHT"
      themeIcon.src = "img/moon.png" 
    }else{
      theme = "DARK"
      themeIcon.src = "img/sun.png" 
    }

    localStorage.setItem("PageTheme", JSON.stringify(theme));
  }
let getTheme = JSON.parse(localStorage.getItem("PageTheme"))
if(getTheme === "LIGHT") {
  document.body.classList = "lightmode"
  themeIcon.src= "img/moon.png"
}


themeIcon.addEventListener("click", () => {
  lightmode()
})

  function initTheme() {
  var colorSelected = window.localStorage.getItem("colorTheme")
  setThemeColor(colorSelected)

  color[0].classList.remove("active")
  color[parseInt(colorSelected)].classList.add("active")
  }
  initTheme()









// function changecolor() {
 //   let color = this.getAttribute('data-color');
   // document.documentElement.style.setProperty('--color', color)
   // localStorage.setItem('--color', color)
// }



console.log(localStorage)
//function initTheme() {
  //  var colorSelected = window.localStorage.getItem('--color')
   // document.documentElement.style.setProperty('--color', colorSelected)
//}
//initTheme()



