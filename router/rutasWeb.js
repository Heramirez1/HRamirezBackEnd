const express =require ('express');
const router = express.Router();

/* enrutamiento */
router.get('/', (req, res) => {
    //   res.send('Hola Mundo desde Express!')
        res.render("index", {titulo: "Mi título dinámico"});
    })
    
    router.get('/servicios', (req, res) => {
        // res.send('Pagina de Servicios')
        res.render("servicios", {tituloServicio: "Servicios Dinámicos"});
    })

module.exports = router;