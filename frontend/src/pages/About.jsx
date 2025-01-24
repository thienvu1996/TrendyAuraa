import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About "} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p>
            {" "}
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <b className="text-gray-800">Out Misssion</b>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why "} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-400">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestia
          </p>
        </div>
        <div className="border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-400">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et
          </p>
        </div>
        <div className="border px-10  md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Service: </b>
          <p className="text-gray-400">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
