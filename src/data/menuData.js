import pumpkinSoup from "../assets/images/pumpkin-soup.jpg";
import bruschetta from "../assets/images/bruschetta.jpg";
import grilledSalmon from "../assets/images/grilled-salmon.jpg";
import tofuRisotto from "../assets/images/tofu-risotto.jpg";

const menuData = [
  {
    category: "Alkuruoat",
    items: [
      { 
        name: "Paahdettu kurpitsakeitto", 
        price: "8.90€", 
        diet: "Vegaaninen, Gluteeniton", 
        allergens: "Ei allergeeneja", 
        image: pumpkinSoup
      },
      { 
        name: "Bruschetta tomaatti-basilikalla", 
        price: "7.50€", 
        diet: "Kasvis", 
        allergens: "Gluteeni (vehnä)", 
        image: bruschetta
      },
    ],
  },
  {
    category: "Pääruoat",
    items: [
      { 
        name: "Grillattu lohi ja kauden kasvikset", 
        price: "18.90€", 
        diet: "Gluteeniton", 
        allergens: "Kala", 
        image: grilledSalmon
      },
      { 
        name: "Paistettu tofu ja yrttirisotto", 
        price: "16.50€", 
        diet: "Vegaaninen, Gluteeniton", 
        allergens: "Ei allergeeneja", 
        seasonal: true, 
        image: tofuRisotto
      },
    ],
  },
  {
    category: "Jälkiruoat",
    items: [
      { 
        name: "Suklaafondant ja vaniljajäätelö", 
        price: "9.90€", 
        diet: "", 
        allergens: "Maito, Gluteeni (vehnä), Kananmuna" 
      },
      { 
        name: "Marjainen chiavanukas", 
        price: "7.90€", 
        diet: "Vegaaninen, Gluteeniton", 
        allergens: "Ei allergeeneja" 
      },
    ],
  },
  {
    category: "Juomat",
    items: [
      { 
        name: "Talon valkoviini", 
        price: "6.50€/lasi", 
        diet: "", 
        allergens: "Sulfaatit" 
      },
      { 
        name: "Mansikka-smoothie", 
        price: "5.50€", 
        diet: "Vegaaninen", 
        allergens: "Ei allergeeneja" 
      },
    ],
  },
];

export default menuData;
