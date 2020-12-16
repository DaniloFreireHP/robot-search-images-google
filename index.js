const municipios = require('./municipios.json')
function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()

    function askAndReturnSearchTerm() {
        const termos = []
        municipios.forEach(cidade => {
            termos.push('Câmara Municipal'+ ' ' + cidade.Municipio + ' ' + cidade.UF)
        });
        return termos
    }

    console.log(content)
}

start()