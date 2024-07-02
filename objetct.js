let amigo = {nome: 'josé', Sexo: 'M', Peso : 95.3, Engordar(p){
    console.log('engordou')
    this.Peso += p
}}



amigo.Engordar(3)


console.log(`Seu Nome é ${amigo.nome} Do Sexo ${amigo.Sexo}, tem  o Peso ${amigo.Peso}`)