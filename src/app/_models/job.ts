export class Job{
    constructor(
        public id: any,
        public title: string,
        public description: string,
        public employmentType: string,
        public truncated: string,
        public location: string,
        public address: {},
        public category: string,
    ){}
}