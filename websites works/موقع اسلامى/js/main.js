// explore buttons
let ExploreBtn =document.querySelector('.title .btn'),
HadithSection = document.querySelector('.hadith');
ExploreBtn.addEventListener('click',()=>{
    HadithSection.scrollIntoView({
        behavior :"smooth"
    })
})
// الخلفيه اسكرول
let fixedNav = document.querySelector('.header'),
scrollBtn = document.querySelector('.scrollBtn');    //زرار الاسكرول
window.addEventListener("scroll",()=>{
    window.scrollY > 100 ? fixedNav.classList.add('active'): fixedNav.classList.remove('active');
    window.scrollY > 500 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active')
})
scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior : "smooth"
    })

})
// hadith canger
// تعريف الازارار
let hadithContainer = document.querySelector('.hadithContainer'),
next = document.querySelector('.buttons .next'),
prev = document.querySelector('.buttons .prev'),
number = document.querySelector('.buttons .number');
let hadithIndex=0;
HadithChanger();
function HadithChanger()
{
// اضافه الapi
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
    .then(Response => Response.json())
    .then(data =>{
        let Hadiths = data.data.hadiths;
        // تغيير الازرار
        changeHadith();
        next.addEventListener('click',()=>{
            hadithIndex ==299 ?hadithIndex = 0 :hadithIndex++;
            changeHadith()
        })
        prev.addEventListener('click',()=>{
            hadithIndex ==0 ?hadithIndex = 299 :hadithIndex--;
            changeHadith()
        })
        function changeHadith()
{
        hadithContainer.innerText = Hadiths[hadithIndex].arab;
        number.innerText = `300 - ${hadithIndex + 1}`
}
    })
}
// links sections
let sections = document.querySelectorAll("section"),
links = document.querySelectorAll('.header ul li');
links.forEach(link => {
link.addEventListener('click',()=>{
    document.querySelector('.header ul li.active').classList.remove('active');
    link.classList.add('active');
    let target = link.dataset.filter;
    sections.forEach(section=>{
        if(section.classList.contains(target))
        {
            section.scrollIntoView({
                behavior:"smooth"
            })
        }
    })
})
})
// surah api
let SurhasContainer = document.querySelector('.SurhasContainer');
getsurahs()
function getsurahs()
//fetch surahs meta data{name of surahs}
    {
fetch("http://api.alquran.cloud/v1/meta") 
.then(response => response.json())
.then(data =>{
let surahs = data.data.surahs.references;
let numberOfSurahs = 114;
SurhasContainer.innerHTML = ""
for (let i = 0; i <numberOfSurahs ; i++) {

    SurhasContainer.innerHTML +=
    ` 
    <div class="surah">
    <p> ${surahs[i].name}</p>
    <p> ${surahs[i].englishName} </p>
</div>
`
}
//popup 
let SurahsTitels = document.querySelectorAll('.surah');
let popup = document.querySelector('.surah-popup'),
   AyatContainer = document.querySelector('.ayat');
   SurahsTitels.forEach((title,index)=>{
       title.addEventListener('click',()=>{
fetch(`http://api.alquran.cloud/v1/surah/${index + 1}`)
.then(respone =>respone.json())
.then(data=>{
    AyatContainer.innerHTML="";
    let Ayat = data.data.ayahs;
    Ayat.forEach(aya=>{
        popup.classList.add('active');
        AyatContainer.innerHTML +=
        `<p>(${aya.numberInSurah}) - ${aya.text}</p>`
    })
})
 })
       
})
let closepopup = document.querySelector('.close-popup');
closepopup.addEventListener('click',()=>{
    popup.classList.remove('active');
})
})
}
//api timepray
let cards = document.querySelector('.cards');
getPrayTimes();
function getPrayTimes(){
    fetch("http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8")
    .then(respone => respone.json())
    .then(data =>{
        let times = data.data.timings;
        cards.innerHTML = "";
        for (let time in times)
        {
            cards.innerHTML+=
            `

            <div class="card">
                <div class="circle">
                    <svg>
                        <circle cx="100" cy="100" r="100"></circle>
                    </svg>
                    <div class="praytime">${times[time]}</div>
                </div>
                <p>${time}</p>
        </div>

            `
        }
    })
}

// active side bar
let bars = document.querySelector('.bars'),
    SideBar = document.querySelector('.header ul');
bars.addEventListener('click',()=>{
    SideBar.classList.toggle("active")
})
