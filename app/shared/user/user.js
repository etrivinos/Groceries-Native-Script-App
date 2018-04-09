"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return true; //validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQztJQUFBO0lBTUEsQ0FBQztJQUhDLDJCQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFBLENBQUMsaUNBQWlDO0lBQy9DLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbInZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBpc1ZhbGlkRW1haWwoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZSAvL3ZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsKTtcclxuICB9XHJcbn0gIl19