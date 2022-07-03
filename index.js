

document.getElementById('genColors').addEventListener("click", function(){
let html = ""
document.getElementById('colorPalette').innerHTML = html;
let Base = document.getElementById('baseColor').value;
Base = Base.slice(1);
let url = "https://www.thecolorapi.com/scheme?hex=" + Base + "&count=5"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.colors[0].name.value)
        
        for(let i = 0; i<5; i++) {
            html += 
            `

            <div class="colorCard">
            <div style="background-color: ${data.colors[i].hex.value} ;" class="color" id="color${i}"><div class="cardCircle"></div></div>
            <div class="hex">
            <p>${data.colors[i].name.value}</p>
            <p>${data.colors[i].hex.value}</p>
            </div>
            </div>
            `
            
        }

        document.getElementById('colorPalette').innerHTML = html;

    })

    

})



