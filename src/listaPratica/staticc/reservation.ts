class Reservation {
    days: number
    room: string
    quests: number
    constructor(quests:number, room:string, days:number){
        this.quests = quests
        this.room = room
        this.days = days *Reservation.baseFee

    }
    static baseFee = 150 

    static showBaseFee(){
        console.log(`Basefee is ${Reservation.baseFee}`)
    }
    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }
}
Reservation.showBaseFee()

Reservation.baseFee = 200

const r1 = new Reservation(3,'201', 3)

console.log(`PremiumFee is ${Reservation.premiumFee}`)