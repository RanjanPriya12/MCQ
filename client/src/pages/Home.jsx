import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://static.javatpoint.com/blog/images/mcqs-preparation-2021.png" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1LY9NLq5gtxTXsFyWEjQu5KZ-w-NIazpmg&usqp=CAU" },
  { url: "https://cloudacademy.com/wp-content/uploads/2019/08/How-to-create-multi-choice-assessments-thumb@3x.png" }
];

export const Home = () => {
  return (
    <div>
      <SimpleImageSlider
        width="99%"
        margin="auto"
        height="80vh"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}