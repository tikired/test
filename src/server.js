const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/test'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/test/index.html'));
});

app.listen(process.env.PORT || 8080);