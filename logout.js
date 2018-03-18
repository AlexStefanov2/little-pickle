function logout() {
    var promise = Kinvey.User.logout()
        .then(function() {
            window.location.replace(site);
        }).catch(function(error) {
            window.alert(error);
        });
}
