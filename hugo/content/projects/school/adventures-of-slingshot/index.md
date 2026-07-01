---
date: "2014-01-30"
draft: false
title: "Adventures Of Slingshot"
summary: "A 3D action adventure where combat revolves around attacking enemies by linking them."
videos: 
  - "y4Al99TbywY"
details:
  - name: "School"
    value: "Singapore Polytechnic"
  - name: "Role"
    value: "Game Programmer"
  - name: "Game Engine"
    value: "Unity"
  - name: "Genre"
    value: "Adventure"
contributions:
  - title: "Enemy AI"
    content:
      - type: "unordered"
        introduction: "There are two basic enemy types:"
        items:
          - |
            Melee - Move towards the player until in range and then start attacking.
          - |
            Ranged - Shoot the player when they are in range.
      - type: "ordered"
        introduction: "The basic ground enemy needed pathfinding and this was my solution:"
        items:
          - |
            Check if the player is within range of the enemy.
          - |
            Check if the player belongs to the same platform group as the enemy if in range. A platform group is a set
            of connected platforms that can be walked on without having to jump.
          - |
            Check if the player is on the same platform as the enemy. If not, follow waypoints on the platforms until
            the same platform is reached.
          - |
            Check if a clear line of sight exist between the player and the enemy. If not, follow waypoints around the
            current platform.
          - |
            Move towards the player until in attack range and then perform attack combo. Repeat the combo until the 
            player is outside of attack range.
      - type: "paragraph"
        paragraphs:
          - |
            The other enemy types are bosses which are all designed around the environment that they are found in, hence
            we do not need pathfinding for them.
          - |
            The panther boss' main attacks are charging towards the player and performing a slam attack. 
            The AI prioritize charging when the player is far away or in front of it.
          - |
            The crow boss flies around the arena and has one attack where it swoops down and charges at the player. 
            Its first appearance, where the arena consist of small platforms, the AI evaluates between the time passed 
            since the last swoop and if the boss is out of the player's field of view. Its second appearance remains
            similar but there are two crows. The AI now takes into consideration the position of the other crow in order
            to attack the player from multiple angles.
          - |
            The final boss is more of a set-piece so it did not require any AI beyond randomly selecting its moves.
  - title: "Tree Branches and Vines"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            We wanted variety in the type of branches to maintain the natueral feel but still needed them to be reasonable
            for the player to platform on, so complete procedural generation was out of the question.
          - |
            We decided on creating different variety of branch segments; like the start of the branch, the middle and the
            tip, and then manually construct branch by branch.
          - |
            I designed an editor tool that allows the user to cycle through the segments and rotate each one like a ball
            and socket. To minimize frustration of falling off the branches, movement on them follow along a thick track
            that is generated once the branch is saved.
          - |
            Vines act like ladders in games, except that we wanted the player to be able to swing on them like in Tarzan.
            The vines use the same track system as the branches, except that it is vertical and has no thickness. It also
            allowed the player to move around like a pole.
          - |
            I implemented a momentum system for the vines that will cause it to swing around. The player can generate
            momentum by swinging it back and forth or by grabbing the vine at fast speed. Unlike the branch tracks which
            are static, vines' tracks are dynamic to allow the player to stick to the vine.
  - title: "Animation Blending"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            At this time, the free version of Unity had many features that were unavailable, even simple things like
            animation blending. While it was not necessary, it was not pleasant looking at the animation snapping and
            we did not have the manpower to animate the transitions, so I implemented our own. It helped the game to look
            more polished compared to the other students' games.
  - title: "VR Implementation"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            This was the first time that I actually work on a virtual reality game. My programmer teacher got his hands
            on a VR headset and wanted people to test it out during our graduation show. Due to the open environment, he
            felt that our game was most suitable game. It was simple to get it up and working but I learnt how different
            VR games are compared to traditional games.
---
Adventures of Slingshot was originally an action strategy hybrid game where the player would utilize traps and their
mobility to outsmart their foes among the trees. It turned out poorly as the game taking place among the tree canopies
and fast movement made it difficult for the players to keep track of the situation.

It was quite depressing and the team accepted that the game had to undergo drastic changes. We decided to pivot the 
gameplay towards more familiar platforming, referencing games like Sly Cooper. However, we still wanted the combat to 
reward players for good movement and platforming. In the end, we designed the main combat mechanics around linking the 
enemies and using a melee or ranged attack to hit them.

The changes made proved successful; it was considered the best student game that year. The game was submitted to
Independent Game Festival but was sadly not nominated.

