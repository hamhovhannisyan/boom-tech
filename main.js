const app = require('./index');
const config = require('./config/keys');
require('./config/database');



app.listen(process.env.PORT || config.port, ()=>{
    console.log(`Server is running on port: ${config.port}`)
});
