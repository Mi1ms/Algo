export default class GradeSchool {
    constructor(obj = {}) {
        this.grade_list = obj;
    }

    getAllStudents() {
        return Object.entries(this.grade_list).length > 0 ? new Map(Object.entries(this.grade_list)) : {size: 0}
    }

    addStudent(name, note) {

        if (this.grade_list.hasOwnProperty(note)) {
            this.grade_list[note].push(name);
            this.grade_list[note].sort(); 
        } else {
            this.grade_list[note] = [name];
        }

        return new Map(Object.entries(this.grade_list[note]));
    }


    getGradeStudents(note) {
        return this.grade_list[note] ? this.grade_list[note] : [];
    }
}