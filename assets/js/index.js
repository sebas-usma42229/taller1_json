const listaComputadores = document.getElementById('listaComputadores');

fetch('data/info.json')
    .then(response => response.json())
    .then(data => {
        data.computadores.forEach ( (computadores , index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
             <th scope="row">${index + 1}</th>
                <td>${computadores.nombre}</td>
                <td>${computadores.descripcion}</td>
                <td>${computadores.precio}</td>
            `;
            listaComputadores.appendChild(row);
            

        
        });
        const tituloPagina =document.getElementById('tituloPagina');
        tituloPagina.innerHTML = `<h1 id="tituloPagina"> ${data.titulo_pagina}</h1>`;

        const contacto =document.getElementById('contacto');
        contacto.innerHTML = `<p id="contacto"> ${data.datos_tienda.nombre}</p>
        <p id="contacto"> ${data.datos_tienda.correo}</p>
        <p id="contacto"> ${data.datos_tienda.telefono}</p>
        <p id="contacto"> ${data.datos_tienda.direccion}</p>`;
        
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
