
let items = function (id, Name, Prices, isVeg, isBestsell, Descr,img) {
    this.id = id;
    this.Name = Name;
    this.isVeg = isVeg;
    this.Prices = Prices;
    this.isBestsell = isBestsell;
    this.Descr = Descr;
    this.img=img;
}

let itemBuilder = function () {
    let id = 0;
    let Name = "";
    let isVeg = false;
    let Prices = 0;
    let isBestsell = false;
    let Descr = "";
    let img="";

    return {
        Setid: function (i) {
            this.id = i;
            return this;
        },
        SetName: function (n) {
            this.Name = n;
            return this;
        },
        SetPrice: function (p) {
            this.Prices = p;
            return this;
        },
        SetisVeg: function (v) {
            this.isVeg = v;
            return this;
        },
        SetisBestseller: function (t) {
            this.isBestsell = t;
            return this;
        },
        SetDescr: function (de) {
            this.Descr = de;
            return this;
        },
        SetImg:function(im){
            this.img=im;
            return this;
        },
        build: function () {
            return new items(this.id, this.Name, this.Prices, this.isVeg, this.isBestsell, this.Descr, this.img);
        },
    }

}

export default itemBuilder;