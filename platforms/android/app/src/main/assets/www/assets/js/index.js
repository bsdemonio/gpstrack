$(function() {
    function saveGPS()
    {
        setInterval(function(){
            navigator.geolocation.getCurrentPosition(function(position) {
                $('#result').html('User: '  + localStorage.getItem("name")      + '<br />' +
                                  'Date: '  + moment().format('DD-MM-YYYY')     + '<br />' +
                                  'Time: '  + moment().format('HH:mm:ss a')     + '<br />' +
                    'Latitude: '  + position.coords.latitude      + '<br />' +
                                    'Longitude: ' + position.coords.longitude     + '<br />');
                var assetLayerGroup = new L.LayerGroup();
                var marker1 = L.marker([position.coords.latitude,position.coords.longitude],{color: 'red'}).bindPopup(localStorage.getItem("name"));
                assetLayerGroup.addLayer(marker1);
                assetLayerGroup.addTo(mymap);
                mymap.setView([position.coords.latitude,position.coords.longitude],15);
                /*$.ajax({
                  url: "http://192.168.15.8/save",
                  type: "post",
                  data: {
                      cellNumber:localStorage.getItem("cellNumber"),
                      name:localStorage.getItem("name"),
                      email:localStorage.getItem("email"),
                      profile:localStorage.getItem("profile"),
                      lat:position.coords.latitude,
                      long :position.coords.longitude,
                      date:moment().format('DD-MM-YYYY'),
                      time:moment().format('HH:mm:ss a')
                  }
                }).done(function() {
                  console.log('done');
                });*/
               /*var element = document.getElementById('result');
                element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                    'Longitude: ' + position.coords.longitude     + '<br />' +
                                    '<hr />'      + element.innerHTML;*/

            });
        }, 1 * 60 * 100);
    }
    if((localStorage.getItem("cellNumber") != null)&&(localStorage.getItem("name") != null)&&(localStorage.getItem("email") != null)&&(localStorage.getItem("profile") != null))
        {
            $('#content').hide();
            $('#results').show();
            $('#map').show();
            saveGPS();
        }
    else
        {
            $('#results').hide();
            $('#map').hide();
            $('#content').show();
        }
    $( "#saveStuff" ).click(function() {
        if(( $('#name').val() != '')&&($('#email').val() != '')&&($('#cellphone').val() != '')&&($('#profile').val() != ''))
          {
              localStorage.setItem("cellNumber",$('#cellphone').val());
              localStorage.setItem("name",$('#name').val());
              localStorage.setItem("email",$('#email').val());
              localStorage.setItem("profile",$('#profile').val());
              $('#content').hide();
              $('#results').show();
              saveGPS();
          }
        else
            {
                alert('Missing values are needed ! ')
            }
    });
});
var mymap = L.map('map').setView([21.91,-102.31], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnNkZW1vbmlvIiwiYSI6ImNqb3o2Z3hjeTAwM2kzeG9jNnI0bDVyMWkifQ.KJW1kDFXDI0CBffTZBgutA', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox.streets',
   accessToken: 'pk.eyJ1IjoiYnNkZW1vbmlvIiwiYSI6ImNqb3o2Z3hjeTAwM2kzeG9jNnI0bDVyMWkifQ.KJW1kDFXDI0CBffTZBgutA'
}).addTo(mymap);
