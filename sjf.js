let lista = [
  { id: 'p1', prioridade: 2, carga: [2,-1,1], tempo: null },
  { id: 'p2', prioridade: 1, carga: [1,-2,1,2], tempo: null },
  { id: 'p3', prioridade: 2, carga: [1,-1,-1,1], tempo: null },
  { id: 'p4', prioridade: 3, carga: [2,2,1,-1,2], tempo: null },
];

let listaPriorizada = [];

  function geraTempo(){
    let neg = 0;
    for(let i = 0; i < lista.length; i++){
      for(let x = 0; x < lista[i].carga.length; x++){
        if(lista[i].carga[x] < 0){
          neg = lista[i].carga[x] < -1 ? neg + neg + 2 : neg = neg + 1;
        }
      }
      lista[i].tempo = neg;
      neg = 0
    }
    prioridade();
  }

  function prioridade(){
    lista.sort((x,y)=>{
      return x.tempo - y.tempo
    });
    realizaExec();
  }


function realizaExec(){
  let cont = 0;
  while(cont<3){
    cont++;
    for(let i = 0; i < lista.length; i++){
      for(let x = 0; x < lista[i].carga.length; x++){
        if(lista[i].carga[0]>0){
          lista[i].carga.splice(0, 1);
        }else{
          lista[i].carga[0]++;
          if(lista[i].carga[0] == 0){
            lista[i].carga.splice(0, 1);
          }
          for(let j = 0; j < i; j++){
            for(let f = 0; f < lista[j].carga.length; f++){
              if(lista[j].carga[0] < 0){
                lista[j].carga[0]++;
                if(lista[j].carga[0] == 0){
                  lista[j].carga.splice(0, 1);
                }
              }
            }
          }
        }
      }
    }
  }
}

geraTempo();
console.log(lista);
  
  
