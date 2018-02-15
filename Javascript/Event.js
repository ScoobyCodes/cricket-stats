
$(function () {
    $('[data-toggle="popover"]').popover();
});

//Toggle Button Transforming Desktop.
    $('.transformDesktop').click(rotate180Desktop);


//Closing Button Handler.
    $('.closeButton').click(closeEvent);


function closeEvent() {
    removeSearchbar() ;
    $('.EventList').attr('class','EventList EventClose');
    $('.EventList').css('display','none');
    $('.Backdrop').css('display','none');
}

function removeSearchbar() {
    const html = `<button class="btn btn-danger search"> <i class="fa fa-align-justify"></i> </button>`;

    $('.transformMobile').html(html);
    $('.transformDesktop').html(html);
}



//Rotating Transform Sign By 180.

function rotate180Desktop(ev) {
    ev.target.style.transform = "rotateZ(180deg)";
    setTimeout(addSearchDesktop,950);
    commonRotation(ev);
}

function commonRotation(ev) {
    ev.target.style.transition = "transform 1s";
    $('.EventList').show();
    $('.EventList').attr('class','EventList EventOpen');
    $('.Backdrop').show();
    setTimeout(addchart,400);
    setTimeout(addCarousel,7000);
}

//Adding Search Bar In Place of Transform Sign.

function addSearchDesktop() {
    let html = `<div class="input-group search" id="input">
                  <span class="input-group-btn">
                    <button class="btn btn-danger" type="button"><i class="fa fa-search"></i></button>
                  </span>
                  <input type="text" class="form-control" placeholder="Search">
               </div>`;

    $('.transformDesktop').show();
    $('.transformDesktop').html(html);
}

