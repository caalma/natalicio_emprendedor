var empresa, nombre, natalicio, cartel;

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

function asignar_url(v){
    document.location.hash = v;
}

function cargar_url(){
    let url = new URL(document.URL);
    let hash = url.hash.replace('#','');
    if(hash !== ''){
        natalicio.value = hash;  
        natalicio.onchange();      
    }
}

function combinar(){
    let v = natalicio.value;
    let d = v.split('-');
    asignar_url(v);
    
    if(d != "") {
        empresa.innerHTML = mes[d[1]];
        nombre.innerHTML = dia[d[2]];
        cartel.className = 'activo';
        estilizar(d.join(''));
    }
}

function animar_entrada(){
    let b = document.getElementsByTagName('body')[0];
    b.className = 'mostrar';
    b.style.opacity = 1;
}

function iniciar(ev){
    empresa = document.getElementById('empresa');
    nombre = document.getElementById('nombre');
    natalicio = document.getElementById('natalicio');
    cartel = document.getElementById('cartel');
 
    natalicio.onchange = combinar;
    natalicio.onclick = limpiar;

    cargar_url();
    animar_entrada();
}






if(window.attachEvent) {
    window.attachEvent('onload', iniciar);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            iniciar(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = iniciar;
    }
}