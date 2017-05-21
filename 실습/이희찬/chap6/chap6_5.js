/*6-5*/
var beenzino = {
    name : "beenzino",
    getName : function () {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
};

var dok2 = {
    name : "dok2",
    getName : function () {
        return this.name;
    },
    setName : function(arg) {
        this.name = arg;
    }
};

function create_obj(obj) {
    function F() {

    }
    F.prototype = obj;
    return new F();
}

var test = create_obj(beenzino);
console.log(test.getName());
var test = create_obj(dok2);
console.log(test.getName());
test.setName("theQ");
console.log(test.getName());