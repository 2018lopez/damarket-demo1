const { getProductById } = require("./products");


class Customer {

    //UC-2: ViewMarketMap
    viewMarketMap(name){

        const market =  ['San Ignacio','Belmopan','Belize', 'Orange Walk']// list of markets
        
       

        if(market.includes(name)){
            
            return true
        }
        return false
    }
    //UC-3: GetMarketRoute
    getMarketRoute(clat,clong,dlat,dlong){

        if(clat == '17.1573248' && clong == '-89.0830848' && dlat == '17.1569824,' && dlong == '-89.0730774'){

            return true
        }

        return false
    }

    // UC-4: TourMarket
    tourMarket(name){

        //Avaliable Markets
        const market =  ['San Ignacio','Belmopan','Belize', 'Orange Walk']

        if(market.includes(name)){
            
            return true
        }
        return false

    }

    //UC-5: TourStall - function verify that stall exist for the tour stall
    tourStall(name){

        const stall =  ['C10','P15','VF30', 'F3']// stall list avaliable

        if(stall.includes(name)){
            
            return true
        }
        return false
    }

    //UC-7: BuyItem
    buyItem(productId, stallId, amount){

        //This Function will get us all the details of the product including availability
         const product = getProductById(productId);

        //Return fail if no product is found
         if(!product) { return false }

        //Checks if the product can be found in that stall
        const isItemAvailable = product.availableAt.includes(stallId);

        //return fail if not in the stall desired
        if(!isItemAvailable) { return false}

        //Finally return success 
        return true;

    }
}

 module.exports=Customer