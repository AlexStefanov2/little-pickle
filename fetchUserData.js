var promise;
var publicvar;

function fetchUserData(){
    document.getElementById('namecontainer').innerHTML = Kinvey.User.getActiveUser()['data']['username']

    var query = new Kinvey.Query();
    query.equalTo('username', Kinvey.User.getActiveUser()['data']['username']);
    var stream = dataStore.find(query);
    stream.subscribe(function onNext(entities){
        if (entities.length > 0){
            publicvar = entities;
            document.getElementById('cookiecontainer').innerHTML = entities[0]['cookies'];
        }
    });
}
