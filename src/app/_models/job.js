"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Job = (function () {
    function Job(id, title, description, employmentType, truncated, location, address, category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.employmentType = employmentType;
        this.truncated = truncated;
        this.location = location;
        this.address = address;
        this.category = category;
    }
    return Job;
}());
exports.Job = Job;
//# sourceMappingURL=job.js.map