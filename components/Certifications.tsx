"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";

export function Certifications() {
  return (
    <div className="py-20 " id="certifications">
      <h1 className="heading ">
        Some of My <span className="text-purple">Certificates</span>
      </h1>
      <div className="grid  pt-20 grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#FCCB06]">
              Flutter & Dart - The Complete Guide [2024 Edition]
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Completed on Udmey
            </p>
          </div>
          <Image
            src="/flutter.png"
            width={500}
            height={500}
            alt="flutter certificate"
            className="absolute -right-4 mt-2  lg: grayscale filter -bottom-10 object-contain rounded-2xl "
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#EFF1F3]">
            Certificates Earned in College :
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Certificates of Leardership , Certificates of Participation ,
            Certificates of Appreciation , Competition Winner Certificate
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg- min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-3xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Honeywell Certificate
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#ffff]">
              Completed in St.Aloysius College[Deemed to be Univeristy].
            </p>

            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[neutral-200]">
              Explored Essential Cybersecurity Concepts, Mastered Firewall
              Configuration, Implemented PaloAlto's Official Firewall Solution,
              and Navigated Kali Linux
            </p>
          </div>
          <Image
            src="/flutter.png"
            width={700}
            height={700}
            alt="linear demo image"
            className="absolute  md:-right-[40%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
