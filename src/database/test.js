const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function(db) {
    //  Insert data on table
    await saveOrphanage(db, {
        name: "Lar do amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999999999",
        images: ["https://images.unsplash.com/photo-1545912453-db258ca9b7b7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1280", 
        "https://images.unsplash.com/photo-1551381280-72ca7af03604?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1280"].toString(),
        lat: "-23.932315685777625",
        lng: "-45.296909236907966",
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até as 18h",
        open_on_weekends: "1"
    })

    //  Search data on table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //  Search only one orphanato with ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    //  Remove data from table
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})