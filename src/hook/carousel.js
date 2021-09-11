import {Carousel} from 'react-bootstrap'
import {CarouselLocal, CarouselLocalImg, BoxCarouselLocal} from '../style/style'
import { FiPlus } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import {BoxDescription,
        BoxImg,
        BoxPuntuacionImg,
        BotonVerYa,
        BotonVerMas,
        ContenedorVide,
        BotonX
        } from '../style/style'


export default function ControlledCarousel() {
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  
    return(
        <BoxCarouselLocal>
            <CarouselLocal>
                <CarouselLocalImg>
                    <img
                    src="https://www.themoviedb.org/t/p/original/3FKof7vlY8yPcCYjGmmWaj2NyTq.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="d-flex flex-direction-row">
                            <BotonVerYa className="mt-5 m-1"><FaPlay className="m-1" /> Ver ahora </BotonVerYa>
                            <BotonVerMas className="mt-5 m-1"><FiPlus className="m-1" /> Ver mas</BotonVerMas>
                        </div>
                    </Carousel.Caption>
                </CarouselLocalImg>
                <CarouselLocalImg>
                    <img
                    src="https://www.themoviedb.org/t/p/original/mFIAc5UvZ8frJ4GcAiywo1IlI9q.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="d-flex flex-direction-row">
                            <BotonVerYa className="mt-5 m-1"><FaPlay className="m-1" /> Ver ahora </BotonVerYa>
                            <BotonVerMas className="mt-5 m-1"><FiPlus className="m-1" /> Ver mas</BotonVerMas>
                        </div>
                    </Carousel.Caption>
                </CarouselLocalImg>
                <CarouselLocalImg>
                    <img
                    src="https://www.themoviedb.org/t/p/original/8QSZAVBSFwW7q3tZOURjJGSpGjS.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="d-flex flex-direction-row">
                            <BotonVerYa className="mt-5 m-1"><FaPlay className="m-1" /> Ver ahora </BotonVerYa>
                            <BotonVerMas className="mt-5 m-1"><FiPlus className="m-1" /> Ver mas</BotonVerMas>
                        </div>
                    </Carousel.Caption>
                </CarouselLocalImg>
            </CarouselLocal>
        </BoxCarouselLocal>
    )
  }