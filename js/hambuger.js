export function toggleHamburger(headerTag="",buttonTag="",linksTags=""){

    // alert("hambuger");

    var d = document;

    d.addEventListener("click", function(e){

        if (e.target.matches("#hamburger-toggle")) { //Check is exists any other child element
            // alert("hambuger");
            d.querySelector("#myHeader").classList.toggle('header-visible');
        }
        if (e.target.matches("header ul li a")){
        
            d.querySelector("#myHeader").classList.toggle('header-visible');
        }
        if(e.target.matches("main section h2")){
            d.querySelector("main div.flotar-content div p").innerHTML = e.target.innerHTML;
            d.querySelector("main div#flotar").classList.toggle("float-content-hidden");
        }
        if (e.target.matches("main div.flotar-content span")) {
            d.querySelector("main div#flotar").classList.toggle("float-content-hidden");
        }

    },false);


}


  // alert(e.target.innerHTML);
        //     <div id="flotar" class="flotar-content">
        //     <div class="flotar-child-content">
        //         <p>HOME</p>
        //     </div>
        //     <span>X</span>
        // </div>
            // var mainTag = d.querySelector("main");
            // var divParent = d.createElement("div");
            // var divChild = d.createElement("div");
            // var spanClose = d.createElement("span");
            // var pText = d.createElement("p");
            // var newTextNode = d.createTextNode("HOMEE");
            // var newTextClose = d.createTextNode("X");

            // divParent.setAttribute("id","flotar");
            // divParent.setAttribute("class","flotar-content");
            
            // divChild.setAttribute("class","flotar-child-content");

            // pText.appendChild(newTextNode);
            // spanClose.appendChild(newTextClose);

            // divChild.appendChild(pText);

            // divParent.appendChild(divChild);
            // divParent.appendChild(spanClose);

            // mainTag.appendChild(divParent);