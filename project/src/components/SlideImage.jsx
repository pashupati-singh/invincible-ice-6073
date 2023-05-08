
import HeroSlider, {Slide} from "hero-slider"

const Image1 = `https://wallpaperaccess.com/full/2659671.jpg`
   const Image2 = `https://static.autox.com/uploads/2019/11/01-1.jpg`
   const Image3 = `https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fA%3D%3D&w=1000&q=80`
   const Image4 = `https://e1.pxfuel.com/desktop-wallpaper/866/618/desktop-wallpaper-1920x1080-2022-suzuki-hayabusa-laptop-full-backgrounds-and-2022-laptop.jpg`

export default function SliderImage(){

   

    return(
        <HeroSlider 
         SlidingAnimation = "left_to_right"
         orientation = "horizontal"
         initialSlider = {1}
         onBeforeChange = {(previousSlider,nextSlider)=>console.log("onBeforeChange",previousSlider)}
         onSliding = {(nextSlide) =>
         console.debug('onSliding(nextSlide): ', nextSlide)}
         onAfterChange = {nextSlider => console.log("onAfterChange",nextSlider)}
         style={{backgroundColor : "rgba(0,0,0,0.33)"}}
         settings={{slidingDuration : 2500,
                    slidngDelay : 1000,
                    shouldAutoplay : true,
                    shouldDisplayButtons : true,
                    autoplayDuration : 200,
                    height : "100vh"}}
        >
            <Slide background={{backgroundImageSrc : Image1,backgroundAttachment : "fixed"}} />
            <Slide background={{backgroundImageSrc : Image2,backgroundAttachment : "fixed"}} />
            <Slide background={{backgroundImageSrc : Image3,backgroundAttachment : "fixed"}} />
            <Slide background={{backgroundImageSrc : Image4,backgroundAttachment : "fixed"}} />
        </HeroSlider>
    )
}