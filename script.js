//NAVBAR
let lastSrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastSrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastSrollTop = scrollTop
})


//TYPED (sur le sitehttps://github.com/mattboldt/typed.js/  )
var typed = new Typed('.typed', {
    strings: ["Bonjour !", "<i>Je me présente :</i> Je m'appelle <strong>Eric PARE</strong>", " Après une carrière de plus de 10 ans dans le domaine de la comptabilité finance, j'ai entrepris un apprentissage au code ensuite, une formation à la gestion de projet informatique afin d'apporter ma plus value à la MOA. Je mets à profit mes temps libres pour apprendre des langages Front tels que CSS, HTML, Javascript, et quelques Framework. Plus qu'un avenir professionnel, le code est devenu une passion pour moi. Pour plus de détails, merci de vous rendre sur le lien en cliquant sur le bouton ci-dessous."],
     typeSpeed: 40,
     /*backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: false,*/
        
  });

  //COMPTEUR LIVE
  let compteur = 0;

  $(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function(){
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 1000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complet: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }


  });
    