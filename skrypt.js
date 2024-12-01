const zabList = [
    { nazwa: "Żaba jeziorkowa", rodzina: "Żabowate", kolory: ["zielony"] },
    { nazwa: "Żaba śmieszka", rodzina: "Żabowate", kolory: ["zielony", "brunatny"] },
    { nazwa: "Żaba wodna", rodzina: "Żabowate", kolory: ["zielony"] },
    { nazwa: "Żaba zwinka", rodzina: "Żabowate", kolory: ["brunatny"] },
    { nazwa: "Żaba moczarowa", rodzina: "Żabowate", kolory: ["brunatny"] },
    { nazwa: "Żaba trawna", rodzina: "Żabowate", kolory: ["brunatny"] },

    { nazwa: "Ropucha szara", rodzina: "Ropuchowate", kolory: ["szary"] },
    { nazwa: "Ropucha zielona", rodzina: "Ropuchowate", kolory: ["brunatny", "zielony"] },
    { nazwa: "Ropucha paskówka", rodzina: "Ropuchowate", kolory: ["brunatny"] },

    { nazwa: "Rzekotka drzewna", rodzina: "Rzekotkowate", kolory: ["zielony"] },
    { nazwa: "Grzebiuszka ziemna", rodzina: "Grzebiuszkowate", kolory: ["brunatny"] }
];

let selectedRodzina = null;
let selectedKolor = null;

function filtrujIWyswietl() {
    const wyniki = zabList.filter(zaba => {
        return (
            (!selectedRodzina || zaba.rodzina === selectedRodzina) &&
            (!selectedKolor || zaba.kolory.includes(selectedKolor))
        );
    });

    const wynikiDiv = document.getElementById("wyniki");
    wynikiDiv.innerHTML = "";

    if (wyniki.length > 0) {
        wyniki.forEach(zaba => {
            const button = document.createElement("button");
            button.textContent = zaba.nazwa;
            button.classList.add("result-button");
            button.onclick = () => alert(`Kliknięto: ${zaba.nazwa}`);
            wynikiDiv.appendChild(button);
        });
    } else {
        wynikiDiv.textContent = "Nie ma takiej żabki :(";
    }
}

function WyRodzina(rodzina) {
    selectedRodzina = rodzina;
    filtrujIWyswietl();
}

function WynikiKolor(kolor) {
    selectedKolor = kolor;
    filtrujIWyswietl();
}