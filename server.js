const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/Froogle') //łączenie z mDb
    .then(() => console.log('Połączono z MongoDB'))
    .catch((err) => console.error('Błąd połączenia z MongoDB:', err));

app.set('view engine', 'ejs'); // szablony do renderowania
app.set('views', path.join(__dirname, 'views')); // pliki szablonów
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true })); // parsowanie treści wysłanych z przeglądarki

// schemat MongoDB
const frogsSchema = new mongoose.Schema({
    nazwa: String,
    rodzina: String,
    kolory: [String],
    plamki: String,
    opis: String,
});

const Zaba = mongoose.model('frogs', frogsSchema);

app.get('/', (req, res) => {
    res.render('welcome', { tytul: 'Froogle' });
});

app.get('/zrodla', (req, res) => {
    res.render('zrodla', { tytul: 'Zrodla' });
});

app.get('/lista', async (req, res) => { 
    try {
        const zabLista = await Zaba.find(); //pobiera dane o żabach z Mdb
        res.render('index', { tytul: 'Lista żab', zabLista });
    } catch (err) {
        console.error('Błąd podczas pobierania listy żab:', err);
        res.status(500).send('Błąd serwera');
    }
});

//szczegóły żaby
app.get('/zaba/:nazwa', async (req, res) => {
    try {
        const nazwa = req.params.nazwa.replace(/-/g, ' ').toLowerCase(); 
        const zaba = await Zaba.findOne({ nazwa: new RegExp(`^${nazwa}$`, 'i') }); // szuka żaby w bazie danych po nazwie 

        if (zaba) {
            res.render('zaba', { tytul: zaba.nazwa, zaba });  // przekazuje dane żaby do szablonu
        } else {
            res.status(404).send('<h1>Nie znaleziono żaby :c </h1><a href="/lista">Powrót do listy</a>');
        }
    } catch (err) {
        console.error('Błąd wyszukiwania żaby:', err);
        res.status(500).send('Błąd serwera');
    }
});

app.get('/filtry', (req, res) => {
    res.render('filtry', { tytul: 'Filtry' });
});

app.post('/filtry', async (req, res) => {
    try {
        const { kolor, plamki, rodzina } = req.body; //dane przesłane dzieki POST
        const filtry = {};
        
        if (kolor) filtry.kolory = kolor; //sprawdzamy które filtry wybrano i dodajemy je do obiektu
        if (plamki) filtry.plamki = plamki;
        if (rodzina) filtry.rodzina = rodzina;
        
        const wyniki = await Zaba.find(filtry); // szukianie żab na podst filtrów

        res.render('wyniki', { tytul: 'Wyniki filtrowania', wyniki });
    } catch (err) {
        console.error('Błąd filtrowania:', err);
        res.status(500).send('Błąd serwera');
    }
});


app.listen(3000, () => {
    console.log('Serwer włączony');
});
