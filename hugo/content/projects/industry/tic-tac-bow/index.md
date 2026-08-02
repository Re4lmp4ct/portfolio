---
date: "2023-01-01"
draft: false
title: "Tic Tac Bow"
featured: true
summary: "A 3D puzzle game that challenges the player's accuracy and wits by combining archery with tic tac toe."
details:
  - name: "Company"
    value: "Refract Technologies"
  - name: "Role"
    value: "Junior Gameplay Programmer"
  - name: "Game Engine"
    value: "Unity"
  - name: "Genre"
    value: "Arcade"
contributions:
  - title: "Gameplay Refactor"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            Tic-Tac-Bow was prototyped as a real-time archery game, but the codebase was not updated to reflect the change
            after it became a turn-based game. Instead, all sorts of band aids got implemented in the codebase to emulate
            the behaviour of a turn-based game.
          - |
            Not only that, the game also relied entirely on Unity physics to determine the results of a shot. 
            As Unity physics is not deterministic, the results are not consistent. This made it hard for us to balance
            the AI properly as we could not reliably control their shots.
          - |
            When the responsibility of the gameplay codebase fell to me, I made the decision to do a refactor of the 
            entire gameplay codebase because it was impossible to fix the multiplayer issues (See Multiplayer Refactor) 
            without doing so.
          - |
            To facilitate the multiplayer refactor, I broke down every game logic into the smallest possible steps as 
            possible and set up a proper sequence of events.
      - type: "image"
        url: "gameplay_refactor_1.png"
        caption: "Simplified example of how the game flow was broken down."
      - type: "paragraph"
        paragraphs:
          - |
            This was done by implementing an event driven architecture so that the game sequence is no longer spread across
            multiple different objects but through a central game mediator instead.
      - type: "image"
        url: "gameplay_refactor_2.png"
        caption: "Simplified example of how the game mediator controls the sequence"
      - type: "paragraph"
        paragraphs:
          - |
            Once this was done, we started to parameterize the shooting and target board movement. The shooting was
            refactored by my technical lead while I handled the target board movement. This was to ensure determinism.
            This also allowed us to improve the AI balance as we can fully control where its shot will land, no matter
            how fast the target board moves.
  - title: "Multiplayer Refactor"
    content:
      - type: "ordered"
        introduction: "Having worked on several multiplayer projects before, my experience with them have been either:"
        items:
          - |
            The single player and multiplayer code are in the same files. This is not ideal as it can make navigating
            through the codebase more difficult and can get confusing when onboarding new programmers, especially if
            they do not have experience with multiplayer programming.
          - |
            The multiplayer code is a duplicate of the single player code. Usually this happens when the programmer is
            unable to find a way to separate the two or when the multiplayer portion is a last minute addition
            that they could not figure out how to integrate. 
            Obviously, this makes maintaining the codebase unsustainable.
      - type: "paragraph"
        paragraphs:
          - |
            In the case of Tic Tac Bow, it was 2. As mentioned in the Gameplay Refactor, the game was coded as a real-time
            archery game and the multiplayer code was the same. It tried to sync the game state on a per-frame basis,
            including the physics.
            Not only was this wasteful of bandwidth, it is also unreliable as Unity physics is not deterministic, which
            mean that the same input would not necessarily result in the same output. Desynchronization was a major problem
            that could not be resolved.
          - |
            When I took over the development of the gameplay and multiplayer after the previous programmer left,
            I knew that a major refactor of the gameplay and multiplayer code had to be done as soon as possible,
            especially when the game was developed for the Olympic Esports.
          - |
            I broke down the gameplay codebase into small steps so that I would be able to have full control over the events
            that needs to be handled by the server to minimize bandwidth usage and risk of desynchronization.
      - type: "image"
        url: "multiplayer_refactor_1.png"
        caption: "Simplified example of how the multiplayer layer injects itself into the game sequence"
      - type: "unordered"
        introduction: "The multiplayer layer is kept simple, it only does the following:"
        items:
          - |
            Input Validation - Ensure no cheating is involved.
          - |
            Lag Compensation - Ensure that any time sensitive information accounts for lag.
          - |
            State Synchronization - Ensure that the player's game state is accurate when their turn begins.
  - title: "UI Implementation"
    content: 
      - type: "paragraph"
        paragraphs:
          - |
            The UI codebase was a mess when I joined the project, there were multiple scripts for the different UI components, 
            each variant doing the same things in different ways while having minor differences. 
            This was due to the lack of communication between programmers when they needed the components for their tasks and
            they ended up all creating the same components.
          - |
            The first thing that I did was to compile the different variants into one as well as setting up both a workflow
            for creating new UI components and how they are to be used within the different UI objects.
  - title: "Sandbox Environment"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            We did not have any way for designers and artists to test out their works in the game, especially when
            specific game states are involved.
          - |
            I tried to push for a task to work on tools to help with this but at that time, there were many other high
            priority tasks. This became a task that I worked on during my free time when I finished my tasks ahead of time
            or during the brief downtime in between sprints.
---
I joined the Tic-Tac-Bow team relatively late into its development cycle as a UI programmer to help clear the UI backlog while
the rest of the programming team was trying to get it ready for the Olympic Esports qualifiers.
When the technical lead, who was in charge of the gameplay and multiplayer, left the company, as the one on the team with the most
experience with multiplayer games, I ended up being chosen to take over his work.

Am I proud of Tic-Tac-Bow as a game product? No, while it would never have been a great game, it could easily have been a
decent one.
I also had been reluctant to put it on my portfolio for quite some time due to its, as some might put it, 'lame' premise.
However, I am proud of my contributions I made in a short period of time that allowed it to run successfully during the
Olympic Esports. I am quite sure that it would have been a failure if I did not end up working on the gameplay and
multiplayer.

Tic-Tac-Bow was one of the video games featured on Olympic Esports and you can watch the tournament [here](https://www.youtube.com/watch?v=WY0VHHMb1JM).