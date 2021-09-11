import {Carousel} from 'react-bootstrap'
import {CarouselLocal, CarouselLocalImg, BoxCarouselLocal} from '../style/style'
import { FiPlus } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import {BotonVerYa,
        BotonVerMas
        } from '../style/style'


export default function ControlledCarousel() {

    return(
        <BoxCarouselLocal>
            <CarouselLocal>
                <CarouselLocalImg>
                    <img
                    src="https://www.themoviedb.org/t/p/original/8AoUSkWjXCxe2Ez8Jx6enkq47Fz.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="d-flex flex-direction-row">
                            <BotonVerYa className="mt-5 m-1" href="https://cuevana3.io/32513/mulan" target="target"><FaPlay className="m-1" /> Ver ahora </BotonVerYa>
                            <BotonVerMas className="mt-5 m-1" href="https://www.youtube.com/watch?v=1dnaQjFL67k&ab_channel=FilmSelectEspa%C3%B1ol" target="target"><FiPlus className="m-1" /> Ver mas</BotonVerMas>
                        </div>
                    </Carousel.Caption>
                </CarouselLocalImg>
                <CarouselLocalImg>
                    <img
                    src="https://www.themoviedb.org/t/p/original/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="d-flex flex-direction-row">
                            <BotonVerYa className="mt-5 m-1" href="https://cuevana3.io/39146/raya-and-the-last-dragon" target="target"><FaPlay className="m-1" /> Ver ahora </BotonVerYa>
                            <BotonVerMas className="mt-5 m-1" href="https://www.youtube.com/watch?v=aQFHKzN-yw0&ab_channel=SensaCineTRAILERS"  target="target"><FiPlus className="m-1" /> Ver mas</BotonVerMas>
                        </div>
                    </Carousel.Caption>
                </CarouselLocalImg>
                <CarouselLocalImg>
                    <img
                    src="https://www.themoviedb.org/t/p/original/aUVCJ0HkcJIBrTJYPnTXta8h9Co.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="d-flex flex-direction-row">
                            <BotonVerYa className="mt-5 m-1" href="https://www.youtube.com/watch?v=tg52up16eq0&ab_channel=SonyPicturesEntertainment" target="target"><FaPlay className="m-1" /> Ver ahora </BotonVerYa>
                            <BotonVerMas className="mt-5 m-1" href="https://www.youtube.com/watch?v=tg52up16eq0&ab_channel=SonyPicturesEntertainment" target="target"><FiPlus className="m-1" /> Ver mas</BotonVerMas>
                        </div>
                    </Carousel.Caption>
                </CarouselLocalImg>
            </CarouselLocal>
        </BoxCarouselLocal>
    )
  }