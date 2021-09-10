import {Carousel} from 'react-bootstrap'
import {CarouselLocal, CarouselLocalImg, BoxCarouselLocal} from '../style/style'
export default function SectionCarrusel(){
    return(
        <BoxCarouselLocal>
            <CarouselLocal>
                <CarouselLocalImg>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlu-5sicFuHii8BAVf-lwWzS0D4bOJ00mHAQ&usqp=CAU"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <button>LOLA</button>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </CarouselLocalImg>
                <CarouselLocalImg>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlu-5sicFuHii8BAVf-lwWzS0D4bOJ00mHAQ&usqp=CAU"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </CarouselLocalImg>
                <CarouselLocalImg>
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlu-5sicFuHii8BAVf-lwWzS0D4bOJ00mHAQ&usqp=CAU"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </CarouselLocalImg>
            </CarouselLocal>
        </BoxCarouselLocal>
    )
}