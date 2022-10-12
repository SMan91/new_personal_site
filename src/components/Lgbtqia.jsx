import React from "react";
import transflag from "../images/transflag.jpg";
import prideflag from "../images/prideflag.jpg";

const Lgbtqia = () => {
  return (
    <div class="container">
      <h1 class="text-center mt-3"> LGBTQIA+</h1>
      <p class="shadow-sm p-3 m-5">
        I am an active member of the LGBTQIA+ community. I identify as gender
        fluid and I am currently undergoing a gender transition. I ask people to
        please match my pronouns with my presentation which may not always be
        masculine or feminine. Also, they/them pronouns are valid regardless of
        my presentation. I am a diverse and unique individual. I hope that my
        personal qualities can help add something great to your team.
      </p>
      <img
        src={prideflag}
        class="img-fluid rounded float-start mb-5"
        alt="Pride Flag"
      />
      <img
        src={transflag}
        class="img-fluid rounded float-end m-2"
        alt="Transgender Flag"
      />
    </div>
  );
};

export default Lgbtqia;
