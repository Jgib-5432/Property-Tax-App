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

## Minimum Viable Product Checklist

- General:

  - Resdiential Tilt: Why taxes are going up on homeowners
  - Inflation Adjustment: needed revision or tax hikes in disguise?
    - 5 year rolling average
    - capped growth

- To Do:

  - Instructions/ User tutorial?

  - Work up interative demostration of tax shift in response to changes in the resedential exemption

    - Example: Box Elder County?

    - Things to Do:

      - compute default analysis (55%)
      - Revise Sandbox
        - Set up graphs
      - write up methodology description and results
      - code interactive graphs to answer the questions
      - code analysis componenets to respond to dynamic residential exemption

    - Queststions to answer:
      - how much of a tax cut would residents get by increasing the residential exemption?
      - how much tax burden shifts onto commercial property?
      - how much of a cut would entities need to bear to keep commercial property whole?
      - how high does the exemption need to go to get back to a base year for example entity?

  - Convert homepage into issues of interest? (rate, revenue, value, share, comparisons)

  - Need others

    - Talk to Ben about public ed story

    - How do we tell the story? Why have taxes gone up?

      - Rates, revenue, values, share

    - Vet app with Tax, LRGC, and GOPB before launch

## Additional Development Checklist

- design for vertical view (mobile views?)

- Integrate personal property into analysis calculations

- Add to Map ability to switch between tax entities and tax areas

- Color map shapes by Tax Rate, Total Property, Entity Revenue

- Link between Map and profiles

  - click on taxing entity brings up profile
  - button on profile to bring up map

- Add entity Summary information to map page

- Link sidebar titles in home page to content

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

- Some estimates of tax liaiblity/ burden by tax area

## Cuts

<!---
The structure of Truth in Taxation begs an obvious question: if the system enforces flat revenues year-to-year, how is a taxing entity supposed to maintain services in the face of rising costs? After all, governments are not immune to inflation or other economic trends. Moreover, what if a taxing entity wants to increase the quality or quantity of services provided to its residents, such as when a school district needs to hire more teachers as the population of school-age children grows? How are such services meant to be funded? Enforced flat revenues by themselves cannot meet these needs.

Truth in Taxation contains a process for a taxing entity to raise the level of revenues it collects. In other words, under Truth in Taxation, taxing entities retain the ability to raise taxes. In order to do that, an entity must send a notification to residents of the proposed tax increase, how much that tax increase would cost the taxpayer, and how that costs compare to the tax liability from the prior year. Following the notification, the entity must hold a public meeting wherein residents are afforded the opportunity to provide comment on the proposal. After that, then and only then can a taxing entity take action to officially raise the level of revenue that they collect.

-->
