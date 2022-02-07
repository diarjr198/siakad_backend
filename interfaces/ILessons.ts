import IGroupLessons from "./IGroupLessons";
import IMajors from "./IMajors";

interface ILessons {
    kode_pelajaran: string;
    kelompok_mata_pelajaran: IGroupLessons;
    kode_jurusan: IMajors;
    nip: string;
    nama_mata_pelajaran: string;
    jumlah_jam: number;
    aktif: string;
}

export default ILessons;
