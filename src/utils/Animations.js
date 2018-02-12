import { TweenMax, TimelineMax } from 'gsap';

const tl = new TimelineMax();

export default {

  toggleDesktopNav(state) {
    let tray = document.getElementById('nav-tray');
    let logo = document.getElementById('nav-logo');
    let items = document.getElementById('nav-items');
    let item = document.getElementsByClassName('nav-item');
    let arr = Array.from(item);
    console.log(arr)
    if (!state) {
      TweenMax.to(items, 0, {left: 0})
      TweenMax.to(logo, 0.3, { transform: 'none', bottom: '30px', left: '180px'})
      tl.add(TweenMax.to(tray, 0.3, { width: 550 }, 0.5))
      tl.add(TweenMax.staggerTo(arr, 0.5, {opacity: 1, margin: '80px auto'}, 0.2))

    }
    else {
      tl.add(TweenMax.staggerTo(arr.reverse(), 0.2, {opacity: 0, margin: '120px auto 80px'}, 0.1))
      TweenMax.to(items, 0, {delay: 0.8, left: -460})
      TweenMax.to(logo, 0.3, {delay: 0.3, transform: 'rotate(-90deg)', bottom: '80px', left: -40})
      tl.add(TweenMax.to(tray, 0.3, { width: 70 }))
    }
  },
}
