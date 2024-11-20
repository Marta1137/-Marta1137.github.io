function Zabowate() {
    const container = document.getElementById('button-container');
    
    container.innerHTML = '';

    const ZabowatePrzyciski = ['Żaba jeziorkowa', ' Żaba śmieszka', 'Żaba wodna', 'Żaba trawna', 'Żaba moczarowa', 'Żaba zwinka'];
	const buttonsToHide = [];
   
   ZabowatePrzyciski.forEach(function(name) {
        const button = document.createElement('button');
        button.textContent = name;
		button.style.margin = '5px';
		
		if (name === 'Żaba trawna' || name === 'Żaba moczarowa' || name === 'Żaba zwinka') {
            button.classList.add('nieZielone');
            buttonsToHide.push(button);
        }
		
		if (name === 'Żaba jeziorkowa') {
			button.onclick = function(){
				window.open('https://pl.wikipedia.org/wiki/%C5%BBaba_jeziorkowa', 'blank'); //zmienić link na własną stronę !!!!
			};
		}
        container.appendChild(button);
    });
	window.buttonsToHide = buttonsToHide;
}
function Ropuchowate() {
    const container = document.getElementById('button-container');
    
    container.innerHTML = '';

    const RopuchowatePrzyciski = ['Ropucha zielona', ' Ropucha szara ', 'Ropucha paskówka'];
	
   RopuchowatePrzyciski.forEach(function(name) {
        const button = document.createElement('button');
        button.textContent = name;
		button.style.margin = '5px';
		
		if (name === ' Ropucha szara ') {
			button.onclick = function(){
				window.open('https://pl.wikipedia.org/wiki/Ropucha_szara', 'blank'); //zmienić link na własną stronę !!!!
			};
		}
		
		container.appendChild(button);
   });
}

function Ropuszkowate() {
    const container = document.getElementById('button-container');
    
    container.innerHTML = '';

    const RopuszkowatePrzyciski = ['Kumak nizinny', ' Kumak górski '];
	
   RopuszkowatePrzyciski.forEach(function(name) {
        const button = document.createElement('button');
        button.textContent = name;
		button.style.margin = '5px';
		container.appendChild(button);
   });
}

function Grzebiuszkowate() {
    const container = document.getElementById('button-container');
    
    container.innerHTML = '';

    const GrzebiuszkowatePrzyciski = ['Grzebiuszka ziemna'];
	
   GrzebiuszkowatePrzyciski.forEach(function(name) {
        const button = document.createElement('button');
        button.textContent = name;
		button.style.margin = '5px';
		container.appendChild(button);
   });
}

function Rzekotkowate() {
    const container = document.getElementById('button-container');
    
    container.innerHTML = '';

    const RzekotkowatePrzyciski = ['Rzekotka drzewna'];
	
   RzekotkowatePrzyciski.forEach(function(name) {
        const button = document.createElement('button');
        button.textContent = name;
		button.style.margin = '5px';
		container.appendChild(button);
   });
}

function Zielony() {
    if (window.buttonsToHide) {
        window.buttonsToHide.forEach(function(button) {
            button.style.display = 'none';
        });
    }
}
function Nie() {
    const container = document.getElementById('button-container');
    container.innerHTML = '';

    const button = document.createElement('button');
    button.textContent = 'Rzekotka drzewna';
    button.style.margin = '5px';
    container.appendChild(button);
}

function Jadowity() {
    const container = document.getElementById('button-container');
    container.innerHTML = '';

    const button = document.createElement('button');
    button.textContent = 'Ropucha szara';
    button.style.margin = '5px';
    container.appendChild(button);
	
}