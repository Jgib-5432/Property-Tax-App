# App Notes

## General

Example Entities:

- Tooele City (Truth in Taxation)
- San Juan County ()
- Uintah County (Data Missing)
- emery county (Centrally Assessed)
- Box Elder (Residential Shift)
- Washington county flood control, Washington

Color Palette:

- green #196b24
- lite green #8ca890
- purple #8b4aa8
- lite purple #bc9ddf
- tan #bcb4a5
- gray #5e5a52
- lite gray #cccccc
- black #000000

## Resources

Markdown Math notation https://www.upyesp.org/posts/makrdown-vscode-math-notation/

Recharts https://recharts.org/en-US

React Selector https://react-select.com/home

Utah Assosiation of Special Districts: https://www.uasd.org/about-us

## Current Development Checklist

- Docker

- Analysis:

  - Resdiential Tilt: Why taxes are going up on homeowners
  - How has tax revenue grown in real terms? (adjust for population and inflation)
  - Inflation Adjustment: needed revision or tax hikes in disguise?
    - 5 year rolling average
    - capped growth

- To Do:

  - Instructions/ User tutorial?

  - Convert homepage into story blocks

  - structure edits

    - convert graph descriptions in to tooltext (pop-up on hover)
    - entity profile covert to 4-up graphs (spotlight one on click? With the other three along the bottom?)
    - add individual liability graph into entity profile page

  - Text edits

    - Put $ in chart titles
    - label axis in double axis graphs
    - capitilze entity names
    - Change 'Counterfactual' to 'Simulation'
    - add hover effect to buttons?

  - Draft Deployment

    - Talk to Conn for putting Vesta on Legislative servers
    - Vet app with Tax, LRGC, and GOPB before launch

## Additional Development Checklist

- design for vertical view (mobile views?)

- Integrate personal property into analysis calculations

- Add to Map ability to switch between tax entities and tax areas

- Color map shapes by Tax Rate, Total Property, Entity Revenue

- Link between Map and profiles

  - click on taxing entity brings up profile
  - button on profile to bring up map

- Link sidebar titles in glossary page to content

  - entity selector: group entities by entity type
  - 'select all' option for various selectors?

- add additional general information to home page:

  - residential exemption
  - circuit breaker
  - summary quantity information

- Reformat Home Page accordian

- Profile page

  - proposed vs certified rates in profile charts

- Statewide Comp Page

  - 'Sort by' Selector

- Add the ability to take an address and display total tax rates and revenue from each tax entity relevant to that address
  - Talk to ARCGIS and/ or Lacey

## Cuts

<!---
The structure of Truth in Taxation begs an obvious question: if the system enforces flat revenues year-to-year, how is a taxing entity supposed to maintain services in the face of rising costs? After all, governments are not immune to inflation or other economic trends. Moreover, what if a taxing entity wants to increase the quality or quantity of services provided to its residents, such as when a school district needs to hire more teachers as the population of school-age children grows? How are such services meant to be funded? Enforced flat revenues by themselves cannot meet these needs.

Truth in Taxation contains a process for a taxing entity to raise the level of revenues it collects. In other words, under Truth in Taxation, taxing entities retain the ability to raise taxes. In order to do that, an entity must send a notification to residents of the proposed tax increase, how much that tax increase would cost the taxpayer, and how that costs compare to the tax liability from the prior year. Following the notification, the entity must hold a public meeting wherein residents are afforded the opportunity to provide comment on the proposal. After that, then and only then can a taxing entity take action to officially raise the level of revenue that they collect.

-->
