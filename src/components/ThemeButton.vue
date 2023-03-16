<template>
    <div class="theme-switch" @click="toggleTheme">
        <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox"/>
        <label for="checkbox" class="switch-label">
            <i class="fas fa-sun icon-sun" :style="{ color: userTheme === 'light-theme' ? 'var(--text-primary-color)' : 'yellow' }"></i>
            <div class="theme-box">
            <span ><i class="fas fa-moon" :style="{ color: userTheme === 'light-theme' ? 'white' : 'var(--text-primary-color)' }"></i></span>
            <!-- <span><i :style="{ color: 'var(--text-primary-color)' }"></i></span> -->
            </div>
            <div class="switch-toggle" :class="{'switch-toggle-checked': userTheme === 'dark-theme'}"></div>
        </label>
 </div>
</template> 
<script>
export default {
    mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference(); 
        this.setTheme(initUserTheme);
    },
    data () {
        return {
            userTheme: "light-theme",
        };
    },
    methods: {
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
            
        },
        getTheme() {
            return localStorage.getItem("user-theme");
        },
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        getMediaPreference () {
        const hasDarkPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        if(hasDarkPreference) {
            return "dark-theme";
        } else {
            return "light-mode";
        }
    },
},

    
  
};
</script>

<style scoped>
.switch-checkbox {
    display: none;
}
.switch-label {
    align-items: center;
    background: var(--text-primary-color);
    border: calc(var(--element-size)* 0.025) solid var(--accent-color);
    border-radius: var(--element-size);
    cursor: pointer;
    display: flex;
    font-size: calc(var(--element-size)*0.3);
    height: calc(var(--element-size) *0.35);
    position: relative;
    padding: calc(var(--element-size) * 0.1);
    transition: background 0.5s ease;
    justify-content: space-between;
    width: var(--element-size);
    z-index: 1; 
}

.switch-label span i {
  font-size: 1.2em;
}


.switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(var(--element-size)*0.07);
    left: calc(var(--element-size)*0.07);
    height: calc(var(--element-size)*0.04);
    width: calc(var(--element-size)*0.07);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}
.switch-toggle-checked {
    transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

/* Media query for small screens */
@media screen and (max-width: 576px) {
  .switch-label {
    font-size: calc(var(--element-size)*0.25);
    height: calc(var(--element-size) *0.3);
    padding: calc(var(--element-size) * 0.05);
    width: calc(var(--element-size)* 0.8);
  }
  .switch-toggle {
    height: calc(var(--element-size)*0.03);
    width: calc(var(--element-size)*0.05);
    top: calc(var(--element-size)*0.05);
    left: calc(var(--element-size)*0.05);
  }
}

/* Media query for medium screens */
@media screen and (min-width: 577px) and (max-width: 768px) {
  .switch-label {
    font-size: calc(var(--element-size)*0.3);
    height: calc(var(--element-size) *0.35);
    padding: calc(var(--element-size) * 0.1);
    width: var(--element-size);
  }
  .switch-toggle {
    height: calc(var(--element-size)*0.04);
    width: calc(var(--element-size)*0.07);
    top: calc(var(--element-size)*0.07);
    left: calc(var(--element-size)*0.07);
  }
}


@media screen and (min-width: 769px) {
  .switch-label {
    font-size: calc(var(--element-size)*0.4);
    height: calc(var(--element-size) *0.4);
    padding: calc(var(--element-size) * 0.15);
    width: calc(var(--element-size)*1.2);
  }
  .switch-toggle {
    height: calc(var(--element-size)*0.05);
    width: calc(var(--element-size)*0.1);
    top: calc(var(--element-size)*0.1);
    left: calc(var(--element-size)*0.1);
  }
}

.switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
    transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

/* Media query for the icons */
@media (prefers-color-scheme: dark) {
  .icon-sun {
    color: yellow;
  }
}

@media (prefers-color-scheme: light) {
  .icon-sun {
    color:white
  }
}
</style>