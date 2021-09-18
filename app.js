//express:
const app = express();

/* CONFIGURA O EXPRESS PARA LIDAR COM DADOS NO FORMATO JSON */
app.use(express.json());

/* ROTAS */
app.use(require('./route'));

/* INSTANCIA DO SERVIDOR (express) */
app.listen(3000, ()=>{ 
                        console.log('TESTE - SERVIDOR RODANDO NA URL: http://localhost:3000'); 
                        console.log('SERVIDOR RODANDO NA URL: http://localhost:3000'); 
                    }); 