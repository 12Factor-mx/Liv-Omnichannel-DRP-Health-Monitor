function echo (s)
{
    return s + " echo"
}

function extractBetween (String3, string1, ocurrance) {
    var s = String3;

    if (ocurrance != undefined && typeof ocurrance != "number") {
        throw ("ocurrance must be an integer")
    }

    if (ocurrance != undefined && ocurrance <= 0) {
        throw ("ocurrance must be greater than 0")
    }

    var array = s.split(string1);

    if (array.length && (ocurrance == undefined || ocurrance == 1)) {
        return array[1]
    }
    else if (array.length && ocurrance > 1) {
        if (array.length == ocurrance + 1) {
            return undefined
        }
        else {
            return array[ocurrance]
        }
    }
    else {
        return undefined;
    }

};

function extractBetweenDifferent (String3, string1, string2, ocurrance) {
    var s = String3;

    if (ocurrance != undefined && typeof ocurrance != "number") {
        throw ("ocurrance must be an integer")
    }

    if (ocurrance != undefined && ocurrance <= 0) {
        throw ("ocurrance must be greater than 0")
    }

    var array = getFromBetween.get(s, string1, string2);

    if (array.length && (ocurrance == undefined || ocurrance == 1)) {
        return array[0]
    }
    else if (array.length && ocurrance > 1) {
        return array[ocurrance - 1]
    }
    else {
        return undefined;
    }
};

var getFromBetween = {
    results: [],
    string: "",
    getFromBetween: function (sub1, sub2) {
        if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var SP = this.string.indexOf(sub1) + sub1.length;
        var string1 = this.string.substr(0, SP);
        var string2 = this.string.substr(SP);
        var TP = string1.length + string2.indexOf(sub2);
        return this.string.substring(SP, TP);
    },
    removeFromBetween: function (sub1, sub2) {
        if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
        var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
        this.string = this.string.replace(removal, "");
    },
    getAllResults: function (sub1, sub2) {
        // first check to see if we do have both substrings
        if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

        // find one result
        var result = this.getFromBetween(sub1, sub2);
        // push it to the results array
        this.results.push(result);
        // remove the most recently found one from the string
        this.removeFromBetween(sub1, sub2);

        // if there's more substrings
        if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
            this.getAllResults(sub1, sub2);
        }
        else return;
    },
    get: function (string, sub1, sub2) {
        this.results = [];
        this.string = string;
        this.getAllResults(sub1, sub2);
        return this.results;
    }
};

export {echo, extractBetween, extractBetweenDifferent}