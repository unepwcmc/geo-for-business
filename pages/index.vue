<template>
  <div>
    <StickyBar triggerElement="#gsap-trigger-sticky">
      <LayoutTopbar :briefUrl="briefs[0].reportUrl" />
    </StickyBar>
    <PageHero id="gsap-trigger-sticky" />
    <ContentBrief :briefUrl="briefs[0].reportUrl" />
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
          reportUrl: undefined,
          text: 'Addressing resource efficiency, waste and supply chains in a cross-cutting brief which explores circular economy as a means to achieve the SDGs, and the implications for business. This report links to the analysis from the Ellen McArthur Foundation.',
          title: 'Moving from Linear to Circular Economies and What This Means for Business:',
          
        },
        {
          reportUrl: undefined,
          text: 'Producing environmentally-sustainable food, in the right place and at the right time to meet poverty and food-related SDGs. This is a sector /system specific brief which addresses food and agriculture and links to the recent analysis in the World Resources Institute ‘food gap’ report.',
          title: 'The Changing Role of Business in Transforming Food Systems:',
        },
        {
          reportUrl: undefined,
          text: 'A sector/system specific brief which addresses the transformation of how we produce and consume energy to meet climate challenges. This brief links to the recent analysis in UNEP’s Emissions Gap Report.',
          title: 'How Business Can Manage the Transformation Towards Deep Decarbonization and Full Electrification:',
        },
        {
          reportUrl: undefined,
          text: 'Sector/system specific brief which addresses climate-proofing current and future infrastructure investments. Focusing on the scope and scale of projected infrastructure investment to 2050, including the questions over how this can be delivered in line with the environmental dimension of the SDGs and a move towards nature-based solutions. This brief links to the on-going work of GEO for Cities.',
          title: 'Future-proofing Infrastructure for Climate Resilience:',
        },
        {
          reportUrl: undefined,
          text: 'The brief will address how financial services can be realigned to play a transformational role in achieving the environmental dimensions of the SDGs and related international agreements. It aims to inform, challenge and enable action on global environmental challenges by the financial sector.',
          title: 'Changing Finance, Financing Change:',
        }
      ]
    }
  }
}
</script>
