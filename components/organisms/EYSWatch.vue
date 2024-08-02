<template>
  <div class="relative overflow-x-clip">
    <NuxtImg src="/img/pop/bottom-ring.webp" loading="lazy"
      class="absolute w-[19vw] md:w-[95px] h-[19vw] md:h-[95px] left-[-4vw] md:left-[-20px] top-[-15vw] md:top-[-75px]"
      alt="bottom-ring" />
    <div class="triangle ml-[32vw] md:ml-[160px] mt-[3vw] md:mt-[15px]"></div>
    <div class="relative overflow-x-clip" :style="{ background: `linear-gradient(to right, #FEEACE, #FFEEE3)` }">
      <div class="p-[5.4vw] md:p-[27px] pt-[1vw] md:pt-[5px]">
        <div class="flex justify-center items-end mt-[2vw] md:mt-[10px]">
          <NuxtImg src="/img/backslash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]"
            alt="backslash" />
          <h3
            class="text-[4.2vw] md:text-[21px] leading-[6vw] md:leading-[30px] text-center mx-[5vw] md:mx-[25px] font-medium">
            具体的なクラスを<br>覗いてみよう！
          </h3>
          <NuxtImg src="/img/slash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]" alt="slash" />
        </div>
        <Swiper class="watch-swiper" :slides-per-view="2.1" :effect="'creative'" :creative-effect="{
          prev: {
            translate: ['-100%', 0, 0],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }">
          <SwiperSlide>
            <div class="w-[40vw] md:w-[200px]">
              <MoleculesWatchBox text="残席わずか：2席" color="#FF8822" imgUrl="/img/pop/lesson1.webp" event="EYS air"
                time="関東/水曜 11:00〜" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="w-[40vw] md:w-[200px]">
              <MoleculesWatchBox text="申込受付中" color="#05B0FD" imgUrl="/img/pop/lesson2.webp" event="EYS マネーアカデ..."
                time="関西/月曜 19:00〜" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="w-[40vw] md:w-[200px]">
              <MoleculesWatchBox text="申込受付中" color="#05B0FD" imgUrl="/img/pop/lesson3.webp" event="EYS air"
                time="関東/火曜 12:00〜" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
.watch-swiper {
  margin-top: 2vw;
}

.triangle {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 4vw 8vw 4vw;
  border-color: transparent transparent #FEEACE transparent;
  transform: rotate(0deg);
}

@media (min-width: 500px) {
  .watch-swiper {
    margin-top: 10px;
  }

  .triangle {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 20px 35px 20px;
    border-color: transparent transparent #FEEACE transparent;
    transform: rotate(0deg);
  }
}
</style>