---
date: "2024-04-01"
draft: false
title: "Virtual Boxing"
summary: "A VR fighting game that allows the players to use their full body to fight other players."
videos: 
  - "IaiFToNYXwA"
details:
  - name: "Company"
    value: "Refract Technologies"
  - name: "Role"
    value: "Senior Software Engineer"
  - name: "Game Engine"
    value: "Unity"
  - name: "Genre"
    value: "Sports"
contributions:
  - title: "Third Party Ragdoll Physics Integration"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            One of the key improvements that we wanted for a long time was the addition of
            <a href="https://medium.com/@jacasch/analysis-of-active-ragdolls-in-games-82c95f8ed7a5" target="_blank">active ragdoll</a>,
            so that the players' punches will have a nicer feedback without relying on particle effects.
          - |
            However, this is quite a complex feature to implement what is ultimately, a small improvement to the user
            feedback. Hence, the decision was made to purchase and integrate a third party library.
          - |
            A lot of experimentation was needed as it was not plug and play based on our needs. I ended up writing
            an animation middleware that blends between the animation of the avatar driven by the body trackers and the avatar
            driven by the physics.
  - title: "Full Body Solver Posture Fix"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            While integrating the third party physics library into the game, I had to do a lot of testing with how the
            avatars interacted with each other. In doing so, there was always something that felt off about the posture 
            of the game avatars, I decided to investigate it.
          - |
            The Axis visualizer was displaying a mannequin performing the correct movements and it did not have an awkward 
            posture like in-game. I went to check the mathematics for the full body solvers, which translates the body trackers'
            data into in-game movement. Nothing really stood out. I went to watch videos of influencers' who got their hand
            on Axis and I noticed that the weird posture was less prominent on anime styled avatars.
      - type: "image"
        url: "full_body_solvers_posture_fix_1.png"
        caption: "Can you see the issue?"
      - type: "paragraph"
        paragraphs:
          - |
            The issue was that the programmers who did the original solvers were using a wooden mannequin for reference, 
            it worked as intended when the animation rig of the avatar matches the mannequin. However, for Virtual Boxing, 
            the avatars were realistic humans and our spines have a natural curve.
          - |
            The solution was to calculate how the body trackers were trying to change the positions of the bones instead
            of the positions themselves. This allows us to simplify the code as the animation rig provides a lot
            of information that we now use, where previously, we were trying to calculate a lot of it from scratch.
  - title: "Full Body Solver Improvement"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            When implementing solvers for the body trackers, one common issue is that there are many poses that the 
            user can take while providing the same data to the trackers.
          - |
            For example, for Virtual Boxing, we use the VR controllers as trackers for the hands so that we can reserve
            the Axis trackers for the other body parts. This means that the controllers are our only means of deriving
            the arm positions of the user.
      - type: "image"
        url: "full_body_solvers_improvement_1.png"
        caption: "Example of the possible arm poses while maintaining the controller in the same position"
      - type: "paragraph"
        paragraphs:
          - |
            In the above image, the user's arm can be in many positions while holding the controller the same way. So
            what do we do? In Virtual Boxing's case, since we are a boxing game, we can cheat by prioritising proper
            boxing stance over other possibilities. In the end, the opponent's and spectators' perception of the game
            is more important than trying to mimic the player's every move.
          - |
            So in the above example, we will assume that the player is trying to take up a boxing stance and prioritise
            angles where the elbow are pointing towards the ground. In Virtual Boxing, the closer the player's hands are
            to their body, the tighter their guarding stance will be.
          - |
            Through implementing many 'other' cheats like this in the full body solvers for Virtual Boxing, we were
            able to improve the user experience as it made the opponents look more legitimate and the players' look
            better when they watch their own replays.
---
Virtual Boxing had already been developed for several years as the flagship game to showcase the company's proprietary
full body trackers called Axis.

By the time I joined the project, it was being migrated to the Unity game engine as the Unity team had built up a decent 
framework to build games off. As such, my role was more of the supporting type.

My main task was to work with the art and game design team to improve the user experience as although fully playable,
some playtesters reported that the game still felt off.