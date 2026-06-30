---
date: "2022-01-30"
draft: false
title: "Leftovers"
featured: true
summary: "A 2D horror game about handing out food to your neighbours. Winner of SCREAM JAM 2021!"
details:
  - name: "Role"
    value: "Game Programmer and Music Producer"
  - name: "Game Engine"
    value: "Unity"
  - name: "Genre"
    value: "Horror"
gameUrl: "https://realmpact.itch.io/leftovers"
contributions:
  - title: "Dialogue System"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            There was no time to develop a robust dialogue system during a game jam so I implemented a quick and dirty
            one. It was just a list of dialogue nodes that referenced each other through id.
      - type: "image"
        url: "dialogue_system_1.png"
        caption: "Model of the dialogue node"
      - type: "unordered"
        introduction: "Each node will behave differently based on their configurations:"
        items:
          - |
            A decision node is one that has choices; it will wait for the player to make their choice.
          - |
            A line node is one that does not contain any choices and will only display its lines.
          - |
            An event node has no line and choice, it is used to sequence events.
      - type: "ordered"
        introduction: "Some players messaged me about the answer mechanic; how the nodding and shaking was implemented."
        items: 
          - |
            The code constantly checks if the player ever looks in one direction far enough.
          - |
            Once the player changes direction, it stores the center of the screen.
          - |
            The two steps are repeated for the opposite direction and the distance threshold is doubled.
          - |
            The two screen positions will be used to generate a median point. The game will check if projected distance
            changes sign, which indicates that the player has looked past the median point.
          - |
            The difference in the width and height between the two screen positions will determine if it is a nod or
            shake. If they are equal, a shake is prioritised over a nod.
  - title: "Music Production"
    content:
      - type: "paragraph"
        paragraphs:
          - |
            I have some interest in music production so I decided to compose the music instead of searching for royalty
            free ones. I played around with various motifs but found that the most simple one felt the best. I added
            the first version of it in the game and let my friend test it out. He agreed that the simple nature fit the
            game very well and after some tweaks, we had the main theme.
          - |
            After the game jam, we continued to work on the game to create a WebGL version. I took the opportunity to
            develop two variants of the main theme for the climax and ending. All three themes use the same set of keys
            as part of the overlying feel.
---
At this time of writing, almost one million players have tried the game, making this the most successful game that I have
ever made.

My friend, who was the artist, and me had been wanting to work on a game together again for quite some time. We wanted
to find a game jam that we were both interested in and had a suitable duration as we were both working full-time. After
researching, we decided upon SCREAM JAM 2021 which was hosted on [ITCH.IO](https://itch.io). After brainstorming, we
decided upon focusing on scary but realistic situations that a child might find themselves in based on our childhood.

While the game jam was around ten days, most of the work was done on the last day. Somehow, both of us mis-converted the
deadline and thought that we had one more day, only to realize hours before the deadline that we did not have one more day.
As we had plan the workload around the last two days being the weekends, we had to go through crazy crunch.

Thankfully, the crunch was worth it as many people enjoyed the end result and there was a lot of positive word of mouth; 
even Markiplier covered the game!

If you are releasing a free game on Itch.IO or similar websites, I would highly encourage creating a WebGL game, players
do not like to download executables and are more likely to play your game if they do not have to. Our player count
skyrocketed after the WebGL version was released.