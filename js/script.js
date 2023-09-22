
function imageOnload(image) {
    image.classList.add('loaded')
}
const renderUSer = function (data) {
    const list= document.querySelector('.users');
    const html = `
        <a class="user" href="user.html?first_name==${data.first_name}&&last_name==${data.last_name}&&avatar==${data.avatar}&&email==${data.email}&&title==${data.employment.title}&&phone_number==${data.phone_number}&&date_of_birth==${data.date_of_birth}&&city==${data.address.city}&&street_name==${data.address.street_name}&&street_address==${data.address.street_address}&&country==${data.address.country}">
            <div class="avatar">
                <img onload="imageOnload(this)" src="${data.avatar}" alt="user photo">
            </div>
            <div class="name">
            ${data.first_name} ${data.last_name} 
            </div>
            <div class="title">
            ${data.employment.title}
            </div>
        </a>
    `;
    list.insertAdjacentHTML('beforeend', html);
  };

const getData = function (){
    fetch('https://random-data-api.com/api/v2/users?size=10')
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            btn.addEventListener('click', function(){
                btn.classList.add("hidden");
            for (let i = 0; i < users.length; i++) {
                renderUSer(users[i]);
            }})
        });
}

const btn = document.querySelector('.button');

getData();

const href = window.location.href.split('html?').pop().split('&&');
    const parts=[];
    for (let i = 0; i < href.length; i++) { 
        parts.push(href[i].split('%20').join(' ').split('=='));
    }
    let finalInfo = Object.fromEntries(parts);
    const renderInfo = function (data) {
    const userInfo= document.querySelector('.user-info');
    const html = `
        <div class="avatar big">
            <img onload="imageOnload(this)" src="${data.avatar}" alt="user-image">
        </div>
        <div class="info"><p>Name: <span>${data.first_name} ${data.last_name}</span></p></div>
        <div class="info"><p>Title: <span>${data.title}</span></p></div>
        <div class="info"><p>Date of birth: <span>${data.date_of_birth}</span></p></div>
        <div class="info"><p>Email: <span>${data.email}</span></p> </div>
        <div class="info"><p>Phone number: <span>${data.phone_number}</span></p></div>
        <div class="info"><p>Address</p></div>
        <div class="info"><p>Street Name: <span>${data.street_name}</span></p></div>
        <div class="info"><p>Street address: <span>${data.street_address}</span></p></div>
        <div class="info"><p>City: <span>${data.city}</span></p></div>
        <div class="info"><p>Country: <span>${data.country}</span></p></div>
    `;
    userInfo.insertAdjacentHTML('beforeend', html);
  };

  renderInfo(finalInfo);