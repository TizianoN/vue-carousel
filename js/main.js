// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente

// 2- applicare l'autoplay allo slider: ogni 3 secondi,
// cambia immagine automaticamente

// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e
// farlo riprendere quando esce

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],

      shouldShowSlide: true,
      activeSlide: 0,

      autoplayInterval: false,
      autoplayForward: true,
      mouseOver: false,
    };
  },

  computed: {
    // genera una lista filtrata di slides (metodo esempio non utilizzato)
    filteredSlides() {
      return this.slides.filter((slide, index) => {
        return index % 2 == 0;
      });
    },
  },

  methods: {
    nextSlide() {
      if (this.activeSlide + 1 < this.slides.length) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },

    prevSlide() {
      if (this.activeSlide - 1 >= 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.slides.length - 1;
      }
    },

    switchToSlide(i) {
      this.activeSlide = i;
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
      console.log("autoplay stop");
    },

    invertAutoplay() {
      this.autoplayForward = !this.autoplayForward;
      console.log("autoplay " + (this.autoplayForward ? "avanti" : "indietro"));
    },

    startAutoplay() {
      console.log("autoplay start");
      this.autoplayInterval = setInterval(() => {
        if (!this.mouseOver) {
          if (this.autoplayForward) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }

          console.log("slide " + this.activeSlide);
        }
      }, 3000);
    },
  },

  created() {
    this.startAutoplay();
  },
});

app.mount("#carousel");
