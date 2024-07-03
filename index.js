class estudiante{
    constructor(c,s,n1,n2,n3){
        this.cedula= c
        this.sexo = s
        this.nota1 = n1
        this.nota2 = n2
        this.nota3 = n3
    }
    notaTotal(){
        return (this.nota1 + this.nota2 + this.nota3) 
    }
}

class decanato{
    constructor(){
        this.contEstudiantes = 
        this.mayorNota =
        this.contEstFemAprobados =
        this.acuNotas = 0
    }
    procesar(e){
        if(e.notaTotal() > this.mayorNota){
            this.mayorNota = e.notaTotal()
        }
        if(e.sexo === "F" && e.notaTotal()>47){
                this.contEstFemAprobados++
        }
        this.contEstudiantes ++
        this.acuNotas += e.notaTotal()
    }
    promedio(){
        return (this.acuNotas / this.contEstudiantes)
    }
}


let estUno = new estudiante(1345756,"M", 15, 20, 25)
let estDos = new estudiante(15432551,"F", 10, 10, 10)
let estTres = new estudiante(32455678,"M", 18, 22, 20)
let estCuatro = new estudiante(28678900,"F", 18, 25, 24)

let dec = new decanato()
dec.procesar(estUno)
dec.procesar(estDos)
dec.procesar(estTres)
dec.procesar(estCuatro)

let salida = document.getElementById('salida')

salida.innerHTML = "Resultados: <br>" 

salida.innerHTML += `El estudiante con cedula: ${estUno.cedula} obtuvo una nota total de: ${estUno.notaTotal()} puntos <br>`
salida.innerHTML += `El estudiante con cedula: ${estDos.cedula} obtuvo una nota total de: ${estDos.notaTotal()} puntos <br>`
salida.innerHTML += `El estudiante con cedula: ${estTres.cedula} obtuvo una nota total de: ${estTres.notaTotal()} puntos <br>`
salida.innerHTML += `El estudiante con cedula: ${estCuatro.cedula} obtuvo una nota total de: ${estCuatro.notaTotal()} puntos <br>`


salida.innerHTML += `La mayor nota es  ${dec.mayorNota} <br>`
salida.innerHTML += `Estudiantes femeninas aprobadas  ${dec.contEstFemAprobados} <br>`
salida.innerHTML += `Promedio de notas fue de:  ${dec.promedio()} <br>`


