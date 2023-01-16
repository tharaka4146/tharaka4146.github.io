// console.log('1')

// document.getElementById("temp").appendChild(

//     <div class="col-lg-2" style="margin: 15px;">
//         <div class="card" id="button-3">
//             <iframe width="225" height="400" src="https://www.youtube.com/embed/0j6eCJEnxUc"
//                 style="border-radius: 10px;" frameborder="0" allowfullscreen></iframe>
//         </div>
//     </div>

// );

// console.log('2')

{/* <div class="col-lg-2" style="margin: 15px;">
    <div class="card" id="button-3">
        <iframe width="225" height="400" src="https://www.youtube.com/embed/XUTzp0RHEJs"
            style="border-radius: 10px;" frameborder="0" allowfullscreen>
        </iframe>
        </div>
</div> */}

console.log(1)

// keys = Object.keys(localStorage),


console.log('ffff');


// for (var i = 0, len = localStorage.length; i < len; ++i) {

let idIntArray = []

let idArray = Object.keys(localStorage)

console.log('idArray', idArray)

for (values in idArray) {
    console.log('idArray[values]', idArray[values])
    console.log('Number(idArray[values])', Number(idArray[values]))
    idIntArray.push(Number(idArray[values]))
}

console.log('idIntArray', idIntArray)

let sortIdIntArray = Object.values(idIntArray).sort((a, b) => b - a)

console.log('sortIdIntArray', sortIdIntArray)
// for (let i = localStorage.length - 1; i > -1; i--) {
for (let i = 0; i < localStorage.length; i++) {


    // }
    console.log(localStorage.getItem(sortIdIntArray.key(i)));
    //   }

    // for (var id in localStorage) {


    // for (const id in result) {
    console.log('id', localStorage.getItem(sortIdIntArray.key(i)))
    // console.log('ttt', localStorage.getItem(id))
    // console.log('asd', localStorage.getItem(localStorage.id))

    var one = document.createElement("div");
    one.className = "col-lg-2";
    one.style.margin = "15px";

    var two = document.createElement("div");
    two.className = "card";

    var three = document.createElement("iframe");
    three.width = "225";
    three.height = "400";
    three.src = `https://www.youtube.com/embed/${localStorage.getItem(localStorage.key(i))}`;
    three.style.borderRadius = "10px";
    three.frame
    three.allowFullscreen = "allowfullscreen";


    one.appendChild(two);
    two.appendChild(three);

    document.getElementById("tit").appendChild(one);
}

// for (var i in tit) {

//     // var element = document.createElement("h2");
//     // element.innerHTML = tit[i];

//     var one = document.createElement("div");
//     one.className = "col-lg-2";
//     one.style.margin = "15px";

//     var two = document.createElement("div");
//     two.className = "card";

//     var three = document.createElement("iframe");
//     three.width = "225";
//     three.height = "400";
//     three.src = `https://www.youtube.com/embed/${}`;
//     three.style.borderRadius = "10px";
//     three.frame
//     three.allowFullscreen = "allowfullscreen";


//     one.appendChild(two);
//     two.appendChild(three);

//     console.log('one', one)

//     document.getElementById("tit").appendChild(one);

// }