function alerta1(){
    swal("Alerta 1");
}

function alerta2(){
    swal("Alerta2","Sweet alert","error");
}

function alerta3(){
    alertify.success('Success message');
}

function alerta4(){
    alertify.error('Error message');
}

function alerta5(){
    notie.alert({
        type: 'success', // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: 'Notie alert',
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: 'top' // optional, default = 'top', enum: ['top', 'bottom']
      })
      
}

function alerta6(){
    notie.alert({
        type: 'error', // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
        text: 'Notie alert',
        stay: false, // optional, default = false
        time: 3, // optional, default = 3, minimum = 1,
        position: 'bottom' // optional, default = 'top', enum: ['top', 'bottom']
      })
}