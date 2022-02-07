import IAcademicYears from "./IAcademicYears";
import IClasses from "./IClasses";
import ILessons from "./ILessons";
import IRooms from "./IRooms";

interface ISchedules {
    kode_jadwal: number;
    tahun_akademik: IAcademicYears;
    kode_kelas: IClasses;
    kode_pelajaran: ILessons;
    kode_ruangan: IRooms;
    nip: string;
    jam_mulai: string;
    jam_selesai: string;
    hari: string;
    aktif: string;
}

export default ISchedules;
