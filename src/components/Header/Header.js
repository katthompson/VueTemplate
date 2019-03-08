import Vue from 'vue'
import Navigation from '../Navigation/Navigation.vue'

export default {
    data() {
        return {
            isActive: false,
            mobileMenu: true
        }
    },
    components: {
      Navigation 
    },
    methods: {
        toggle: function(){
            this.isActive = !this.isActive;
            this.mobileMenu = !this.mobileMenu;
        },
        toggleMenu: function(){
            this.isActive = !this.isActive;
            this.mobileMenu = !this.mobileMenu; 
        }
    }
  }