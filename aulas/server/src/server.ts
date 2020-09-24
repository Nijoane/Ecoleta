import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));


// Rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do  back-end@
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informção do back-end

// PARAMS:
    //Resquest Param: parâmentros que vem na própria rota -
        // que identificam um recurso.

    //Query Param: Parâmentros que vem na própria rota -
        // geralmente opcionais para filtros, páginação etc.
    //Request Body: Parâmentros para criação/atua

//********************************************************************************************************************************************//

app.listen(3333);