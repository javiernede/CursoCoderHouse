const meals = ["Lasagna", "Sopa","Kebad","Shawarma","Asado"]

const eliminar = (meal) =>{
    let index = meals.indexOf(meal)

    if(index > 0){
        meals.splice(index,1)
    }
}