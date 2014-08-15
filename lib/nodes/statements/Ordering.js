var Class           = require('ee-class'),
    log             = require('ee-log');

var Ordering = module.exports = new Class({

      value:      null
    , direction:  null

    , _type:    "Ordering"

    , init: function initialize(value, direction){
        this.value      = value;
        this.direction  = direction.toUpperCase() || 'ASC'
    }

    , accept: function(visitor){
        return visitor.visitOrdering(this);
    }
});