//  create map
const map = L.map('mapid').setView([-23.2321602,-45.903864], 15);

//  create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//  create icon
const icon = L.icon({
    iconUrl: ".//images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    //  selecting the HTML element
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    //  remove icon
    marker && map.removeLayer(marker)
    //  add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//  add photos field
function addPhotoField() {
    //  get the photos container #images
    const container = document.querySelector('#images')
    //  get the container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //  make the clone of the last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //  check if the field is empty, if yes, don't add to container
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    //  clear the text of the input field before add to container
    newFieldContainer.children[0].value = ""
    //  add the clone at HTML #images container
    container.append(newFieldContainer)
}

//  delete photos field
function deleteField(event) {
    const span = event.currentTarget
    //  check all the fields container
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //  check if there is only one container, if yes, don't delete it and clear the text
    if (fieldsContainer.length <= 1) {
        //  clear the value of the field
        span.parentNode.children[0].value = ""
        return
    }
    //  delete the field
    span.parentNode.remove()
}

//  select yes or no button
function toggleSelect(event) {
    //  remove class .active from both buttons
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    //  add class .active on clicked button
    const button = event.currentTarget
    button.classList.add('active')
    //  update the input hidden with the value selected
    const input = document.querySelector('[name="open-on-weekends"]')
    //  check if it is yes or no with data-value
    input.value = button.dataset.value
}

//  check if lat and lng are filled before confirm
function validate(event) {
    // const needsLatAndLng = true;
    // if (needsLatAndLng) {
    //     event.preventDefault()
    //     alert('Selecione um ponto no mapa')
    // }

    // const validLat = document.querySelector('[name="lat"]')
    // const validLng = document.querySelector('[name="lng"]')
    // if (validLat.value && validLng.value == "") {
    //     event.preventDefault()
    //     alert('Selecione um ponto no mapa')
    // }
}