var socket = io.connect('http://localhost:4000'); 

var message = document.getElementById('msg');
    handle = document.getElementById('handle');
    btn = document.getElementById('send');
    output = document.getElementById('output');

    btn.addEventListener('click', function(){
        socket.emit('chat', {
            message: message.value,
            handle: handle.value
        });
      });

socket.on('chat',function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'; 
})