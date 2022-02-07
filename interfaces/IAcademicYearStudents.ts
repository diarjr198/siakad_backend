import ISchedules from "./ISchedules";
import IStudents from "./IStudents";

interface IAcademicYearStudents {
    kode_jadwal: ISchedules;
    students: Array<IStudents>;
}

export default IAcademicYearStudents;
