$(document).on('deviceready', function () {
    console.log('Gerät ist bereit')

    $(function () {
        console.log('HTML ist bereit');

        $('#elemIndicator .device-details').html(

            'Geräteversion Cordova: ' + device.cordova +
            '<br>modell: ' + device.model +
            '<br>Plattform: ' + device.platform +
            '<br>UUID: ' + device.uuid +
            '<br>Version: ' + device.version +
            '<br>Hersteller: ' + device.manufacturer +
            '<br>Virtuell: ' + device.isVirtual +
            '<br>SerienNo.: ' + device.serial
        )
    })

    $.ajax({
        url: 'data/haltestellen.csv',
        method: 'GET',
        //contentType: 'application/x-www-form-urlencoded',  // ist in jQuery default

        success: function (response) {
            //$('#result').text(response);
            console.log(response)
        },
        error: function (httpError) {
            console.error(httpError);
        }
    });

    var img = document.createElement("img");
    img.src = "../img/logo.png";
    var src = document.querySelector(".foto");
    src.appendChild(img);

});

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(response)
//       }
//     };h
//     xhttp.open("GET", "demo_test.txt", true);
//     xhttp.send();
//   }
//   loadDoc()

// $.get("data/haltestellen.csv", function(data, status){
//   console.log(data)
// });

// $.ajax({
//   url: 'data/haltestellen.csv',
//   method: 'GET',
//   //contentType: 'application/x-www-form-urlencoded',  // ist in jQuery default

//   success: function(response){
//       //$('#result').text(response);
//       console.log(response)
//   },
//   error: function(httpError){
//       console.error(httpError);
//   }
// });