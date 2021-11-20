const algoPasara = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }
        else{
            resolve('UUUUUps!')
        }
    });
};

algoPasara()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const algoMasPasara = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Hey! :)')                
            }, 3000);
        }
        else{
            const error = new Error('UUUUUps!');
            reject(error);
        }
    });
};

algoMasPasara()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([algoPasara(), algoMasPasara()])
    .then(response => {
        console.log(`Arreglo de resultados: `, response);
    })
    .catch(err => {
        console.error(err);
    })