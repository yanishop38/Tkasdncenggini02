const siswa = [
  {
    nisn: "3146525710",
    nama: "MUHAMAD ROIHAN MAULIDA",
    peserta: "T1-26-03-35-0073-0001-8",
    ttl: "Tegal, 7 Januari 2014",
    matematika: "40.00",
    indonesia: "73.33"
  },
  {
    nisn: "0146637439",
    nama: "M. KHAFID ALIFAUZI",
    peserta: "T1-26-03-35-0073-0002-7",
    ttl: "Tegal, 20 Juli 2014",
    matematika: "53.33",
    indonesia: "70.00"
  },
  {
    nisn: "3142939858",
    nama: "HANIA SYAKIRA",
    peserta: "T1-26-03-35-0073-0003-6",
    ttl: "Tegal, 26 April 2014",
    matematika: "26.67",
    indonesia: "70.00"
  },
  {
    nisn: "0131884294",
    nama: "DAFI NABIL MUSYAFA",
    peserta: "T1-26-03-35-0073-0004-5",
    ttl: "Tegal, 28 Juli 2013",
    matematika: "46.67",
    indonesia: "53.33"
  },
  {
    nisn: "3133944890",
    nama: "SITI MUJILAH",
    peserta: "T1-26-03-35-0073-0005-4",
    ttl: "Tegal, 14 September 2013",
    matematika: "50.00",
    indonesia: "50.00"
  }
];

function login() {

  const nisn = document.getElementById("nisn").value;
  const result = document.getElementById("result");

  const data = siswa.find(s => s.nisn === nisn);

  if(data){

    result.innerHTML = `
      <div class="result-card">
        <h3>Hasil TKA Siswa</h3>

        <div class="data"><b>Nama:</b> ${data.nama}</div>
        <div class="data"><b>NISN:</b> ${data.nisn}</div>
        <div class="data"><b>Nomor Peserta:</b> ${data.peserta}</div>
        <div class="data"><b>Tempat, Tanggal Lahir:</b> ${data.ttl}</div>

        <div class="nilai">

          <div class="nilai-box">
            <h4>Matematika</h4>
            <p>${data.matematika}</p>
          </div>

          <div class="nilai-box">
            <h4>Bahasa Indonesia</h4>
            <p>${data.indonesia}</p>
          </div>

        </div>
      </div>
    `;

  } else {

    result.innerHTML = `
      <div class="error">
        NISN tidak ditemukan!
      </div>
    `;
  }
}
