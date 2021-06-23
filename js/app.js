var empresa = document.getElementById('empresa');
var nombre = document.getElementById('nombre');
var natalicio = document.getElementById('natalicio');
var cartel = document.getElementById('cartel');

function grp(t){
    let s = 0
    let d = t.split('');
    for(let i in d){
        s += parseInt(d[i]);
    }
    let st = s.toString()
    if(st.length > 1){
        s = grp(st);
    }
    return s.toString();
}

function limpiar(){
    empresa.innerHTML = '';
    nombre.innerHTML = '';
    cartel.className = '';
}

function estilizar(t){
    es = col[grp(t)];
    cartel.style.backgroundColor = '#'+es[0];
    empresa.style.color = '#'+es[1];
    nombre.style.color = '#'+es[2];
}

function combinar(){
    let v = natalicio.value.split('-');
    limpiar();
    if(v != "") {
        empresa.innerHTML = mes[v[1]];
        nombre.innerHTML = dia[v[2]];
        cartel.className = 'activo';
        estilizar(v.join(''));
    }
}