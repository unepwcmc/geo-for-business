import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

export default (context, inject) => {
  inject('gsap', gsap)
  inject('ScrollTrigger', ScrollTrigger)
}