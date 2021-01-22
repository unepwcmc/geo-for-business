import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { gsap } from "gsap"

gsap.registerPlugin(ScrollToPlugin)

export default (context, inject) => {
  inject('gsap', gsap)
}