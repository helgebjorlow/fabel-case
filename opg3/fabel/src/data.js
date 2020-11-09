class User {
    constructor(id, fornavn, etternavn, mobil, epost, passord) {
        this.id = id;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.mobil = mobil;
        this.epost = epost;
        this.passord = passord
        this.bøker = [];
        this.gavekort = 0
    }

    addbok(tittel, år, forfatter) {
        this.bøker.push(new Bok(tittel, år, forfatter))
    }

    addgavekort(beløp) {
        this.gavekort += beløp
    }
}

class Bok {
    constructor(tittel, år, forfatter) {
        this.tittel = tittel;
        this.år = år
        this.forfatter = forfatter
    }
}

const helge = new User(1, "Helge", "Bjørløw", 48216999, "helgebjorlow@gmail.com", "123123")

let books = [
    { "tittel": "Wonderboy", "år": 2003, "forfatter": "Henrik Langeland" },
    { "tittel": "Fyrsten", "år": 2013, "forfatter": "Henrik Langeland" },
    { "tittel": "Showtime!", "år": 2020, "forfatter": "Henrik Langeland" },
    { "tittel": "Showtime!", "år": 2020, "forfatter": "Henrik Langeland" }
]

for (let i = 0; i < books.length; i++) {
    helge.addbok(books[i]['tittel'], books[i]['år'], books[i]['forfatter'])
}

helge.addgavekort(1000)

export { helge }