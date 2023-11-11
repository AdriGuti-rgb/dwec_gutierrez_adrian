document.getElementById('btn')
        .addEventListener( 'click', () => {
            let img = document.querySelector('.images');
            let imagenes = img.querySelectorAll('.img');
            let arr = Array.from(imagenes);

            arr.sort(() => Math.random() - 0.5);

            arr.forEach(imagen => {
                img.append(imagen);
            });
        });