//Activating Side Draw
$('#SideDrawActivator').click(function() {
    $('.Backdrop').show();
    $('.SideDrawer').attr('class','SideDrawer Open');
});

//Deactivating Side Draw
$('.Backdrop').click(function() {
    closeEvent();
    $('.SideDrawer').attr('class','SideDrawer Close');
});
