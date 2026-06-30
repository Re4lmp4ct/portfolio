---
date: "2018-01-30"
draft: false
title: "Save Our World"
summary: "A 2D couch coop action game where players have to work together to overcome enemies and obstacles."
videos:
    - "yRQfQ8GwamU"
details:
  - name: "School"
    value: "Digipen Institute of Technology Singapore"
  - name: "Role"
    value: "Technical Lead"
  - name: "Game Engine"
    value: "Custom C++ Engine"
  - name: "Genre"
    value: "Action"
gameUrl: "https://games.digipen.edu/games/save-our-world"
contributions:
  - title: "Engine and Game Architecture"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            By this project, the game design students had been using Unity for their own assignments and have gotten
            comfortable with it. Hence, we decided that we should reference it for our game engine.
  - title: "Graphics Programming"
    content: 
      - type: "paragraph"
        paragraphs:
          - |
            Graphics programming is considered one of the hardest roles and most teams struggle to find someone to do it.
            I have some interest in the topic and wanted to challenge myself more. 
            As this was something new, a lot of it was based on an OpenGL tutorial series so nothing much to write about.
  - title: "Physics Optimization"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            I left notes based on my experience with Pigs Should Fly for the team's physics programmer. However, as
            the size of our game levels grew, the physics system struggled to keep up and he did not know how to
            optimize it enough. I had to step it to help.
      - type: "unordered"
        introduction: "Here are some of the things I added:"
        items:
          - |
            Duplicate collision checks - When we compare every object against every other object for collision, there
            will be a duplicate check. By keeping track of the checks already made, we can trade some memory to reduce
            the amount of checks by half.
          - |
            Static objects - If an object has not moved at all, we don't need to check if it has collided with anything.
            As the amount of static objects is much greater than dynamic ones, we reduced the amount of collision
            checks by almost 80%.
          - |
            Spatial Partitioning - By this point, we didn't really need more optimization as the game was running at 60fps
            even on our most taxing level. However, I used this as a learning experience as I wanted to learn how
            spatial partitioning was used as broad-phase optimization.
  - title: "Lua Scripting"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            We added support for Lua to the game engine so that the game designers could implement the game with minimal 
            help from the programmers and to reduce time spent compiling C++ code.
          - |
            While most of the game was implemented by the team's game designers, I helped to implement some mechanics 
            that were more math heavy such as inverse kinematics for the final boss arms.
---
This was the first school project where we had to create our own game engine from scratch and develop a game with it.