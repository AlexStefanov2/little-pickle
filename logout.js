function logout() {
    var promise = Kinvey.User.logout()
        .then(function() {
            window.alert('logout successful')
            window.location.replace(site);
        }).catch(function(error) {
            window.alert('logout failed')
            window.alert(error);
        });
}
