class ServicioToCart {

    constructor (obj, qty){

        this.id = obj.id

        this.name = obj.name

        this.price = obj.price

        this.quantity = 1

        this.total = this.unit_price
        

    }

     add() {

         this.quantity++
         
         this.total += this.unit_price
     }

    

}
