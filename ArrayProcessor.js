function ArrayProcessor () {
    var _self = this;
    this.transform = (arg) => {
        var f = () => {
            return arg;
        };
        return f();
    };

    this.process = (arry) => {
        return arry.map(_self.transform);
    };
};

module.exports = {
    construct : () => {
        return new ArrayProcessor();
    }
};
f
