const superHero = document.querySelectorAll(".superHeroSection")
const horror = document.querySelectorAll(".horrorSection")
const action = document.querySelectorAll(".actionSection")
const komedi = document.querySelectorAll(".komediSection")
const searchResult = document.querySelector('.wrapper')

//coming soon
const pertaruhan = document.querySelector('.superHeroFilm')


//1. Tampung array pada setiap kategori film
let indexFilm = [
  {
    titleFilm: 'Super hero', 
    variabel: superHero
  }, {
    titleFilm: 'Horror', 
    variabel: horror
  }, {
    titleFilm: 'Action', 
    variabel: action
  }, {
    titleFilm: 'Komedi',
    variabel: komedi
  }
  ];
  

function getValue(event) {
// 2. ambil nilai inputan
  const search = document.getElementById("search")
  const inputValue = search.value.toLowerCase()
  const hasil = document.getElementById('hasil')
  
//3. pencarian data berdasarkan inputan user
  let result = indexFilm.find(function(film) {
//4. kembalikan object title film jika nilainya sama dengan inputValue(inputan user)
    return film.titleFilm.toLowerCase() === inputValue
  })
//5. pengecekan inputan user berdasarkan data object yang ada
    if(result) {
      hasil.textContent = 'Hasil penelusuran anda : ' + inputValue;
      searchResult.innerHTML = '';
      result.variabel.forEach(function(elem) {
      searchResult.appendChild(elem);
    });
    }else {
    hasil.textContent = 'Hasil penelusuran anda : ' + inputValue + ' -Tidak tersedia'
    }
  }
  search.addEventListener("input", getValue)

  
//5. Pengecekan inputan user apakah sesuai dengan nama variabel yg mewakili index array yg ada
/*let searchFilm = indexFilm.filter(function(film) {
  if(film.inputValue.toLowerCase() === variabel.value) {
    searchResult.innerHTML = indexFilm;
    return film
  }else {
    searchResult.innerHTML = "";
  }
})*/
  




