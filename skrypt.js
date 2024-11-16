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
		
        container.appendChild(button);
    });
	window.buttonsToHide = buttonsToHide;
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
    button.textContent = 'Rzekotka';
    button.style.margin = '5px';
    container.appendChild(button);
}

	// "Żaba jeziorkowa, Żaba śmieszka, , Żaba trawna, Żaba moczarowa, Żaba zwinka"