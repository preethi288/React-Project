import itemBuilder from "../Data/ItemBuilder"
import menu from "../Data/MenuData"

const itemlist = [];

for (var i = 0; i < menu.length; i++) {
    itemlist.push(new itemBuilder().Setid(menu[i].id)
        .SetName(menu[i].Name)
        .SetPrice(menu[i].Price)
        .SetisVeg(menu[i].isVeg)
        .SetisBestseller(menu[i].isBestseller)
        .SetDescr(menu[i].Descr)
        .SetImg(menu[i].image)
        .build());

}

export default itemlist;