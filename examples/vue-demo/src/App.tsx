import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import vueLogo from './assets/vue.svg'
import style from './app.module.css'

export default defineComponent({
  name: 'App',

  setup() {
    return () => (
      <>
        <div class='flex justify-center'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' class={style.logo} alt='Vite logo' />
          </a>
          <a href='https://vuejs.org/' target='_blank'>
            <img src={vueLogo} class={[style.logo, style.vue]} alt='Vue logo' />
          </a>
        </div>
        <HelloWorld msg='Vite + Vue' />
      </>
    )
  },
})
