import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import ServiceCard from "../ServiceCard";
import { ArrowRight } from "lucide-react";
import Head from "next/head";



const ServicesSection: React.FC = () => (
   <section className="bg-[#f0f8ff] py-24 px-6 ">
    <Head>
      <title>Kopila Fertility & Womens Clinic, Damak-6, Jhapa, Nepal</title>
      <meta name="description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
      <meta name="keywords" content="jhapa gyne clinic, kopila clinic, damak gyne clinic, women clinic damak, jhapa clinic" />
      <meta name="author" content="PRACAS" />
      <meta property="og:url" content="https://kopilaclinic.com.np" />
      <meta property="og:title" content="Kopila Fertility & Womens Clinic | Damak, Jhapa, Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
      <meta property="og:image" content="https://kopilaclinic.com.np/og/images.jpg" />
      <meta property="og:image:alt" content="Kopila Fertility & Womens Clinic logo or clinic image" />
    </Head>
          <div className="max-w-7xl mx-auto text-center"><AnimateOnScroll>
            <p className="text-sm text-secondary font-semibold mb-4 slide-up"><Image src="/icon-star.svg" alt="star" width={18} height={18} className="inline-block" />
              OUR SERVICES</p> </AnimateOnScroll>
            <h2 className="text-2xl lg:text-5xl font-extrabold text-secondary slide-side">
              Fertility & Gyne <span className="text-primary">Services for You.</span>
            </h2> <AnimateOnScroll>
              <p className="text-gray-500 mt-8 slide-up">
                Dedication of Providing Professional Healthcare Services.
              </p></AnimateOnScroll>

            <div className="relative z-10 container mx-auto mt-12 text-left">
              {/* Services Grid */}
              <AnimateOnScroll>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 justify-items-center slide-up">
                  <ServiceCard
                    title="Ovulation Induction"
                    description="A fertility treatment that uses medications to stimulate the ovaries to produce and release eggs, increasing the chances of conception."
                    link="/services"
                  />
                  <ServiceCard
                    title="Intrauterine Insemination (IUI)"
                    description="A fertility procedure where specially prepared sperm is directly placed into the uterus to enhance the likelihood of fertilization."
                    link="/services"
                  />
                  <ServiceCard
                    title="In Vitro Fertilisation (IVF)"
                    description="A process where eggs and sperm are combined in a laboratory to create embryos, which are then transferred to the uterus for potential pregnancy."
                    link="/services"
                  />
                  <ServiceCard
                    title="Antenatal Check Up"
                    description="Routine medical care provided during pregnancy to monitor the health of the mother and the developing baby."
                    link="/services"
                  />
                </div>
              </AnimateOnScroll>
            </div> <AnimateOnScroll>
              <p className="mt-12 text-sm text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                We believe in using the latest technology and techniques to <br /> ensure the best outcomes for our patients.
              </p> </AnimateOnScroll>
            <AnimateOnScroll>
              <Link href="/services">
  <div className="group flex justify-center items-center mt-4">
    <button className="bg-secondary text-sm relative overflow-hidden text-white px-4 py-3 rounded-full bg-gradient-to-r from-primary to-pink-600 bg-[length:0%_100%] bg-left bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_100%] text-lg flex items-center shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8 mx-auto lg:mx-0">
      View All Services
      <ArrowRight className="ml-2 h-7 w-7 bg-white text-blue-600 rounded-full p-1 -rotate-60 transform transition-transform duration-300 group-hover:rotate-5" />
    </button>
  </div>
</Link>

            </AnimateOnScroll>
          </div>
        </section>
);

export default ServicesSection;