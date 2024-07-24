
// Kode Upload File
function UploadFile() {
    var reader = new FileReader();
    var file = document.getElementById("attach").files[0];
    reader.onload = function () {
      document.getElementById("fileContent").value = reader.result;
      document.getElementById("filename").value = file.name;
      document.getElementById("uploadForm").submit();
    };
    reader.readAsDataURL(file);
}
// end kode upload file

// Kode APD-1
const jenisAPDSelect = document.getElementById('jenis_apd');
  const sizeSepatuContainer = document.getElementById('size_sepatu_container');
  const sizeSeragamContainer = document.getElementById('size_seragam_container');
  const warnaAPDContainer = document.getElementById('warna_apd_container');

  // Sembunyikan awalnya
  sizeSeragamContainer.style.display = 'none';
  warnaAPDContainer.style.display = 'none';
  sizeSepatuContainer.style.display = 'none';
  
  jenisAPDSelect.addEventListener('change', function() {
    if (jenisAPDSelect.value === 'Sepatu Safety') {
      sizeSepatuContainer.style.display = 'block';
      sizeSeragamContainer.style.display = 'none';
      warnaAPDContainer.style.display = 'none';
    } else if (jenisAPDSelect.value === 'Safety Helmet') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'none';
      warnaAPDContainer.style.display = 'block';
    } else if (jenisAPDSelect.value === 'Coveral') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'block';
      warnaAPDContainer.style.display = 'block';
    } else if (jenisAPDSelect.value === 'Seragam Atasan') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'block';
      warnaAPDContainer.style.display = 'block';
    } else if (jenisAPDSelect.value === 'Celana Kerja') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'block';
      warnaAPDContainer.style.display = 'block';
    } else if (jenisAPDSelect.value === 'Kaca Mata') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'none';
      warnaAPDContainer.style.display = 'none';
    } else if (jenisAPDSelect.value === 'Kaca Mata Warna') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'none';
      warnaAPDContainer.style.display = 'none';
    } else if (jenisAPDSelect.value === 'Rompi') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'block';
      warnaAPDContainer.style.display = 'block';
    } else if (jenisAPDSelect.value === 'Sarung Tangan') {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'none';
      warnaAPDContainer.style.display = 'none';
    } else {
      sizeSepatuContainer.style.display = 'none';
      sizeSeragamContainer.style.display = 'none';
      warnaAPDContainer.style.display = 'none';
    }
  });
// END Kode APD-1
// Kode APD-2
const jenisAPDeSelect = document.getElementById('jenis_apde');
  const sizeSepatuContainere = document.getElementById('size_sepatu_containere');
  const sizeSeragamContainere = document.getElementById('size_seragam_containere');
  const warnaAPDContainere = document.getElementById('warna_apd_containere');

  // Sembunyikan awalnya
  sizeSeragamContainere.style.display = 'none';
  warnaAPDContainere.style.display = 'none';
  sizeSepatuContainere.style.display = 'none';
  
  jenisAPDeSelect.addEventListener('change', function() {
    if (jenisAPDeSelect.value === 'Sepatu Safety') {
      sizeSepatuContainere.style.display = 'block';
      sizeSeragamContainere.style.display = 'none';
      warnaAPDContainere.style.display = 'none';
    } else if (jenisAPDeSelect.value === 'Safety Helmet') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'none';
      warnaAPDContainere.style.display = 'block';
    } else if (jenisAPDeSelect.value === 'Coveral') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'block';
      warnaAPDContainere.style.display = 'block';
    } else if (jenisAPDeSelect.value === 'Seragam Atasan') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'block';
      warnaAPDContainere.style.display = 'block';
    } else if (jenisAPDeSelect.value === 'Celana Kerja') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'block';
      warnaAPDContainere.style.display = 'block';
    } else if (jenisAPDeSelect.value === 'Kaca Mata') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'none';
      warnaAPDContainere.style.display = 'none';
    } else if (jenisAPDeSelect.value === 'Kaca Mata Warna') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'none';
      warnaAPDContainere.style.display = 'none';
    } else if (jenisAPDeSelect.value === 'Rompi') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'block';
      warnaAPDContainere.style.display = 'block';
    } else if (jenisAPDeSelect.value === 'Sarung Tangan') {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'none';
      warnaAPDContainere.style.display = 'none';
    } else {
      sizeSepatuContainere.style.display = 'none';
      sizeSeragamContainere.style.display = 'none';
      warnaAPDContainere.style.display = 'none';
    }
  });
  // END Kode APD-2


// Kode APD-3
const jenisAPDerSelect = document.getElementById('jenis_apder');
const sizeSepatuContainerer = document.getElementById('size_sepatu_containerer');
const sizeSeragamContainerer = document.getElementById('size_seragam_containerer');
const warnaAPDContainerer = document.getElementById('warna_apd_containerer');

// Sembunyikan awalnya
sizeSeragamContainerer.style.display = 'none';
warnaAPDContainerer.style.display = 'none';
sizeSepatuContainerer.style.display = 'none';

jenisAPDerSelect.addEventListener('change', function() {
  if (jenisAPDerSelect.value === 'Sepatu Safety') {
    sizeSepatuContainerer.style.display = 'block';
    sizeSeragamContainerer.style.display = 'none';
    warnaAPDContainerer.style.display = 'none';
  } else if (jenisAPDerSelect.value === 'Safety Helmet') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'none';
    warnaAPDContainerer.style.display = 'block';
  } else if (jenisAPDerSelect.value === 'Coveral') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'block';
    warnaAPDContainerer.style.display = 'block';
  } else if (jenisAPDerSelect.value === 'Seragam Atasan') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'block';
    warnaAPDContainerer.style.display = 'block';
  } else if (jenisAPDerSelect.value === 'Celana Kerja') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'block';
    warnaAPDContainerer.style.display = 'block';
  } else if (jenisAPDerSelect.value === 'Kaca Mata') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'none';
    warnaAPDContainerer.style.display = 'none';
  } else if (jenisAPDerSelect.value === 'Kaca Mata Warna') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'none';
    warnaAPDContainerer.style.display = 'none';
  } else if (jenisAPDerSelect.value === 'Rompi') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'block';
    warnaAPDContainerer.style.display = 'block';
  } else if (jenisAPDerSelect.value === 'Sarung Tangan') {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'none';
    warnaAPDContainerer.style.display = 'none';
  } else {
    sizeSepatuContainerer.style.display = 'none';
    sizeSeragamContainerer.style.display = 'none';
    warnaAPDContainerer.style.display = 'none';
  }
});
// END KODE APD-3

// Kode APD-4
const jenisAPDertSelect = document.getElementById('jenis_apdert');
const sizeSepatuContainerert = document.getElementById('size_sepatu_containerert');
const sizeSeragamContainerert = document.getElementById('size_seragam_containerert');
const warnaAPDContainerert = document.getElementById('warna_apd_containerert');

// Sembunyikan awalnya
sizeSeragamContainerert.style.display = 'none';
warnaAPDContainerert.style.display = 'none';
sizeSepatuContainerert.style.display = 'none';

jenisAPDertSelect.addEventListener('change', function() {
  if (jenisAPDertSelect.value === 'Sepatu Safety') {
    sizeSepatuContainerert.style.display = 'block';
    sizeSeragamContainerert.style.display = 'none';
    warnaAPDContainerert.style.display = 'none';
  } else if (jenisAPDertSelect.value === 'Safety Helmet') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'none';
    warnaAPDContainerert.style.display = 'block';
  } else if (jenisAPDertSelect.value === 'Coveral') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'block';
    warnaAPDContainerert.style.display = 'block';
  } else if (jenisAPDertSelect.value === 'Seragam Atasan') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'block';
    warnaAPDContainerert.style.display = 'block';
  } else if (jenisAPDertSelect.value === 'Celana Kerja') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'block';
    warnaAPDContainerert.style.display = 'block';
  } else if (jenisAPDertSelect.value === 'Kaca Mata') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'none';
    warnaAPDContainerert.style.display = 'none';
  } else if (jenisAPDertSelect.value === 'Kaca Mata Warna') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'none';
    warnaAPDContainerert.style.display = 'none';
  } else if (jenisAPDertSelect.value === 'Rompi') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'block';
    warnaAPDContainerert.style.display = 'block';
  } else if (jenisAPDertSelect.value === 'Sarung Tangan') {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'none';
    warnaAPDContainerert.style.display = 'none';
  } else {
    sizeSepatuContainerert.style.display = 'none';
    sizeSeragamContainerert.style.display = 'none';
    warnaAPDContainerert.style.display = 'none';
  }
});
// END KODE APD-4
