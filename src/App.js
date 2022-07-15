import './App.css';
import {useState} from "react";

const srcs = {
    buns: {
        whiteBuns: {
            whiteBun: "https://www.seekpng.com/png/detail/319-3191480_bun-with-shadow-hamburgerbun-hamburger-bun-sesameseeds-bun.png",
            topBun: "https://yimages360.s3.amazonaws.com/products/2017/06/593e8c0640e75/1x.jpg",
            bottomBun: "http://atlas-content-cdn.pixelsquid.com/stock-images/hamburger-bun-bottom-koZ0W33-600.jpg"
        },
        blackBuns: {
            blackBun: "https://st4.depositphotos.com/1992931/23887/i/1600/depositphotos_238877800-stock-photo-burger-bun-white-background-two.jpg",
            topBun: "data:image/jpeg;base64,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",
            bottomBun: "data:image/jpeg;base64,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"
        }
    },
    patties: {
        beefPatty: "https://yimages360.s3.amazonaws.com/products/2019/08/5d5f9fe478a21/1x.jpg",
        otherPatty: "data:image/jpeg;base64,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",
        somePatty: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnhoEG-StX84hxl4hn8P62wnqCEnaBplJ4w&usqp=CAU"
    },
    vegetables: {
        tomatoes: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIWFRUXFxUVFxgXGBcXFRUXFRUWFxUVFhUYHSggGBolHRUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKQBNAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYHAf/EADoQAAIBAwEGAwYFAgYDAQAAAAABAgMEESEFEjFBUWEGcZETIjKBodEUQrHB4VLwIzNicpLxFVPSB//EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAxEQACAQIEBAQGAQUBAAAAAAAAAQIDEQQSITEFIkFREzJh4XGBkaGx0cEUM1Lw8UL/2gAMAwEAAhEDEQA/APcQAAAAAAAAAAAAAAAAAAAAAAAAfGY766r1AMwYqSZkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaqlRRWZNJLm9Ec7tXxbCGY0lvvq/h+XUhOpGC5mXUMPUru1NXOlnJJZbwij2h4no09I/4ku3D1+xyN9tC4uPinp/StF6IhK0kuJjqYuT8iPaocIhHWtK77L9nQXHimvL4UoLssv1ZCq39xLV1Jer/AGNFCWOKJlPD4FDlKW7ZrVOnS8sEvkQpOo+Mm/mz77GX9TJ1SnhZSyU9e+k3hLGCuSUdy6nKU/LZImKlLlN+psjc14/DVmvmyBaxqPVRcvLJMtq7W8pRafHVPP6nY99vmcqXV9mSqfiG6hxlveaRYW/jFr/MpZ7xePozn7i9SeHHpqZ+zjLg0ycas09JFU8JQkrzpr5afg7ax8Q0KuinuvpLT68C2yeZVLIWu0K1B+5NpdOMfRmiOLa86+hhqcJhLWjL5P8AfsenA5bZfi2MsRrR3X/UtY/NcUdJSqxklKLTT4Nao1wqRmrxZ5FfD1KLtNW/H1NoAJlIAAAAAAAAAAAAAAAAAAAAAAAAAI13e06SzOaj+vocbtudSbdkSQczeeLqcf8ALg5d3ovTiVVXxRcT+Hdj5L75KJYqmtN/gbqfDMRJXasvU7srNtbWhbU9+WrekY85P7dzjJX1xP4qsvVnPX1eU6jTbeNFl+pVLF6aL6m7D8HTms8rpbpX/PQtNo7arXMsyeFyivhXy/c0QpYPltDC1Mb25UMf38jFKXVntxSjaEFZehPoPGmCdR1XAobfaO/hRaznGOmeGpf0rGtFKWj6pc+6Jwu9UjLXSjpJpNnx0OeD7GGCTUk0aXqW5UZ1JtGyM0zVXsoz7PqjO3oJZa5m5RJJXWpBvK+VmGzrf2OdW866lipxeqRAlkiXO1IUvilr0Wrf2JJqKt0ISpOrK+7LG5toTWGkVVzsrd1pp556lbc+JaktKcVHu/el9iBO4qz+OcpdsvHpwKZzi+hsoYWtDd2Xbf2+5YfjFHjJeXMyntGk+P0RVxtUSKNmilM1OnBatmyrd0+Sl6EjZm3p0HmEnjnFrMX8uT7mn8Njlk+Rt+x1XTutzklTlHLLVep2Vp40t5Jb+9CXPTK+TRY0PEVtLhWiv92Y/qjzx2WXwH/jTSsVU7HnT4XhXs2vn7fyep0biE9YTjL/AGtP9DeeQuzlF5jJp9ng323iS7ovHtHNLlL3l9dSxYv/ACRnlwVv+3NP4qx6uDiNnePU9K1LHeDyvR/c6nZ21KNdZp1FLtwkvOL1NEKsJ7M82vg69D+5HTvuvqv5sTgAWGUAAAAAAAAAAAAGm4rxhFylJRS5s1315CjBzqSwl6vslzZ5x4h29O4nppBfDH931ZRWrqmvU34HATxUu0Vu/wCF6/gu9seLZSe7R91f1fmfl0Ofq+0m8ybfmQreWHqmW1C4TPNlOVR3kz6SOHhh1alH59TChQ6ktRUVl6I+7vR/uQJ2leb1wl6/Q7bLsiF875nZGM9p+80loVDnmpJ98+pYzsdzWSm+6WfryKy6UVN7qlhpP3uPcjdrc10lC/KWtKomLzZ0aqWNH1/gi2dVaFhSqDR6MhJSg7xNWzqNOlUjBRejTblq2/0O1pSyjzi4qy9rLGc5S9OB12w7+Tjio/e79C3D1Em0Ysfh5OKne7LmrSXT7ECpRaZIq3i4czDRml2Z59PNFakOq8c8Hx1tNOfPsuJsuILmUm36+7TjGLfvZXlFcf2KpNo10oeI0jXtPbcpNwpcOcuvXd+5V0LVt5l9zbY23Us6dPqUNuR6KyUllh7kWnZLkSfYY1eCJcbYhTeFqyJXvKlbh/hx8tTl10GSpLV6Isa9ajFZckRobbp/lWnU0vwq6i3szl2yl9MFlZeH3u7rW6u+GdyzexFzoRWsr/YgXW1pSXuRfmiLb7clHRrPnyOjt/De7+d+S0IO1dgLf3Y6vGfLzOSpzWop4jDyeRbEmzvYVEt1avoTlTfPQ17G2VGjHC4vi+pNq5LowduYxVakc7UNivrwWCNSslzLF0zRc6JtnHHqWRqPZMi1dmrikRJ2coS3oycXyxxMrfbCziUX2fIkO7jN4RU3B7GiPix0exa7H8X1KbULhb8f618S81+Y7Szu4VYqcJKUXzX6PozzWrQTRhs+/q2s96D05xfwyXdfuaaeIlF2lqjzsTw2nWTlS5Zduj/Xx279z1YFdsjakLinvw48JRfGL6P7lib001dHz04ShJxkrNAAHSIAAAIW09owoQc5vyXOT6Ik1aiinJvCSbfkjy/b21pXNRv8q0iui+5RXreHHTc38PwTxM9dIrf9GO2Nq1LqeZPCXBLgka7aglxWTO3t8G9NLizy27u8j6huMY5IKy9DbC2iw7J8tTTVvcLEeJYWN5ve61iWM4fNEouMnYzz8SMcxphBxN1OuTnTUuBCnZLOcaouyNbFCqRl5iRGWeRz/iKg9JpcNH5Mv4lNt+5lGHwbyeU+3mkKlsupZhrqqrHPWtXD1Ly2rZOQo3L3mmXFtcdzMpHrVaNzqaCjneWN7GMtJ6fMgLaM3VlGUIp44qKWFnRpoxtrlNaEiKT1/wCyx3ex53hqLba6WNMa03PPJPTyL2hWytStg0jJVs8CyPKV1FnW2xY1JpnK7eq71VdEsfXUvVVOWvamZt92vqxUlpYswlK0m+xYWMlgmVKbcWk1lprXVEGyRb04oriSrOzOMtIVKNSSkk5p/E1lNPmslxbXUpyw1F+Swy4Vop1FJxjKCWMPOrzyx/JncWDlJSTjBL4YxjhL04jw2cliYSleS1tv/upc2S91LmS4wRz9vQqRaftNOGFHBZUrlrizXGXdHk1aWt07k2UkQqkEpNrnx+RhVuNcp6Ll3IiqvlzOSmupKnRfQluWDCUjSsswqTlprhc+5xyLFT1JKRE2jbuUGk8ZN1OZtlHKD1R1NwkmVEtm1HT3ZSg8afD72PMo61F0p8MHZ008YfIrNsUIuL0+ZTOkst0aKFdxnb8Gu2rxnFdTCvT6kezpZjvRfvLjjg8cMryJ9D345fEirvcsbUW7dCJs68nbVlOPDhKPJrmj02zuY1IRnB5jJZR5jew0L3wFtTDlbyfHMoef5l+/yZdhquWWR7Mx8Twyq0vGXmjv6r2/HwO5AB6J84AAAU/iqTVpVa6a+W8snnFvT5nqO2Lb2tGpT5yi0vPivqjy6i3F4ejWj80ebjVzJ+h9JwWS8CcVve/1XsWUI6FZWb1eeGnmyypT0NVS1TTS4cTHKLkejTkovUbOuoOUabgnw97Hvep1H4Wnx3Y564WfU4+lSdJp4zqkv+jpLXaUZe62lLmjRh2ksstzJjabupU27ddSTGjjXJg31/vzJCga6lDGuDTa2xhUlfUh1aGeeDGUI8GyVGJhOmuJG3YuU+hy20vDkNZQ0er4nNz3qbalo0ejyaemVkqdo7KjUzlamepST1ierhsa1y1NjlLe+wWlC+7lVf7KnTbwsoiU6zRRdrc9F04VFeJ1lvVy9WWMZI42netcyVS2l3JqojLUwsnsdFcVehzN1UxN9yZ+P0wVd1Uy/nxEndaEqFPI7MutmV+WC+g8nG29ZrgWttft8zikVV8O27o6enJIz9ouRU29bPFk+m8miM7nmzp5dza5aGGGGjCpTzo1lErkFEzhFZJNFrmiLGJsjMkmQmrkvcjyZouUsHzf6o1zOtkIpp7kSNTD49iaqkWksvPYhVqfM+Um0+hXsaXFSRZyyyvvItpon2lZPR8TC/t95aE3qrooi8s7M5e1vHRm9N6L4r9Giy2fcKUW1158exW3MnRm1KCmujyn8mjRZ38VVahFqMsaN5afmZs2W1z0XDxL2XRa97FvdRymVdGvKjVjUjxjJS9OK+a0LatB4Km7ghLcnRaas9j162rqcYyjqpJSXk1lG85rwPdb9rFc4OUPknlfRo6U9aEs0Uz4/EUvCqyh2bQABMpPjR594r2Vu1HKKw3r2fbzPQiDtKyjVi4yX3T6oprU88bGzA4l4erm6dTy2lVwTKNTK0Zu2vsyVOWJfKS4NFXGs4vX+DyZRcWfWxcasc0SfdxbhlatNPHVdiurRUZRiuKS3n/qerS8uBPo3KZtlShJ5cU3/fE41fUjGTp6MkbK23jEJvPctbnaUcaanM3tonOLpqMF+bV8W+OvIkbOaW9KSkmlLd6NrG7p6l0ak1ymWphqUudL5E2htpOW61jXBY+0TOXtLbMt58c5LeFTBKFR21FfDwi+QkyxnQez3iH7XLJNOrgsUkVOLRhVs482VtxsaE9FFPq+HoxtG5ct7GcpZWPr9ETNlbSzTWYlbcW7MvXiwjmTOfuvCzXwP5P7lHf2VSj8UWu/L14HoN1taGGk45xw4/LK5nOX9jUuM67se/2K5Rhe0TZh8VWetXReu5yv4lh3p0Fv4Upw1k5Sfm0vREW92NTz8LS7P/6ycy2NSrwloiHs+9y8p6r+8lrZPDyc5KwdOW9GXDl1XNF3a1U0uj1ISSTuSkk1odPbTWNCZCoUttX0LGhNNHYyPLq07O7LKE35m2PkVNa6dNZjrrjD/UxheOpJRcsLnyWS1VUZvAk9ehdwSN0qSxwTfoRaFaD0TS+mX17kyK7miOpjqXT1IdWOCLWWUTLurGPfrjl3IkK8XqnlEZdi6ne2ZI0J4WGZQkjbVSIqaIPQvXMrmypVaWV8iRZ7VhPTVNcmR1h6Mrr/AGZl71OWJfQZpR1R3w6c9JadmZbcuIt5S3oshWVonmcU0njCfLH8kWF84twqRSxo8dS52ZL/AA+GmdPIpXPLUtalTjlS+DuSqjyinvKeuSzrViruqmp2buTopo63/wDPZ+5UX+tP1j/B2kWcR4GTUJP+qWfktP2Z2lE9HD+RHznE9cRN+ptABoPOAAAIG0bGNWLjJafVd0cDtnY06LbxmPX7nppHr26kmmsplFWip69Tfg8dPDvuux5Eljhp+htp12uJ121vCKlmVJ7r6Ph/By19s6rReJwfnxXqebUpShuv0fT0MXRxCtF69nuZwuU/M2Rn3KucxGp3K7l7ol1Tqo1VLhN4K1VX1Moza7kszK/ASdy0pJ8jaquOJWQvGuRs/HLmjuYrlRk+hncWLblKNRpyTi1jinxRKtqe7BQxjTDefXHQjfj0fHtDohynJQqSSTX4JkbeMeEUj5UrJcCsrXsnzI87lsZ10Jxw8nrJkuvddypupozqVsmuFpOo8Ri2+yyVttmuEVBFVdS44NOzKklPdabT+j+zOzsfBVSetR7q6czpLPwxSprSK8+ZojRlJWsZK3FKFPRO79P2cTTlu4XP+9Cfb3PIuNt7B03oLzX7o52a+Xf7lU6bi7EqdaniI5l/wtN5czRXpp8NCFGu1jPqTKVdMruHBx1RqqVKkkscFwNv46pCOrZv0SNdSSaOr4kbp6W0JNCi6kd7e1az5PoRNm1XKUoZ46478GaYqUc7kms+hqoWDT3lJp9eZ27voRyea7+GmxcVFKL3ZcUaajeciEZ85uWdNdT7GL5ljZCKtuYymzZSq5MJRNSqKL4HLksqaNs46vKTMVpp9DN1U9ckOvVwcbOwjczrVkiBjflhfN9hObkyRaU22oQWW36/wFruWvkR2nhWmt144JpL5L+TqqSKnYtn7OnGPq+r5st4I9akmoq58fipqdRtGYALTKAAAAAAfGjTXtoyWGsm8A6nY5278LUZ8Ytd4vGClu/BH9FT/kv3R3h8wZ5YalLobqXEsTT2l9dTzGp4Urp4W6++dPqRK+wriHGm3/t979D1hxRi6SKngo9GzZHjlZeZJ/U8hlb1I8YSXmma3Nrkz12dpF8jRPZlN8YRfyRW8E+j+xojxyP/AKh9/Y8mc2fN2b4J/I9ZWy6f/rh/xRthYxX5UvJYOf0UurJPjkOkPv7HlVLZNefCnL5rH6lra+Dq0sbzUfVs9FjQS5G1RLY4KK3bZmq8brPyJL7/AJORsPBlKOs25P0Rf22zoQWIxS8kWGBg0QowhsjzK2Lq1XzybIzoowlAltGEoE7FSkV1ejk5fbWxFLMo6S+j8ztJQIte3yVTpqSszXh8TKnLNFnldzbyg8NNGhNo9A2jsxSWqyc5ebFxw0POqUXE+joY+FRc2jKqncs+zrZ4/QzqWEly9NSPKm1xRS0a04y2N0btI2wvkQHBmpnTrhFlz+MWOJ8hfdSmUj6pg54US5ncohTrkT2jNimw0djCxsUpctDFtc3n9CXabLrVvhg8dXojpdl+DksOq97twX8lkKUpeVGetjKNHzPXstzmbGyqVnuwjp15I7rYHh+NFZesnxf7IubPZ8ILEYpLsTYwN9LDqOr1Z8/i+JSq8sdEY06eDYj6DUeU3cAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAfMH0AGLiYSgbT5gWO3Is6GSHX2cnyLbB8wRcUyyNWS2OarbFItTYj6ZOv3T5uIqdCLL1jaiOJn4dT/Iv0/Q0S8LJ8n6s7z2aHs0R/poFy4lVWzOAXhFPk/U30/B0Xxz6ndbo3QsLDsHxSv/AJHIUPB1FcU382Wtp4fo09VTjnrjL9WXeBgsVGC2RRUxtaejk/qR6dslyNygZYPpZYzOTPiR9AOkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
        lettuce: "https://i.pinimg.com/736x/28/f2/b2/28f2b26dc6d06373785e1a920177541d.jpg",
        onions: "https://thumbs.dreamstime.com/b/red-onion-slice-side-view-isolated-white-background-clipping-path-onion-slice-isolated-120775401.jpg",
        pickles: "https://media.istockphoto.com/photos/green-pickles-isolated-picture-id1214053645?k=20&m=1214053645&s=612x612&w=0&h=EiUCPk6-aJYXuzblrw0qKRJgVzPOu-lYB4_7wzI9eYU="
    },
    cheese: {
        normalCheese: "https://www.nicepng.com/png/detail/238-2384209_cheese-slice-png.png",
        otherCheese: "data:image/jpeg;base64,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"
    },
    sauce: {
        ketchup: "https://atlas-content-cdn.pixelsquid.com/stock-images/ketchup-sauce-cup-VayzrBD-600.jpg",
        bbq: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwB6K3ebp8ZLzTO_pSwX_-IlM-nhWvOuAhA&usqp=CAU",
        garlic: "https://media.istockphoto.com/photos/small-pot-of-garlic-mayonnaise-isolated-detail-from-above-picture-id475281732?k=20&m=475281732&s=612x612&w=0&h=L5aoj6OgfHNgfAKCv9OmGeIHH8pIGw9dB4rFd9dbJHc="
    }
}

const prices = {
    buns: {
        whiteBuns: 5,
        blackBuns: 5
    },
    patties: {
        beefPatty: 15,
        otherPatty: 20,
        somePatty: 25
    },
    vegetables: {
        tomatoes: 5,
        lettuce: 7,
        onions: 4,
        pickles: 10
    },
    cheese: {
        normalCheese: 10,
        otherCheese: 10
    },
    sauce: {
        ketchup: 5,
        bbq: 5,
        garlic: 5
    }
}

function App() {
    const [section, setSection] = useState("")
    let [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(1);
    const [topBunSrc, setTopBunSrc] = useState("");
    const [bottomBunSrc, setBottomBunSrc] = useState("");
    const [components, setComponents] = useState([]);

    const BeefPatty = () => <img className="image" src={srcs.patties.beefPatty} alt=""/>;
    const OtherPatty = () => <img className="image" src={srcs.patties.otherPatty} alt=""/>;
    const SomePatty = () => <img className="image" src={srcs.patties.somePatty} alt=""/>;
    const Tomatoes = () => <img className="image" src={srcs.vegetables.tomatoes} alt=""/>;
    const Lettuce = () => <img className="image" src={srcs.vegetables.lettuce} alt=""/>;
    const Onions = () => <img className="image" src={srcs.vegetables.onions} alt=""/>;
    const Pickles = () => <img className="image" src={srcs.vegetables.pickles} alt=""/>;
    const NormalCheese = () => <img className="image" src={srcs.cheese.normalCheese} alt=""/>;
    const OtherCheese = () => <img className="image" src={srcs.cheese.otherCheese} alt=""/>;
    const Ketchup = () => <img className="image" src={srcs.sauce.ketchup} alt=""/>;
    const Bbq = () => <img className="image" src={srcs.sauce.bbq} alt=""/>;
    const Garlic = () => <img className="image" src={srcs.sauce.garlic} alt=""/>;

    const handleSections = (component) => {
        setSection(component)
    }

     const handleSetBunsSrc = (top, bottom) => {
        setTopBunSrc(top);
        setBottomBunSrc(bottom);
        if(price === 0){
            setPrice(5)
        }
        else{
            setPrice(price)
        }
    }

    const renderImage = (component, prices) => {
        if (topBunSrc === "" && bottomBunSrc === "") {
            return ""
        } else {
            const newComponents = [...components, component];
            setComponents(newComponents);
            setPrice(price + prices)
        }
    }

    const handleSetAdding = () => {
        setAmount(amount + 1)
    }
    const handleSetSub = () => {
        if(amount > 1){
            setAmount(amount - 1)
        }
    }

    function Buns() {
        return (
            <div>
                <div className="ingredients">
                    <div className="square">
                        <img className="images" src={srcs.buns.whiteBuns.whiteBun} alt="bun"/>
                        <span>White Bun</span> <span> {prices.buns.whiteBuns}</span> <span onClick={()=> handleSetBunsSrc(srcs.buns.whiteBuns.topBun, srcs.buns.whiteBuns.bottomBun)}> + </span>
                    </div>
                    <div className="square">
                        <img className="images" src={srcs.buns.blackBuns.blackBun} alt="bun"/>
                        <span>Black Bun</span> <span> {prices.buns.blackBuns}</span> <span onClick={()=> handleSetBunsSrc(srcs.buns.blackBuns.topBun, srcs.buns.blackBuns.bottomBun)}> + </span>
                    </div>
                </div>
            </div>
        )
    }

    function Patties() {
        return (
            <div>
                <div className="ingredients">
                    <div className="square">
                        <img className="images" src={srcs.patties.beefPatty} alt="bun"/>
                        <span>Beef Patty</span> <span> {prices.patties.beefPatty}</span> <span
                        onClick={()=>
                        renderImage(BeefPatty, prices.patties.beefPatty)}> + </span>
                    </div>
                    <div className="square">
                        <img className="images" src={srcs.patties.otherPatty} alt="bun"/>
                        <span>Other Patty</span> <span> {prices.patties.otherPatty}</span> <span
                        onClick={()=>
                            renderImage(OtherPatty)}> + </span>
                    </div>
                    <div className="square">
                        <img className="images" src={srcs.patties.somePatty} alt="bun"/>
                        <span>Some Patty</span> <span> {prices.patties.somePatty}</span> <span
                        onClick={()=>
                            renderImage(SomePatty)}> + </span>
                    </div>
                    </div>
            </div>
        )
    }

    function Vegetables() {
        return (
        <div>
            <div className="ingredients">
                <div className="square">
                    <img className="images" src={srcs.vegetables.tomatoes} alt="bun"/>
                    <span>Tomato</span> <span> {prices.vegetables.tomatoes}</span> <span
                    onClick={()=>
                        renderImage(Tomatoes)}> + </span>
                </div>
                <div className="square">
                    <img className="images" src={srcs.vegetables.lettuce} alt="bun"/>
                    <span>Lettuce</span> <span> {prices.vegetables.lettuce}</span> <span
                    onClick={()=>
                        renderImage(Lettuce)}> + </span>
                </div>
                <div className="square">
                    <img className="images" src={srcs.vegetables.onions} alt="bun"/>
                    <span>Onions</span> <span> {prices.vegetables.onions}</span> <span
                    onClick={()=>
                        renderImage(Onions)}> + </span>
                </div>
                <div className="square">
                    <img className="images" src={srcs.vegetables.pickles} alt="bun"/>
                    <span>Pickles</span> <span> {prices.vegetables.pickles}</span> <span
                    onClick={()=>
                        renderImage(Pickles)}> + </span>
                </div>
            </div>
        </div>
        )
    }

    function Cheese() {
        return (
            <div>
                <div className="ingredients">
                    <div className="square">
                        <img className="images" src={srcs.cheese.normalCheese} alt="bun"/>
                        <span>Normal Cheese</span> <span> {prices.cheese.normalCheese}</span> <span
                        onClick={()=>
                            renderImage(NormalCheese)}> + </span>
                    </div>
                    <div className="square">
                        <img className="images" src={srcs.cheese.otherCheese} alt="bun"/>
                        <span>Other Cheese</span> <span> {prices.cheese.otherCheese}</span> <span
                        onClick={()=>
                            renderImage(OtherCheese)}> + </span>
                    </div>
                </div>
            </div>
        )
    }

    function Sauce() {
        return (
            <div>
                <div className="ingredients">
                    <div className="square">
                        <img className="images" src={srcs.sauce.ketchup} alt="bun"/>
                        <span>Ketchup</span> <span> {prices.sauce.ketchup}</span> <span
                        onClick={()=>
                            renderImage(Ketchup)}> + </span>
                    </div>
                    <div className="square">
                        <img className="images" src={srcs.sauce.bbq} alt="bun"/>
                        <span>Bbq</span> <span> {prices.sauce.bbq}</span> <span
                        onClick={()=>
                            renderImage(Bbq)}> + </span>
                    </div>
                    <div className="square">
                        <img className="images" src={srcs.sauce.garlic} alt="bun"/>
                        <span>Garlic</span> <span> {prices.sauce.garlic}</span> <span
                        onClick={()=>
                            renderImage(Garlic)}> + </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <h2 className="title"> Build Your Burger </h2>
            </div>
            <div className="section">
                <div onClick={() => handleSections(Buns)} className="sections">
                    <img className="img bun" src={srcs.buns.whiteBuns.whiteBun} alt="bun"/>
                    <div className="text">Bun</div>
                </div>
                <div onClick={() => handleSections(Patties)} className="sections">
                    <img className="img patty" src={srcs.patties.beefPatty} alt="patty"/>
                    <div className="text">Patty</div>
                </div>
                <div onClick={() => handleSections(Vegetables)} className="sections">
                    <img className="img vegetables" src={srcs.vegetables.tomatoes} alt="vegetables"/>
                    <div className="text">Vegetables</div>
                </div>
                <div onClick={() => handleSections(Cheese)} className="sections">
                    <img className="img cheese" src={srcs.cheese.normalCheese} alt="cheese"/>
                    <div className="text">Cheese</div>
                </div>
                <div onClick={() => handleSections(Sauce)} className="sections">
                    <img className="img sauce" src={srcs.sauce.ketchup} alt="sauce"/>
                    <div className="text">Sauce</div>
                </div>
            </div>
            <br/>
            <div className="main">
                <div className="left">
                    <p>Ingredients:</p>
                    {section}
                </div>
                <div className="middle">
                    <div className="buns">
                        <div className="top-bun">
                            <img className="imag" src={topBunSrc} alt=""/>
                        </div>
                        <div className="ing">
                            {components.length !== 0 &&
                            components.map((Image, i) => <Image key={i}/>)}
                        </div>
                        <div className="bottom-bun">
                            <img className="imag" src={bottomBunSrc} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <p>My Burger</p>
                    <p>Price: <span> {price} </span> <span>lei</span></p>
                    <p>Amount: <span onClick={handleSetSub}>-</span> <span>{amount}</span> <span onClick={handleSetAdding} >+</span></p>
                    <input type="submit" value="Buy"/>
                </div>
            </div>
        </div>
    )
}

export default App;
