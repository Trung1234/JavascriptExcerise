

function getVietNam(){
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("GET", "https://corona.lmao.ninja/v2/countries/vn");
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = () => {
            reject(Error("Error fetching data."));
        };

        request.send();
    });

    console.log("Asynchronous request made.");

    promise.then(
        data => {
            console.log("Got data! Promise fulfilled.");
            var jsonData = JSON.parse(data);
            $('#covid').append('<tr >'
                    +'<td>  <span class="text-bold">Thông tin covid Việt Nam</span>' +            
                '</td></tr>');
            $(document).ready(function () {
                $('#covid').append('<tr >'
                +'<td> <span class="text-bold">Quốc gia: </span> '+jsonData.country +              
                '</td></tr>');
                $('#covid').append('<tr >'
                +'<td> <span class="text-bold">Số ca :</span> '+jsonData.cases +              
                '</td></tr>');
                $('#covid').append('<tr >'
                +'<td> <span class="text-bold">Tử vong</span>: '+jsonData.deaths +              
                '</td></tr>');
                $('#covid').append('<tr >'
                +'<td> <span class="text-bold">Số ca phục hồi</span>: '+jsonData.active +              
                '</td></tr>');
            });             
        },
        error => {
            console.log("Promise rejected.");
            console.log(error.message);
        }
    );
}

function getTheWorld(){
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("GET", "https://corona.lmao.ninja/v2/countries");
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };

        request.onerror = () => {
            reject(Error("Error fetching data."));
        };

        request.send();
    });

    console.log("Asynchronous request made.");

    promise.then(
        data => {
            console.log("Got data! Promise fulfilled.");
            var jsonData = JSON.parse(data);
            var jsonData = JSON.parse(data);
            $('#covid').append('<tr >'
                    +'<td>  <span class="text-bold">Thông tin covid Thế giới </span>' +            
                '</td></tr>');
            for (var i = 0; i < jsonData.length; i++) {   
                    $('#covid').append('<tr >'
                    +'<td> <span class="text-bold">Quốc gia: </span> '+jsonData[i].country +              
                    '</td></tr>');
                    $('#covid').append('<tr >'
                    +'<td> <span class="text-bold">Số ca :</span> '+jsonData[i].cases +              
                    '</td></tr>');
                    $('#covid').append('<tr >'
                    +'<td> <span class="text-bold">Tử vong</span>: '+jsonData[i].deaths +              
                    '</td></tr>');
                    $('#covid').append('<tr >'
                    +'<td> <span class="text-bold">Số ca phục hồi</span>: '+jsonData[i].active +              
                    '</td></tr>');    
            }             
        },
        error => {
            console.log("Promise rejected.");
            console.log(error.message);
        }
    );
}

