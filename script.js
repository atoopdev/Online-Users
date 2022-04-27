let profileHTMLOutput = ""

async function getUser(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/3`)
    let data = await response.json()
    // console.log(data)
    profileHTML(data)
}

function profileHTML(user){
// console.log(`user's name: ${user.name} username: ${user.username} Company: ${user.company.name}- ${user.company.catchPhrase}, ${user.company.bs} Contact details: Email: ${user.email} phone: ${user.phone} website: ${user.website}`)

document.getElementById("user-containerEL").innerHTML = `
<div class="user-profile">

<div class="top">
<h2>${user.name}</h2>
<h2 class="username">@${user.username}</h2>
</div>

<div class="top-middle"><h2>Company</h2>
<div class="company">
<span class="company-name">${user.company.name}</span> 
<span class="company-phrase">${user.company.catchPhrase}</span> 
<span class="company-bs">${user.company.bs}</span>
</div>
</div>

<div class="bottom-middle"><h2>Contact Details</h2>
<div class="contact-details"><span class="email">📧${user.email}</span> 
<span class="phone"> 📱${user.phone}</span> 
<span class ="website">${user.website}</span>
</div>
</div>

<div class="profile-footer"><h2>Address</h2>
<div class="user-address">
<span class="street">${user.address.street}</span>
<span class="suite">${user.address.suite}</span>
<span class="city">${user.address.city}</span>
<span class="zip">${user.address.zipcode}</span>
</div>
</div>

</div>

`
}

getUser()