class IO {

	// Basic methods
	hey() {
		console.log("hey");
	}

	getKeyByValue(object, value) {
		Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
        }

	setObjValues(object, value) {
                for (var i in object) {
                        tabs[i] = value;
                }
        }

	setValueByKey(object, key, value) {
                for (var i in object) {
                        if (key == i) {
                                tabs[key] = value;
                        }
                }

        }
	
}
