/* jslint node: true */
/* global angular: false, require: false, module: false */

'use strict';

module.exports = Contact;

function Contact() { }

Contact.prototype.isDirty = function() {
    return this._isDirty;
};

Contact.prototype.markDirty = function() {
    this._isDirty = true;
};

Contact.prototype.propertyChanged = function(propName) {
    this.markDirty();
};

Contact.prototype.getSetFirstName = function(newValue) {
    if ( arguments.length ) {
        // a value or null or undefined was pass, consider it a setter
        if (newValue !== this.firstName) {
            // something is changing
            // a value or null or undefined was pass, consider it a setter
            this.firstName = newValue;
            this._isDirty = true;
        }
    }

    return this.firstName;
};

Contact.prototype.getSetLastName = function(newValue) {
    if (arguments.length) {
        // a value or null or undefined was pass, consider it a setter
        if (newValue !== this.lastName) {
            // something is changing
            this.lastName = newValue;
            this._isDirty = true;
        }
    }

    return this.lastName;
};
