---
date: "2016-01-30"
draft: false
title: "VISE"
summary: "A VR application that allows medical students to practice medical procedures."
videos:
  - "nfIdBe_fYm0"
details:
  - name: "Company"
    value: "Keio-NUS Cute Center"
  - name: "Role"
    value: "Junior Research Assistant"
  - name: "Game Engine"
    value: "Unity"
  - name: "Genre"
    value: "Simulation"
contributions:
  - title: "Medical Procedure Gameplay"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            My main task was to implement medical procedures as 'mini-games'. As we did not have a dedicated game
            designer, we game programmers were also responsible for breaking down the medical procedure steps into
            proper game interaction that felt good and yet still accurate. As the game was to test the students'
            knowledge and not their precision, some leeway in gamification was allowed.
  - title: "Multiplayer Integration"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            Late into development, multiplayer was requested to be integrated into the game. For those of you unfamiliar
            with multiplayer programming, this is not something you do last minute. The way that single player and
            multiplayer games are programmed is very different and it is not trivial to 'just add multiplayer'.
          - |
            Imagine an assembly line where everything is in place, the production process has been tested and working.
            Imagine then having to add just one extra step, how difficult would that be? Adding multiplayer last minute
            is like having to combine two entire assembly lines but the amount of building space is the same.
          - |
            During this period, there were a few other gameplay programmers working on implementing new medical procedures, 
            so my solution needed to be noninvasive.
            After brainstorming ideas, since the main gameplay was performing medical procedures, which require following
            a list of steps strictly, syncing the steps would be the best way to sync the game state. 
            This has the added benefit of supporting rejoining a game session as we can just replay the completed steps
            in order.
  - title: "Virtual Reality Editor"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            One of the side projects that was given to me was to explore developing a virtual reality editor for the 
            designers to use.
          - |
            Designing a tool in virtual reality was quite interesting as I had to rethink everything I knew about
            user interface and experience. Simple interactions like saving and loading, copying and pasting had to be
            redesign from scratch. At this period of time, there were no resource or case study that I could reference
            as everyone was still figuring things out.
---
This game was developed in partnership with the School of Medicine to develop new ways of educating the students who
were studying medicine, as certain methods required expensive materials and took time to clean up.

At this time, both virtual reality and hand tracking devices were the trending technologies. As a research center, we 
acquired several of them to experiment with. It was pretty fun to play around with them but also frustrating, as some
of them had poor documentation and since so many of them were new, there were not much online resources available.