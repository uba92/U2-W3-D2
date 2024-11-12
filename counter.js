let counter = document.getElementById('counter')
let key = 'innertext'

//controllo il valore salvato in sessionStorage
//se non è definito assegna 0 come innerText del div counter
//se è diverso da null, quindi se il contatore è già partito come innerText del div counter assegno l'ultimo valore salvato in sessionStorage
//in questo modo se aggiorno la pagina ad esempio a 5 secondi dall'avvio in sessionStorage c'è salvata la stringa 5
//che assegno con getItem come punto di partenza del contatore
if (sessionStorage.getItem(key) !== null) {
  counter.innerText = sessionStorage.getItem(key)
} else {
  counter.innerText = '0'
}

//la funzione aggiorna innerText del div counter ogni secondo tramite l'uso di setInterval, incrementando innertext di 1 ogni volta
//dopo l'incremento salvo in sessionStorage il nuovo valore di innerText in modo che al controllo all'interno dell'if non risulti uguale a null
//evitando che il conatore si azzeri quando aggiorno la pagina
const updateCounter = function () {
  setInterval(() => {
    counter.innerText = parseInt(counter.innerText) + 1
    sessionStorage.setItem(key, counter.innerText)
  }, 1000)
}

updateCounter()
