const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs'); //szablony do render
app.set('views', path.join(__dirname, 'views')); //pliki szablonów
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(express.urlencoded({ extended: true })); // parsuje treści wysłane z przeglądarki i zapisuje je dalej

const zabLista = {
    żabajeziorkowa: { nazwa: "Żaba jeziorkowa", rodzina: "Żabowate", kolory: ["zielony"], plamki: "tak", opis: "Pospolita na cały obszarze kraju do wysokości 400 m n.p.m. Zamieszkuje wszelkiego rodzaju mniejsze zbiorniki wodne oraz rowy melioracyjne. Ze snu zimowego budzi się zwykle na początku kwietnia i rozpoczyna wędrówki godowe." },
    żabaśmieszka: { nazwa: "Żaba śmieszka", rodzina: "Żabowate", kolory: ["zielony", "brunatny"], plamki: "tak", opis: "Występuje prawie na całym niżu, oprócz części północno-wschodniej. Zasiedla głównie duże, otwarte, zarośnięte zbiorniki wodne a także wolno płynące rzeki. "},
    żabawodna: { nazwa: "Żaba wodna", rodzina: "Żabowate", kolory: ["zielony"], plamki: "tak", opis: "Jest gatunkiem ciepłolubnym o dziennej aktywności. Zaniepokojona wskakuje do wody i przez pewien czas pozostaje przy dnie. " },
    żabazwinka: { nazwa: "Żaba zwinka", rodzina: "Żabowate", kolory: ["brunatny"], plamki: "tak", opis: "Ciało o delikatnej budowie i wyjątkowo długich (dłuższych od tułowia), smukłych tylnych kończynach. Koniec pyska wyraźnie zwężony. " },
    żabamoczarowa: { nazwa: "Żaba moczarowa", rodzina: "Żabowate", kolory: ["brunatny"], plamki: "tak", opis: "Ciało delikatne o małej głowie. Długość ciała obu płci wynosi 3,5-7,5 cm. Ubarwienie grzbietu jest podobne jak u żaby trawnej (na jasnobrązowym tle występują ciemne plamy i poprzeczne pręgi na kończynach), jednak plamistość strony brzusznej jest jaśniejsza i delikatniejsza, a koniec pyska ostro zakończony. " },
    żabatrawna: { nazwa: "Żaba trawna", rodzina: "Żabowate", kolory: ["brunatny"], plamki: "tak", opis: "Pospolita na całym obszarze kraju. Poza porą godową przebywa na wilgotnych łąkach, w cienistych lasach i zaroślach, unikając otwartych i suchych środowisk. Ze snu zimowego budzi się zwykle na początku marca. " },
    ropuchaszara: { nazwa: "Ropucha szara", rodzina: "Ropuchowate", kolory: ["szary"], plamki: "tak", opis: "Dorosłe ropuchy aktywne są głównie w nocy, z wyjątkiem pory godów, kiedy to można je obserwować w ciągu całej doby. Młode osobniki wykazują aktywność dzienną. " },
    ropuchazielona: { nazwa: "Ropucha zielona", rodzina: "Ropuchowate", kolory: ["brunatny", "zielony"], plamki: "tak", opis: "Jest gatunkiem wybitnie ciepłolubnym o lądowym trybie życia. Aktywna głównie w nocy. " },
    ropuchapaskówka: { nazwa: "Ropucha paskówka", rodzina: "Ropuchowate", kolory: ["brunatny"], plamki: "tak", opis: "Na grzbiecie tło ma barwę jasnopopielatooliwkową, plamy są zielonkawooliwkowe, zaś szczyty brodawek i drobne kropki na bokach cynobrowoczerwone. Ponadto środkiem grzbietu biegnie od głowy aż do końca ciała jasna linia kręgowa. " },
    kumaknizinny: { nazwa: "Kumak nizinny", rodzina: "Ropuszkowate", kolory: ["szary", "brunatny", "żółty"], plamki: "tak", opis: "Delikatny, drobny płaz spłaszczony grzbieto-brzusznie, o krępym ciele i krótkich nogach. Charakterystyczny kształt źrenic – trójkątny lub sercowaty. " },
    kumakgórski: { nazwa: "Kumak górski", rodzina: "Ropuszkowate", kolory: ["brunatny", "żółty"], plamki: "tak", opis: "Występuje w paśmie pogórza i w górach. Ze snu zimowego budzi się zwykle w drugiej połowie kwietnia i wkrótce przystępuje do godów. Wybiera do tego celu małe, płytkie zbiorniki wody stojącej, o mulistym dnie i bogatej roślinności wodnej, mogą to być nawet wypełnione wodą koleiny na górskich drogach. " },
    rzekotkadrzewna: { nazwa: "Rzekotka drzewna", rodzina: "Rzekotkowate", kolory: ["zielony", "brunatny"], plamki: "nie", opis: "Jest drobnym i delikatnym płazem o długich nogach i gładkiej skórze. Zarówno samce, jak i samice mierzą zwykle 3,5-5,5 cm. Cechą charakterystyczną rzekotki jest obecność okrągłych przylg na końcach palców. " },
    rzekotkawschodnia: { nazwa: "Rzekotka wschodnia", rodzina: "Rzekotkowate", kolory: ["zielony"], plamki: "nie", opis: "Występuje w Europie (prócz Wielkiej Brytanii, Irlandii i Półwyspu Skandynawskiego, z wyjątkiem południowej Szwecji), w Azji Mniejszej i północnej Afryce. W Polsce spotykamy ją na terenie całego kraju, prócz gór. " },
    grzebiuszkaziemna: { nazwa: "Grzebiuszka ziemna", rodzina: "Grzebiuszkowate", kolory: ["brunatny"], plamki: "tak", opis: "Występuje na całym niżu. Preferuje tereny o glebach lekkich, chętnie przebywa w ogrodach i na polach uprawnych. Ze snu zimowego budzi się zwykle w marcu, po rozmarznięciu gleby. " }
};

///podstawić stałą pod mongodb !!!!!
// mongoose

app.get('/', (req, res) => {
    res.render('welcome', { tytul: 'Froogle ' });
});

app.get('/lista', (req, res) => {
    res.render('index', { tytul: 'Lista żab', zabLista });
});

app.get('/zaba/:gatunek', (req, res) => { //na podst id. URL
    const gatunek = req.params.gatunek;
    const zaba = zabLista[gatunek];

    if (zaba) {
        res.render('zaba', { tytul: zaba.nazwa, zaba });
    } else {
        res.status(404).send(`<h1>Nie znaleziono żaby</h1><a href="/">Powrót</a>`);
    }
});

app.get('/filtry', (req, res) => { //formula filtrowania
    res.render('filtry', { tytul: 'Filtry' });
});

app.post('/filtry', (req, res) => { 
    const { kolor, plamki, rodzina } = req.body;
    const wyniki = Object.values(zabLista).filter(zaba => {  //żablista przekształcana na tablicę
        const kolorPasuje = !kolor || zaba.kolory.includes(kolor);
        const plamkiPasuja = !plamki || zaba.plamki === plamki;
        const rodzinaPasuje = !rodzina || zaba.rodzina === rodzina;
        return kolorPasuje && plamkiPasuja && rodzinaPasuje;
    });
    res.render('wyniki', { tytul: 'Wyniki filtrowania', wyniki });
});

app.listen(3000, () => {
    console.log('serwer włączony');
});


