class Player{
    constructor(){
        this.index = null ;
        this.distance = 0 ;
        this.name = null ;
        this.rank = null ;
        
    }
getCount(){
 var playercountref = database.ref('playerCount');
playercountref.on("value",(data)=>{
    playercount = data.val();
})
}
updateCount(count){
    database.ref('/').update({
    playerCount:count
})
}
update(){
    var playerindex = "players/player" + this.index
    database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
     
    })
}
static getPlayerInfo() {
    var readteinfo = database.ref('players');
    readteinfo.on("value" ,(data)=>{
        allplayers=data.val();
    })
}
getcars(){
    database.ref('carsatend').on("value",(data) => {
        this.rank  = data.val();


    }
    )
     
}
 static updatecars(rank){
     database.ref('/' ).update({
         carsatend : rank
     })

     
 }

}