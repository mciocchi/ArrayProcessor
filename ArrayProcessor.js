function ArrayProcessor () {
    var _self = this;
    this.transform = (arg) => {
        var f = () => {
            return arg;
        };
        return f;
    };

    this.process = (arry) => {
        var ar = arry.map(_self.transform);
        return ar.map((f) => {return f()});
    };
};

module.exports = {
    construct : () => {
        return new ArrayProcessor();
    }
};
