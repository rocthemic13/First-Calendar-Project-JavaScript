'use script'
$(function() {

  
let request = $.ajax({
    method: 'GET',
    url: 'calendar_data.json',
    dataType: 'json',
    });
    
    request.done(function(data) {
        let dec24 = $('#xmasEve');  
        dec24.text(data.xmasEve);

        let dec25 = $('#christmas');
        dec25.text(data.xmasDay);

        let dec26 = $('#kwanzaa');
        dec26.text(data.kwanzaa);
    });
    
    request.fail(function(response) {

    console.log('ERROR:' + response.statusText);
    });

let image = $('#rikimaru')
    image.attr('height', '250px');
    image.attr('width', '300px');

let selected = $('li').on('click', showForm)

    function showForm(evnt){
        let reservation = $('#reservation');
        if (reservation.hasClass('hidden')){
        reservation.removeClass('hidden');    
        } else {
        reservation.addClass('hidden');
        }
        
        let selectedDate = $('#date-reserved');
        selectedDate.text(evnt.target.id);
    }

let confirmReservation = $('#reservation').on('submit', bookApt)

    function bookApt(evnt){
        evnt.preventDefault();
        
        $('reservation-info').html('');
        let aptInfo = this.elements;
        let index = 0;
        while (aptInfo.item(index) !== null){
            let confirmation = aptInfo.item(index);
            confirmation = $(confirmation);
            let name = confirmation.attr('name');
            let value = confirmation.val();
            $('#reservation-info').append('<p>' + name + value + '</p>');
            index++;
        }

        $('#reserved-time').attr('disabled','disabled');
        
        
    }












});