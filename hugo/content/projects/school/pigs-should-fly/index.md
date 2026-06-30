---
date: "2017-01-30"
draft: false
title: "Pigs Should Fly"
summary: "A 2D side-scroller adventure platformer game whereby the player takes on the role of a pig with a springy tail."
videos:
    - "Jk2j9ppmgZ4"
details:
  - name: "School"
    value: "Digipen Institute of Technology Singapore"
  - name: "Role"
    value: "Technical Lead"
  - name: "Game Engine"
    value: "Custom C++ Engine"
  - name: "Genre"
    value: "Action"
gameUrl: "https://games.digipen.edu/games/pigs-should-fly"
contributions:
  - title: "Engine and Game Architecture"
    content:
      - type: "paragraph"
        paragraphs: 
          - |
            The technical lead of every team had to do up and submit a technical document, detailing our plans for
            the features of the engine and how we plan to implement the necessary systems for the game.
          - |
            Most people used Unity as their reference point, but I wanted to keep our engine simple. One of my favourite
            GDC talks was about the game, Thumper. (You can watch the talk 
            <a href="https://www.youtube.com/watch?v=ckm8_SEIXQM" target="_blank">here</a>). One of the things that
            stood out to me was how their team focused on creating a game engine designed around the game instead of an 
            all purpose tool. I decided on taking a similar approach.
      - type: "unordered"
        introduction: "Here are some examples of how it affected our implementation:"
        items:
          - |
            Collider Type - Everything we wanted to implement could be achieved with box colliders, so we did not 
            have to handle the different permutations of collider types. (Eg: Circle vs Circle, Circle vs Box, Box vs Box)
          - |
            Collision Checks - Projectiles can only hit the player or the environment, never enemies. Instead of 
            a layer or tag system where we filter out objects that cannot be collided with, we can skip this step
            entirely and just compare the objects with the types that we know that they can collide with.
      - type: "paragraph"
        paragraphs:
          - |
            Being more explicit in our approach made it easier for us to improve the game performance.
  - title: "Physics Programming"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            Whenever I used the physics in Unity, I never understood why we had to use fixed delta time for it; delta
            time seem sufficient.
          - |
            While working on the physics, I purposely introduce lag into the game to make sure that the physics handled
            it properly. It did not and I understood why fixed delta time was needed. 
      - type: "image"
        caption: "Example of how delta time work"
        url: "physics_programming_1.png"
      - type: "paragraph"
        paragraphs:
          - |
            Delta time is the time between the previous and current frame, so if the game lags for 1s, the delta time
            will be 1s. For most interaction, this is ok. If you press move right and the game lags, you expect your
            character to have move right for 1s after the lag passes.
          - |
            Why is this not ok for physics?
      - type: "image"
        caption: "Example of the problem"
        url: "physics_programming_2.png"
      - type: "paragraph"
        paragraphs:
          - |
            Why does this happen? In the above situation, let's imagine that the game lagged for 1s. If we use delta time,
            the game will be asking: Is there anything in the blue ball's position 1s in the future? The
            answer is no, because the red ball's position 1s in the future is below the blue ball. This is just one of
            many issues that the physics can encounter if delta time is used.
          - |
            How do we solve this? The answer is quite obvious; we have to break up the 1s into smaller pieces and run
            the game's code multiple times to simulate the game having no lag for 1s.
      - type: "image"
        caption: "Example of the solution"
        url: "physics_programming_3.png"
      - type: "paragraph"
        paragraphs:
          - |
            This is how game engines implement fixed delta time internally; the amount of time left to simulate is kept
            track of, this is called an accumulator. When possible, the systems is ran multiple times based on the value of the
            accumulator. As shown in the picture above, there are times where the accumulator cannot be divided nicely.
            The remaining accumulator will be carried forward until lag occurs again in the future.
          - |
            Why can't delta time be implemented the same way? The problem with that is delta time varies but systems like
            physics wants consistency. 
  - title: "Enemy AI" 
    content:
      - type: "paragraph"
        paragraphs:
          - |
            This was not supposed to be my task. However, one of the team programmers could not cope with his workload
            but did not tell us until the last minute. Despite my workload as the technical lead, no one else on the team
            could handle additional workload so I had to take it up.
          - |
            As time was short, I quickly set up a simple state machine to use; enemies will change state depending on
            their distance to the player while bosses will switch between what we called a sequence of states.
  - title: "Art"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            As the only programmer with art experience and a drawing tablet, I was also responsible for the art of the
            game. To ensure that I had time for my tasks as the technical lead, I kept the art as simple as possible.
            When our game designer would request for sprites, I would do up a quick sketch on paper before drawing over
            it using GIMP.
          - |
            I was unhappy when it turn out that the game designer requested specific dimensions and outline thickness for
            each sprite only to then scale them all down to the same size. This made the enemies look very noisy as their
            outlines were inconsistent.
---
This assignment was between the programming and game design students only; and we needed to use Digipen's own game
engine as the base of our own.