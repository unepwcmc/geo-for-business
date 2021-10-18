<template>
  <div>
    <StickyBar triggerElement="#gsap-trigger-sticky">
      <LayoutTopbar :briefUrl="briefs[1].reportUrl" />
    </StickyBar>
    <PageHero id="gsap-trigger-sticky" />
    <ContentBrief :briefUrl="briefs[1].reportUrl" />
    <ContentAbout />
    <CarouselBriefs :carousel-slides="briefs" />
    <CarouselMessages />
    <CardsCommittee />
  </div>
</template>

<script>
export default {
  data () {
    return {
      briefs: [
        {
          image: 'building',
          reportUrl: 'https://wedocs.unep.org/bitstream/handle/20.500.11822/32630/G4B.pdf?sequence=1&isAllowed=y',
          text: "An overarching introductory brief which covers the call from <a href'https://www.unenvironment.org/resources/global-environment-outlook-6' title='View the Global Environment Outlook 6' target='_blank'>GEO-6</a> for transformational change – what will businesses need to do in response to the science?",
          title: 'Adapt to Survive: Business transformation in a time of uncertainty',
        },
        {
          reportUrl: 'https://wedocs.unep.org/bitstream/handle/20.500.11822/36830/RBMLCE.pdf?sequence=1&isAllowed=y',
          text: 'Addressing resource efficiency, waste and supply chains in a cross-cutting brief which explores circular economy as a means to achieve the SDGs, and the implications for business. This report links to the analysis from the Ellen McArthur Foundation.',
          title: 'The Role of Business in Moving from Linear to Circular economies',
          
        },
        {
          reportUrl: 'https://wedocs.unep.org/bitstream/handle/20.500.11822/36755/GEO4B3.pdf',
          text: 'Producing environmentally-sustainable food, in the right place and at the right time to meet poverty and food-related SDGs. This is a sector /system specific brief which addresses food and agriculture and links to the recent analysis in the World Resources Institute ‘food gap’ report.',
          title: 'The Role of Business in Transforming Food Systems:',
        },
        {
          reportUrl: undefined,
          text: 'Sector/system specific brief which addresses climate-proofing current and future infrastructure investments. Focusing on the scope and scale of projected infrastructure investment to 2050, including the questions over how this can be delivered in line with the environmental dimension of the SDGs and a move towards nature-based solutions. This brief links to the on-going work of GEO for Cities.',
          title: 'Future proofing infrastructure to address the climate and biodiversity crises:',
        },
        {
          reportUrl: undefined,
          text: 'The brief will address how financial services can be realigned to play a transformational role in achieving the environmental dimensions of the SDGs and related international agreements. It aims to inform, challenge and enable action on global environmental challenges by the financial sector.',
          title: 'Changing Finance to Catalyze Transformation: How financial institutions can accelerate the transition to an environmentally sustainable economy:',
        }
      ]
    }
  }
}
</script>
