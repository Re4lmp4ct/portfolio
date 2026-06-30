---
date: "2023-08-01"
draft: false
title: "Novanauts"
featured: true
summary: "A 2D puzzle game where the players connect characters called Novanauts to score points."
videos: 
    - "lDTYOTV6OyU"
details:
    - name: "Company"
      value: "Refract Technologies"
    - name: "Role"
      value: "Intermediate Software Engineer"
    - name: "Game Engine"
      value: "Unity"
    - name: "Genre"
      value: "Puzzle"
contributions:
    - title: "Data Driven Gameplay"
      content:
        - type: "paragraph"
          paragraphs:
            - |
              Every gameplay object is an entity that all uses the same set of attributes that are controlled by
              datasheets. There is no explicit implementation of any entity like a character or power up entity type;
              instead, they are just entities with certain values defined. For example, power ups are just entities
              with skill associated with their on selected attribute.
        - type: "image"
          url: "data_driven_gameplay_1.png"
          caption: "A simplified overview of the game data"
        - type: "paragraph"
          paragraphs:
            - |
              The entity system was built with a query system that allows us to sequence queries to perform complex
              selection of entities for the character skill system. For example, we can select all entities along a line
              of id and has a buff on them.
        - type: "ordered"
          introduction: "The character skill system comprises of two components:"
          items:
            - |
              Selector - A sequence of queries to determine which entities will be affected by the skill.
            - |
              Effect - An action that modifies the selected entities.
    - title: "UI Implementation"
      content:
        - type: "paragraph"
          paragraphs:
            - |
              The task of UI implementation fell to me again as I was the only programmer who took the small details 
              (Eg: Spacing, Padding) from the UI concepts seriously.
            - |
              As the only programmer with shader experience, I was also able to create a UI shader to handle
              different UI states, as such a outline for selection, greyed out for locked. This helped to keep the number
              of sprites to maintain small.
    - title: "Art Pipeline"
      content:
        - type: "paragraph"
          paragraphs:
            - |
              One of the first things I did as the temporary technical lead was to establish a proper art pipeline to avoid
              repeating the mistakes that we made during Tic-Tac-Bow. I also got the lead game designer to join the
              discussion so that the game design team are aware of any limitations.
            - |
              We looked at similar games and laid out all of the types of art assets that they had. We selected the
              types that we would also need and discuss how they can be broken down and organized.
            - |
              One of the biggest question that we had was how the character skills would be animated as their in-game effect
              would be directly tied to the animation itself. We decided upon a paintbrush system where the animator
              would animate a paintbrush alongside the skills to control its area of influence while the game designers would
              use datasheets to modify the attributes of the paintbrush.
        - type: "ordered"
          introduction: "I also pushed for a UI style guide to be created once the core UI concept was established. This was to
                         address the following issues:"
          items:
            - |
              UI inconsistencies when different UI artists come up with UI designs.
            - |
              UI inconsistencies when different programmers implement the UI, most of them do it by eye.
            - |
              Implementation of UI that did not come with the a concept. This usually occur when a simple UI is needed 
              that uses existing assets, so it is faster for someone to implement it than to wait for the concept.
    - title: "Sandbox Environment"
      content: 
        - type: "paragraph"
          paragraphs:
            - |
              With the effects of the character skills being tied to the their animation, a sandbox environment was necessary
              for the animators to immediately test out the animations to ensure that they work as intended. Hence, it got
              approved as a official task.
            - |
              Being an official task, I was able to add in more features and improve the user experience compared to Tic-Tac-Bow
              where it was something that I did during my free time.
            - |
              This sandbox environment sped up a lot of different workflows and the time saved fully justified the time spent 
              developing it.
    - title: "In-Game Editor"
      content: 
        - type: "paragraph"
          paragraphs:
            - |
              As the user experience of the gameplay is the most important thing to nail right, I created an in-game
              editor for the game designers to tweak, export and import different game settings while playing the game
              on mobile devices.
            - |
              This allowed us to come up with different configurations that could be compared with during playtest to find
              the ideal game settings.
---
Novanauts is perhaps the most polished game that I have worked on from beginning to end. I was extremely happy to learn
that one of the higher ups used it as an example of the quality and polish that the other teams should strive for.

I was selected as the temporary technical lead for a small team to work on a new game IP.
My main responsibilities were to develop a solid foundation of the game until the new technical lead arrived and mentor
an software engineer intern who did not have experience with game development.

After the new technical lead joined, my main responsibility shifted to the frontend of the game; gameplay and UI. 

Unfortunately, it did not pass the market test. I was quite upset about it, especially since it was taken down
halfway through the market test due to an administrative issue on the play store. It killed most of the momentum that it
had and it could not recover.