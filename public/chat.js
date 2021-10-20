(function (d, io, $){
	'use strict'

	var io = io()

	$('#chat-form').on('submit', function (e){
		e.preventDefault()
		io.emit( 'new message', $('#message-text').val() )
		$('#message-text').val(null)
		return false
	})

	io.on('new user', function (newUser){
		alert(newUser.message)
	})

	io.on('user says', function (userSays){
		$('#chat').append('<li>' + userSays + '</li><br>')
	})

	io.on('bye bye user', function (byeByeUser){
		alert(byeByeUser.message)
	})
    io.on('online', function(data){
        console.log('actualizado desde el servidor. hay '+data.numbers+' conexiones activas')
        d.querySelector('#conexions').innerHTML=data.numbers

    })
})(document, io, jQuery)