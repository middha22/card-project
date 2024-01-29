let form = document.querySelector("form")
let details = document.getElementById("user");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    localStorage.setItem("fname",document.getElementById("fname").value)
    localStorage.setItem("lname",document.getElementById("lname").value)
    localStorage.setItem("pNum",document.getElementById("phNum").value)
    localStorage.setItem("country",document.getElementById("country").value)
    localStorage.setItem("state",document.getElementById("state").value)
    localStorage.setItem("city",document.getElementById("city").value)
    localStorage.setItem("village",document.getElementById("village").value)

    let modal = document.getElementById("sub")
    modal.style.display = "none";
      

    details.innerText = "";
    let userCard = document.createElement("div");
    userCard.setAttribute("id","info-card");
    userCard.innerHTML = `<h1>User Information Card</h1>
                          <div id="user-info">
                            <div class="field">
                                <span class="label">First Name:</span>
                                <span id="first-name">${localStorage.getItem("fname")}</span>
                            </div>
                            <div class="field">
                                <span class="label">Last Name:</span>
                                <span id="last-name">${localStorage.getItem("lname")}</span>
                            </div>
                            <div class="field">
                                <span class="label">Country:</span>
                                <span id="country">${localStorage.getItem("country")}</span>
                            </div>
                            <div class="field">
                                <span class="label">Phone Number:</span>
                                <span id="phone-number">${localStorage.getItem("pNum")}</span>
                            </div>
                            <div class="field">
                                <span class="label">State:</span>
                                <span id="state">${localStorage.getItem("state")}</span>
                            </div>
                            <div class="field">
                                <span class="label">City:</span>
                                <span id="city">${localStorage.getItem("city")}</span>
                            </div>
                            <div class="field">
                                <span class="label">Village:</span>
                                <span id="village">${localStorage.getItem("village")}</span>
                            </div>
                          </div>` 

    details.appendChild(userCard)
})