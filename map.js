var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.6977082, lng: 23.321867500000053},
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });
    var styleControl = document.getElementById('style-selector-control');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
    var img = 'https://i.imgur.com/vljb7jT.png';
    var cookie = 'https://i.imgur.com/Ri5luM5.png';

    var marker0 = new google.maps.Marker({
        map: map,
    });
    function updatePosition(position){
        marker0.setPosition( new google.maps.LatLng(position.coords.latitude, position.coords.longitude) );
    }



    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updatePosition);
    } else {
        window.alert('error with locating your coordinates.');
    }

    var marker1 = new google.maps.Marker({
        position:  {lat: 42.6958106, lng: 23.332900300000006},
        map: map,
        icon: img,
        title: 'Храм-паметник "Св. А. Невски"',

    });
    var marker2 = new google.maps.Marker({
        position:  {lat: 42.6956906, lng: 23.328966600000058},
        map: map,
        icon: img,
        title: 'Руска църква "Св. Н. Мирликийски"',
    });
    var marker3 = new google.maps.Marker({
        position:  {lat: 42.64463130000001, lng: 23.266183400000045},
        map: map,
        icon: img,
        title: 'Боянската църква "Св. св. Никола и Пантелеймон"'
    });

    var marker11 = new google.maps.Marker({
        position:  {lat: 42.6958106, lng: 23.332900300000006},
        map: map,
        icon: cookie,
        title: 'Храм-паметник "Св. А. Невски"',

    });
    var marker22 = new google.maps.Marker({
        position:  {lat: 42.6956906, lng: 23.328966600000058},
        map: map,
        icon: cookie,
        title: 'Руска църква "Св. Н. Мирликийски"',
    });
    var marker33 = new google.maps.Marker({
        position:  {lat: 42.64463130000001, lng: 23.266183400000045},
        map: map,
        icon: cookie,
        title: 'Боянската църква "Св. св. Никола и Пантелеймон"'

    });
    marker11.setVisible(false);
    marker22.setVisible(false);
    marker33.setVisible(false);


    var marker4 = new google.maps.Marker({
        position:  {lat: 42.6969115, lng: 23.32290169999999},
        map: map,
        title: 'Ротонда "Св. Георги"',
        icon: cookie,
    });
    var marker5 = new google.maps.Marker({
        position:  {lat: 42.7002701, lng: 23.320849400000043},
        map: map,
        title: 'Софийска синагога',
        icon: cookie,
    });
    var marker6 = new google.maps.Marker({
        position:  {lat: 42.6995277, lng: 23.32255310000005},
        map: map,
        title: 'Джамия Баши',
        icon: cookie,
    });
    var marker7 = new google.maps.Marker({
        position:  {lat: 42.6906651, lng: 23.334498800000006},
        map: map,
        title: 'Паметник на съветската армия',
        icon: cookie,
    });
    var marker8 = new google.maps.Marker({
        position:  {lat: 42.6549798, lng: 23.27088189999995},
        map: map,
        title: 'Националният исторически музей',
        icon: cookie,
    });
    var marker9 = new google.maps.Marker({
        position:  {lat: 42.6993502, lng: 23.323696299999938},
        map: map,
        title: 'Централната минерална баня',
        icon: cookie,
    });
    var marker10 = new google.maps.Marker({
        position:  {lat: 42.6966686, lng: 23.33533460000001},
        map: map,
        title: 'Паметникът на Васил Левски',
        icon: cookie,
    });
    var styleSelector = document.getElementById('style-selector');
    map.setOptions({styles: styles[styleSelector.value]});

    var contentString1 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Св.Александър Невски</h1>'+
        '<div id="bodyContent">'+
        '<p>„Свети Александър Невски“ е православен храм-паметник в София, който e катедрален храм на българския патриарх.</p>'+
        '<p>Брой точки: 36</p>'+
        '</div>'+
        '</div>';

    var contentString2 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Руска Църква „Свети Николай Мирликийски“</h1>'+
        '<div id="bodyContent">'+
        '<p>„Свети Николай Чудотворец“, известна като руската църква, е православна църква в българската столица София, посветена на Свети Николай Чудотворец.</p>'+
        '<p>Брой точки: 36</p>'+
        '</div>'+
        '</div>';

    var contentString3 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Боянска черква</h1>'+
        '<div id="bodyContent">'+
        '<p>Боянската църква „Св. св. Никола и Пантелеймон“ е средновековна българска църква в софийския квартал Бояна, намиращ се в подножието на Витоша.</p>'+
        '<p>Брой точки: 36</p>'+
        '</div>'+
        '</div>';

    var contentString4 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Ротонда Свети Георги</h1>'+
        '<div id="bodyContent">'+
        '<p>„Свети Георги“ е православен храм, построен в късната античност в архитектурната форма на ротонда, в София, България.</p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';

    var contentString5 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Софийска синагога</h1>'+
        '<div id="bodyContent">'+
        '<p>Софийската синагога е най-голямата на Балканския полуостров и 3-та в Европа.</p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';

    var contentString6 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Джамия Баня Баши</h1>'+
        '<div id="bodyContent">'+
        '<p>Джамията „Баня баши” се намира в центъра на София, на булевард „Мария Луиза”.</p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';

    var contentString7 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Паметник на Съветската армия</h1>'+
        '<div id="bodyContent">'+
        '<p>Паметникът на Съветската армия е паметник, разположен в Княжеската градина, в центъра на българската столица София, посветен на съветската Червена армия. </p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';

    var contentString8 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Национален исторически музей</h1>'+
        '<div id="bodyContent">'+
        '<p>Националният исторически музей (НИМ) е най-големият музей в България.</p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';

    var contentString9 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Централна минерална баня - Музей за история на София</h1>'+
        '<div id="bodyContent">'+
        '<p>Централната минерална баня е емблематична сграда в центъра на София, район „Оборище“. Тя е паметник на културата с национално значение.</p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';

    var contentString10 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Паметник на Васил Левски</h1>'+
        '<div id="bodyContent">'+
        '<p>Паметникът на Васил Левски се намира в центъра на град София, България.</p>'+
        '<p>Брой точки: 18</p>'+
        '</div>'+
        '</div>';


    var IW1 = new google.maps.InfoWindow({
        content: contentString1
    });

    marker1.addListener('click', function() {
        IW1.open(map, marker1);
    });

    var IW11 = new google.maps.InfoWindow({
        content: contentString1
    });

    marker11.addListener('click', function() {
        IW11.open(map, marker11);
    });

    var IW2 = new google.maps.InfoWindow({
        content: contentString2
    });

    marker2.addListener('click', function() {
        IW2.open(map, marker2);
    });

    var IW22 = new google.maps.InfoWindow({
        content: contentString2
    });

    marker22.addListener('click', function() {
        IW22.open(map, marker22);
    });

    var IW3 = new google.maps.InfoWindow({
        content: contentString3
    });

    marker3.addListener('click', function() {
        IW3.open(map, marker3);
    });

    var IW33 = new google.maps.InfoWindow({
        content: contentString3
    });

    marker33.addListener('click', function() {
        IW33.open(map, marker33);
    });

    var IW4 = new google.maps.InfoWindow({
        content: contentString4
    });


    marker4.addListener('click', function() {
        IW4.open(map, marker4);
    });

    var IW5 = new google.maps.InfoWindow({
        content: contentString5
    });

    marker5.addListener('click', function() {
        IW5.open(map, marker5);
    });

    var IW6 = new google.maps.InfoWindow({
        content: contentString6
    });

    marker6.addListener('click', function() {
        IW6.open(map, marker6);
    });

    var IW7 = new google.maps.InfoWindow({
        content: contentString7
    });

    marker7.addListener('click', function() {
        IW7.open(map, marker7);
    });

    var IW8 = new google.maps.InfoWindow({
        content: contentString8
    });

    marker8.addListener('click', function() {
        IW8.open(map, marker8);
    });

    var IW9 = new google.maps.InfoWindow({
        content: contentString9
    });

    marker9.addListener('click', function() {
        IW9.open(map, marker9);
    });

    var IW10 = new google.maps.InfoWindow({
        content: contentString10
    });

    marker10.addListener('click', function() {
        IW10.open(map, marker10);
    });





    styleSelector.addEventListener('change', function() {
        map.setOptions({styles: styles[styleSelector.value]});
        if (styleSelector.selectedIndex == 3){
            marker11.setVisible(false);
            marker22.setVisible(false);
            marker33.setVisible(false);
            marker1.setVisible(true);
            marker2.setVisible(true);
            marker3.setVisible(true);
            marker4.setVisible(true);
            marker5.setVisible(true);
            marker6.setVisible(true);
            marker7.setVisible(true);
            marker8.setVisible(true);
            marker9.setVisible(true);
            marker10.setVisible(true);
        }else if (styleSelector.selectedIndex == 1){
            marker1.setVisible(false);
            marker2.setVisible(false);
            marker3.setVisible(false);
            marker11.setVisible(true);
            marker22.setVisible(true);
            marker33.setVisible(true);
            marker4.setVisible(true);
            marker5.setVisible(true);
            marker6.setVisible(true);
            marker7.setVisible(true);
            marker8.setVisible(true);
            marker9.setVisible(true);
            marker10.setVisible(true);
        }else{
            marker11.setVisible(false);
            marker22.setVisible(false);
            marker33.setVisible(false);
            marker1.setVisible(false);
            marker2.setVisible(false);
            marker3.setVisible(false);
            marker4.setVisible(false);
            marker5.setVisible(false);
            marker6.setVisible(false);
            marker7.setVisible(false);
            marker8.setVisible(false);
            marker9.setVisible(false);
            marker10.setVisible(false);
        }
    });

}
