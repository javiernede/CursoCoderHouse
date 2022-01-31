const obj1 = {
id: 1,
producto: "Cerveza Roja"

}

const arrays = [obj1, {id: 2, producto: "Fernet"}]

arrays.push({id: 3, producto: "Vinos", price: 120});

for(const item of arrays) {
    console.log(item.id)
    console.log(item.producto)
}