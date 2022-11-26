import ApplicationPlace from "./model/ApplicationPlace"
import ApplicationUser, { IApplicationUser } from "./model/ApplicationUser"

const getPlace = async () => {
    const place = await ApplicationPlace.findOne()
        .populate<{ maintainer: IApplicationUser }>('maintainer')
        
    if(!place) return
    return place.maintainer.firstName
}
const getUser = async () => {
    const user = await ApplicationUser.findAllUsers()
    if(!user) return
    const firstName = user.firstName
    const fullName = user.fullName()
    return 
}