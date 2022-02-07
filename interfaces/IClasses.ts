import IMajors from "./IMajors";
import IRooms from "./IRooms";

interface IClasses {
    nip: string;
    jurusan: IMajors;
    ruangan: IRooms;
    nama_kelas: string;
    aktif: string;
}

export default IClasses;
